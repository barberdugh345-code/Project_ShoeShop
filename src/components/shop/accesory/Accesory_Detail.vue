<template>
  <div class="min-h-screen bg-white">
    <div v-if="Acc" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- Breadcrumb -->
      <div class="mb-6 text-sm text-gray-500">
        <router-link to="/accesory" class="hover:text-black transition">Accessories</router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">{{ Acc.title }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        <!-- ================= LEFT: IMAGES ================= -->
        <div>
          <!-- Main Image -->
          <div class="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-4">
            <img
              :src="activeImage"
              :alt="Acc.title"
              class="w-full h-full object-cover object-center transition-all duration-300"
            />
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
            {{ Acc.brand }}
          </p>

          <!-- Title -->
          <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            {{ Acc.title }}
          </h1>

          <!-- Category + Featured -->
          <div class="flex items-center gap-3 mb-6">
            <span class="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
              {{ Acc.category }}
            </span>
            <span
              v-if="Acc.featured"
              class="text-sm bg-black text-white px-3 py-1 rounded-full font-medium"
            >
              Featured
            </span>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <span class="text-3xl font-extrabold text-gray-900">
              ${{ Number(Acc.price).toFixed(2) }}
            </span>
          </div>

          <!-- Stock Status -->
          <div class="mb-8">
            <span
              class="inline-flex items-center gap-2 text-sm font-semibold"
              :class="Acc.inStock ? 'text-green-600' : 'text-red-600'"
            >
              <span
                class="w-2.5 h-2.5 rounded-full"
                :class="Acc.inStock ? 'bg-green-500' : 'bg-red-500'"
              ></span>
              {{ Acc.inStock ? 'In Stock' : 'Out of Stock' }}
            </span>
          </div>

          <!-- Description (placeholder) -->
          <p class="text-gray-600 leading-relaxed mb-8">
            Premium quality {{ Acc.category.toLowerCase() }} from {{ Acc.brand }}. 
            Designed to complement your footwear collection with style and durability.
          </p>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
              :disabled="!Acc.inStock"
              @click="handleAddToCart"
              class="flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-wide transition"
              :class="Acc.inStock
                ? 'bg-black text-white hover:bg-red-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
            >
              {{ Acc.inStock ? 'Add to Bag' : 'Sold Out' }}
            </button>

            <router-link
              to="/accesory"
              class="flex-1 py-4 px-6 rounded-xl border border-gray-300 text-center font-bold uppercase tracking-wide text-gray-700 hover:bg-gray-50 transition"
            >
              Back to Accessories
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 404 State -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
      <p class="text-gray-500 mb-6">Sorry, we couldn’t find this accessory.</p>
      <router-link
        to="/accesory"
        class="px-6 py-3 bg-black text-white text-sm font-bold uppercase rounded-lg hover:bg-red-600 transition"
      >
        Back to Accessories
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { Accessories } from '../../../data/Accesories';
import { useCart } from '../../../composables/useCart';

const route = useRoute();
const { addToCart } = useCart();

// Get product by id from URL
const accId = Number(route.params.id);
const Acc = Accessories.find(item => item.id === accId);

// Image gallery
const activeImage = ref('');

const images = computed(() => {
  if (!Acc?.imageUrl) return [];
  return [
    Acc.imageUrl.img,
    Acc.imageUrl.img1,
    Acc.imageUrl.img2
  ].filter(Boolean);
});

watchEffect(() => {
  if (Acc?.imageUrl?.img) {
    activeImage.value = Acc.imageUrl.img;
  }
});

// Add to cart
function handleAddToCart() {
  if (!Acc || !Acc.inStock) return;

  addToCart({
    id: `acc-${Acc.id}`,
    title: Acc.title,
    brand: Acc.brand,
    price: Number(Acc.price),
    image: Acc.imageUrl.img,
    type: 'Accessories'
  });
}
</script>