/*
路由器对象模块
 */
import Vue from 'vue'
import VueRputer from 'vue-router'

// 引入路由
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

import Login from '../pages/Login/Login.vue'
// 声明使用插件
Vue.use(VueRputer)

export default new VueRputer({
    // 所有路由
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})