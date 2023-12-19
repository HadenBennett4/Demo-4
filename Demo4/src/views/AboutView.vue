<template>
  <about>
    about
  </about>
</template>

<style scoped>
/**Styles that do not change */


/**Desktop */
@media (min-width: 1024px) {
  about {
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
  }
}
/**Tablet */
@media (min-width: 480px) and (max-width:1023px){
  about {
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
  about {
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
