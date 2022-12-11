// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ],
            bodyAttrs: {
                class: "bg-dark text-white"
            },
        },
    },
    typescript: {
        shim: false
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        // presets
        uno: false, // enabled "@unocss/preset-uno"
        icons: true, // enabled "@unocss/preset-icons"
        attributify: false, // enabled "@unocss/preset-attributify"
        
        // core options
        shortcuts: [],
        rules: [],
    },
})