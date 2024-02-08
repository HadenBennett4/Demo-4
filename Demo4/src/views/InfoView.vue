<script setup>
import { ref } from 'vue'
const showParagraph1 = ref(false);
const showParagraph2 = ref(false);
const showParagraph3 = ref(false);

const changeParagraph1 = () => {
    showParagraph1.value = !showParagraph1.value;
}
const changeParagraph2 = () => {
    showParagraph2.value = !showParagraph2.value;
}
const changeParagraph3 = () => {
    showParagraph3.value = !showParagraph3.value;
}

</script>

<template>
    <info>
        <box1>
            <button class="button1" @click="changeParagraph1()">
                <header>Professional Nurses</header>
                <paragraph v-if="showParagraph1===true">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae qui accusantium ducimus voluptates dolorem
                    magnam necessitatibus debitis inventore ullam placeat?
                </paragraph>
            </button>
            <button class="button2" @click="changeParagraph2()">
                <header>Respite Care</header>
                <paragraph v-if="showParagraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae qui accusantium ducimus voluptates dolorem
                    magnam necessitatibus debitis inventore ullam placeat?
                </paragraph>
            </button>
            <button class="button3" @click="changeParagraph3()">
                <header> Great Activities</header>
                <paragraph v-if="showParagraph3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae qui accusantium ducimus voluptates dolorem
                    magnam necessitatibus debitis inventore ullam placeat?
                </paragraph>
            </button>
        </box1>
    </info>
</template>
  
<style scoped>
/**Styles that do not change */


/**Desktop */
@media (min-width: 1024px) {
    info {
        width: 100%;
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--light-gray-color);
    }
    box1 {
        width: 90%;
        height: 85%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

    }
    button{
        border-style: none;
        width: 25%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .9);
        transition:box-shadow .7s ease;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .button1{
        background-image: url('../assets/Pic1.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button1:hover{
        transform: scale(1.02);
    }
    .button1:active{
        transform: scale(1.05);
    }

    .button2{
        background-image: url('../assets/Pic2.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button2:hover{
        transform: scale(1.02);
    }
    .button2:active{
        transform: scale(1.05);
    }
    .button3{
        background-image: url('../assets/Pic3.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button3:hover{
        transform: scale(1.02);
    }
    .button3:active{
        transform: scale(1.05);
    }

    header{
        font-size:50px;
        color: var(--light-neutral-color);
    }
    paragraph{
        font-size:25px;
        color: var(--light-neutral-color);
    }
}

/**Tablet */
@media (min-width: 480px) and (max-width:1023px) {
    info {
        width: 100%;
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--light-gray-color);
    }
    box1 {
        width: 90%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

    }
    button{
        border-style: none;
        width: 90%;
        height: 29%;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .9);
        transition:box-shadow .7s ease;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .button1{
        background-image: url('../assets/Pic1.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button1:hover{
        transform: scale(1.02);
    }
    .button1:active{
        transform: scale(1.05);
    }

    .button2{
        background-image: url('../assets/Pic2.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button2:hover{
        transform: scale(1.02);
    }
    .button2:active{
        transform: scale(1.05);
    }
    .button3{
        background-image: url('../assets/Pic3.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button3:hover{
        transform: scale(1.02);
    }
    .button3:active{
        transform: scale(1.05);
    }

    header{
        font-size:50px;
        color: var(--light-neutral-color);
    }
    paragraph{
        font-size:20px;
        color: var(--light-neutral-color);
    }
}

/**Mobile */
@media (min-width: 0px) and (max-width:479px) {
    info {
        width: 100%;
        height: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--light-gray-color);
    }
    box1 {
        width: 90%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

    }
    button{
        border-style: none;
        width: 90%;
        height: 29%;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, .9);
        transition:box-shadow .7s ease;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .button1{
        background-image: url('../assets/Pic1.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button1:hover{
        transform: scale(1.02);
    }
    .button1:active{
        transform: scale(1.05);
    }

    .button2{
        background-image: url('../assets/Pic2.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button2:hover{
        transform: scale(1.02);
    }
    .button2:active{
        transform: scale(1.05);
    }
    .button3{
        background-image: url('../assets/Pic3.png');
        background-size: cover;
        transition: transform .5s ease, transform .4s ease;
    }
    .button3:hover{
        transform: scale(1.02);
    }
    .button3:active{
        transform: scale(1.05);
    }

    header{
        font-size:30px;
        color: var(--light-neutral-color);
    }
    paragraph{
        font-size:15px;
        color: var(--light-neutral-color);
        width: 80%;
    }
}</style>
  