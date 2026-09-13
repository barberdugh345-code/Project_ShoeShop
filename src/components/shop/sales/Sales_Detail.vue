<template>
  <div class="min-h-screen bg-white">
    <div v-if="sal" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- Breadcrumb -->
      <div class="mb-6 text-sm text-gray-500">
        <router-link to="/sales" class="hover:text-black transition">Sale</router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">{{ sal.title }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        <!-- ================= LEFT: IMAGES ================= -->
        <div>
          <!-- Main Image -->
          <div class="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-4">
            <img
              :src="activeImage"
              :alt="sal.title"
              class="w-full h-full object-cover object-center transition-all duration-300"
            />

            <!-- Discount Badge -->
            <div class="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow">
              {{ sal.discountPercent }}% OFF
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-3">
            <button
              v-for="(img, index) in images"
              :key="index"
              @click="activeImage = img"
              class="w-20 h-20 rounded-xl overflow-hidden border-2 transition"
              :class="activeImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'"
            >
              <img :src="img" :alt="`Image ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- ================= RIGHT: INFO ================= -->
        <div class="flex flex-col">

          <!-- Brand -->
          <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {{ sal.brand }}
          </p>

          <!-- Title -->
          <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {{ sal.title }}
          </h1>

          <!-- Badge -->
          <div class="mb-5" v-if="sal.badge">
            <span class="text-sm bg-black text-white px-3 py-1 rounded-full font-medium uppercase">
              {{ sal.badge }}
            </span>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-3 mb-6">
            <span class="text-3xl font-extrabold text-red-600">
              ${{ Number(sal.salePrice).toFixed(2) }}
            </span>
            <span class="text-xl text-gray-400 line-through">
              ${{ Number(sal.originalPrice).toFixed(2) }}
            </span>
            <span class="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              Save {{ sal.discountPercent }}%
            </span>
          </div>

          <!-- Stock Status -->
          <div class="mb-8">
            <span
              class="inline-flex items-center gap-2 text-sm font-semibold"
              :class="sal.inStock ? 'text-green-600' : 'text-red-600'"
            >
              <span
                class="w-2.5 h-2.5 rounded-full"
                :class="sal.inStock ? 'bg-green-500' : 'bg-red-500'"
              ></span>
              {{ sal.inStock ? 'In Stock' : 'Out of Stock' }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-gray-600 leading-relaxed mb-8">
            Special sale offer on {{ sal.title }} from {{ sal.brand }}. 
            Limited time discount — grab it before it’s gone!
          </p>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
              :disabled="!sal.inStock"
              @click="handleAddToCart"
              class="flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-wide transition"
              :class="sal.inStock
                ? 'bg-red-600 text-white hover:bg-black'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
            >
              {{ sal.inStock ? 'Add to Bag' : 'Sold Out' }}
            </button>

            <router-link
              to="/sales"
              class="flex-1 py-4 px-6 rounded-xl border border-gray-300 text-center font-bold uppercase tracking-wide text-gray-700 hover:bg-gray-50 transition"
            >
              Back to Sale
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 404 State -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl mb-4">
        ?
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
      <p class="text-gray-500 mb-6">Sorry, we couldn’t find this sale item.</p>
      <router-link
        to="/sales"
        class="px-6 py-3 bg-black text-white text-sm font-bold uppercase rounded-lg hover:bg-red-600 transition"
      >
        Back to Sale
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed, watchEffect } from 'vue';
import { ForSales_Type } from '../../../data/Sales';
import { useCart } from '../../../composables/useCart';

const route = useRoute();
const { addToCart } = useCart();

const saleId = Number(route.params.id);
const sal = ForSales_Type.find(item => item.id === saleId);

const activeImage = ref('');

const images = computed(() => {
  if (!sal?.imageUrl) return [];
  return [
    sal.imageUrl.img,
    sal.imageUrl.img1,
    sal.imageUrl.img2
  ].filter(Boolean);
});

watchEffect(() => {
  if (sal?.imageUrl?.img) {
    activeImage.value = sal.imageUrl.img;
  }
});

function handleAddToCart() {
  if (!sal || !sal.inStock) return;

  addToCart({
    id: `sale-${sal.id}`,
    title: sal.title,
    brand: sal.brand,
    price: Number(sal.salePrice),
    image: sal.imageUrl.img,
    type: 'Sale'
  });
}
</script>