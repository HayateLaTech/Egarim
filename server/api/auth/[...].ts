import DiscordProvider from 'next-auth/providers/discord';
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
    secret: process.env.NUXT_SECRET,
    providers: [
        // @ts-ignore
        DiscordProvider.default({
            clientId: process.env.DISCORD_CLIENT,
            clientSecret: process.env.DISCORD_SECRET,
        })
    ],
})