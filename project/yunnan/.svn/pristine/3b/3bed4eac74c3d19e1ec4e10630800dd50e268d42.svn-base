const Layout = () => import( '../../components/Layout')
const ExpressDelivery = () => import( '../../views/ExpressDelivery/expressdelivery')
const NoMyAddress = () => import( '../../views/ExpressDelivery/no_myaddress')
const MyAddress = () => import( '../../views/ExpressDelivery/myaddress')
const DelAddress = () => import( '../../views/ExpressDelivery/deladdress')
const UpdateAddress = () => import( '../../views/ExpressDelivery/updateAddress')
const NewAddress = () => import( '../../views/ExpressDelivery/newAddress')
const ChangeCompany = () => import( '../../views/ExpressDelivery/ChangeCompany')
const OrderDetail = () => import( '../../views/ExpressDelivery/OrderDetail')
const FalseOrder = () => import( '../../views/ExpressDelivery/falseOrder')
const MyExpress = () => import( '../../views/MyExpress/myexpress')
const lrexpress = () => import( '../../views/MyExpress/lrexpress')
const ChoseCompany = () => import( '../../views/CheckExpress/ChoseCompany')
const MineEmail = () => import( '../../views/CheckExpress/MineEmail')
const QueryEmail = () => import( '../../views/CheckExpress/QueryEmail')
const QueryResult = () => import( '../../views/CheckExpress/QueryResult')


const wuliu = [
    {
        path: '/layout',
        component: Layout,
        meta: {
          keepAlive: false // 需要被缓存
        },
        children: [
            // 查快递
            {
                path: '/QueryEmail',
                component: QueryEmail,
                meta: {
                  keepAlive: false // 需要被缓存
                }
            },
            // 寄快递
            {
                path: '/ExpressDelivery',
                name:'ExpressDelivery',
                component: ExpressDelivery,
                meta: {
                  keepAlive: false // 需要被缓存
                }
            },
            // 我的快递
            {
                path: '/MyExpress',
                component: MyExpress,
                meta: {
                  keepAlive: false // 需要被缓存
                }
            }
        ]
    },
    {
        path: '/ChoseCompany',
        component: ChoseCompany,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/MineEmail',
        component: MineEmail,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/QueryEmail',
        component: QueryEmail,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/QueryResult',
        component: QueryResult,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/NoMyAddress',
        component: NoMyAddress,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/myaddress',
        component: MyAddress,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/DelAddress',
        component: DelAddress,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/updateAddress',
        component: UpdateAddress,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/NewAddress',
        component: NewAddress,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/ChangeCompany',
        component: ChangeCompany,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/OrderDetail',
        name:'OrderDetail',
        component: OrderDetail,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/lrexpress',
        component: lrexpress,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    {
        path: '/FalseOrder',
        component: FalseOrder,
        meta: {
          keepAlive: false // 需要被缓存
        }
    },
    // {path:'*',redirect:'/QueryEmail'}
]


export default wuliu
