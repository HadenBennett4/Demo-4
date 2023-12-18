<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import GalleryView from './views/GalleryView.vue'
import ContactView from './views/ContactView.vue'
</script>

<template>
  <HomeView id="home"></HomeView>
  <AboutView id="about"></AboutView>
  <GalleryView id="gallery"></GalleryView>
  <ContactView id="contact"></ContactView>
  <div class="header">
    <div class="nav">
      <router-link :to="{ hash: '#home' }">Home</router-link>
      <router-link :to="{ hash: '#about' }">About</router-link>
      <router-link :tp="{ hash: '#gallery' }">Gallery</router-link>
      <router-link :to="{ hash: '#contact' }">Contact</router-link>
    </div>
  </div>
</template>

<style>
/**Styles that do not change */


.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
}

/**Desktop */
@media (min-width: 1024px) {
  .header {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-style:double;
    border-color: aquamarine;

    background-color: var(--dark-neutral-color);
  }

}

/**Tablet */
@media (min-width: 480px) and (max-width:1023px) {
  .header {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--dark-neutral-color);
  }
}

/**Mobile */
@media (min-width: 0px) and (max-width:479px) {
  .header {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--dark-neutral-color);
  }
}
</style>
