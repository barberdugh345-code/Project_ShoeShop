<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

      <header class="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-2">
          Shop by Brand
        </h1>
        <p class="text-gray-500 text-sm sm:text-base">
          Explore top footwear brands from around the world.
        </p>
      </header>

      <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center border-b border-gray-200 pb-4 mb-6 gap-3 sm:gap-4">
        <div class="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left">
          Showing
          <span class="font-bold text-gray-900">{{ filteredBrands.length }}</span>
          brands
        </div>

        <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4">
          <select
            v-model="selectedCategory"
            class="w-full sm:w-auto bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-md focus:ring-black focus:border-black p-2 sm:p-2.5 outline-none"
          >
            <option value="All">All Categories</option>
            <option v-for="cat in allCategories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>

          <select
            v-model="filterType"
            class="w-full sm:w-auto bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-md focus:ring-black focus:border-black p-2 sm:p-2.5 outline-none"
          >
            <option value="all">All Brands</option>
            <option value="featured">Featured Only</option>
          </select>
        </div>
      </div>

      <div v-if="filteredBrands.length === 0" class="text-center py-16">
        <p class="text-gray-500 text-base mb-4">No brands found.</p>
        <button
          @click="resetFilters"
          class="px-5 py-2.5 bg-black text-white text-xs font-bold rounded-lg hover:bg-gray-800 transition"
        >
          Reset Filters
        </button>
      </div>

      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
        <div
          v-for="brand in filteredBrands"
          :key="brand.id"
          class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
          <div class="relative w-full aspect-square bg-gray-50 overflow-hidden">
            <img
              :src="brand.logoUrl.logo"
              :alt="brand.name"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <span
              v-if="brand.featured"
              class="absolute top-2 left-2 bg-black text-white text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded"
            >
              Featured
            </span>
          </div>

          <div class="p-3 sm:p-4 flex flex-col flex-grow">
            <h3 class="text-sm sm:text-base font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">
              {{ brand.name }}
            </h3>
            <p class="text-[10px] sm:text-xs text-gray-400 mt-0.5 mb-2">
              {{ brand.country }}
            </p>

            <div class="flex flex-wrap gap-1 mb-3">
              <span
                v-for="cat in brand.categories.slice(0, 3)"
                :key="cat"
                class="text-[9px] sm:text-[10px] font-medium bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
              >
                {{ cat }}
              </span>
              <span
                v-if="brand.categories.length > 3"
                class="text-[9px] sm:text-[10px] font-medium text-gray-400"
              >
                +{{ brand.categories.length - 3 }}
              </span>
            </div>

            <!-- ONLY ONE BUTTON -->
            <div class="mt-auto pt-2 border-t border-gray-100">
              <router-link
                :to="`/brandD/${brand.id}`"
                class="block w-full text-center py-2 text-[11px] sm:text-xs font-bold uppercase rounded-lg border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition"
              >
                View Brand
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { BRANDS_DATA, type Category } from '../../../data/Brands';

const selectedCategory = ref('All');
const filterType = ref('all');

const allCategories = computed(() => {
  const set = new Set<string>();
  BRANDS_DATA.forEach(brand => {
    brand.categories.forEach(cat => set.add(cat));
  });
  return Array.from(set).sort();
});

const filteredBrands = computed(() => {
  let result = [...BRANDS_DATA];

  if (filterType.value === 'featured') {
    result = result.filter(b => b.featured);
  }

  if (selectedCategory.value !== 'All') {
    result = result.filter(b =>
      b.categories.includes(selectedCategory.value as Category)
    );
  }

  result.sort((a, b) => Number(b.featured) - Number(a.featured));
  return result;
});

const resetFilters = () => {
  selectedCategory.value = 'All';
  filterType.value = 'all';
};
</script>