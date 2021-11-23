import { createApp } from 'vue';
import { Notification, Config } from '@oruga-ui/oruga-next';
import 'bulma';
import '@fortawesome/fontawesome-free/js/all.js';

import App from './App.vue';
import router from './router';
 

createApp(App)  .use(router)
                .use(Notification)
                .use(Config, {
                    iconPack: 'fas'
                })
                .mount('#app');
                
