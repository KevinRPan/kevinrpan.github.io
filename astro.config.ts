import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://kevinrpan.com',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Kevin Pan',
			themeColor: '#008AFF',
			openGraph: {
				home: {
					title: 'Kevin Pan',
					description: 'Building What\'s Next',
				},
				blog: {
					title: 'Blog',
					description: 'Thoughts on AI, data science, and building products.',
				},
				projects: {
					title: 'Projects',
				},
			},
		}),
	],
});

export default config;
