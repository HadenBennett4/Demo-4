<script setup>
import { ref } from 'vue'
const WEB3FORMS_ACCESS_KEY = "88af7c4b-f36a-4f79-a8ae-b8b6c2f053b4";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");
const successMessage = "Your Submission Was Successful!";
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
  fistName.value = '';
  lastName.value = '';
  message.value = '';
  email.value = '';
};

</script>

<template>
  <contact>
    <contact-container>
      <header>Contact Us!!</header>
      <paragraph></paragraph>
      <form>
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

      </form>
    </contact-container>
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
    justify-content: center;
    background-color: var(--light-gray-color);
  }

  contact-container {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    justify-content: space-around;
    width: 100%;
    height: 25%;
    background-color: red;
  }

  email-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 75%;
    background-color: aquamarine;
  }

  form-text {
    font-size: 20px;
    z-index: 2;
  }
 
  .input1 {
    width: 80%;
    height: 30%;
  }
  .input2{
    width: 100%;
    height: 20%;
  }
  input3{
    width:100%;
    height: 80%;
  }
  name-child1{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    width: 50%;
    height: 100%;

  }

  .input2 {}
}

/**Tablet */
@media (min-width: 480px) and (max-width:1023px) {
  contact {
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
  }
}

/**Mobile */
@media (min-width: 0px) and (max-width:479px) {
  contact {
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
  }
}</style>
  