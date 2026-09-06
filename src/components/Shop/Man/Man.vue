<template>
    <div>
        <div v-for="item in Man_Type" :key="item.id">
            <p>{{ item.id }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.brand }}</p>
            <p>{{ item.category }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.imageUrl }}</p>
            <p>{{ item.inStock }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Man_Type } from '../../../Data/Man';


</script>

<style lang="scss" scoped>

</style>