<script setup>
const WEB3FORMS_ACCESS_KEY = "88af7c4b-f36a-4f79-a8ae-b8b6c2f053b4";
import GoogleMap from '../components/GoogleMap.vue'
</script>
<template>
    <footer>
        <the-map>
          <GoogleMap/>
        </the-map>
        <the-footer>
          <footer-container>
            <icon-box>
            <v-icon name="bi-facebook" fill="white" scale="2"></v-icon>
            <v-icon name="bi-instagram" fill="white" scale="2"></v-icon>
            <v-icon name="fa-twitter" fill="white" scale="2"></v-icon>
          </icon-box>
          <footer-text>
            A Duckweed Website
          </footer-text>
          </footer-container>

        </the-footer>
    </footer>
  </template>
  
  <style scoped>
  /**Styles that do not change */
  
  
  /**Desktop */
  @media (min-width: 1024px) {
    footer {
      width: 100%;
      height: 715px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background-color: blanchedalmond;
    }
    the-map{
      width:80%;
      height: 50%;
      margin-top:70px;
    }
    the-footer{
      width:100%;
      height: 30%;
      background-color: #0B1D1D;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    footer-container{
      height:50%;
      width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    icon-box{
      height: 40%;
      width: 25%;
      display:flex;
      flex-direction:row;
      align-items: center;
      justify-content: space-evenly;
    }
    footer-text{
      color:white;
      font-size:20px;
    }

  }
  /**Tablet */
  @media (min-width: 480px) and (max-width:1023px){
    footer {
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: antiquewhite;
    }
  }
  /**Mobile */
  @media (min-width: 0px) and (max-width:479px){
    footer {
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: antiquewhite;
    }
  }
  </style>
  