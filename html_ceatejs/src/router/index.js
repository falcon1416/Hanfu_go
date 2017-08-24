import Vue from 'vue'
import Router from 'vue-router'
import sMain from '@/pages/Main'

import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Main', component: sMain },
    ]
})
