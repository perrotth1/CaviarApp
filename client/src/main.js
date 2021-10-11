import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
 
import 'bulma';
import '@fortawesome/fontawesome-free';

createApp(App).use(router).mount('#app');
