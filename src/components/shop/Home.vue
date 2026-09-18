<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">

    <!-- ================= 1. HERO SLIDER ================= -->
    <section class="relative bg-black text-white overflow-hidden">
      <div
        ref="sliderRef"
        class="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth w-full"
      >
        <div
          v-for="slide in heroSlides"
          :key="slide.id"
          class="snap-center shrink-0 w-full relative min-h-[420px] sm:min-h-[500px] md:min-h-[620px] flex items-center"
        >
          <!-- Background -->
          <div class="absolute inset-0">
            <img
              :src="slide.imageUrl"
              :alt="slide.title"
              class="w-full h-full object-cover opacity-60"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 sm:via-black/40 to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full py-10 sm:py-0">
            <div class="max-w-xl space-y-3 sm:space-y-5 text-left">
              <span
                v-if="slide.badge"
                class="inline-block bg-red-600 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded"
              >
                {{ slide.badge }}
              </span>

              <h1 class="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">
                {{ slide.title }}
              </h1>

              <p class="text-sm sm:text-base md:text-lg text-gray-200 max-w-md leading-relaxed line-clamp-2 sm:line-clamp-none">
                {{ slide.subtitle }}
              </p>

              <div class="pt-1 sm:pt-2">
                <router-link
                  :to="slide.ctaLink"
                  class="inline-flex items-center gap-2 bg-white text-black font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-xl min-h-[44px]"
                >
                  {{ slide.ctaText }}
                  <span>→</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicators -->
      <div class="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        <button
          v-for="(slide, index) in heroSlides"
          :key="slide.id"
          @click="scrollToSlide(index)"
          class="h-1.5 rounded-full transition-all duration-300"
          :class="currentSlideIndex === index ? 'bg-white w-6 sm:w-8' : 'bg-white/40 w-2.5 sm:w-3 hover:bg-white/70'"
        ></button>
      </div>
    </section>

    <!-- ================= 2. QUICK CATEGORIES ================= -->
    <section class="border-b border-gray-100 bg-gray-50/50">
      <div class="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold uppercase tracking-wide overflow-x-auto scrollbar-none whitespace-nowrap md:justify-center">
        <router-link to="/man" class="hover:text-red-600 transition shrink-0 py-1">Men</router-link>
        <router-link to="/woman" class="hover:text-red-600 transition shrink-0 py-1">Women</router-link>
        <router-link to="/kids" class="hover:text-red-600 transition shrink-0 py-1">Kids</router-link>
        <router-link to="/accesory" class="hover:text-red-600 transition shrink-0 py-1">Accessories</router-link>
        <router-link to="/brands" class="hover:text-red-600 transition shrink-0 py-1">Brands</router-link>
        <router-link to="/sales" class="text-red-600 hover:text-red-700 transition shrink-0 py-1">Sale</router-link>
      </div>
    </section>

    <!-- ================= 3. PROMO BANNERS ================= -->
    <section class="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div
          v-for="promo in promoBanners"
          :key="promo.id"
          class="group relative rounded-2xl overflow-hidden h-64 sm:h-72 flex flex-col justify-end p-5 sm:p-8 shadow-lg"
        >
          <img
            :src="promo.bgImageUrl"
            :alt="promo.title"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <div class="relative z-10 text-white space-y-2 sm:space-y-3">
            <span
              v-if="promo.discountCode"
              class="inline-block text-[10px] sm:text-[11px] font-black uppercase bg-red-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded"
            >
              Code: {{ promo.discountCode }}
            </span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight">
              {{ promo.title }}
            </h2>
            <p class="text-xs sm:text-sm text-gray-200 max-w-sm line-clamp-2 sm:line-clamp-none">{{ promo.description }}</p>
            <div>
              <router-link
                :to="promo.ctaLink"
                class="inline-block mt-1 sm:mt-2 bg-white text-black text-xs font-bold uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-red-600 hover:text-white transition"
              >
                {{ promo.ctaText }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 4. FEATURED CATEGORIES ================= -->
    <section class="max-w-7xl mx-auto px-4 py-6 sm:py-10 md:px-6">
      <div class="text-center mb-6 sm:mb-10">
        <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
          Shop by Category
        </h2>
        <p class="text-gray-500 mt-1 text-xs sm:text-sm">Find the perfect pair for every style</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <router-link
          v-for="cat in featuredCategories"
          :key="cat.id"
          :to="`/category/${cat.slug}`"
          class="group relative rounded-2xl overflow-hidden h-64 sm:h-80"
        >
          <img
            :src="cat.imageUrl"
            :alt="cat.name"
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

          <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
            <h3 class="text-xl sm:text-2xl font-black uppercase tracking-tight mb-1">{{ cat.name }}</h3>
            <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 line-clamp-1">{{ cat.description }}</p>
            <span class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-red-400 uppercase tracking-wide">
              {{ cat.itemCount }} Items →
            </span>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ================= 5. FEATURED PRODUCTS ================= -->
    <section class="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:px-6">
      <div class="flex items-end justify-between mb-6 sm:mb-8">
        <div>
          <h2 class="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900">
            Featured Footwear
          </h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Hand-picked styles you'll love</p>
        </div>
        <router-link
          to="/sales"
          class="text-xs font-bold uppercase text-red-600 hover:text-red-700 tracking-wide shrink-0"
        >
          View All →
        </router-link>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <article
          v-for="product in allFeaturedProducts"
          :key="`${product.type}-${product.id}`"
          class="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl sm:hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Image -->
            <div class="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                :src="getImageUrl(product)"
                :alt="product.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span
                v-if="!product.inStock"
                class="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold uppercase px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
              >
                Sold Out
              </span>
            </div>

            <!-- Info -->
            <div class="p-3 sm:p-4">
              <div class="flex items-center justify-between mb-1 gap-1">
                <span class="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider truncate">
                  {{ product.brand }}
                </span>
                <span class="text-[9px] sm:text-[10px] font-semibold uppercase px-1.5 sm:px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">
                  {{ product.category }}
                </span>
              </div>

              <h3 class="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-1 group-hover:text-red-600 transition">
                {{ product.title }}
              </h3>

              <p class="text-base sm:text-lg font-black text-gray-900 mb-3 sm:mb-4">
                ${{ product.price.toFixed(2) }}
              </p>
            </div>
          </div>

          <div class="p-3 sm:p-4 pt-0">
            <button
              :disabled="!product.inStock"
              @click="handleAddToCart(product)"
              class="w-full py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase rounded-lg transition min-h-[38px] sm:min-h-0 flex items-center justify-center"
              :class="product.inStock
                ? 'bg-black text-white hover:bg-red-600 active:bg-gray-900'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
            >
              {{ product.inStock ? 'Add to Bag' : 'Out of Stock' }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- ================= 6. BRAND MARQUEE ================= -->
    <section class="bg-gray-50 py-10 sm:py-14 border-y border-gray-200 overflow-hidden">
      <div class="text-center mb-6 sm:mb-8 px-4">
        <h2 class="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900">
          Shop by Brand
        </h2>
        <p class="text-xs sm:text-sm text-gray-500 mt-1">Top brands we carry</p>
      </div>

      <div class="relative w-full flex overflow-x-hidden group">
        <div class="flex shrink-0 gap-3 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] items-center px-1">
          <router-link
            v-for="brand in spotlightBrands"
            :key="`b1-${brand.id}`"
            :to="`/brandD/${brand.id}`"
            class="w-36 sm:w-44 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-sm hover:border-red-500 hover:shadow-md transition flex flex-col items-center text-center shrink-0"
          >
            <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-gray-100 mb-2 sm:mb-3">
              <img :src="brand.logoUrl.logo" :alt="brand.name" class="w-full h-full object-cover" />
            </div>
            <span class="text-xs sm:text-sm font-black uppercase tracking-wide truncate w-full">{{ brand.name }}</span>
            <span class="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 sm:mt-1">{{ brand.country }}</span>
          </router-link>
        </div>

        <!-- Duplicate for seamless loop -->
        <div class="flex shrink-0 gap-3 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] items-center px-1" aria-hidden="true">
          <router-link
            v-for="brand in spotlightBrands"
            :key="`b2-${brand.id}`"
            :to="`/brandD/${brand.id}`"
            class="w-36 sm:w-44 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-sm hover:border-red-500 hover:shadow-md transition flex flex-col items-center text-center shrink-0"
          >
            <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-gray-100 mb-2 sm:mb-3">
              <img :src="brand.logoUrl.logo" :alt="brand.name" class="w-full h-full object-cover" />
            </div>
            <span class="text-xs sm:text-sm font-black uppercase tracking-wide truncate w-full">{{ brand.name }}</span>
            <span class="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 sm:mt-1">{{ brand.country }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ================= 7. ACCESSORIES ================= -->
    <section class="max-w-7xl mx-auto px-4 py-10 sm:py-14 md:px-6">
      <div class="flex items-end justify-between mb-6 sm:mb-8">
        <div>
          <h2 class="text-xl sm:text-2xl font-black uppercase tracking-tight">Essential Accessories</h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">Complete your look</p>
        </div>
        <router-link to="/accesory" class="text-xs font-bold uppercase text-red-600 hover:underline shrink-0">
          View All →
        </router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        <div
          v-for="item in accessories.slice(0, 6)"
          :key="item.id"
          class="flex items-center gap-3 sm:gap-4 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:shadow-md transition"
        >
          <img
            :src="item.imageUrl.img"
            :alt="item.title"
            class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg sm:rounded-xl bg-gray-50 shrink-0"
          />
          <div class="flex-1 min-w-0">
            <p class="text-[10px] sm:text-[11px] font-bold uppercase text-gray-400">{{ item.brand }}</p>
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 truncate">{{ item.title }}</h4>
            <p class="text-xs sm:text-sm font-black text-red-600 mt-0.5 sm:mt-1">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 8. TESTIMONIALS ================= -->
    <section class="bg-gray-950 text-white py-12 sm:py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight">What Customers Say</h2>
          <p class="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">Real reviews from real shoppers</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="review in testimonials"
            :key="review.id"
            class="bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6"
          >
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <img
                :src="review.avatarUrl"
                :alt="review.author"
                class="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover"
              />
              <div>
                <p class="text-xs sm:text-sm font-bold">{{ review.author }}</p>
                <p v-if="review.verifiedPurchase" class="text-[10px] sm:text-[11px] text-green-400 font-medium">
                  ✓ Verified Purchase
                </p>
              </div>
            </div>

            <div class="text-yellow-400 text-xs sm:text-sm mb-2 sm:mb-3">
              {{ '★'.repeat(review.rating) }}{{ '☆'.repeat(5 - review.rating) }}
            </div>

            <p class="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-3 sm:mb-4">
              "{{ review.comment }}"
            </p>

            <p class="text-[10px] sm:text-[11px] text-gray-500 font-medium">
              Product: {{ review.productName }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 9. NEWSLETTER ================= -->
    <section class="bg-red-600 text-white py-10 sm:py-14 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 sm:mb-3">
          Stay in the Loop
        </h2>
        <p class="text-red-100 text-xs sm:text-sm mb-5 sm:mb-6">
          Get exclusive drops, promo codes, and early access to sales.
        </p>
        <form class="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto" @submit.prevent>
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 text-xs sm:text-sm outline-none"
          />
          <button
            type="submit"
            class="px-6 py-3 bg-black text-white text-xs font-bold uppercase rounded-lg hover:bg-gray-900 transition min-h-[44px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import STORE_DATABASE from '../../data/Home';
import type { Shoe_man, Shoe_women, Shoe_kids } from '../../data/Home';
import { useCart } from '../../composables/useCart';

const { addToCart } = useCart();

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

const sliderRef = ref<HTMLElement | null>(null);
const currentSlideIndex = ref(0);
let heroTimer: ReturnType<typeof setInterval> | null = null;

const scrollToSlide = (index: number) => {
  if (!sliderRef.value) return;
  currentSlideIndex.value = index;
  const slideWidth = sliderRef.value.clientWidth;
  sliderRef.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  });
};

const nextSlide = () => {
  if (heroSlides.length === 0) return;
  const nextIndex = (currentSlideIndex.value + 1) % heroSlides.length;
  scrollToSlide(nextIndex);
};

const spotlightBrands = computed(() => {
  return brands.filter(brand => spotlightBrandIds.includes(brand.id));
});

onMounted(() => {
  heroTimer = setInterval(nextSlide, 4500);
});

onUnmounted(() => {
  if (heroTimer) clearInterval(heroTimer);
});

type CombinedProduct =
  | (Shoe_man & { type: 'man' })
  | (Shoe_women & { type: 'women' })
  | (Shoe_kids & { type: 'kids' });

const allFeaturedProducts = computed<CombinedProduct[]>(() => {
  const combined: CombinedProduct[] = [
    ...menShoes.map(item => ({ ...item, type: 'man' as const })),
    ...womenShoes.map(item => ({ ...item, type: 'women' as const })),
    ...kidsShoes.map(item => ({ ...item, type: 'kids' as const }))
  ];
  return combined.filter(item => featuredProductIds.includes(item.id));
});

const getImageUrl = (product: any): string => {
  if (product?.imageUrl?.img) return product.imageUrl.img;
  if (product?.images?.img) return product.images.img;
  return 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80';
};

function handleAddToCart(product: any) {
  if (!product.inStock) return;
  addToCart({
    id: `${product.type}-${product.id}`,
    title: product.title,
    brand: product.brand,
    price: Number(product.price),
    image: getImageUrl(product),
    type: product.type === 'man' ? 'Men' : product.type === 'women' ? 'Women' : 'Kids'
  });
}
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee 28s linear infinite;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>