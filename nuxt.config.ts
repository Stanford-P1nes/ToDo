// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@pinia/nuxt'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import '@/styles/_mixin.scss';`,
				},
			},
		},
	},
	css: [
		'@/styles/main.scss',
	],
})