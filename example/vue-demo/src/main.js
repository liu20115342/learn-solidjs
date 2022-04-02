import { createApp } from 'vue'
import App from './App.vue'
import '../../common/base.css';
import { store } from './store';

const app = createApp(App)
app.use(store)
app.mount('#root')
