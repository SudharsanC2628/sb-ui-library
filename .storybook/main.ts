import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path'

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config, options) {
    if (config.resolve?.roots) {
      config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];
    }
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.scss|.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      })
    }
    if (config.resolve?.modules) {
      config.resolve.modules.push(path.resolve(__dirname, '../node_modules') + "/node_modules");
      config.resolve.modules.push(path.resolve(__dirname, '../src'));
    }
    if (config.resolve?.symlinks) {
      // this is needed for working w/ linked folders
      config.resolve.symlinks = false;
    }
    return config;
  },
};
export default config;
