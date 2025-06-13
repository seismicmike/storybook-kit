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
   * Path resolver service.
   *
   * @var \Drupal\Core\Extension\ExtensionPathResolver
   */
  protected ExtensionPathResolver $pathResolver;

  /**
   * Constructor.
   *
   * @param \Drupal\Core\Extension\ExtensionPathResolver $pathResolver
   *   The path resolver service.
   */
  public function __construct(ExtensionPathResolver $pathResolver) {
    $this->pathResolver = $pathResolver;
  }

  /**
   * Build a twig function.
   *
   * @param mixed $functionName
   *   The function name.
   * @param mixed $callable
   *   The callable callback.
   * @param mixed $options
   *   Options for the funciton.
   *
   * @return \Twig\TwigFunction
   *   The new twig function.
   *
   * @codeCoverageIgnore
   */
  protected function buildTwigFunction($functionName, $callable = NULL, $options = []): TwigFunction {
    return new TwigFunction($functionName, $callable, $options);
  }

  /**
   * {@inheritdoc}
   */
  public function getFunctions(): array {
    return [
      $this->buildTwigFunction('inline_svg', [$this, 'inlineSvg'], ['is_safe' => ['html']]),
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
        $filepath = $this->getDrupalRoot() . "/{$project_type}s/custom/{$project_name}/{$relative}";

        if ($this->checkForFileExists($filepath)) {
          return $this->getFileContents($filepath);
        }

        $filepath = $this->getDrupalRoot() . "/{$project_type}s/custom/{$project_name}/components/{$relative}";

        if ($this->checkForFileExists($filepath)) {
          return $this->getFileContents($filepath);
        }
      }
    }

    $path = $this->getDrupalRoot() . '/' . $filename;
    return $this->checkForFileExists($path) ? $this->getFileContents($path) : '';
  }

  /**
   * Checks if a file exists.
   *
   * @param mixed $filename
   *   The file name (including path) to check.
   *
   * @return bool
   *   Whether the file exists.
   *
   * @codeCoverageIgnore
   */
  protected function checkForFileExists($filename): bool {
    return file_exists($filename);
  }

  /**
   * Get the contents of a file.
   *
   * @param mixed $filename
   *   The file name (including path).
   *
   * @return string
   *   The content of the file.
   *
   * @codeCoverageIgnore
   */
  protected function getFileContents($filename): string {
    return file_get_contents($filename) ?? "";

  }

  /**
   * Get the drupal root path.
   *
   * @return string
   *   The drupal root path.
   *
   * @codeCoverageIgnore
   */
  protected function getDrupalRoot(): string {
    return DRUPAL_ROOT;
  }

}
