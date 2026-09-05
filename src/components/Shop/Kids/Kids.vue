<template>
    <div>
        <div v-for="item in Kids_Types" :key="item.id">
            <p>{{ item.id }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.category }}</p>
            <p>{{ item.images }}</p>
            <p>{{ item.sizes }}</p>
            <p>{{ item.inStock }}</p>
        </div>
        
    </div>
</template>

<script setup lang="ts">

import { Kids_Types } from '../../../Data/Kids';
</script>

<style lang="scss" scoped>

</style>