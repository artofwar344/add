import Vue from 'vue';
import Router from 'vue-router';   
import helps from '@/components/helps/help.vue'
import basis from '@/components/helps/base.vue'
import detail from '@/components/helps/detail.vue'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes:[ 
        {    
        path:'/help',
        name:'helps',
        component: helps,
            // path:'/',
            // name:'index2', 
            // component: 
            children:[{
                path:'base',
                name:'basis',
                component: basis ,
                children:[{
                    path:'details',
                    name:'/basis',
                    component: detail 
                }]
            },
            {
                path:'account',
                name:'Account',
                component:  basis,
                children:[{
                    path:'details',
                    name:'account',
                    component: detail 
                }]
            },
            {
                path:'interests',
                name:'Interests',
                component: basis ,
                children:[{
                    path:'details',
                    name:'interests',
                    component: detail 
                }]
            },
            {
                path:'buy',
                name:'Buy',
                component: basis ,
                children:[{
                    path:'details',
                    name:'buy',
                    component: detail 
                }]
            },
            {
                path:'version',
                name:'Version',
                component: basis ,
                children:[{
                    path:'details',
                    name:'version',
                    component: detail 
                }]
            },
            {
                path:'services',
                name:'Servicer',
                component: basis ,
                children:[{
                    path:'details',
                    name:'services',
                    component: detail 
                }]
            } 
        ]
        } 
    ]
})
