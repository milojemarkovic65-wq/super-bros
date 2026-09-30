<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  const consent = localStorage.getItem('cookie_consent')
  if (!consent) {
    visible.value = true
  }
})

const emit = defineEmits(['consent'])

const accept = () => {
  localStorage.setItem('cookie_consent', 'accepted')
  visible.value = false
  emit('consent', true)
}

const decline = () => {
  localStorage.setItem('cookie_consent', 'declined')
  visible.value = false
  emit('consent', false)
}
</script>

<template>
  <div v-if="visible" class="cookie-banner">
    <p>Wir verwenden Cookies, um Dir ein optimales und sicheres Erlebnis auf unseren Websites zu ermöglichen. Mit der Entscheidung "Alle ablehnen" werden wir Deine Privatsphäre respektieren und keine Cookies setzen, die nicht für den einwandfreien Betrieb der Seiten notwendig sind.</p>
    <div class="cookie-banner__buttons">
        <button class="cookie-banner__buttons_decline" @click="decline">Alle ablehnen</button>
        <button class="cookie-banner__buttons_accept" @click="accept">Zustimmen</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #222;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
  }

  &__buttons {
    max-width: 500px;
    width: 100%;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &_accept {
        cursor: pointer;
        background-color: #FFBAC9;
        border: 1px solid #FFBAC9;
        padding: 10px;
        transition: all .2s;
    }

    &_accept:hover {
        background-color: #c0375e;
        border-color: #c0375e;
    }

    &_decline {
        border: 1px solid #f0f0f0;
        padding: 10px;
        cursor: pointer;
        background-color: transparent;
        color: #f0f0f0;
        transition: all .2s;
    }

    &_decline:hover {
        color: #8a8a8a;
        border-color: #8a8a8a;
    }
  }
}
</style>