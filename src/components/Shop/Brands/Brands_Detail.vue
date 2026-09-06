<template>
    <div>
        <div v-if="brand">
            <img :src="brand.logoUrl.logo" alt="">
        </div>
        <div>
            <h1>{{ brand?.name }}</h1>
            <h1>{{ brand?.country }}</h1>
            <h1>{{ brand?.categories }}</h1>
            <h1>{{ brand?.featured }}</h1>
            <h1>{{ brand?.slug }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Brands_Type } from '../../../data/Brands';
import { ref, watchEffect } from 'vue';


const route = useRoute();
const brandid = parseInt(route.params.id as string)
const brand = Brands_Type.find(br => br.id == brandid)

const activeImage = ref('')
watchEffect(()=>{
    if(brand?.logoUrl.logo){
    activeImage.value=brand?.logoUrl.logo  
    }
    
})
</script>

<style lang="scss" scoped>

</style>