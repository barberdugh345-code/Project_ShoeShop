<template>
  <div class="min-h-screen bg-white">
    <div v-if="brand" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- Breadcrumb -->
      <div class="mb-8 text-sm text-gray-500">
        <router-link to="/brands" class="hover:text-black transition">Brands</router-link>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">{{ brand.name }}</span>
      </div>

      <!-- Brand Header -->
      <div class="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
        
        <!-- Logo -->
        <div class="w-48 h-48 md:w-56 md:h-56 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
          <img
            :src="brand.logoUrl?.logo || fallbackImage"
            :alt="brand.name"
            class="w-full h-full object-cover"
            @error="onImageError"
          />
        </div>

        <!-- Info -->
        <div class="text-center md:text-left flex-1">
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
            <h1 class="text-4xl font-extrabold uppercase tracking-tight text-gray-900">
              {{ brand.name }}
            </h1>
            <span
              v-if="brand.featured"
              class="bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
            >
              Featured
            </span>
          </div>

          <p class="text-gray-500 text-lg mb-5">
            Established in <span class="font-semibold text-gray-800">{{ brand.country }}</span>
          </p>

          <!-- Categories -->
          <div class="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            <span
              v-for="(cat, index) in formatCategories(brand.categories)"
              :key="index"
              class="text-sm font-medium bg-gray-100 text-gray-700 px-3.5 py-1.5 rounded-full"
            >
              {{ cat }}
            </span>
          </div>

          <p class="text-sm text-gray-400">
            Slug: <span class="font-mono text-gray-600">{{ brand.slug }}</span>
          </p>
        </div>
      </div>

      <!-- About Section -->
      <div class="bg-gray-50 rounded-2xl p-8 mb-10">
        <h2 class="text-xl font-bold text-gray-900 mb-3">About {{ brand.name }}</h2>
        <p class="text-gray-600 leading-relaxed">
          Discover the official collection of {{ brand.name }} footwear available at Famous Footwear.
          From performance running and training to lifestyle and street styles, explore the best products 
          from this iconic brand founded in {{ brand.country }}.
        </p>
      </div>

      <!-- Categories Detail -->
      <div class="mb-12">
        <h3 class="text-lg font-bold text-gray-900 mb-4">Available Categories</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div
            v-for="(cat, index) in formatCategories(brand.categories)"
            :key="index"
            class="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-black transition"
          >
            <span class="font-semibold text-gray-800">{{ cat }}</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/brands"
          class="px-8 py-3.5 bg-black text-white text-sm font-bold uppercase rounded-xl hover:bg-red-600 transition text-center"
        >
          ← Back to All Brands
        </router-link>
      </div>
    </div>

    <!-- 404 State -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl mb-4">
        ?
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Brand Not Found</h2>
      <p class="text-gray-500 mb-6">Sorry, we couldn’t find this brand.</p>
      <router-link
        to="/brands"
        class="px-6 py-3 bg-black text-white text-sm font-bold uppercase rounded-lg hover:bg-red-600 transition"
      >
        Back to Brands
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { BRANDS_DATA, type ShoeBrand, type Category } from '../../../data/Brands';

const route = useRoute();
const brandId = Number(route.params.id);

const brand = BRANDS_DATA.find((br: ShoeBrand) => br.id === brandId);

const fallbackImage = 'https://via.placeholder.com/400x400/f5f5f5/999999?text=Brand';

const formatCategories = (categories: Category[] | string): string[] => {
  if (Array.isArray(categories)) return categories;
  if (typeof categories === 'string') return categories.split(',').map(c => c.trim());
  return [];
};

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = fallbackImage;
};
</script>