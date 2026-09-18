<template>
  <div class="category-page min-h-screen bg-white">
    <main class="max-w-7xl mx-auto px-3 sm:px-5 md:px-8 lg:px-10 py-4 sm:py-6 lg:py-8">

      <!-- Page Header -->
      <header class="mb-5 sm:mb-8 md:mb-10 text-center sm:text-left">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gray-900 mb-1.5 sm:mb-2">
          Accessories
        </h1>
        <p class="text-gray-500 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto sm:mx-0">
          Complete your look with bags, socks, hats, and shoe care essentials.
        </p>
      </header>

      <!-- Filter / Sort Bar -->
      <div class="flex flex-col gap-3 sm:gap-4 border-b border-gray-200 pb-4 sm:pb-5 mb-5 sm:mb-6">
        <div class="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left">
          Showing
          <span class="font-bold text-gray-900">{{ filteredProducts.length }}</span>
          items
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
          <select
            v-model="selectedCategory"
            class="w-full min-w-0 bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-lg focus:ring-black focus:border-black p-2.5 sm:p-3 outline-none cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>

          <select
            v-model="selectedBrand"
            class="w-full min-w-0 bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-lg focus:ring-black focus:border-black p-2.5 sm:p-3 outline-none cursor-pointer"
          >
            <option value="All">All Brands</option>
            <option v-for="brand in brands" :key="brand" :value="brand">{{ brand }}</option>
          </select>

          <select
            v-model="sortBy"
            class="col-span-2 sm:col-span-1 w-full min-w-0 bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-lg focus:ring-black focus:border-black p-2.5 sm:p-3 outline-none cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12 sm:py-16 px-4">
        <p class="text-gray-500 text-base sm:text-lg">No accessories found matching your selections.</p>
        <button
          @click="resetFilters"
          class="mt-4 px-5 py-2.5 sm:py-3 bg-black text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-800 transition min-h-[44px]"
        >
          Reset Filters
        </button>
      </div>

      <!-- Product Grid -->
      <div v-else class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
        <div
          v-for="item in filteredProducts"
          :key="item.id"
          class="group relative bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Image -->
          <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
            <img
              :src="item.imageUrl.img"
              :alt="item.title"
              class="w-full h-full object-cover object-center group-hover:opacity-0 transition-opacity duration-300 absolute inset-0"
            />
            <img
              :src="item.imageUrl.img1 || item.imageUrl.img"
              :alt="`${item.title} hover`"
              class="w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />

            <span
              v-if="item.featured"
              class="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10 bg-black text-white text-[8px] sm:text-[10px] font-bold uppercase px-1.5 sm:px-2 py-0.5 sm:py-1 rounded tracking-wider"
            >
              Featured
            </span>

            <span
              v-if="!item.inStock"
              class="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-10 bg-red-600 text-white text-[8px] sm:text-xs font-bold uppercase px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
            >
              Out of Stock
            </span>
          </div>

          <!-- Product Info -->
          <div class="p-2.5 sm:p-4 flex flex-col flex-grow">
            <p class="text-[9px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
              {{ item.brand }}
            </p>

            <h3 class="text-xs sm:text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-1 sm:min-h-[2.5rem]">
              {{ item.title }}
            </h3>

            <p class="text-[10px] sm:text-sm text-gray-500 mb-2 sm:mb-3">
              {{ item.category }}
            </p>

            <div class="mt-auto pt-2 sm:pt-3 border-t border-gray-100">
              <span class="text-base sm:text-xl font-extrabold text-gray-900">
                ${{ Number(item.price).toFixed(2) }}
              </span>
            </div>

            <!-- Buttons -->
            <div class="mt-2 sm:mt-3 flex flex-col gap-1.5 sm:gap-2">
              <!-- Buy Now -->
              <button
                :disabled="!item.inStock"
                @click="handleBuyNow(item)"
                class="w-full min-h-[38px] sm:min-h-[42px] px-2 py-2 text-[10px] sm:text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center"
                :class="item.inStock
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
              >
                Buy Now
              </button>

              <div class="grid grid-cols-2 gap-1.5 sm:gap-2">
                <!-- Add to Bag -->
                <button
                  :disabled="!item.inStock"
                  @click="handleAddToCart(item)"
                  class="w-full min-h-[38px] sm:min-h-[42px] px-2 py-2 text-[10px] sm:text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center"
                  :class="item.inStock
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
                >
                  {{ item.inStock ? 'Add to Bag' : 'Sold Out' }}
                </button>

                <!-- Details -->
                <router-link
                  :to="`/accesoryD/${item.id}`"
                  class="w-full min-h-[38px] sm:min-h-[42px] px-2 py-2 text-[10px] sm:text-xs font-bold uppercase rounded-lg border border-gray-300 text-center text-gray-700 hover:bg-gray-100 transition flex items-center justify-center"
                >
                  Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Accessories } from '../../../data/Accesories';
import { useCart } from '../../../composables/useCart';

const router = useRouter();
const { addToCart } = useCart();

const selectedCategory = ref('All');
const selectedBrand = ref('All');
const sortBy = ref('featured');

const categories = computed(() => {
  return Array.from(new Set(Accessories.map(item => item.category).filter(Boolean)));
});

const brands = computed(() => {
  return Array.from(new Set(Accessories.map(item => item.brand).filter(Boolean)));
});

const filteredProducts = computed(() => {
  let result = [...Accessories];

  if (selectedCategory.value !== 'All') {
    result = result.filter(item => item.category === selectedCategory.value);
  }

  if (selectedBrand.value !== 'All') {
    result = result.filter(item => item.brand === selectedBrand.value);
  }

  if (sortBy.value === 'price-low') {
    result.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortBy.value === 'price-high') {
    result.sort((a, b) => Number(b.price) - Number(a.price));
  } else if (sortBy.value === 'featured') {
    result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
});

const resetFilters = () => {
  selectedCategory.value = 'All';
  selectedBrand.value = 'All';
  sortBy.value = 'featured';
};

function handleAddToCart(product: any) {
  if (!product.inStock) return;

  addToCart({
    id: `acc-${product.id}`,
    title: product.title,
    brand: product.brand,
    price: Number(product.price),
    image: product.imageUrl.img,
    type: 'Accessories'
  });
}

function handleBuyNow(product: any) {
  if (!product.inStock) return;

  const buyNowItem = {
    id: `acc-${product.id}`,
    title: product.title,
    brand: product.brand,
    price: Number(product.price),
    image: product.imageUrl.img,
    quantity: 1,
    type: 'Accessories'
  };

  localStorage.setItem('famous_footwear_buynow', JSON.stringify(buyNowItem));
  router.push('/checkout');
}
</script>