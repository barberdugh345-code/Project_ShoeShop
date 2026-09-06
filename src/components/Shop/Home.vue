<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <!-- 1. HERO SLIDER / BANNER -->
    <section 
      v-for="slide in heroSlides" 
      :key="slide.id" 
      class="relative bg-gray-900 text-white overflow-hidden py-16 md:py-24 px-6 md:px-12"
    >
      <div class="absolute inset-0 z-0 opacity-40">
        <img 
          :src="slide.imageUrl" 
          :alt="slide.title" 
          class="w-full h-full object-cover" 
        />
      </div>

      <div class="relative z-10 max-w-5xl mx-auto text-center space-y-4">
        <span 
          v-if="slide.badge" 
          class="inline-block bg-red-600 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded"
        >
          {{ slide.badge }}
        </span>
        <h1 class="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
          {{ slide.title }}
        </h1>
        <p class="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
          {{ slide.subtitle }}
        </p>
        <div class="pt-4">
          <router-link 
            :to="slide.ctaLink" 
            class="inline-block bg-white text-gray-900 font-bold text-xs uppercase tracking-wider px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            {{ slide.ctaText }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- 2. PROMO BANNERS -->
    <section class="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="promo in promoBanners" 
          :key="promo.id"
          class="relative rounded-xl overflow-hidden bg-gray-900 text-white p-8 flex flex-col justify-between h-64 shadow-md"
        >
          <img 
            :src="promo.bgImageUrl" 
            :alt="promo.title" 
            class="absolute inset-0 w-full h-full object-cover opacity-30" 
          />
          <div class="relative z-10">
            <span 
              v-if="promo.discountCode" 
              class="text-xs font-extrabold uppercase bg-red-600 px-2 py-1 rounded inline-block mb-2"
            >
              Use Code: {{ promo.discountCode }}
            </span>
            <h2 class="text-2xl font-black uppercase tracking-tight">{{ promo.title }}</h2>
            <p class="text-xs text-gray-200 mt-2 max-w-md">{{ promo.description }}</p>
          </div>
          <div class="relative z-10 pt-4">
            <router-link 
              :to="promo.ctaLink" 
              class="inline-block bg-white text-gray-900 text-xs font-bold uppercase px-5 py-2.5 rounded hover:bg-gray-100 transition-colors"
            >
              {{ promo.ctaText }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FEATURED CATEGORIES -->
    <section class="max-w-7xl mx-auto px-4 py-8 md:px-6">
      <h2 class="text-2xl font-black uppercase text-gray-900 text-center mb-8">
        Featured Categories
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link 
          v-for="cat in featuredCategories" 
          :key="cat.id" 
          :to="`/category/${cat.slug}`"
          class="group relative rounded-lg overflow-hidden bg-gray-100 h-64 border border-gray-200 flex flex-col justify-end p-6 hover:shadow-lg transition-shadow"
        >
          <img 
            :src="cat.imageUrl" 
            :alt="cat.name" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="relative z-10 text-white">
            <h3 class="text-xl font-bold uppercase tracking-tight">{{ cat.name }}</h3>
            <p class="text-xs text-gray-300 mt-1 line-clamp-1">{{ cat.description }}</p>
            <span class="text-xs text-red-400 font-semibold mt-2 inline-block">
              {{ cat.itemCount }} Items Available &rarr;
            </span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- 4. FEATURED PRODUCTS (MEN, WOMEN, KIDS) -->
    <section class="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl md:text-2xl font-black uppercase text-gray-900">
          Featured Footwear
        </h2>
        <router-link to="/sales" class="text-xs font-bold uppercase text-red-600 hover:underline">
          View All &rarr;
        </router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <article 
          v-for="product in allFeaturedProducts" 
          :key="`${product.type}-${product.id}`"
          class="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
        >
          <div>
            <div class="h-48 bg-gray-100 rounded-md overflow-hidden mb-3">
              <img 
                :src="getImageUrl(product)" 
                :alt="product.title" 
                class="w-full h-full object-cover" 
              />
            </div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-bold text-gray-500 uppercase">{{ product.brand }}</span>
              <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                {{ product.category }}
              </span>
            </div>
            <h3 class="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{{ product.title }}</h3>
            <p class="text-sm font-black text-red-600 mb-3">${{ product.price.toFixed(2) }}</p>
          </div>

          <button 
            :disabled="!product.inStock"
            class="w-full bg-gray-900 text-white text-xs font-bold uppercase py-2 rounded hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {{ product.inStock ? 'Add to Bag' : 'Out of Stock' }}
          </button>
        </article>
      </div>
    </section>

    <!-- 5. SPOTLIGHT BRANDS -->
    <section class="bg-gray-50 py-12 border-y border-gray-200">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <h2 class="text-xl font-black uppercase text-center text-gray-900 mb-8">
          Featured Brands
        </h2>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div 
            v-for="brand in spotlightBrands" 
            :key="brand.id" 
            class="flex flex-col items-center group cursor-pointer"
          >
            <div class="w-20 h-20 bg-white rounded-full border border-gray-200 p-2 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                :src="brand.logoUrl.logo" 
                :alt="brand.name" 
                class="w-full h-full object-cover rounded-full" 
              />
            </div>
            <span class="text-xs font-bold text-gray-800 mt-2 uppercase tracking-wider group-hover:text-red-600">
              {{ brand.name }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. ACCESSORIES HIGHLIGHT -->
    <section class="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <h2 class="text-xl font-black uppercase text-gray-900 mb-6">Essential Accessories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div 
          v-for="item in accessories" 
          :key="item.id" 
          class="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg p-4"
        >
          <img 
            :src="item.imageUrl.img" 
            :alt="item.title" 
            class="w-20 h-20 object-cover rounded bg-gray-100" 
          />
          <div>
            <span class="text-[10px] font-bold uppercase text-gray-500">{{ item.brand }}</span>
            <h4 class="text-xs font-bold text-gray-900 line-clamp-1">{{ item.title }}</h4>
            <p class="text-xs font-bold text-red-600 mt-1">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. TESTIMONIALS -->
    <section class="bg-gray-900 text-white py-12 px-4 md:px-6">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <h2 class="text-2xl font-black uppercase tracking-tight">Customer Reviews</h2>
        <div 
          v-for="review in testimonials" 
          :key="review.id" 
          class="bg-gray-800 rounded-lg p-6 max-w-xl mx-auto border border-gray-700"
        >
          <div class="flex items-center justify-center space-x-3 mb-3">
            <img 
              :src="review.avatarUrl" 
              :alt="review.author" 
              class="w-10 h-10 rounded-full object-cover" 
            />
            <div class="text-left">
              <p class="text-xs font-bold">{{ review.author }}</p>
              <p v-if="review.verifiedPurchase" class="text-[10px] text-green-400 font-semibold">
                ✓ Verified Purchase
              </p>
            </div>
          </div>
          <div class="text-yellow-400 text-sm mb-2">
            {{ '★'.repeat(review.rating) }}
          </div>
          <p class="text-xs italic text-gray-300">"{{ review.comment }}"</p>
          <p class="text-[10px] text-gray-400 mt-2 font-medium">Product: {{ review.productName }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import STORE_DATABASE from '../../data/Home';
import type { Shoe_man, Shoe_women, Shoe_kids } from '../../data/Home';
// Destructure datasets directly from STORE_DATABASE
const { 
  menShoes, 
  womenShoes, 
  kidsShoes, 
  brands, 
  accessories, 
  homepage 
} = STORE_DATABASE;

const { 
  heroSlides, 
  featuredCategories, 
  promoBanners, 
  spotlightBrandIds, 
  featuredProductIds, 
  testimonials 
} = homepage;

// Helper type union for combined products
type CombinedProduct = 
  | (Shoe_man & { type: 'man' })
  | (Shoe_women & { type: 'women' })
  | (Shoe_kids & { type: 'kids' });

// Compute featured products matching featuredProductIds
const allFeaturedProducts = computed<CombinedProduct[]>(() => {
  const combined: CombinedProduct[] = [
    ...menShoes.map(item => ({ ...item, type: 'man' as const })),
    ...womenShoes.map(item => ({ ...item, type: 'women' as const })),
    ...kidsShoes.map(item => ({ ...item, type: 'kids' as const }))
  ];

  return combined.filter(item => featuredProductIds.includes(item.id));
});

// Compute brands matching spotlightBrandIds
const spotlightBrands = computed(() => {
  return brands.filter(brand => spotlightBrandIds.includes(brand.id));
});

// Helper function to resolve image URL differences between datasets
const getImageUrl = (product: CombinedProduct): string => {
  if ('imageUrl' in product) {
    return product.imageUrl.img;
  }
  return product.images.img;
};
</script>