<template>
  <div class="relative">
    <!-- Desktop & Tablet Search -->
    <div class="hidden md:flex flex-1 max-w-[220px] lg:max-w-xs xl:max-w-sm mx-2 lg:mx-4 relative">
      <div class="relative w-full">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search shoes, brands..."
          class="w-full h-9 lg:h-10 pl-10 pr-4 rounded-full border border-gray-300 bg-gray-50 text-sm outline-none focus:border-black focus:bg-white transition"
        />
        <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      <!-- Live Search Results (NO IMAGE) -->
      <div v-if="searchQuery.trim().length > 0" class="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto z-50">
        <div v-if="liveResults.length === 0" class="p-4 text-center text-sm text-gray-500">
          No products found.
        </div>
        <div v-else class="divide-y divide-gray-100">
          <router-link
            v-for="item in liveResults"
            :key="item.id + item.section"
            :to="`/${item.section.toLowerCase()}`"
            @click="searchQuery = ''"
            class="block px-4 py-3 hover:bg-gray-50 transition text-left"
          >
            <p class="text-[10px] font-bold uppercase text-red-600 mb-0.5">{{ item.section }}</p>
            <p class="text-sm font-bold text-gray-900 truncate">{{ item.title }}</p>
            <p class="text-xs font-extrabold text-gray-700 mt-0.5">${{ Number(item.finalPrice).toFixed(2) }}</p>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Search Icon -->
    <button
      @click="mobileSearchOpen = !mobileSearchOpen"
      class="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition text-gray-700"
      aria-label="Toggle Search"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </button>

    <!-- Mobile Search Bar -->
    <div v-if="mobileSearchOpen" class="md:hidden absolute top-full left-0 right-0 px-4 pb-3 pt-1 bg-white border-b border-gray-200 z-50">
      <div class="relative w-full">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search shoes, brands..."
          class="w-full h-10 pl-10 pr-4 rounded-full border border-gray-300 bg-gray-50 text-sm outline-none focus:border-black focus:bg-white transition"
        />
        <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      <!-- Mobile Search Results (NO IMAGE) -->
      <div v-if="searchQuery.trim().length > 0" class="mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-72 overflow-y-auto">
        <div v-if="liveResults.length === 0" class="p-4 text-center text-sm text-gray-500">
          No products found.
        </div>
        <div v-else class="divide-y divide-gray-100">
          <router-link
            v-for="item in liveResults"
            :key="item.id + item.section"
            :to="`/${item.section.toLowerCase()}`"
            @click="() => { searchQuery = ''; mobileSearchOpen = false; }"
            class="block px-4 py-3 hover:bg-gray-50 transition text-left"
          >
            <p class="text-[10px] font-bold uppercase text-red-600 mb-0.5">{{ item.section }}</p>
            <p class="text-sm font-bold text-gray-900 truncate">{{ item.title }}</p>
            <p class="text-xs font-extrabold text-gray-700 mt-0.5">${{ Number(item.finalPrice).toFixed(2) }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Man_Type } from '../../data/Man';
import { Woman_Type } from '../../data/Woman';
import { Kids_Types } from '../../data/Kids';
import { Accessories } from '../../data/Accesories';
import { ForSales_Type } from '../../data/Sales';

const searchQuery = ref('');
const mobileSearchOpen = ref(false);

const allProducts = computed(() => {
  return [
    ...Man_Type.map(item => ({ ...item, section: 'Men', finalPrice: Number(item.price) })),
    ...Woman_Type.map(item => ({ ...item, section: 'Women', finalPrice: Number(item.price) })),
    ...Kids_Types.map(item => ({ ...item, section: 'Kids', finalPrice: Number(item.price) })),
    ...Accessories.map(item => ({ ...item, section: 'Accessories', finalPrice: Number(item.price) })),
    ...ForSales_Type.map(item => ({
      ...item,
      section: 'Sales',
      finalPrice: Number(item.salePrice || item.originalPrice || 0),
    })),
  ];
});

const liveResults = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return [];
  return allProducts.value
    .filter(item => {
      const title = item.title?.toLowerCase() || '';
      const brand = item.brand?.toLowerCase() || '';
      return title.includes(q) || brand.includes(q);
    })
    .slice(0, 5);
});
</script>