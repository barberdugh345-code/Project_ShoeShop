<template>
  <div class="min-h-screen bg-white">
    <div v-if="kid" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- Breadcrumb -->
      <div class="mb-6 text-sm text-gray-500">
        <router-link to="/kids" class="hover:text-black transition">Kids</router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">{{ kid.title }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        <!-- ================= LEFT: IMAGES ================= -->
        <div>
          <!-- Main Image -->
          <div class="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-4">
            <img
              :src="activeImage"
              :alt="kid.title"
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
            {{ kid.brand }}
          </p>

          <!-- Title -->
          <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            {{ kid.title }}
          </h1>

          <!-- Category -->
          <div class="mb-5">
            <span class="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
              {{ kid.category }}
            </span>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <span class="text-3xl font-extrabold text-gray-900">
              ${{ Number(kid.price).toFixed(2) }}
            </span>
          </div>

          <!-- Stock Status -->
          <div class="mb-6">
            <span
              class="inline-flex items-center gap-2 text-sm font-semibold"
              :class="kid.inStock ? 'text-green-600' : 'text-red-600'"
            >
              <span
                class="w-2.5 h-2.5 rounded-full"
                :class="kid.inStock ? 'bg-green-500' : 'bg-red-500'"
              ></span>
              {{ kid.inStock ? 'In Stock' : 'Out of Stock' }}
            </span>
          </div>

          <!-- Available Sizes -->
          <div v-if="kid.sizes && kid.sizes.length" class="mb-8">
            <p class="text-sm font-semibold text-gray-700 mb-3">Available Sizes</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="size in kid.sizes"
                :key="size"
                class="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg text-sm font-medium hover:border-black cursor-pointer transition"
              >
                {{ size }}
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-600 leading-relaxed mb-8">
            Durable and comfortable {{ kid.category.toLowerCase() }} shoes from {{ kid.brand }}, 
            designed especially for active kids. Perfect for everyday wear and play.
          </p>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
              :disabled="!kid.inStock"
              @click="handleAddToCart"
              class="flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-wide transition"
              :class="kid.inStock
                ? 'bg-black text-white hover:bg-red-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
            >
              {{ kid.inStock ? 'Add to Bag' : 'Sold Out' }}
            </button>

            <router-link
              to="/kids"
              class="flex-1 py-4 px-6 rounded-xl border border-gray-300 text-center font-bold uppercase tracking-wide text-gray-700 hover:bg-gray-50 transition"
            >
              Back to Kids
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
      <p class="text-gray-500 mb-6">Sorry, we couldn’t find this kids product.</p>
      <router-link
        to="/kids"
        class="px-6 py-3 bg-black text-white text-sm font-bold uppercase rounded-lg hover:bg-red-600 transition"
      >
        Back to Kids
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed, watchEffect } from 'vue';
import { Kids_Types } from '../../../data/Kids';
import { useCart } from '../../../composables/useCart';

const route = useRoute();
const { addToCart } = useCart();

const kidId = Number(route.params.id);
const kid = Kids_Types.find(item => item.id === kidId);

const activeImage = ref('');

const images = computed(() => {
  if (!kid?.images) return [];
  return [
    kid.images.img,
    kid.images.img1,
    kid.images.img2
  ].filter(Boolean);
});

watchEffect(() => {
  if (kid?.images?.img) {
    activeImage.value = kid.images.img;
  }
});

function handleAddToCart() {
  if (!kid || !kid.inStock) return;

  addToCart({
    id: `kids-${kid.id}`,
    title: kid.title,
    brand: kid.brand,
    price: Number(kid.price),
    image: kid.images.img,
    type: 'Kids'
  });
}
</script>