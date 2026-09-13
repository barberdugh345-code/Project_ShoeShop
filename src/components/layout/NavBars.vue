<template>
  <header class="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
    <!-- Announcement Bar -->
    <div class="bg-black text-white text-center py-2 px-4 text-[11px] md:text-xs font-bold tracking-wide">
      FREE SHIPPING ON ORDERS OVER $75 &nbsp;|&nbsp; NEW SEASON. NEW ENERGY.
    </div>

    <!-- Main Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="h-16 md:h-20 flex items-center justify-between gap-4">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0">
          <div class="flex flex-col leading-none">
            <span class="text-xl md:text-2xl font-black tracking-tight text-gray-900">FAMOUS</span>
            <span class="text-[10px] md:text-xs font-bold tracking-[0.2em] text-red-600">FOOTWEAR</span>
          </div>
        </router-link>

        <!-- Desktop Nav Links -->
        <nav class="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
          <router-link to="/" class="hover:text-red-600 transition">Home</router-link>
          <router-link to="/man" class="hover:text-red-600 transition">Men</router-link>
          <router-link to="/woman" class="hover:text-red-600 transition">Women</router-link>
          <router-link to="/kids" class="hover:text-red-600 transition">Kids</router-link>
          <router-link to="/accesories" class="hover:text-red-600 transition">Accessories</router-link>
          <router-link to="/brands" class="hover:text-red-600 transition">Brands</router-link>
          <router-link to="/sales" class="text-red-600 hover:text-red-700 transition">Sale</router-link>
        </nav>

        <!-- Search with Live Dropdown -->
        <div class="hidden md:flex flex-1 max-w-xs lg:max-w-sm mx-4 relative">
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

          <!-- Live Search Results Dropdown -->
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
                class="flex items-center gap-3 p-3 hover:bg-gray-50 transition text-left"
              >
                <img :src="getProductImg(item.brand || item.title)" class="w-12 h-12 object-cover rounded-lg bg-gray-100 flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <p class="text-[10px] font-bold uppercase text-red-600">{{ item.section }}</p>
                  <p class="text-xs font-bold text-gray-900 truncate">{{ item.title }}</p>
                  <p class="text-xs font-extrabold text-gray-700">${{ Number(item.finalPrice).toFixed(2) }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Right Actions -->
        <!-- Right Actions -->
        <div class="flex items-center gap-2 md:gap-3">
          <template v-if="!isLoggedIn">
            <router-link to="/login" class="hidden sm:inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-wide border border-gray-300 rounded-lg hover:border-black transition">
              Login
            </router-link>
            <router-link to="/signup" class="hidden sm:inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-black text-white rounded-lg hover:bg-red-600 transition">
              Sign Up
            </router-link>
          </template>

          <router-link v-else to="/account" class="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wide border border-gray-300 rounded-lg hover:border-black transition">
            <span class="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-black text-white flex items-center justify-center text-[10px] font-black">
              {{ userInitials }}
            </span>
            Account
          </router-link>

          <router-link to="/cart" class="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
            <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span v-if="cartCount > 0" class="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {{ cartCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Man_Type } from '../../data/Man';
import { Woman_Type } from '../../data/Woman';
import { Kids_Types } from '../../data/Kids';
import { Accessories } from '../../data/Accesories';
import { ForSales_Type } from '../../data/Sales';

const searchQuery = ref('');
const cartCount = ref(0);

const getProductImg = (imgSource: any): string => {
  const fallback = 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80';
  if (!imgSource) return fallback;
  if (typeof imgSource === 'string') return imgSource;
  if (Array.isArray(imgSource) && imgSource.length > 0) return imgSource[0];
  if (typeof imgSource === 'object') {
    return imgSource.img || imgSource.img1 || (Object.values(imgSource)[0] as string) || fallback;
  }
  return fallback;
};

const allProducts = computed(() => {
  return [
    ...Man_Type.map(item => ({ ...item, section: 'Men', finalPrice: Number(item.price) })),
    ...Woman_Type.map(item => ({ ...item, section: 'Women', finalPrice: Number(item.price) })),
    ...Kids_Types.map(item => ({ ...item, section: 'Kids', finalPrice: Number(item.price) })),
    ...Accessories.map(item => ({ ...item, section: 'Accessories', finalPrice: Number(item.price) })),
    ...ForSales_Type.map(item => ({ ...item, section: 'Sale', finalPrice: Number(item.salePrice || item.originalPrice || item.salePrice) })),
  ];
});

const liveResults = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return [];
  return allProducts.value.filter(item => {
    const title = item.title?.toLowerCase() || '';
    const brand = item.brand?.toLowerCase() || '';
    return title.includes(q) || brand.includes(q);
  }).slice(0, 5); // Limits to top 5 results in the dropdown
});
</script>