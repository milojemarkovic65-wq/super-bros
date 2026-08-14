<script setup>
import Story from '../views/Story.vue'
import Locations from '../views/Locations.vue'
import Footer from '../views/Footer.vue'
</script>

<template>
  <div class="landing_page">
    <div class="landing_page__logo">
      <img src="/Super_bros_logo.avif" alt="" />
    </div>
    <h1 class="landing_page__title cherry-cream-soda-regular">Willkommen</h1>
  </div>

  <Story />
  <Locations />
  <hr />
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
hr {
  background-color: #f0f0f0;
  border: none;
  height: 10px;
  margin: 0;
}
</style>
