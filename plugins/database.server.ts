const { Sequelize } = require('sequelize');

export default defineNuxtPlugin((NuxtApp) => {
    const config = useRuntimeConfig()
    const sequalize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
        host: config.mysql.host,
        dialect: 'mysql'
    })

    NuxtApp.provide("db", sequalize)
})