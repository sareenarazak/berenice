import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: true,
			fallback: '404.html',
			strict: true

		}),
		paths: {
			base: ''
		},

		appDir : "app"

	}
};
export default config;
