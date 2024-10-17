import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    "@storybook/addon-a11y",
    "@storybook/addon-styling-webpack",
    '@storybook/addon-docs'
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: (config, { configType }) => {
    // Ajusta o base no modo produção
    if (configType === 'PRODUCTION') {
      config.base = '/andromeda/';
    }

    // Desabilitar a minificação em ambos os modos (produção e desenvolvimento)
    config.esbuild = {
      minify: false as any, // Desabilita a minificação no Vite
    };

    return config;
  }
};

export default config;
