import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFacebook,
    OiThreeBars,
    BiXSquare

} from "oh-vue-icons/icons";

const app = createApp(App)
addIcons(OiThreeBars,
        BiFacebook,
        BiXSquare
    
    );
app.use(router)
app.component("v-icon", OhVueIcon);

app.mount('#app')
