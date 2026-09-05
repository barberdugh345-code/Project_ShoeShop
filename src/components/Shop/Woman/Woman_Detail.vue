<template>
    <div>
        <div v-if="Woman">
            <div>
                <img :src="Woman.images.img" alt="">
                <img :src="Woman.images.img1" alt="">
                <img :src="Woman.images.img2" alt="">
            </div>
            <div>
                <h1>{{ Woman.title }}</h1>
                <h1>{{ Woman.brand }}</h1>
                <h1>{{ Woman.category }}</h1>
                <h1>{{ Woman.price }}</h1>
                <h1>{{ Woman.sizes }}</h1>
                <h1>{{ Woman.inStock }}</h1>
            </div>
            <div else>
            404 Not Found!
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Woman_Type } from '../../../Data/Woman';
import { ref, watchEffect } from 'vue';



const route =useRoute();
const WomanId = parseInt(route.params.id as string)
const Woman = Woman_Type.find(won => won.id ==WomanId)

const activeImage = ref<string>('')

watchEffect(()=>{
    if(Woman?.images?.img){
        activeImage.value = Woman.images.img
    }
})
</script>

<style lang="scss" scoped>

</style >