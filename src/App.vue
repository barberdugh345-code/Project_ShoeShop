<template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">

    <NavBars />

    <main class="flex-grow">

      <router-view />
      
    </main>

    <Footer />

  </div>
</template>

<script setup lang="ts">
import Footer from './components/layout/Footer.vue';
import NavBars from './components/layout/NavBars.vue';
</script>