<?php

namespace Drupal\Tests\sb_twig\Unit;

use Drupal\Core\Extension\ExtensionPathResolver;
use Drupal\sb_twig\InlineSvgExtension;
use Drupal\Tests\UnitTestCase;
use Twig\AbstractTwigCallable;

/**
 * @covers \Drupal\sb_twig\InlineSvgExtension
 * @group sb_twig
 */
class InlineSvgExtensionTest extends UnitTestCase {

  /**
   * @var \Prophecy\Prophecy\ObjectProphecy
   */
  protected $pathResolverProphecy;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    // Use prophecy for better Drupal service mocking.
    $this->pathResolverProphecy = $this->prophesize(ExtensionPathResolver::class);
  }

  public function testReturnsEmptyIfPathResolverThrows() {
    // Configure the path resolver to throw exceptions.
    $this->pathResolverProphecy->getPath('theme', 'fail')->willThrow(new \Exception('Theme not found'));
    $this->pathResolverProphecy->getPath('module', 'fail')->willThrow(new \Exception('Module not found'));

    $extension = $this->getMockBuilder(InlineSvgExtension::class)
      ->setConstructorArgs([$this->pathResolverProphecy->reveal()])
      ->onlyMethods(['checkForFileExists', 'getFileContents', 'getDrupalRoot'])
      ->getMock();

    $result = $extension->inlineSvg('@fail/missing.svg');
    $this->assertSame('', $result);
  }

  public function testReturnsInlineSvgFromThemePath() {
    $mockTheme = 'themes/custom/sb_twig';
    $this->pathResolverProphecy->getPath('theme', 'sb_twig')->willReturn($mockTheme);

    $extension = $this->getMockBuilder(InlineSvgExtension::class)
      ->setConstructorArgs([$this->pathResolverProphecy->reveal()])
      ->onlyMethods(['checkForFileExists', 'getFileContents', 'getDrupalRoot'])
      ->getMock();

    $mockDrupalRoot = '/app/docroot';
    $extension->method('getDrupalRoot')->willReturn($mockDrupalRoot);

    $svgPath = "@sb_twig/icons/icon.svg";
    $pathWithoutNamespace = "icons/icon.svg";
    $expectedPath = "{$mockDrupalRoot}/$mockTheme/$pathWithoutNamespace";
    $extension->method('checkForFileExists')->with($expectedPath)->willReturn(true);
    $mockSvgContent = uniqid("<svg>");
    // $extension->method('getFileContents')->with($expectedPath)->willReturn('fhqwhdags');
    $extension->method('getFileContents')->with($expectedPath)->willReturn($mockSvgContent);

    $this->assertSame($mockSvgContent, $extension->inlineSvg($svgPath));
  }

  public function testReturnsRelativePathSvg() {
    $extension = $this->getMockBuilder(InlineSvgExtension::class)
      ->setConstructorArgs([$this->pathResolverProphecy->reveal()])
      ->onlyMethods(['checkForFileExists', 'getFileContents', 'getDrupalRoot'])
      ->getMock();

    $mockDrupalRoot = '/app/docroot';
    $extension->method('getDrupalRoot')->willReturn($mockDrupalRoot);
    
    $svgPath = "icons/icon.svg";
    $expectedPath = "$mockDrupalRoot/$svgPath";

    $extension->method('checkForFileExists')->with($expectedPath)->willReturn(true);
    $mockSvgContent = uniqid("<svg>");
    $extension->method('getFileContents')->with($expectedPath)->willReturn($mockSvgContent);

    $this->assertSame($mockSvgContent, $extension->inlineSvg($svgPath));
  }

  public function testGetFunction() {
    $extension = $this->getMockBuilder(InlineSvgExtension::class)
      ->setConstructorArgs([$this->pathResolverProphecy->reveal()])
      ->onlyMethods(['buildTwigFunction'])
      ->getMock();

    $mockTwigFunction = $this->createMock(AbstractTwigCallable::class);
      
    $extension
      ->method('buildTwigFunction')
      ->with('inline_svg', [$extension, 'inlineSvg'], ['is_safe' => ['html']])
      ->willReturn($mockTwigFunction);
    $this->assertSame([$mockTwigFunction], $extension->getFunctions());
  }
}
