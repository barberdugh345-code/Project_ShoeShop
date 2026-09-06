
import { createRouter,createWebHistory } from "vue-router";
import Home from "../shop/Home.vue";
import Man from "../shop/man/Man.vue";
import Woman from "../shop/women/Woman.vue";
import Kids from "../shop/kids/Kids.vue";
import Brands from "../shop/brands/Brands.vue";
import Accesories from "../shop/accesory/Accesories.vue";
import Sales from "../shop/sales/Sales.vue";
import Man_Detail from "../shop/man/Man_Detail.vue";
import Woman_Detail from "../shop/women/Woman_Detail.vue";
import Kids_Detail from "../shop/kids/Kids_Detail.vue";
import Brands_Detail from "../shop/brands/Brands_Detail.vue";
import Accesory_Detail from "../shop/accesory/Accesory_Detail.vue";
import Sales_Detail from "../shop/sales/Sales_Detail.vue";


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
        component:Sales
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