<template>
    <gallery>
      gallery
    </gallery>
  </template>
  
  <style scoped>
  /**Styles that do not change */
  
  
  /**Desktop */
  @media (min-width: 1024px) {
    gallery {
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: blue;
    }
  }
  /**Tablet */
  @media (min-width: 480px) and (max-width:1023px){
    gallery {
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: blue;
    }
  }
  /**Mobile */
  @media (min-width: 0px) and (max-width:479px){
    gallery {
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: blue;
    }
  }
  </style>
  