<script setup>
definePageMeta({
  layout: "landing",
  auth: false
});

const { data, status, getCsrfToken, getProviders, signIn } = useSession()

const providers = await getProviders()
const csrfToken = await getCsrfToken()
</script>

<template>
    <div id="landing">
        <h1>🥜 !Make Twicksy Nut! 🥜</h1>
        <p>{{ providers }}</p>
        <p v-if="data">{{ data }}</p>
        <img :src="data.user.image" alt="Profile Picture" class="rounded" v-if="data">
        <button class="btn btn-primary" v-if="status !== 'authenticated'" v-on:click="signIn()">Login</button>
    </div>
</template>

<style lang="scss" scoped>

  #landing {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: rgba(0,0,0,.3);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    text-align: center;
  }

</style>