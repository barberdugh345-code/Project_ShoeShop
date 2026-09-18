<template>
  <div class="category-page min-h-screen bg-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">

      <!-- Page Header -->
      <header class="mb-6 sm:mb-8 border-b border-gray-200 pb-4 sm:pb-6 text-center sm:text-left">
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2">
          <h1 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-red-600">
            Sale & Special Offers
          </h1>
          <span class="bg-red-100 text-red-700 text-[10px] sm:text-xs font-bold uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shrink-0">
            Limited Time
          </span>
        </div>
        <p class="text-gray-500 text-xs sm:text-sm md:text-base">
          Save big on top footwear brands, exclusive promos, and clearance items.
        </p>
      </header>

      <!-- Promos & Coupon Banners -->
      <section v-if="Promo_Type && Promo_Type.length" class="mb-8 sm:mb-12">
        <h2 class="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4 text-center sm:text-left">
          Featured Promo Codes & Deals
        </h2>

        <div class="flex sm:grid overflow-x-auto sm:overflow-visible scrollbar-none snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 pb-2 sm:pb-0">
          <div
            v-for="promo in Promo_Type"
            :key="promo.id"
            class="snap-center shrink-0 w-[85vw] sm:w-auto relative border-2 border-dashed border-red-400 bg-red-50/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition"
          >
            <div class="flex justify-between items-start mb-3">
              <span class="bg-red-600 text-white font-extrabold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded">
                {{ promo.discountPercent }}% OFF
              </span>
              <span v-if="promo.promoTag" class="text-[10px] sm:text-xs font-bold text-red-700 uppercase tracking-wider">
                {{ promo.promoTag }}
              </span>
            </div>

            <div class="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4">
              <img
                v-if="getProductImg(promo.imageUrl)"
                :src="getProductImg(promo.imageUrl)"
                :alt="promo.title"
                class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md bg-white border border-gray-200 shrink-0"
              />
              <div class="min-w-0">
                <h3 class="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">
                  {{ promo.title }}
                </h3>
                <p class="text-[11px] sm:text-xs text-gray-600 mt-1 line-clamp-2">
                  {{ promo.description }}
                </p>
              </div>
            </div>

            <div class="mt-auto bg-white border border-red-200 rounded-lg p-2 sm:p-2.5 flex items-center justify-between gap-2">
              <div class="text-[11px] sm:text-xs text-gray-500 truncate">
                Code: <span class="font-mono font-bold text-gray-900 text-xs sm:text-sm ml-0.5 sm:ml-1">{{ promo.promoCode }}</span>
              </div>
              <button
                @click="copyCode(promo.promoCode)"
                class="px-2.5 sm:px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-[10px] sm:text-xs font-bold uppercase rounded transition shrink-0 min-h-[34px] flex items-center justify-center"
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Filter / Sort Bar -->
      <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center border-b border-gray-200 pb-4 mb-6 gap-3 sm:gap-4">
        <div class="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left">
          Showing <span class="font-bold text-gray-900">{{ filteredSales.length }}</span> items on sale
        </div>

        <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4">
          <select
            v-model="selectedBrand"
            class="w-full sm:w-auto bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-md focus:ring-black focus:border-black p-2 sm:p-2.5 outline-none"
          >
            <option value="All">All Brands</option>
            <option v-for="brand in brands" :key="brand" :value="brand">
              {{ brand }}
            </option>
          </select>

          <select
            v-model="sortBy"
            class="w-full sm:w-auto bg-gray-50 border border-gray-300 text-gray-700 text-xs sm:text-sm rounded-md focus:ring-black focus:border-black p-2 sm:p-2.5 outline-none"
          >
            <option value="discount">Biggest Discount</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredSales.length === 0" class="text-center py-12 sm:py-16">
        <p class="text-gray-500 text-base sm:text-lg">No sale items found matching your filter selection.</p>
        <button
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-black text-white text-xs sm:text-sm font-semibold rounded hover:bg-gray-800 transition min-h-[44px] sm:min-h-0"
        >
          Reset Filters
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <div
          v-for="item in filteredSales"
          :key="item.id"
          class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Image -->
          <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
            <img
              :src="getProductImg(item.imageUrl)"
              :alt="item.title"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />

            <div class="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex flex-col gap-1">
              <span
                v-if="item.discountPercent"
                class="bg-red-600 text-white text-[9px] sm:text-xs font-bold uppercase px-1.5 py-0.5 sm:px-2 rounded shadow-sm"
              >
                {{ item.discountPercent }}% OFF
              </span>
              <span
                v-if="item.badge"
                class="bg-black text-white text-[8px] sm:text-[10px] font-bold uppercase px-1.5 py-0.5 sm:px-2 rounded shadow-sm"
              >
                {{ item.badge }}
              </span>
            </div>

            <span
              v-if="!item.inStock"
              class="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-gray-800 text-white text-[9px] sm:text-xs font-bold uppercase px-1.5 py-0.5 sm:px-2 sm:py-1 rounded"
            >
              Sold Out
            </span>
          </div>

          <!-- Product Info -->
          <div class="p-2.5 sm:p-4 flex flex-col flex-grow">
            <p class="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
              {{ item.brand }}
            </p>

            <h3 class="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 sm:line-clamp-1 mb-2">
              {{ item.title }}
            </h3>

            <div class="mt-auto pt-1.5 sm:pt-2 flex items-center justify-between border-t border-gray-100">
              <div class="flex items-baseline gap-1.5 sm:gap-2">
                <span class="text-base sm:text-lg font-extrabold text-red-600">
                  ${{ Number(item.salePrice).toFixed(2) }}
                </span>
                <span v-if="item.originalPrice" class="text-[11px] sm:text-xs text-gray-400 line-through">
                  ${{ Number(item.originalPrice).toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="mt-2 sm:mt-3 flex flex-col gap-1.5 sm:gap-2">
              <!-- Buy Now -->
              <button
                :disabled="!item.inStock"
                @click="handleBuyNow(item)"
                class="w-full min-h-[38px] px-2 py-2 text-[11px] sm:text-xs font-bold uppercase rounded transition-colors flex items-center justify-center"
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
                  class="w-full min-h-[38px] px-2 py-2 text-[11px] sm:text-xs font-bold uppercase rounded transition-colors flex items-center justify-center"
                  :class="item.inStock
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
                >
                  {{ item.inStock ? 'Add to Bag' : 'Sold Out' }}
                </button>

                <!-- Details -->
                <router-link
                  :to="`/SaleD/${item.id}`"
                  class="w-full min-h-[38px] px-2 py-2 text-[11px] sm:text-xs font-bold uppercase rounded border border-gray-300 text-center text-gray-700 hover:bg-gray-100 transition flex items-center justify-center"
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
import { useRoute, useRouter } from 'vue-router';
import { ForSales_Type, Promo_Type } from '../../../data/Sales';
import { useCart } from '../../../composables/useCart';

const { addToCart } = useCart();
const route = useRoute();
const router = useRouter();

const selectedBrand = ref<string>('All');
const sortBy = ref<string>('discount');

const searchQuery = computed(() => (route.query.q as string) || '');

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

const copyCode = (code: string) => {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(code);
  }
  alert(`Coupon code "${code}" copied to clipboard!`);
};

const brands = computed(() => {
  return Array.from(new Set(ForSales_Type.map(item => item.brand).filter(Boolean)));
});

const filteredSales = computed(() => {
  let result = [...ForSales_Type];

  const query = searchQuery.value.toLowerCase().trim();
  if (query) {
    result = result.filter(item =>
      item.title?.toLowerCase().includes(query) ||
      item.brand?.toLowerCase().includes(query) ||
      (item.badge && item.badge.toLowerCase().includes(query))
    );
  }

  if (selectedBrand.value !== 'All') {
    result = result.filter(item => item.brand === selectedBrand.value);
  }

  if (sortBy.value === 'discount') {
    result.sort((a, b) => Number(b.discountPercent || 0) - Number(a.discountPercent || 0));
  } else if (sortBy.value === 'price-low') {
    result.sort((a, b) => Number(a.salePrice) - Number(b.salePrice));
  } else if (sortBy.value === 'price-high') {
    result.sort((a, b) => Number(b.salePrice) - Number(a.salePrice));
  }

  return result;
});

const resetFilters = () => {
  selectedBrand.value = 'All';
  sortBy.value = 'discount';
};

function handleAddToCart(product: typeof ForSales_Type[0]) {
  if (!product.inStock) return;

  addToCart({
    id: `sale-${product.id}`,
    title: product.title,
    brand: product.brand || 'Famous Footwear',
    price: Number(product.salePrice),
    image: getProductImg(product.imageUrl),
    type: 'Sale',
    quantity: 1
  } as any);
}

function handleBuyNow(product: typeof ForSales_Type[0]) {
  if (!product.inStock) return;

  const buyNowItem = {
    id: `sale-${product.id}`,
    title: product.title,
    brand: product.brand || 'Famous Footwear',
    price: Number(product.salePrice),
    image: getProductImg(product.imageUrl),
    quantity: 1,
    type: 'Sale'
  };

  localStorage.setItem('famous_footwear_buynow', JSON.stringify(buyNowItem));
  router.push('/checkout');
}
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>