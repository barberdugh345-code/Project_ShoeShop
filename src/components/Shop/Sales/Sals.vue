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
            <p>{{ item.discount }}</p>
            <p>{{ item.code }}</p>
            <p>{{ item.category }}</p>
            <p>{{ item.badge }}</p>
            <p>{{ item.bannerUrl }}</p>
            <p>{{ item.description }}</p>
            <p>{{ item.active }}</p>
        </div>
    </div>
</template>

<script setup>
import { ForSales_Type, Promo_Type } from '../../../Data/Sales';


</script>

<style lang="scss" scoped>

</style>