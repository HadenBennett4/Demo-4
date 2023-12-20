<template>
    <div id="google-map"></div>
  </template>
  
  <script lang="js">
  import { defineComponent } from 'vue';
  import { Loader } from '@googlemaps/js-api-loader';
  
  export default defineComponent({
    name: 'GoogleMap',
    mounted() {
      const loader = new Loader({
        apiKey: 'AIzaSyDbuKZCD8q_Y47CbbxdWKNQoZLM0BhAqg4',
        version: 'weekly', // or specify your desired version
      });
  
      loader.load().then(() => {
        this.initMap();
      });
    },
    methods: {
      initMap() {
        const map = new google.maps.Map(document.getElementById('google-map'), {
          center: { lat: 33.04, lng: -96.7 }, // Set your initial map center coordinates
          zoom: 15, // Set the initial zoom level
        });
        // Set the position (latitude and longitude) where you want to place the marker
        const markerPosition = { lat: 33.04, lng: -96.7 }; // Example coordinates for New York City

        // Create a new marker and set its position
        marker = new google.maps.Marker({
          position: markerPosition,
          map: map, // Set the map on which the marker will be placed
          title: 'Marker Title', // Optional: Set a title for the marker
        });
        // You can add markers, polygons, or other map features here
      },
    },
  });
  </script>
  
  <style>
  #google-map {
    height: 100%;
  }
  </style>
  