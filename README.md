# 😈 Egarim!

Just a smol Project for a fun Community!

This is ⚠️ **explorative** ⚠️ code! Be aware that code from here likely suffers from a safety & security standpoint.

# Dev Setup

Thanks to 🐟 Docker ⛵ we can sail the high seas without any issues!

In order to make it work, you'll have to setup your own **.env** file, which will contain things like the tokens for your Discord oAuth2 Application 😉

## 📁 Create your own .env File

1. copy the **.env.example** file and create a new file called **.env** in the root of the project
2. edit the **.env** file so that all settings are set up correctly
3. 👍 you're done~! Congrats 😸

Here's a little help for all the keys and what they mean:

|  Key   |  Description    |
|--------|-----------------|
|  NUXT_SECRET  |  .. for decryption things  |
|  ORIGIN       |  .. for oauth2 redirection url generation  |
|  DISCORD_CLIENT  |  Client ID of your Discord Application  |
|  DISCORD_SECRET  |  The Secret of it  |
|  DB_CONNECTION   |  which db-driver to use (just use mysql)  |
|  DB_HOST         |  The DB Host (when using docker it's the name of the db container)  |
|  DB_PORT         |  ..  |
|  DB_DATABASE     |  The name of the DB Database  |
|  DB_USERNAME     |  Username of the DB User that'll access all app Data etc.  |
|  DB_PASSWORD     |  Password of the DB User that'll access all the app Data etc.  |
|  NODE_ENV        |  Settings this enables / deactivates debugging thingies etc.  |