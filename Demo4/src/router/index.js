import { createRouter, createWebHistory } from 'vue-router'
import { ref, onMounted,onUnmounted} from 'vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'
import InfoView from '../views/InfoView.vue'

//This is for the resize
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const handleResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.addEventListener('resize', handleResize)
})


function isMobile() {
  return windowWidth.value < 1024;
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/contact',
      name:'contact',
      component:ContactView,
    },
    {
      path:'/info',
      name:'info',
      component:InfoView
    }
  ],
  scrollBehavior(to, from,savedPosition){
    if(to.hash){
      if(to.hash==="#home"){
        if(isMobile()){
          console.log("Here");
          return {
            el: "#home",
            behavior: 'smooth',
            top: 0,
          }
        }
        return {
          el: "#home",
          behavior: 'smooth',
          top: 100,
        }
      }else if(to.hash==="#about"){
        if(isMobile()){
          return {
            el: "#about",
            behavior: 'smooth',
            top: -1000,
          }
        }
        return {
          el: "#about",
          behavior: 'smooth',
          top: 100,
        }
      }else if(to.hash==="#gallery"){
        if(isMobile()){
          return {
            el: "#gallery",
            behavior: 'smooth',
            top: 100,
          }
        }
        return {
          el: "#gallery",
          behavior: 'smooth',
          top: 20,
        }
      }else if(to.hash==="#info"){
        if(isMobile()){
          return {
            el: "#info",
            behavior: 'smooth',
            top: 100,
          }
        }
        return {
          el: "#info",
          behavior: 'smooth',
          top: 100,
        }
      }else if(to.hash==="#contact"){
        if(isMobile()){
          return {
            el: "#contact",
            behavior: 'smooth',
            top: 100,
          }
        }
        return {
          el: "#contact",
          behavior: 'smooth',
          top: 60,
        }
      }
    }
  }
})

export default router
