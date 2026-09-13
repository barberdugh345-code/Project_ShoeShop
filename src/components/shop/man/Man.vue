```vue
<template>
  <div class="category-page min-h-screen bg-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <!-- Page Header -->
      <header class="mb-8">
        <h1 class="text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-2">
          Men's Shoes & Sneakers
        </h1>

        <p class="text-gray-500 text-base">
          Discover top performance and casual styles.
        </p>
      </header>

      <!-- Filter / Sort Bar -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center
               border-b border-gray-200 pb-4 mb-6 gap-4"
      >

        <div class="text-sm text-gray-500 font-medium">
          Showing
          <span class="font-bold text-gray-900">
            {{ filteredProducts.length }}
          </span>
          products
        </div>

        <div class="flex flex-wrap items-center gap-4">

          <!-- Category -->
          <select
            v-model="selectedCategory"
            class="bg-gray-50 border border-gray-300 text-gray-700
                   text-sm rounded-md focus:ring-black focus:border-black
                   p-2.5 outline-none"
          >
            <option value="All">All Categories</option>

            <option
              v-for="cat in categories"
              :key="cat"
              :value="cat"
            >
              {{ cat }}
            </option>
          </select>

          <!-- Brand -->
          <select
            v-model="selectedBrand"
            class="bg-gray-50 border border-gray-300 text-gray-700
                   text-sm rounded-md focus:ring-black focus:border-black
                   p-2.5 outline-none"
          >
            <option value="All">All Brands</option>

            <option
              v-for="brand in brands"
              :key="brand"
              :value="brand"
            >
              {{ brand }}
            </option>
          </select>

          <!-- Sort -->
          <select
            v-model="sortBy"
            class="bg-gray-50 border border-gray-300 text-gray-700
                   text-sm rounded-md focus:ring-black focus:border-black
                   p-2.5 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredProducts.length === 0"
        class="text-center py-16"
      >
        <p class="text-gray-500 text-lg">
          No products found matching your filters.
        </p>

        <button
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-black text-white text-sm
                 font-semibold rounded hover:bg-gray-800 transition"
        >
          Reset Filters
        </button>
      </div>

      <!-- Product Grid -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
               lg:grid-cols-4 gap-6"
      >

        <div
          v-for="item in filteredProducts"
          :key="item.id"
          class="group relative bg-white border border-gray-200
                 rounded-lg overflow-hidden flex flex-col
                 justify-between hover:shadow-lg
                 transition-shadow duration-300"
        >

          <!-- Image -->
          <div
            class="relative w-full aspect-square bg-gray-100 overflow-hidden"
          >
            <img
              :src="getImageUrl(item)"
              :alt="item.title"
              class="w-full h-full object-cover object-center
                     group-hover:scale-105 transition-transform duration-300"
            />

            <!-- Out of Stock -->
            <span
              v-if="!item.inStock"
              class="absolute top-2 left-2 bg-red-600 text-white
                     text-xs font-bold uppercase px-2 py-1 rounded"
            >
              Out of Stock
            </span>
          </div>

          <!-- Product Info -->
          <div class="p-4 flex flex-col flex-grow">

            <!-- Brand -->
            <p
              class="text-xs font-semibold text-gray-400 uppercase
                     tracking-wider mb-1"
            >
              {{ item.brand }}
            </p>

            <!-- Product Name -->
            <h3
              class="text-sm font-bold text-gray-900
                     group-hover:text-red-600 transition-colors
                     line-clamp-1 mb-1"
            >
              {{ item.title }}
            </h3>

            <!-- Category -->
            <p class="text-xs text-gray-500 mb-2">
              {{ item.category }}
            </p>

            <!-- Price -->
            <div class="mt-auto pt-2 border-t border-gray-100">
              <span class="text-lg font-extrabold text-gray-900">
                ${{ Number(item.price).toFixed(2) }}
              </span>
            </div>

            <!-- Buttons -->
            <div class="mt-3 flex gap-2">

              <!-- Add To Cart -->
              <button
                :disabled="!item.inStock"
                @click="handleAddToCart(item)"
                class="flex-1 px-3 py-2 text-xs font-bold
                       uppercase rounded transition-colors"
                :class="
                  item.inStock
                    ? 'bg-black text-white hover:bg-red-600'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                "
              >
                {{ item.inStock ? 'Add to Bag' : 'Sold Out' }}
              </button>

              <!-- Details -->
              <router-link
                :to="`/manD/${item.id}`"
                class="flex-1 px-3 py-2 text-xs font-bold
                       uppercase rounded border border-gray-300
                       text-center text-gray-700
                       hover:bg-gray-100 transition"
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

// Replace this import with your actual dataset (e.g., Kids_Type or Accessory_Type)
import {
  Man_Type as Data_Type,
  type Shoe_man as Item_Type
} from '../../../data/Man';

import { useCart } from '../../../composables/useCart';


// ==============================
// CART
// ==============================

const { addToCart } = useCart();


// ==============================
// ROUTE
// ==============================

const route = useRoute();


// ==============================
// FILTERS
// ==============================

const selectedCategory = ref<string>('All');

const selectedBrand = ref<string>('All');

const sortBy = ref<string>('featured');


// ==============================
// IMAGE URL
// ==============================

const getImageUrl = (product: any): string => {

  const fallback =
    'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80';

  if (!product) {
    return fallback;
  }

  const target =
    product.imageUrl || product.images;

  if (!target) {
    return fallback;
  }

  // Image is a string
  if (typeof target === 'string') {
    return target;
  }

  // Image is an array
  if (
    Array.isArray(target) &&
    target.length > 0
  ) {
    return target[0];
  }

  // Image is an object
  if (typeof target === 'object') {

    return (
      target.img ||
      target.img1 ||
      (Object.values(target)[0] as string) ||
      fallback
    );
  }

  return fallback;
};


// ==============================
// CATEGORIES
// ==============================

const categories = computed(() => {

  return Array.from(
    new Set(
      Data_Type
        .map(item => item.category)
        .filter(Boolean)
    )
  );

});


// ==============================
// BRANDS
// ==============================

const brands = computed(() => {

  return Array.from(
    new Set(
      Data_Type
        .map(item => item.brand)
        .filter(Boolean)
    )
  );

});


// ==============================
// FILTER + SEARCH + SORT
// ==============================

const filteredProducts = computed(() => {

  let result = [...Data_Type];


  // ============================
  // SEARCH FROM NAVBAR
  // URL example:
  // /kids?q=nike or /accesory?q=backpack
  // ============================

  const q =
    ((route.query.q as string) || '')
      .toLowerCase()
      .trim();


  if (q) {

    result = result.filter(item => {

      const title =
        item.title?.toLowerCase() || '';

      const brand =
        item.brand?.toLowerCase() || '';

      const category =
        item.category?.toLowerCase() || '';

      return (
        title.includes(q) ||
        brand.includes(q) ||
        category.includes(q)
      );

    });

  }


  // ============================
  // CATEGORY FILTER
  // ============================

  if (
    selectedCategory.value !== 'All'
  ) {

    result = result.filter(
      item =>
        item.category ===
        selectedCategory.value
    );

  }


  // ============================
  // BRAND FILTER
  // ============================

  if (
    selectedBrand.value !== 'All'
  ) {

    result = result.filter(
      item =>
        item.brand ===
        selectedBrand.value
    );

  }


  // ============================
  // PRICE SORT
  // ============================

  if (
    sortBy.value === 'price-low'
  ) {

    result.sort(
      (a, b) =>
        Number(a.price) -
        Number(b.price)
    );

  }


  if (
    sortBy.value === 'price-high'
  ) {

    result.sort(
      (a, b) =>
        Number(b.price) -
        Number(a.price)
    );

  }


  return result;

});


// ==============================
// RESET FILTERS
// ==============================

const resetFilters = () => {

  selectedCategory.value = 'All';

  selectedBrand.value = 'All';

  sortBy.value = 'featured';

};


// ==============================
// ADD TO CART
// ==============================

function handleAddToCart(
  product: Item_Type
) {

  if (!product.inStock) {
    return;
  }


  addToCart({

    id: `item-${product.id}`,

    title: product.title,

    brand: product.brand,

    price: Number(product.price),

    image: getImageUrl(product),

    type: 'Product'

  });

}

</script>
```
