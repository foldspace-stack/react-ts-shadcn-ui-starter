import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: [
		'../src/stories/*.mdx',
		'../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],

    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
        {
            name: '@storybook/addon-postcss',
            options: {
              cssLoaderOptions: {
                // When you have splitted your css over multiple files
                // and use @import('./other-styles.css')
                importLoaders: 1,
              },
              postcssLoaderOptions: {
                // When using postCSS 8
                implementation: require('postcss'),
              },
            },
          },
    ],

    framework: {
		name: '@storybook/react-vite',
		options: {},
	},

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
}
export default config
