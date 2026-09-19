<script setup lang="ts">
import { ref } from 'vue'
const paginaAtual = ref('Home')
const menuItems = ref([
  { id: 1, nome: 'HOME', link: '/' },
  { id: 2, nome: 'HEADPHONES', link: 'Headphones' },
  { id: 3, nome: 'SPEAKERS', link: 'Speakers' },
  { id: 4, nome: 'EARPHONES', link: 'Earphones' },
])
</script>
<template>
  <div class="menu__component">
    <nav class="menu__component__menu">
      <ul class="menu__component__menu-list">
        <li v-for="item in menuItems" :key="item.id" class="menu__component__menu-item">
          <RouterLink
            class="menu__component__menu-link"
            :to="item.link"
            @click.prevent="paginaAtual = item.link"
          >
            {{ item.nome }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style lang="less" scoped>
.menu__component {
  &__menu {
    display: flex;
    justify-content: center;

    &-list {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 34px;
      margin: 0;
      padding: 0;
    }

    &-item {
      display: flex;
      align-items: center;
    }

    &-link {
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
  }
  @media (max-width: 767px) {
    .menu__component {
      &__menu-list {
        flex-wrap: wrap;
        flex-direction: column;
      }
    }
  }
}
</style>
