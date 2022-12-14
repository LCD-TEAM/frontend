import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

import '@/assets/styles/fonts.css';
import '@/assets/styles/normalize.css';

app
.use(store, "store")
.use(router)
.mount('#app');
