const path = require('path');
const Dotenv = require('dotenv-webpack');

const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories: [
		'../../modules/my-components/**/*.stories.@(js|jsx|ts|tsx)',
		'../../src/pages/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/builder-webpack5',
		'@storybook/manager-webpack5',
	],
	webpackFinal: async (config, { configType }) => {

		config.module.rules.push({
			enforce: 'pre',
			test: /\.stories\.(js|jsx)$/,
			exclude: [
				path.resolve(__dirname, '../../node_modules'),
			],
			loader: 'eslint-loader',
			options: {
				fix: true,
			},
		});
		
		config.module.rules.push({
			test: /\.md$/,
			use: [
				{
					loader: 'file-loader',
				},
			],
		});

		config.plugins.push(
			new Dotenv({
				path: path.resolve(__dirname, '../../.env'),
			}),
		);

		config.resolve.alias = {
			...config.resolve.alias,
			'@emotion/core': toPath('node_modules/@emotion/react'),
			'emotion-theming': toPath('node_modules/@emotion/react'),
		};

		config.resolve.modules.push(
			path.resolve(__dirname, '../../modules'),
			path.resolve(__dirname, '../../node_modules'),
		);
		
		return config;

	},
};