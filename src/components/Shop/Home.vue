
<template>
  <div>
    <div>
      <h3>Hero Slides</h3>
      <pre>{{ heroSlides }}</pre>

      <h3>Featured Categories</h3>
      <pre>{{ featuredCategories }}</pre>

      <h3>Promo Banners</h3>
      <pre>{{ promoBanners }}</pre>

      <h3>Spotlight Brand IDs</h3>
      <pre>{{ spotlightBrandIds }}</pre>

      <h3>Featured Product IDs</h3>
      <pre>{{ featuredProductIds }}</pre>

      <h3>Testimonials</h3>
      <pre>{{ testimonials }}</pre>
    </div>


    <div>
      <h3>Men Shoes</h3>
      <pre>{{ menShoes }}</pre>

      <h3>Women Shoes</h3>
      <pre>{{ womenShoes }}</pre>

      <h3>Kids Shoes</h3>
      <pre>{{ kidsShoes }}</pre>

      <h3>Brands</h3>
      <pre>{{ brands }}</pre>

      <h3>Accessories</h3>
      <pre>{{ accessories }}</pre>
    </div>
  </div>
</template>


<script setup lang="ts">
    import STORE_DATABASE from '../../Data/Home';

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
</script>