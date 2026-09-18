<template>
  <header class="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
    <!-- Announcement Bar -->
    <div class="bg-black text-white text-center py-2 px-3 text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wide">
      FREE SHIPPING ON ORDERS OVER $75 &nbsp;|&nbsp; NEW SEASON. NEW ENERGY.
    </div>

    <!-- Main Header -->
    <div class="max-w-7xl mx-auto px-3 sm:px-5 md:px-6">
      <div class="h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-between gap-2 sm:gap-3">

        <!-- Left: Hamburger + Logo -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Hamburger (Phone + iPad) -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle Menu"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Logo -->
          <router-link to="/" class="flex-shrink-0">
            <div class="flex flex-col leading-none">
              <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight text-gray-900">FAMOUS</span>
              <span class="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.18em] text-red-600">FOOTWEAR</span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation (only large screens) -->
        <nav class="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-bold uppercase tracking-wide">
          <router-link to="/" class="hover:text-red-600 transition">Home</router-link>
          <router-link to="/man" class="hover:text-red-600 transition">Men</router-link>
          <router-link to="/woman" class="hover:text-red-600 transition">Women</router-link>
          <router-link to="/kids" class="hover:text-red-600 transition">Kids</router-link>
          <router-link to="/accesories" class="hover:text-red-600 transition">Accessories</router-link>
          <router-link to="/brands" class="hover:text-red-600 transition">Brands</router-link>
          <router-link to="/sales" class="text-red-600 hover:text-red-700 transition">Sale</router-link>
        </nav>

        <!-- Search Bar (Tablet + Desktop) -->
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

          <!-- Live Search Results -->
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
        <div class="flex items-center gap-1 sm:gap-2">
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

          <!-- AUTH ACTION SECTION (Desktop & Tablets) -->
          <!-- IF NOT LOGGED IN: SHOW LOGIN & SIGNUP BUTTONS -->
          <template v-if="!isLoggedIn">
            <router-link
              to="/login"
              class="hidden sm:inline-flex px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide border border-gray-300 rounded-lg hover:border-black transition"
            >
              Login
            </router-link>
            <router-link
              to="/signup"
              class="hidden sm:inline-flex px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide bg-black text-white rounded-lg hover:bg-red-600 transition"
            >
              Sign Up
            </router-link>
          </template>

          <!-- IF LOGGED IN: HIDE LOGIN/SIGNUP & SHOW USER PROFILE -->
          <router-link
            v-else
            to="/account"
            class="hidden sm:flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide border border-gray-300 rounded-lg hover:border-black transition"
          >
            <span class="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-black text-white flex items-center justify-center text-[10px] font-black">
              {{ userInitials }}
            </span>
            <span class="hidden md:inline">Account</span>
          </router-link>

          <!-- Cart Icon -->
          <router-link
            to="/cart"
            class="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-gray-100 transition"
          >
            <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Search Bar (Phone only) -->
    <div v-if="mobileSearchOpen" class="md:hidden px-4 pb-3 pt-1 bg-white border-b border-gray-200">
      <div class="relative w-full">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search shoes, brands..."
          class="w-full h-10 pl-10 pr-4 rounded-full border border-gray-300 bg-gray-50 text-sm outline-none focus:border-black focus:bg-white transition"
          autofocus
        />
        <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      <!-- Mobile Search Results -->
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
            class="flex items-center gap-3 p-3 hover:bg-gray-50 transition text-left"
          >
            <img :src="getProductImg(item.brand || item.title)" class="w-11 h-11 object-cover rounded-lg bg-gray-100 flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="text-[10px] font-bold uppercase text-red-600">{{ item.section }}</p>
              <p class="text-xs font-bold text-gray-900 truncate">{{ item.title }}</p>
              <p class="text-xs font-extrabold text-gray-700">${{ Number(item.finalPrice).toFixed(2) }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile + iPad Menu Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-5 px-5 sm:px-6 flex flex-col gap-1 z-50"
    >
      <nav class="flex flex-col text-[15px] font-bold uppercase tracking-wide">
        <router-link to="/" @click="mobileMenuOpen = false" class="py-3 border-b border-gray-100 hover:text-red-600 transition">Home</router-link>
        <router-link to="/man" @click="mobileMenuOpen = false" class="py-3 border-b border-gray-100 hover:text-red-600 transition">Men</router-link>
        <router-link to="/woman" @click="mobileMenuOpen = false" class="py-3 border-b border-gray-100 hover:text-red-600 transition">Women</router-link>
        <router-link to="/kids" @click="mobileMenuOpen = false" class="py-3 border-b border-gray-100 hover:text-red-600 transition">Kids</router-link>
        <router-link to="/accesories" @click="mobileMenuOpen = false" class="py-3 border-b border-gray-100 hover:text-red-600 transition">Accessories</router-link>
        <router-link to="/brands" @click="mobileMenuOpen = false" class="py-3 border-b border-gray-100 hover:text-red-600 transition">Brands</router-link>
        <router-link to="/sales" @click="mobileMenuOpen = false" class="py-3 text-red-600 hover:text-red-700 transition">Sale</router-link>
      </nav>

      <!-- AUTH BUTTONS INSIDE MOBILE DRAWER -->
      <div class="flex flex-col gap-2.5 pt-4 mt-2 border-t border-gray-200">
        <!-- IF NOT LOGGED IN: SHOW LOGIN & SIGNUP IN DRAWER -->
        <template v-if="!isLoggedIn">
          <router-link
            to="/login"
            @click="mobileMenuOpen = false"
            class="w-full py-3 text-center text-xs font-bold uppercase tracking-wide border border-gray-300 rounded-xl hover:border-black transition"
          >
            Login
          </router-link>
          <router-link
            to="/signup"
            @click="mobileMenuOpen = false"
            class="w-full py-3 text-center text-xs font-bold uppercase tracking-wide bg-black text-white rounded-xl hover:bg-red-600 transition"
          >
            Sign Up
          </router-link>
        </template>

        <!-- IF LOGGED IN: HIDE LOGIN/SIGNUP & SHOW ACCOUNT PROFILE BUTTON IN DRAWER -->
        <router-link
          v-else
          to="/account"
          @click="mobileMenuOpen = false"
          class="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wide border border-gray-300 rounded-xl hover:border-black transition"
        >
          <span class="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-black text-white flex items-center justify-center text-[10px] font-black">
            {{ userInitials }}
          </span>
          Account Dashboard
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Man_Type } from '../../data/Man';
import { Woman_Type } from '../../data/Woman';
import { Kids_Types } from '../../data/Kids';
import { Accessories } from '../../data/Accesories';
import { ForSales_Type } from '../../data/Sales';

