import Vue from 'vue';
import Router from 'vue-router';
import Year from '@/components/CurriculumComponent/Year'
import Page1 from '@/components/CurriculumComponent/Page1'
import ShareCard from '@/components/VipShareComponents/ShareCard'
import Hi from '@/components/CurriculumComponent/Hi'
import Card from '@/components/CurriculumComponent/Card'


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
            path:'/ShareCard',
            name:'ShareCard',
            component: ShareCard
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
