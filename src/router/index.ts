import { createRouter ,createWebHashHistory} from "vue-router";

export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/login',
            component:()=>import('../components/login.vue'),
            meta: { nav: true }
        },{
            path:'/',
            redirect:'/login'
        },{
            path:'/check',
            component:()=>import('../components/check.vue'),
            meta: { nav: false }
        }
    ],scrollBehavior (n) {
        return{
            left:0,
            top:0
        }
    }
})