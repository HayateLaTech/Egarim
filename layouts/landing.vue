<script setup>

</script>

<template>
    <main>
        <div id="particles"></div>
        <slot />
    </main>
</template>

<style lang="scss">

    main {
        position: relative;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
    }

    #particles {
        position: absolute;
        height: 120%;
        width: 120%;

        top: -20%;
        left: -20%;

        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='100px'><text x='35' y='35' font-size='20'>🥜</text></svg>");
    
        opacity: 0.2;

        animation: 5s nutfall infinite linear;

        @keyframes nutfall {
            0% {
                transform: translate3d(0, 0, 0);
            }
            100% {
                transform: translate3d(100px, 50px, 35px);
            }
        }
    }

</style>