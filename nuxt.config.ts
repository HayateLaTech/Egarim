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
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
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