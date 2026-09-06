
import { createRouter,createWebHistory } from "vue-router";
import Home from "../Shop/Home.vue";
import Man_Detail from "../Shop/Man/Man_Detail.vue";
import Woman_Detail from "../Shop/Woman/Woman_Detail.vue";
import Kids_Detail from "../Shop/Kids/Kids_Detail.vue";
import Brands_Detail from "../Shop/Brands/Brands_Detail.vue";
import Accesory_Detail from "../Shop/Accesory/Accesory_Detail.vue";
import Sales_Detail from "../Shop/Sales/Sales_Detail.vue";
import Man from "../Shop/Man/Man.vue";
import Woman from "../Shop/Woman/Woman.vue";
import Kids from "../Shop/Kids/Kids.vue";
import Brands from "../Shop/Brands/Brands.vue";
import Accesories from "../Shop/Accesory/Accesories.vue";
import Sals from "../Shop/Sales/Sals.vue";




const routes =[
    {
        path:'/',
        component:Home
    },
    {
        path:'/man',
        component:Man
    },
    {
        path:'/woman',
        component:Woman
    },
    {
        path:'/kids',
        component:Kids
    },
    {
        path:'/brands',
        component:Brands
    },
    {
        path:'/accesory',
        component:Accesories
    },
    {
        path:'/sales',
        component:Sals
    },
    {
        path:'/manD:id',
        component:Man_Detail
    },
    {
        path:'/womanD:id',
        component:Woman_Detail
    },
    {
        path:'/kidD:id',
        component:Kids_Detail
    },
    {
        path:'/brandD:id',
        component:Brands_Detail
    },
    {
        path:'/accesoryD:id',
        component:Accesory_Detail
    },
    {
        path:'/SaleD:id',
        component:Sales_Detail
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;