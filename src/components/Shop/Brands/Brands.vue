<template>
    <div>
        <div v-for="item in Brands_Type">
            <p>{{ item.id }}</p>
            <p>{{ item.name }}</p>
            <p>{{ item.country }}</p>
            <p>{{ item.featured }}</p>
            <p>{{ item.categories }}</p>
            <p>{{ item.slug }}</p>
            <p>{{ item.logoUrl }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Brands_Type } from '../../../data/Brands';


</script>

<style lang="scss" scoped>

</style>