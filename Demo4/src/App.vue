<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import GalleryView from './views/GalleryView.vue'
import ContactView from './views/ContactView.vue'

const showMobileNavigation = ref(false);
const changeMobileNav = () =>{
  showMobileNavigation.value = !showMobileNavigation.value;
  console.log("Hello");
}
</script>

<template>
    <HomeView id="home"></HomeView>
  <AboutView id="about"></AboutView>
  <GalleryView id="gallery"></GalleryView>
  <ContactView id="contact"></ContactView>

  <div class="header">
    <header-left-box>
      <header-icon>
      <img class="header-image" src="./assets/duck.png">
    </header-icon>
    <header-text>
      Duckweed Marketing
    </header-text>
    </header-left-box>
    <mobile-header-text>
      Duckweed <br>Marketing
    </mobile-header-text>

    <v-icon @click="changeMobileNav()" class="mobile-nav-button" name="oi-three-bars" scale="3"></v-icon>
    <div class="nav">
      <router-link :to="{ hash: '#home' }">Home</router-link>
      <router-link :to="{ hash: '#about' }">About</router-link>
      <router-link :to="{ hash: '#gallery' }">Gallery</router-link>
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
  width: 30%;
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
    justify-content: space-between;

    background-color: var(--dark-neutral-color);
  }
  header-icon{
    height: 90%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .header-image{
    width: 70%;
  }
  header-left-box{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  header-text{
    font-size:35px;
    color: white;
  }
  .nav a{
    text-decoration: none;
    color: white;
    transition: color .6s ease;

  }
  .nav a:hover{
    color: var(--light-beige-color);
  }
  .mobile-nav-button{
    scale: 0;
  }
  mobile-header-text{
    display: none;
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
  header-icon{
    height: 90%;
    width: 20%;
  }
  .header-image{
    width: 100%;
  }
  header-left-box{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  header-text{
    font-size:25px;
    color: white;
  }
  .nav a{
    text-decoration: none;
    color: white;
    transition: color .6s ease;

  }
  .nav a:hover{
    color: var(--light-beige-color);
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
    justify-content: space-around;

    background-color: var(--dark-neutral-color);
  }
  header-icon{
    width: 100%;
  }
  .header-image{
    width: 100%;
  }
  header-left-box{
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    display:none;
  }
  header-text{
    font-size:35px;
    color: white;
  }
  .nav{
    display: none;
  }
  mobile-header-text{
    font-size:35px;
    color: white;
  }
  mobile-navigation{
    width: 100%;
    height: 100%;
    background-color: blue;
  }
}
</style>
