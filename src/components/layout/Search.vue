<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Man_Type } from '../../data/Man';
import { Kids_Types } from '../../data/Kids';
import { ForSales_Type } from '../../data/Sales';
import { Woman_Type } from '../../data/Woman';
import { Accessories } from '../../data/Accesories';
import { useCart } from '../../composables/useCart';

const { addToCart } = useCart();
const route = useRoute();

const searchQuery = computed(() => ((route.query.q as string) || '').toLowerCase().trim());

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
    ...ForSales_Type.map(item => ({ ...item, section: 'Sale', finalPrice: Number(item.salePrice || item.originalPrice) })),
  ];
});

const searchResults = computed(() => {
  const q = searchQuery.value;
  if (!q) return [];

  return allProducts.value.filter(item => {
    const title = item.title?.toLowerCase() || '';
    const brand = item.brand?.toLowerCase() || '';
    const category = item.section.toLowerCase() || '';
    const description = (item as any).description?.toLowerCase() || '';

    return (
      title.includes(q) ||
      brand.includes(q) ||
      category.includes(q) ||
      description.includes(q)
    );
  });
});

function handleAddToCart(product: any) {
  if (product.inStock === false) return;
  addToCart({
    id: `${product.section.toLowerCase()}-${product.id}`,
    title: product.title,
    brand: product.brand || 'Famous Footwear',
    price: product.finalPrice,
    image: getProductImg(product.imageUrl || product.images),
    type: product.section,
  });
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-white">
    <header class="mb-8 border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-2">
        Search Results
      </h1>
      <p class="text-gray-500 text-base">
        Showing results for "<span class="font-bold text-gray-900">{{ route.query.q }}</span>" (<span class="text-red-600 font-bold">{{ searchResults.length }}</span> found)
      </p>
    </header>

    <div v-if="searchResults.length === 0" class="py-16 text-center">
      <p class="text-gray-500 text-lg mb-4">No products found matching your search criteria.</p>
      <router-link to="/" class="inline-block px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-red-600 transition">
        Back to Home
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="item in searchResults" :key="item.id + item.section" class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
          <img :src="getProductImg(item.brand || item.finalPrice)" :alt="item.title" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"/>
          <span class="absolute top-2 left-2 bg-black text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm">
            {{ item.section }}
          </span>
          <span v-if="item.inStock === false" class="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">
            Sold Out
          </span>
        </div>

        <div class="p-4 flex flex-col flex-grow">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{{ item.brand || 'Famous Footwear' }}</p>
          <h3 class="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2">{{ item.title }}</h3>

          <div class="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
            <span class="text-lg font-extrabold text-gray-900">${{ Number(item.finalPrice).toFixed(2) }}</span>
            <button :disabled="item.inStock === false" @click="handleAddToCart(item)" class="px-3 py-1.5 text-xs font-bold uppercase rounded transition-colors" :class="item.inStock !== false ? 'bg-black text-white hover:bg-red-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'">
              {{ item.inStock !== false ? 'Add to Bag' : 'Sold Out' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>