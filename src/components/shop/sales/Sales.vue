<template>
    <div>
        <div v-for="item in ForSales_Type" :key="item.id">
            <p>{{  item.id}}</p>
            <p>{{  item.title}}</p>
            <p>{{  item.brand}}</p>
            <p>{{  item.originalPrice}}</p>
            <p>{{  item.salePrice}}</p>
            <p>{{  item.discountPercent}}</p>
            <p>{{  item.imageUrl}}</p>
            <p>{{  item.inStock}}</p>
            <p>{{  item.badge}}</p>
        </div>

        <div v-for="item in Promo_Type" :key="item.id">
            <p>{{ item.id }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.discountPercent }}</p>
            <p>{{ item.promoCode }}</p>
            <p>{{ item.category }}</p>
            <p>{{ item.promoTag }}</p>
            <p>{{ item.imageUrl.img }}</p>
            <p>{{ item.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ForSales_Type, Promo_Type } from '../../../data/Sales';


</script>

<style lang="scss" scoped>

</style>