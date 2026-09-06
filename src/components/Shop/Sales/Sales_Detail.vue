<template>
    <div>
        <div>
            <div v-if="sal">
                <img :src="sal.imageUrl.img" alt="">
                <img :src="sal.imageUrl.img1" alt="">
                <img :src="sal.imageUrl.img2" alt="">
            </div>
            <div>
                <h1>{{ sal?.title }}</h1>
                <h1>{{ sal?.brand }}</h1>
                <h1>{{ sal?.originalPrice }}</h1>
                <h1>{{ sal?.salePrice }}</h1>
                <h1>{{ sal?.discountPercent }}</h1>
                <h1>{{ sal?.badge }}</h1>
                <h1>{{ sal?.inStock }}</h1>
            </div>
            <div else>
                404 Not Found!
            </div>
        </div>
        <div>
            <div v-if="pro">
                <h1>
                    <img :src="pro.bannerUrl" alt="">
                </h1>
                <div>
                    <h1>{{ pro.title }}</h1>
                    <h1>{{ pro.description }}</h1>
                    <h1>{{ pro.category }}</h1>
                    <h1>{{ pro.discount }}</h1>
                    <h1>{{ pro.code }}</h1>
                    <h1>{{ pro.badge }}</h1>
                    <h1>{{ pro.active }}</h1>
                </div>
                <div else>
                    404 Not Found!
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ForSales_Type, Promo_Type } from '../../../data/Sales';
import { watchEffect } from 'vue';
import { ref } from 'vue';


const route=useRoute()
const forSaleId = parseInt(route.params.id as string)
const forProId = parseInt(route.params.id as string)

const sal = ForSales_Type.find(forS => forS.id == forSaleId)
const pro = Promo_Type.find(forP=>forP.id ==forProId )

const activeImage = ref('')
watchEffect(()=>{
    if(sal?.imageUrl.img){
        activeImage.value = sal.imageUrl.img
    }
})

const activeImage1 = ref('')
watchEffect(()=>{
    if(pro?.bannerUrl){
        activeImage1.value = pro.bannerUrl
    }
})

</script>

<style lang="scss" scoped>

</style>