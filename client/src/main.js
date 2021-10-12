import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
 
import 'bulma';
import '@fortawesome/fontawesome-free/js/all.js';


createApp(App).use(router).mount('#app');
