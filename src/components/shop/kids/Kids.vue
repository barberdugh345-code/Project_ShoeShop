<template>
  <div class="category-page min-h-screen bg-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <!-- Page Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-2">
          Kids' Shoes & Sneakers
        </h1>
        <p class="text-gray-500 text-base">
          Durable, comfortable, and trendy footwear for active kids.
        </p>
      </header>

      <!-- Filter / Sort Bar -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 mb-6 gap-4">
        <div class="text-sm text-gray-500 font-medium">
          Showing <span class="font-bold text-gray-900">{{ filteredProducts.length }}</span> products
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <select
            v-model="selectedCategory"
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none"
          >
            <option value="All">All Categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>

          <select
            v-model="sortBy"
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-16">
        <p class="text-gray-500 text-lg">No kids' products found matching your criteria.</p>
        <button
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition"
        >
          Reset Filters
        </button>
      </div>

      <!-- Product Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="item in filteredProducts"
          :key="item.id"
          class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Image -->
          <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
            <img
              :src="getImageUrl(item)"
              :alt="item.title"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />

            <span
              v-if="!item.inStock"
              class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 rounded"
            >
              Out of Stock
            </span>
          </div>

          <!-- Product Info -->
          <div class="p-4 flex flex-col flex-grow">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              {{ item.category }}
            </p>

            <h3 class="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2">
              {{ item.title }}
            </h3>

            <!-- Sizes -->
            <div v-if="item.sizes && item.sizes.length" class="mb-3">
              <span class="text-[11px] text-gray-400 uppercase font-semibold block mb-1">Available Sizes:</span>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="size in item.sizes"
                  :key="size"
                  class="text-[10px] font-medium border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50 text-gray-700"
                >
                  {{ size }}
                </span>
              </div>
            </div>

            <!-- Price -->
            <div class="mt-auto pt-2 border-t border-gray-100">
              <span class="text-lg font-extrabold text-gray-900">
                ${{ Number(item.price).toFixed(2) }}
              </span>
            </div>

            <!-- Buttons -->
            <div class="mt-3 flex gap-2">
              <button
                :disabled="!item.inStock"
                @click="handleAddToCart(item)"
                class="flex-1 px-3 py-2 text-xs font-bold uppercase rounded transition-colors"
                :class="item.inStock
                  ? 'bg-black text-white hover:bg-red-600'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
              >
                {{ item.inStock ? 'Add to Bag' : 'Sold Out' }}
              </button>

              <router-link
                :to="`/kidD/${item.id}`"
                class="flex-1 px-3 py-2 text-xs font-bold uppercase rounded border border-gray-300 text-center text-gray-700 hover:bg-gray-100 transition"
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
import { Kids_Types, type Shoe_kids } from '../../../data/Kids';
import { useCart } from '../../../composables/useCart';

const { addToCart } = useCart();
const route = useRoute();

const selectedCategory = ref<string>('All');
const sortBy = ref<string>('featured');

const categories = computed(() => {
  return Array.from(new Set(Kids_Types.map(item => item.category).filter(Boolean)));
});

const getImageUrl = (product: any): string => {
  const fallback = 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80';
  if (!product) return fallback;

  const target = product.images || product.imageUrl;
  if (!target) return fallback;

  if (typeof target === 'string') return target;
  if (Array.isArray(target) && target.length > 0) return target[0];

  if (typeof target === 'object') {
    return target.img || target.img1 || (Object.values(target)[0] as string) || fallback;
  }

  return fallback;
};

const filteredProducts = computed(() => {
  let result = [...Kids_Types];

  // ============================
  // SEARCH FROM NAVBAR
  // URL example: /kids?q=nike
  // ============================
  const q = ((route.query.q as string) || '').toLowerCase().trim();
  if (q) {
    result = result.filter(item => {
      const title = item.title?.toLowerCase() || '';
      const brand = item.brand?.toLowerCase() || '';
      const category = item.category?.toLowerCase() || '';
      return (
        title.includes(q) ||
        brand.includes(q) ||
        category.includes(q)
      );
    });
  }

  // Category filter
  if (selectedCategory.value !== 'All') {
    result = result.filter(item => item.category === selectedCategory.value);
  }

  // Sorting
  if (sortBy.value === 'price-low') {
    result.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortBy.value === 'price-high') {
    result.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return result;
});

const resetFilters = () => {
  selectedCategory.value = 'All';
  sortBy.value = 'featured';
};

function handleAddToCart(product: Shoe_kids) {
  if (!product.inStock) return;

  addToCart({
    id: `kids-${product.id}`,
    title: product.title,
    brand: product.brand || 'Famous Footwear',
    price: Number(product.price),
    image: getImageUrl(product),
    type: 'Kids',
    quantity: 1
  } as any);
}
</script>