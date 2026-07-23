<script setup>
import Story from './pages/Story.vue';
import Locations from './pages/Locations.vue';
import Footer from './pages/Footer.vue';
</script>

<template>
    <div class="landing_page">
        <div class="landing_page__logo">
            <img src="/Super_bros_logo.avif" alt="">
        </div>
        <h1 class="landing_page__title cherry-cream-soda-regular">Willkommen</h1>
    </div>

    <Story/>

    <Locations />

    <Footer />
</template>

<style lang="scss" scoped>
.landing_page {
    width: 100%;
    height: 100vb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000;

    &__logo {
        width: 400px;

        img {
            width: 100%;
        }
    }

    &__title {
        font-size: 80px;
        color: #f0f0f0;
    }
}
</style>