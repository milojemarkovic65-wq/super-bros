<script setup>
import Story from '../views/Story.vue'
import Locations from '../views/Locations.vue'
import Footer from '../views/Footer.vue'
import PizzaLogo from '../views/PizzaLogo.vue';


import { ref, onMounted, onUnmounted } from 'vue'

const welcomeText = [
  'Willkommen', 
  'Welcome', 
  'Benvenuti', 
  'Bienvenue', 
  'Bem-vindos', 
  'Добро пожаловать', 
  'Dobro došli', 
  'ようこそ', 
  '欢迎'
]

const currentIndex = ref(0)

const changeText = () => {
  currentIndex.value = (currentIndex.value + 1) % welcomeText.length
}

let interval

onMounted(() => {
  interval = setInterval(changeText, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

</script>

<template>
  <div class="landing_page">
    <div class="landing_page__logo">
      <img src="/Super_bros_logo.avif" alt="" />
    </div>
    <Transition name="fade" mode="out-in">
        <h1 class="landing_page__title" :key="currentIndex">{{ welcomeText[currentIndex] }}</h1>
    </Transition>
  </div>

  <Story />
  <Locations />
  <PizzaLogo />
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

    @media screen and (max-width: 1024px) {
      width: 300px;
    }
  }

  &__title {
    font-size: 80px;
    color: #FFBAC9;

    @media screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }
}
hr {
  background-color: #f0f0f0;
  border: none;
  height: 10px;
  margin: 0;
}


///// Transition effect ////////
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