const searchQuery = ref('');
const cartCount = ref(0);
const mobileMenuOpen = ref(false);
const mobileSearchOpen = ref(false);

// ================= AUTH SYSTEM =================
const currentUser = ref<{ name?: string; email?: string } | null>(null);

// Computes true only if user object exists AND has an email
const isLoggedIn = computed(() => {
  return !!currentUser.value && !!currentUser.value.email;
});

// Generates 2-letter initials or fallback to 'U'
const userInitials = computed(() => {
  if (!currentUser.value?.name) return 'U';
  return currentUser.value.name
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'U';
});

function loadUser() {
  const saved = localStorage.getItem('famous_footwear_user');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        currentUser.value = parsed;
      } else {
        currentUser.value = null;
      }
    } catch {
      currentUser.value = null;
    }
  } else {
    currentUser.value = null;
  }
}

// ================= CART SYSTEM =================
function updateCartCount() {
  const saved = localStorage.getItem('famous_footwear_cart');
  if (saved) {
    try {
      const items = JSON.parse(saved);
      if (Array.isArray(items)) {
        cartCount.value = items.reduce(
          (sum: number, item: any) => sum + (item.quantity || 1),
          0
        );
      } else {
        cartCount.value = 0;
      }
    } catch {
      cartCount.value = 0;
    }
  } else {
    cartCount.value = 0;
  }
}

// ================= SEARCH SYSTEM =================
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
    ...Woman_Type.map(item => ({ ...item, section: 'Woman', finalPrice: Number(item.price) })),
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

// ================= LIFECYCLE LISTENERS =================
onMounted(() => {
  loadUser();
  updateCartCount();

  // Listen to cross-tab changes and local window auth updates
  window.addEventListener('storage', loadUser);
  window.addEventListener('auth-updated', loadUser);
  window.addEventListener('cart-updated', updateCartCount);
});

onBeforeUnmount(() => {
  window.removeEventListener('storage', loadUser);
  window.removeEventListener('auth-updated', loadUser);
  window.removeEventListener('cart-updated', updateCartCount);
});
</script>