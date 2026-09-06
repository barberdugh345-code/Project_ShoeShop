<template>
    <div>
        <div v-for="item  in Woman_Type">
            <p>{{ item.id }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.brand }}</p>
            <p>{{ item.category }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.images }}</p>
            <p>{{ item.sizes }}</p>
            <p>{{ item.inStock }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Woman_Type } from '../../../data/Woman';


</script>

<style lang="scss" scoped>

</style>