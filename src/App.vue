<script setup lang="ts">

import NavBars from './components/layout/NavBars.vue';
// import Footer from './components/layout/Footer.vue';



</script>

<template>
  <nav>
    <NavBars/>
  </nav>


  <main>
      <router-view></router-view>
  </main>

  
  <!-- <footer>
    <Footer/>
  </footer> -->

</template>
