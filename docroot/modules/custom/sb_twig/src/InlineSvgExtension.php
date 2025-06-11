<?php

namespace Drupal\sb_twig;

use Drupal\Core\Extension\ExtensionPathResolver;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Twig extension.
 */
class InlineSvgExtension extends AbstractExtension {

  /**
   * Constructor.
   *
   * @param \Drupal\Core\Extension\ExtensionPathResolver $pathResolver
   *   The path resolver service.
   */
  public function __construct(protected ExtensionPathResolver $pathResolver) {}

  /**
   * {@inheritdoc}
   */
  public function getFunctions(): array {
    return [
      new TwigFunction('inline_svg', [$this, 'inlineSvg'], ['is_safe' => ['html']]),
    ];
  }

  /**
   * Embed an SVG inline.
   *
   * @param string $filename
   *   The filename (including relative path) to the SVG.
   *
   * @return bool|string
   *   The fully qualified SVG URI.
   */
  public function inlineSvg($filename) {
    if (preg_match('/^\@([^\/]*)\//', $filename, $matches)) {
      $project_name = $matches[1];
      /**
       * @var \Drupal\Core\Extension\ExtensionPathResolver $path_resolver
       */
      $project_type = 'theme';
      try {
        $path = $this->pathResolver->getPath($project_type, $project_name);
      }
      catch (\Throwable $e) {
        try {
          $project_type = 'module';
          $path = $this->pathResolver->getPath($project_type, $project_name);
        }
        catch (\Throwable $e) {
          return "";
        }
      }
      finally {
        $relative = substr($filename, strlen("@{$project_name}/"));
        $filepath = DRUPAL_ROOT . "/{$project_type}s/custom/{$project_name}/{$relative}";

        if (file_exists($filepath)) {
          return file_get_contents($filepath);
        }

        $filepath = DRUPAL_ROOT . "/{$project_type}s/custom/{$project_name}/components/{$relative}";

        if (file_exists($filepath)) {
          return file_get_contents($filepath);
        }
      }
    }

    $path = DRUPAL_ROOT . '/' . $filename;
    return file_exists($path) ? file_get_contents($path) : '';
  }

}
