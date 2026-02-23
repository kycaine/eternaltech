
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
	output: 'static',
	adapter: github(),
	site: 'https://user.github.io/eternaltech', // Ganti 'user' dengan username GitHub kamu
	base: '/eternaltech/',
});
