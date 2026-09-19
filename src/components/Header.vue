<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'

const isOpen = ref(false)
console.log('is open?', isOpen.value)
const paginaAtual = ref('Home')
const menuItems = ref([
  { id: 1, nome: 'HOME', link: '/' },
  { id: 2, nome: 'HEADPHONES', link: 'Headphones' },
  { id: 3, nome: 'SPEAKERS', link: 'Speakers' },
  { id: 4, nome: 'EARPHONES', link: 'Earphones' },
])

const isMobile = useMediaQuery('(max-width: 767px)')
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)')
</script>
<template>
  <header class="header__component">
    <div class="header__component-wrapper">
      <button
        v-if="isMobile || isTablet"
        class="header__hamburger"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Abrir menu"
        @click="isOpen = !isOpen"
      >
        <img src="../assets/hanburguer.png" alt="Menu" />
      </button>

      <div v-if="isMobile || isTablet" v-show="isOpen" class="header__mobile-menu">
        <span v-for="item in menuItems" :key="item.id" class="header__mobile-menu-item">
          <RouterLink
            class="header__menu-link"
            :to="item.link"
            @click.prevent="((paginaAtual = item.link), (isOpen = false))"
          >
            {{ item.nome }}
          </RouterLink>
        </span>
      </div>

      <img class="header__logo" src="../assets/audiophile.png" alt="Audiophile logo image" />

      <Menu v-if="!isTablet && !isMobile"></Menu>

      <img class="header__cart" src="../assets/cart.png" alt="Cart" />
    </div>

    <hr class="header__divider" />
  </header>
</template>
<style scoped lang="less">
.header__component {
  background-color: var(--color-black);
  padding: 20px 40px;
}

.header__component-wrapper {
  width: min(1110px, calc(100% - 40px));
  height: 28px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.header__hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    width: 20px;
    height: 16px;
  }
}

.header__mobile-menu {
  position: absolute;
  top: 72px;
  left: 20px;
  background-color: var(--color-black);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
}

.header__mobile-menu-item {
  display: block;
}

.header__logo {
  display: block;
  width: 143px;
  height: 25px;
}

.header__menu-link {
  color: var(--color-white);
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 25px;
  transition: opacity 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
}

.header__cart {
  display: block;
  width: 23px;
  height: 20px;
}

.header__divider {
  width: min(1110px, calc(100% - 40px));
  border: none;
  height: 1px;
  background-color: var(--color-white);
  opacity: 0.2;
  margin: 22px auto 0;
}
</style>
