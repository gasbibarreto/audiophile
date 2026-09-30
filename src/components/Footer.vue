<script setup lang="ts">
import Menu from './Menu.vue'
</script>
<template>
  <div class="footer__component">
    <div class="footer__component__content">
      <img src="../assets/audiophile.png" />
      <Menu></Menu>
      <p class="footer__component__content-description">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <p class="footer__component__content-copyright">Copyright 2021. All Rights Reserved</p>
      <div class="footer__component__content-media">
        <img src="../assets/facebook.svg" />
        <img src="../assets/x.svg" />
        <img src="../assets/instagram.svg" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer__component {
  background-color: var(--color-black);

  &__content {
    display: flex;
    align-items: center;
    align-content: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: min(1110px, calc(100% - 100px));
    margin: 0 auto;

    img {
      margin-bottom: 16px;
    }

    &-description {
      color: var(--color-white);
      font-size: 12px;
      opacity: 0.5;
      margin-top: 16px;
    }

    &-copyright {
      margin-top: 16px;
      font-size: 12px;
      color: var(--color-white);
      opacity: 0.5;
    }

    &-media{
        display: flex;
        gap: 12px;

        img {
            width: 24px;
            height: 24px;
        }
    }
  }
}

@media (min-width: 768px) {
  .footer__component__content {
    align-items: flex-start;
    justify-content: flex-start;
  }
}

@media (min-width: 1440px) {
  .footer__component__content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
