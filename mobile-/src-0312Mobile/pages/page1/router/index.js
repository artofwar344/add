import Vue from 'vue';
import Router from 'vue-router';
import Year from '@/components/page1Component/Year'
import Page1 from '@/components/page1Component/Page1'
import Hi from '@/components/page1Component/Hi'
import Card from '@/components/page1Component/Card'


Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes:[
        {
            path:'/Year',
            name:'Year',
            component: Year
        },
        {
            path:'/',
            name:'Page1',
            component: Page1
        },
        {
            path:'/hi',
            name:'Hi',
            component: Hi
        },
        {
            path:'/Card',
            name:'Card',
            component: Card
        }
    ]
})
