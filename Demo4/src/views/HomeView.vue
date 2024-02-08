
<template>
  <home>
    <box1>
      <box1-child>
        <header>
          Duckweed Marketing
        </header>
        <paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore odit, rem eveniet sed suscipit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia possimus eaque id necessitatibus omnis optio, corrupti non tempore iusto!
        </paragraph>
        <router-link class="learn-more-button" :to="{ hash: '#info' }">Learn More</router-link>
      </box1-child>
    </box1>
    <box2>
      <box2-child>
        <img src="../assets/Nurse.png" class="home-image">
      </box2-child>

    </box2>
  </home>
</template>

<style scoped>
/**Styles that do not change */


/**Desktop */
@media (min-width: 1024px) {
  home {
    width: 100%;
    margin-top: 100px;
    height: 715px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: blanchedalmond;
  }

  .home-image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);  
  }

  box1 {
    width: 50%;
    height: 100%;
    background-color: var(--light-neutral-color);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
  box1-child{
    width: 80%;
    height: 60%;
    display:flex;
    flex-direction:column;
    align-items: start;
    justify-content: space-between;
  }
  header{
    font-size: 70px;
    font-weight:bolder;
  }
  paragraph{
    font-size:20px;
    line-height:130%;
  }
  .learn-more-button{
    width:25%;
    height: 10%;
    border-style:none;
    border-radius: 10px;
    color: var(--light-neutral-color);
    background-color: var(--dark-neutral-color);
    transition:background-color, .7s ease,color .2s ease-in,color .1s ease-out;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

  }
  .learn-more-button:hover{
    background-color: var( --light-beige-color);
  }
  .learn-more-button:active{
    transform: scale(1.05);
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    color: var(--dark-neutral-color);
  }

  box2 {
    width: 50%;
    height: 100%;
    background-color: var(--light-beige-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  box2-child {
    width: 88%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
}

/**Tablet */
@media (min-width: 480px) and (max-width:1023px) {
  home {
    width: 100%;
    margin-top: 100px;
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: blanchedalmond;
  }
  .home-image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);  
  }
  box1 {
    width: 50%;
    height: 100%;
    background-color: var(--light-neutral-color);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
  box1-child{
    width: 80%;
    height: 80%;
    display:flex;
    flex-direction:column;
    align-items: start;
    justify-content: space-between;
  }
  header{
    font-size: 70px;
    font-weight:bolder;
  }
  paragraph{
    font-size:20px;
    line-height:130%;
  }
  .learn-more-button{
    width:30%;
    height: 10%;
    border-style:none;
    border-radius: 10px;
    color: var(--light-neutral-color);
    background-color: var(--dark-neutral-color);
    transition:background-color, .7s ease,color .2s ease-in,color .1s ease-out;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

  }
  .learn-more-button:active{
    transform: scale(1.05);
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    color: var(--dark-neutral-color);
  }

  box2 {
    width: 50%;
    height: 100%;
    background-color: var(--light-beige-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  box2-child {
    width: 88%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
}

/**Mobile */
@media (min-width: 0px) and (max-width:479px) {
  home {
    width: 100%;
    margin-top: 150px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blanchedalmond;
  }
  .home-image {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);  
  }
  box1 {
    width: 100%;
    height: 50%;
    background-color: var(--light-neutral-color);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
  box1-child{
    width: 80%;
    height: 90%;
    display:flex;
    flex-direction:column;
    align-items: start;
    justify-content: space-evenly;
  }
  header{
    font-size: 70px;
    font-weight:bolder;
  }
  paragraph{
    font-size:20px;
    line-height:130%;
  }
  .learn-more-button{
    padding: .5em;
    border-style:none;
    border-radius: 10px;
    color: var(--light-neutral-color);
    background-color: var(--dark-neutral-color);
    transition:background-color, .7s ease,color .2s ease-in,color .1s ease-out;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

  }
  .learn-more-button:active{
    transform: scale(1.05);
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    color: var(--dark-neutral-color);
  }

  box2 {
    width: 100%;
    height: 50%;
    background-color: var(--light-beige-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  box2-child {
    width: 88%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
}</style>