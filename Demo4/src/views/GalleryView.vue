<template>
    <gallery>
      <gallery-box>
        <image>
          <img src="../assets/Nurse2.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic5.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic6.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic7.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic8.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic9.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic10.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic11.png" class="im">
        </image>
        <image>
          <img src="../assets/Pic12.png" class="im">
        </image>
      </gallery-box>
    </gallery>
  </template>
  
  <style scoped>
  /**Styles that do not change */
  
  
  /**Desktop */
  @media (min-width: 1024px) {
    gallery {
      width: 100%;
      height: 1400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: space-evenly;
      justify-content: center;
      background-color: var(--light-neutral-color);
    }
    gallery-box{
      width: 90%;
      height: 90%;
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
    image{
      width:28%;
      height: 30%;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }
    .im{
      height: 100%;
      border-radius: 20px;
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
  