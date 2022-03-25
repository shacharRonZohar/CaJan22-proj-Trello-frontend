import { createApp } from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import { focusDirective, closeOnBlur } from './directives'
import './styles/styles.scss'



createApp(app)
    .use(store)
    .use(router)
    .directive('focus', focusDirective)
    .directive('close', closeOnBlur)
    .mount('#app')
