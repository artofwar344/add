import Vue from 'vue';
import Router from 'vue-router';
import Page3 from '@/components/page3Components/Page3'


Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes:[
        {
            path:'/',
            name:'Page3',
            component: Page3
        },
    ]
})
