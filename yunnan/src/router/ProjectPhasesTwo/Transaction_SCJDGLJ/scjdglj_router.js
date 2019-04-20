const SCJDGLJ = [
    
    {
        path: "/stafftunoverinfo",
        name: "stafftunoverinfo",
        component: resolve => require(['@/pages/ProjectPhaseTwo/Transaction/Transaction_SCJDGLJ/Staffturnover/iftype'], resolve),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/stafftunover",
        name: "stafftunover",
        component: resolve => require(['@/pages/ProjectPhaseTwo/Transaction/Transaction_SCJDGLJ/Staffturnover/'], resolve),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
    {
        path: "/stafftunoverconent",
        name: "stafftunoverconent",
        component: resolve => require(['@/pages/ProjectPhaseTwo/Transaction/Transaction_SCJDGLJ/Staffturnover/stafftunoverconent'], resolve),
        meta: {
            keepAlive: false // 需要被缓存
        }
    },
]




export default SCJDGLJ