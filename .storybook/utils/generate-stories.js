const fs = require("fs-extra");
const path = require("path");
const glob = require("glob").sync;
const yaml = require("js-yaml");

const files = glob(
  "docroot/{modules,themes}/custom/**/components/**/*.stories.yml"
);
// console.log(files);

for (const ymlPath of files) {
  let namespace = "namespace";

  const match = ymlPath.match(
    /custom\/([^/]+)\/components\/([^/]+)\/([^/]+)\.stories.yml$/
  );
  if (match) {
    namespace = match[1];
  }

  const dir = path.dirname(ymlPath);
  const base_path = path.dirname(path.dirname(dir));
  const componentName = path.basename(dir);
  const jsxPath = path.join(dir, `${componentName}.stories.jsx`);
  const twigPath = `./${componentName}.twig`;
  const jsPath = path.join(dir, `./${componentName}.js`);
  const cssPath = path.join(dir, `./${componentName}.css`);

  const yml = yaml.load(fs.readFileSync(ymlPath, "utf8"));

  const { title, description = "", stories = [], argTypes = {} } = yml;

  const jsImport = fs.existsSync(jsPath)
    ? `import './${componentName}.js';`
    : "";
  const cssImport = fs.existsSync(cssPath)
    ? `import './${componentName}.css';`
    : "";

  const storyExports = stories
    .map((story) => {
      let args;
      if (Object.keys(story.args).length > 0) {
        args = JSON.stringify(story.args || {}, null, 2).slice(0, -1);
        args = args + ", ";
      } else {
        args = "{";
      }
      args =
        args +
        `'base_path': '${base_path}', 'attributes': createMockAttributes().setAttribute('data-component-id', '${namespace}:${componentName}')}`;
      const exportName = story.name
        .replace(/[^a-zA-Z0-9_$]/g, "")
        .replace(/^[^a-zA-Z_$]+/, "");
      return `
export const ${exportName} = {
    parameters: {
      docs: {
        description: {
          story: '${story.description || ""}',
        }
      }
    },
    args: ${args}
};
`;
    })
    .join("\n");

  const jsx = `
// AUTO-GENERATED FROM ${path.basename(ymlPath)}
import { createMockAttributes } from '@storybook-utils/mockAttributes';
import Component from '${twigPath}';
${cssImport}
${jsImport}

export default {
    title: '${title}',
    argTypes: ${JSON.stringify(argTypes, null, 2)},
    component: Component
};

${storyExports}
`;

  fs.writeFileSync(jsxPath, jsx);
  console.log(`Generated: ${jsxPath}`);
}
