<template>
    <div>
        <div v-if="kid">
            <img :src="kid.images.img" alt="">
            <img :src="kid.images.img1" alt="">
            <img :src="kid.images.img2" alt="">
        </div>
        <div>
            <h1>{{ kid?.title }}</h1>
            <h1>{{ kid?.brand }}</h1>
            <h1>{{ kid?.category }}</h1>
            <h1>{{ kid?.price }}</h1>
            <h1>{{ kid?.sizes }}</h1>
            <h1>{{ kid?.inStock }}</h1>
        </div>
        <div else>
            404 Not Found!
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Kids_Types } from '../../../data/Kids';
import { ref, watchEffect } from 'vue';



const route = useRoute();
const kidId = parseInt(route.params.id as string)
const kid = Kids_Types.find(kid => kid.id == kidId)

const activeImage = ref("")

watchEffect(()=>{
    if(kid?.images?.img){
        activeImage.value=kid.images.img
    }
})
</script>

<style lang="scss" scoped>

</style>