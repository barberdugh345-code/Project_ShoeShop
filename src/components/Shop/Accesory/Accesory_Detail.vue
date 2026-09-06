<template>
    <div>
        <div v-if="Acc">
            <img :src="Acc.imageUrl.img" alt="">
            <img :src="Acc.imageUrl.img1" alt="">
            <img :src="Acc.imageUrl.img2" alt="">
        </div>
        <div>
            <h1>{{ Acc?.title }}</h1>
            <h1>{{ Acc?.brand }}</h1>
            <h1>{{ Acc?.category }}</h1>
            <h1>{{ Acc?.featured }}</h1>
            <h1>{{ Acc?.price }}</h1>
            <h1>{{ Acc?.inStock }}</h1>
        </div>
        <div else>
            404 Not Found!
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { Accesories } from '../../../data/Accesories';



const route = useRoute();
const accId = parseInt(route.params.id as string)
const Acc = Accesories.find(acc => acc.id == accId)

const activeImage = ref<string>()

watchEffect(()=>{
    if(Acc?.imageUrl?.img){
        activeImage.value=Acc.imageUrl.img
    }
})

</script>

<style lang="scss" scoped>

</style>