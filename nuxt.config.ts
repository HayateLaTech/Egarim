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
    runtimeConfig: {
        mysql: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }
    },
    typescript: {
        shim: false
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    modules: [
        '@unocss/nuxt',
        '@sidebase/nuxt-auth',
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
    auth: {
        enableGlobalAppMiddleware : true,
        origin: process.env.ORIGIN,
    }
})