import Vue from 'vue';
import Router from 'vue-router';   
import helps from '@/components/webs/webs.vue'
import basis from '@/components/webs/base.vue'
import detail from '@/components/webs/detail.vue'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes:[ 
        {    
        path:'/webs',
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
