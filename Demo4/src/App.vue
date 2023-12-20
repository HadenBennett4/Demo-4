<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import GalleryView from './views/GalleryView.vue'
import ContactView from './views/ContactView.vue'
import InfoView from './views/InfoView.vue'
import FooterView from './views/footerView.vue'

const showMobileNavigation = ref(false);
const changeMobileNav = () => {
  showMobileNavigation.value = !showMobileNavigation.value;
  console.log("Hello");
}
</script>

<template>
  <mobile-navigation v-if="showMobileNavigation">
    <v-icon @click="changeMobileNav()" fill="black" class="mobile-nav-button" name="bi-x-square" scale="2"></v-icon>
    <mobile-nav-box>
      <router-link @click="changeMobileNav()" :to="{ hash: '#home' }">Home</router-link>
      <router-link @click="changeMobileNav()" :to="{ hash: '#about' }">About</router-link>
      <router-link @click="changeMobileNav()" :to="{ hash: '#info' }">Info</router-link>
      <router-link @click="changeMobileNav()" :to="{ hash: '#gallery' }">Gallery</router-link>
      <router-link @click="changeMobileNav()" :to="{ hash: '#contact' }">Contact</router-link> 
    </mobile-nav-box>

  </mobile-navigation>
  <root v-if="!showMobileNavigation">
    <HomeView id="home"></HomeView>
    <AboutView id="about"></AboutView>
    <InfoView id="info"></InfoView>
    <GalleryView id="gallery"></GalleryView>
    <ContactView id="contact"></ContactView>
    <FooterView id="footer"></FooterView>

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
  </root>
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
root{
  width: 100%;
}

/**Desktop */
@media (min-width: 1024px) {
  .header {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 6px 4px 0 rgba(30,75,74,0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: var(--dark-neutral-color);
  }

  header-icon {
    height: 90%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header-image {
    width: 70%;
  }

  header-left-box {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }

  header-text {
    font-size: 35px;
    color: white;
  }

  .nav a {
    text-decoration: none;
    color: white;
    transition: color .6s ease;

  }

  .nav a:hover {
    color: var(--light-beige-color);
  }

  .mobile-nav-button {
    scale: 0;
  }

  mobile-header-text {
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
    justify-content: space-around;
    z-index:2;

    background-color: var(--dark-neutral-color);
  }

  header-icon {
    width: 100%;
  }

  .header-image {
    width: 100%;
  }

  header-left-box {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    display: none;
  }

  header-text {
    font-size: 35px;
    color: white;
  }

  .nav {
    display: none;
  }

  mobile-header-text {
    font-size: 35px;
    color: white;
  }

  mobile-navigation {
    width: 100%;
    height: 100%;
    background-color: var(--light-beige-color);
    position: fixed;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
  mobile-nav-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;
    width: 90%;
  }
  mobile-nav-box a{
    color: white;
    text-decoration: none;
    font-size:40px;
  }

  .mobile-nav-button {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 4%;
    margin-right: 3%;
  }
}

/**Mobile */
@media (min-width: 0px) and (max-width:479px) {
  .header {
    width: 100%;
    height: 150px;
    position: fixed;
    top: 0;
    left: 0;
    z-index:2;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: var(--dark-neutral-color);

  }

  header-icon {
    width: 100%;
  }

  .header-image {
    width: 100%;
  }

  header-left-box {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    display: none;
  }

  header-text {
    font-size: 35px;
    color: white;
  }

  .nav {
    display: none;
  }

  mobile-header-text {
    font-size: 40px;
    color: white;
  }

  mobile-navigation {
    width: 100%;
    height: 100%;
    background-color: var(--light-beige-color);
    position: fixed;
    z-index: 0;
  }
  mobile-nav-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 90%;
    width: 100%;
  }
  mobile-nav-box a{
    color: white;
    text-decoration: none;
    font-size:40px;
  }

  .mobile-nav-button {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 6%;
    margin-right: 3%;
  }
  
}
</style>
