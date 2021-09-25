import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { registerMicroApps, start } from 'qiankun'

Vue.use(ElementUI);

const apps = [{
        name: 'vueApp',
        entry: 'http://localhost:1001/',
        container: '#vue',
        activeRule: '/vue',
        props: {
            a: 1,
        }
    },
    {
        name: 'reactApp',
        entry: 'http://localhost:1002',
        container: '#react',
        activeRule: '/react',
        props: {
            a: 1,
        }
    }
]

// 注册子应用
registerMicroApps(apps)

start({
    // prefetch: false, // 取消预加载
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')