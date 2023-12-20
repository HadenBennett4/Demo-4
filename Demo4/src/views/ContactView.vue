<script setup>
import { ref } from 'vue'
const WEB3FORMS_ACCESS_KEY = "88af7c4b-f36a-4f79-a8ae-b8b6c2f053b4";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const showMessage = ref(false);

const submitForm = async () => {
  if (name.value === '' || email.value === '') {
    alert('Please fill out all required fields.');
    return;
  }
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    }),
  });

  const result = await response.json();

  if (result.success) {
    console.log(result);
    showSuccessMessage();
  }
};
function showSuccessMessage() {
  showMessage.value = true;
  firstName.value = '';
  lastName.value = '';
  message.value = '';
  email.value = '';
};

</script>

<template>
  <contact>
    <contact-container>
      <header>Contact Us!!</header>
      <form @submit.prevent="submitForm">
        <name-container>
          <name-child1>
            <form-text>First Name</form-text>
            <input class="input1" type="text" name="firstName" placeholder="First Name" v-model="firstName" input
              required>
          </name-child1>
          <name-child1>
            <form-text>Last Name</form-text>
            <input class="input1" type="text" name="lastName" placeholder="Last Name" v-model="lastName" input required>
          </name-child1>
        </name-container>
        <email-container>
          <form-text>Email (required)</form-text>
          <input class="input2" type="email" name="email" placeholder="Email" v-model="email" input required>
          <form-text>Message</form-text>
          <input class="input3" type="text" name="message" placeholder="Message" v-model="message" input required>
        </email-container>
        <button type="submit" class="submit-button"> Submit</button>
      </form>
    </contact-container>
    <success v-if="showMessage===true">
      Your submission was succesfull
    </success>
  </contact>
</template>
  
<style scoped>
/**Styles that do not change */


/**Desktop */
@media (min-width: 1024px) {
  contact {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--light-gray-color);
  }
  header{
    font-size: 80px;
    color: black;
    font-weight:bolder;
  }

  contact-container {
    width: 50%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;
  }

  name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 25%;
  }

  email-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 100%;
    height: 75%;
  }

  form-text {
    font-size: 20px;
    z-index: 2;
  }
 
  .input1 {
    width: 100%;
    height: 30%;
  }
  .input2{
    width: 100%;
    height: 10%;
  }
  .input3{
    width:100%;
    height: 5%;
    text-align: left;
    vertical-align: top;
    padding-bottom:30%;
  }
  .input3::placeholder{
  }
  name-child1{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 45%;
    height: 100%;
  }
  .submit-button{
    width:100%;
    height: 10%;
    font-size: 20px;
    border-style:none;
    border-radius:10px;
    color: var(--light-neutral-color);
    background-color: var(--dark-neutral-color);
    transition:background-color, .7s ease,color .2s ease-in,color .1s ease-out;
  }
  .submit-button:hover{
    background-color: var( --light-beige-color);
  }
  .learn-more-button:active{
    transform: scale(1.05);
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    color: var(--dark-neutral-color);
  }
  success{
    font-size: 30px;
    color: black;
  }

}

/**Tablet */
@media (min-width: 480px) and (max-width:1023px) {
  contact {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--light-gray-color);
  }
  header{
    font-size: 80px;
    color: black;
    font-weight:bolder;
  }

  contact-container {
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;
  }

  name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 25%;
  }

  email-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 100%;
    height: 75%;
  }

  form-text {
    font-size: 20px;
    z-index: 2;
  }
 
  .input1 {
    width: 100%;
    height: 30%;
  }
  .input2{
    width: 100%;
    height: 10%;
  }
  .input3{
    width:100%;
    height: 5%;
    text-align: left;
    vertical-align: top;
    padding-bottom:30%;
  }
  .input3::placeholder{
  }
  name-child1{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 45%;
    height: 100%;
  }
  .submit-button{
    width:100%;
    height: 10%;
    font-size: 20px;
    border-style:none;
    border-radius:10px;
    color: var(--light-neutral-color);
    background-color: var(--dark-neutral-color);
    transition:background-color, .7s ease,color .2s ease-in,color .1s ease-out;
  }
  .submit-button:hover{
    background-color: var( --light-beige-color);
  }
  .learn-more-button:active{
    transform: scale(1.05);
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    color: var(--dark-neutral-color);
  }
  success{
    font-size: 30px;
    color: black;
  }

}

/**Mobile */
@media (min-width: 0px) and (max-width:479px) {
  contact {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--light-gray-color);
  }
  header{
    font-size: 80px;
    color: black;
    font-weight:bolder;
  }

  contact-container {
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;
  }

  name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 25%;
  }

  email-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 100%;
    height: 75%;
  }

  form-text {
    font-size: 20px;
    z-index: 2;
  }
 
  .input1 {
    width: 100%;
    height: 30%;
  }
  .input2{
    width: 100%;
    height: 10%;
  }
  .input3{
    width:100%;
    height: 5%;
    text-align: left;
    vertical-align: top;
    padding-bottom:30%;
  }
  .input3::placeholder{
  }
  name-child1{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 45%;
    height: 100%;
  }
  .submit-button{
    width:100%;
    height: 10%;
    font-size: 20px;
    border-style:none;
    border-radius:10px;
    color: var(--light-neutral-color);
    background-color: var(--dark-neutral-color);
    transition:background-color, .7s ease,color .2s ease-in,color .1s ease-out;
  }
  .submit-button:hover{
    background-color: var( --light-beige-color);
  }
  .learn-more-button:active{
    transform: scale(1.05);
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    color: var(--dark-neutral-color);
  }
  success{
    font-size: 30px;
    color: black;
  }
}</style>
  