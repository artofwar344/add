import Vue from 'vue';
import Router from 'vue-router';
import Year from '@/components/yearMembersCard/Year'
import YearMembersCard from '@/components/yearMembersCard/yearMembersCard'
import MemberBuy from '@/components/memberBuy/memberBuy'
import Hi from '@/components/yearMembersCard/Hi'
import Card from '@/components/yearMembersCard/Card'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes:[
        {
            path:'/MemberBuy',
            name:'MemberBuy',
            component: MemberBuy
        },
        {
            path:'/Year',
            name:'Year',
            component: Year
        },
        {
            path:'/',
            name:'YearMembersCard',
            component: YearMembersCard,
        },
        {
            path:'/hi',
            name:'Hi',
            component: Hi
        },
        {
            path:'/Card',
            name:'Card',
            component: Card,
        }
    ]
})
