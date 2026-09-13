<template>
  <div class="category-page min-h-screen bg-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <!-- Page Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-2">
          Our Brands
        </h1>
        <p class="text-gray-500 text-base">
          Explore our complete collection of top footwear brands.
        </p>
      </header>

      <!-- Filter & Sort Bar -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 mb-6 gap-4">
        <div class="text-sm text-gray-500 font-medium">
          Showing <span class="font-bold text-gray-900">{{ filteredBrands.length }}</span> brands
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search brands or countries..."
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none w-48 sm:w-64"
          />

          <select
            v-model="sortBy"
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredBrands.length === 0" class="text-center py-16">
        <p class="text-gray-500 text-lg">No brands found matching your search.</p>
        <button
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition cursor-pointer"
        >
          Reset Search
        </button>
      </div>

      <!-- Brands Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="item in filteredBrands"
          :key="item.id"
          class="group bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Logo -->
          <div class="relative w-full h-64 bg-stone-50 border-b border-gray-100 flex items-center justify-center overflow-hidden group-hover:bg-gray-100 transition-colors">
            <img
              :src="item.logoUrl?.logo || getBrandFallbackImage(item.name)"
              :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              @error="onImageError"
            />

            <span
              v-if="item.featured"
              class="absolute top-3 right-3 z-10 bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow-sm"
            >
              Featured
            </span>
          </div>

          <!-- Brand Info -->
          <div class="p-5 flex flex-col flex-grow text-center">
            <h3 class="text-xl font-black text-gray-900 group-hover:text-red-600 transition-colors mb-1 uppercase tracking-tight">
              {{ item.name }}
            </h3>

            <p v-if="item.country" class="text-xs text-gray-400 font-medium mb-3">
              Established in {{ item.country }}
            </p>

            <!-- Categories -->
            <div v-if="item.categories?.length" class="flex flex-wrap justify-center gap-1.5 mb-5">
              <span
                v-for="(category, index) in formatCategories(item.categories)"
                :key="index"
                class="text-[11px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
              >
                {{ category }}
              </span>
            </div>

            <!-- Buttons -->
            <div class="mt-auto flex flex-col gap-2">
              <!-- More Details Button -->
              <router-link
                :to="`/brandD/${item.id}`"
                class="w-full py-2.5 px-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-red-600 transition-colors shadow-sm text-center"
              >
                More Details
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
import { useRoute } from 'vue-router';
import { BRANDS_DATA, type ShoeBrand, type Category } from '../../../data/Brands';

const route = useRoute();

const searchQuery = ref<string>('');
const sortBy = ref<'featured' | 'name-asc' | 'name-desc'>('featured');

const formatCategories = (categories: Category[] | string): string[] => {
  if (Array.isArray(categories)) return categories;
  if (typeof categories === 'string') return categories.split(',').map(c => c.trim());
  return [];
};

const getBrandFallbackImage = (brandName: string): string => {
  return `https://via.placeholder.com/300x150/ffffff/000000?text=${encodeURIComponent(brandName)}`;
};

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://via.placeholder.com/300x150/ffffff/000000?text=Brand';
};

const filteredBrands = computed<ShoeBrand[]>(() => {
  let result = [...BRANDS_DATA];

  // 🔍 Search from navbar OR local input
  const q = (
    (route.query.q as string) ||
    searchQuery.value ||
    ''
  ).toLowerCase().trim();

  if (q) {
    result = result.filter(item =>
      item.name.toLowerCase().includes(q) ||
      (item.country && item.country.toLowerCase().includes(q))
    );
  }

  if (sortBy.value === 'name-asc') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === 'name-desc') {
    result.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy.value === 'featured') {
    result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
});

const resetFilters = () => {
  searchQuery.value = '';
  sortBy.value = 'featured';
};
</script>