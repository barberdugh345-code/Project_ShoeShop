<template>
    <div>
        <div v-if="man">
            <img :src="man.imageUrl.img" alt="">
            <img :src="man.imageUrl.img1" alt="">
            <img :src="man.imageUrl.img2" alt="">
        </div>
        <div>
            <h1>{{ man?.title }}</h1>
            <h1>{{ man?.brand }}</h1>
            <h1>{{ man?.category }}</h1>
            <h1>{{ man?.price }}</h1>
            <h1>{{ man?.sizes }}</h1>
            <h1>{{ man?.inStock }}</h1>
        </div>
        <div else>
            404 Not Found!
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Man_Type } from '../../../Data/Man';
import { ref, watchEffect } from 'vue';


const route = useRoute();
const manId = parseInt(route.params.id as string)
const man = Man_Type.find(mn => mn.id == manId)

const activeImage = ref('')

watchEffect(()=>{
    if(man?.imageUrl?.img){
        activeImage.value=man.imageUrl.img
    }
})
</script>

<style lang="scss" scoped>

</style>