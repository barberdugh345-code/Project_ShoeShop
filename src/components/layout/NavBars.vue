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

          <router-link to="/" class="flex-shrink-0">
            <div class="flex flex-col leading-none">
              <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight text-gray-900">FAMOUS</span>
              <span class="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.18em] text-red-600">FOOTWEAR</span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-bold uppercase tracking-wide">
          <router-link to="/" class="hover:text-red-600 transition">Home</router-link>
          <router-link to="/man" class="hover:text-red-600 transition">Men</router-link>
          <router-link to="/woman" class="hover:text-red-600 transition">Women</router-link>
          <router-link to="/kids" class="hover:text-red-600 transition">Kids</router-link>
          <router-link to="/accesories" class="hover:text-red-600 transition">Accessories</router-link>
          <router-link to="/brands" class="hover:text-red-600 transition">Brands</router-link>
          <router-link to="/sales" class="text-red-600 hover:text-red-700 transition">Sale</router-link>
        </nav>

        <!-- Slot for Search component -->
        <slot name="search"></slot>

        <!-- Right Actions -->
        <div class="flex items-center gap-1 sm:gap-2">
          <!-- Mobile Search Icon (controlled by parent or Search component) -->
          <slot name="mobile-search-icon"></slot>

          <!-- Auth Buttons -->
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

          <!-- Cart -->
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

    <!-- Mobile Menu Drawer -->
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

      <slot name="search"></slot>

      <div class="flex flex-col gap-2.5 pt-4 mt-2 border-t border-gray-200 sm:hidden">
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

const mobileMenuOpen = ref(false);
const cartCount = ref(0);
const currentUser = ref<{ name: string; email: string } | null>(null);

const isLoggedIn = computed(() => !!currentUser.value);

const userInitials = computed(() => {
  if (!currentUser.value?.name) return 'U';
  return currentUser.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

function loadUser() {
  const saved = localStorage.getItem('famous_footwear_user');
  if (saved) {
    try {
      currentUser.value = JSON.parse(saved);
    } catch {
      currentUser.value = null;
    }
  } else {
    currentUser.value = null;
  }
}

function updateCartCount() {
  const saved = localStorage.getItem('famous_footwear_cart');
  if (saved) {
    try {
      const items = JSON.parse(saved);
      cartCount.value = items.reduce(
        (sum: number, item: any) => sum + (item.quantity || 1),
        0
      );
    } catch {
      cartCount.value = 0;
    }
  } else {
    cartCount.value = 0;
  }
}

onMounted(() => {
  loadUser();
  updateCartCount();
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