    <template>
    <div class="category-page min-h-screen bg-white">
        <!-- Main Content Container -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Page Header -->
        <header class="mb-8 border-b border-gray-200 pb-6">
            <div class="flex items-center gap-3 mb-2">
            <h1 class="text-3xl font-extrabold uppercase tracking-wide text-red-600">
                Sale & Special Offers
            </h1>
            <span class="bg-red-100 text-red-700 text-xs font-bold uppercase px-2.5 py-1 rounded-full">
                Limited Time
            </span>
            </div>
            <p class="text-gray-500 text-base">
            Save big on top footwear brands, exclusive promos, and clearance items.
            </p>
        </header>

        <!-- Promos & Coupon Banners Section -->
        <section v-if="Promo_Type && Promo_Type.length" class="mb-12">
            <h2 class="text-xl font-bold text-gray-900 uppercase tracking-wide mb-4">
            Featured Promo Codes & Deals
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
                v-for="promo in Promo_Type" 
                :key="promo.id"
                class="relative border-2 border-dashed border-red-400 bg-red-50/50 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition"
            >
                <!-- Discount Badge -->
                <div class="flex justify-between items-start mb-3">
                <span class="bg-red-600 text-white font-extrabold text-sm px-3 py-1 rounded">
                    {{ promo.discountPercent }}% OFF
                </span>
                <span v-if="promo.promoTag" class="text-xs font-bold text-red-700 uppercase tracking-wider">
                    {{ promo.promoTag }}
                </span>
                </div>

                <!-- Image & Promo Details -->
                <div class="flex gap-4 items-center mb-4">
                <img 
                    v-if="getPromoImg(promo.imageUrl)" 
                    :src="getPromoImg(promo.imageUrl)" 
                    :alt="promo.title"
                    class="w-20 h-20 object-cover rounded-md bg-white border border-gray-200"
                />
                <div>
                    <h3 class="font-bold text-gray-900 text-base line-clamp-1">
                    {{ promo.title }}
                    </h3>
                    <p class="text-xs text-gray-600 mt-1 line-clamp-2">
                    {{ promo.description }}
                    </p>
                </div>
                </div>

                <!-- Promo Code Box -->
                <div class="mt-auto bg-white border border-red-200 rounded-lg p-2.5 flex items-center justify-between">
                <div class="text-xs text-gray-500">
                    Code: <span class="font-mono font-bold text-gray-900 text-sm ml-1">{{ promo.promoCode }}</span>
                </div>
                <button 
                    @click="copyCode(promo.promoCode)"
                    class="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase rounded transition"
                >
                    Copy Code
                </button>
                </div>
            </div>
            </div>
        </section>

        <!-- Sale Products Filter / Sort Bar -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 mb-6 gap-4">
            <div class="text-sm text-gray-500 font-medium">
            Showing <span class="font-bold text-gray-900">{{ filteredSales.length }}</span> items on sale
            </div>

            <div class="flex flex-wrap items-center gap-4">
            <!-- Brand Filter -->
            <select 
                v-model="selectedBrand" 
                class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none"
            >
                <option value="All">All Brands</option>
                <option v-for="brand in brands" :key="brand" :value="brand">
                {{ brand }}
                </option>
            </select>

            <!-- Sort Options -->
            <select 
                v-model="sortBy" 
                class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none"
            >
                <option value="discount">Biggest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredSales.length === 0" class="text-center py-16">
            <p class="text-gray-500 text-lg">No sale items found matching your filter selection.</p>
            <button 
            @click="resetFilters" 
            class="mt-4 px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition"
            >
            Reset Filters
            </button>
        </div>

        <!-- On Sale Products Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div 
            v-for="item in filteredSales" 
            :key="item.id" 
            class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
            <!-- Product Image Container -->
            <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <img 
                :src="item.imageUrl" 
                :alt="item.title" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                <!-- Sale / Promo Badges -->
                <div class="absolute top-2 left-2 flex flex-col gap-1">
                <span 
                    v-if="item.discountPercent" 
                    class="bg-red-600 text-white text-xs font-bold uppercase px-2 py-0.5 rounded shadow-sm"
                >
                    {{ item.discountPercent }}% OFF
                </span>
                <span 
                    v-if="item.badge" 
                    class="bg-black text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm"
                >
                    {{ item.badge }}
                </span>
                </div>

                <!-- Out of Stock Badge -->
                <span 
                v-if="!item.inStock" 
                class="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold uppercase px-2 py-1 rounded"
                >
                Sold Out
                </span>
            </div>

            <!-- Product Details -->
            <div class="p-4 flex flex-col flex-grow">
                <!-- Brand -->
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                {{ item.brand }}
                </p>

                <!-- Title -->
                <h3 class="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2">
                {{ item.title }}
                </h3>

                <!-- Price Block -->
                <div class="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                <div class="flex items-baseline gap-2">
                    <span class="text-lg font-extrabold text-red-600">
                    ${{ Number(item.salePrice).toFixed(2) }}
                    </span>
                    <span v-if="item.originalPrice" class="text-xs text-gray-400 line-through">
                    ${{ Number(item.originalPrice).toFixed(2) }}
                    </span>
                </div>

                <button 
                    :disabled="!item.inStock"
                    @click="addToCart(item)"
                    class="px-3 py-1.5 text-xs font-bold uppercase rounded transition-colors"
                    :class="item.inStock ? 'bg-red-600 text-white hover:bg-black' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
                >
                    {{ item.inStock ? 'Add to Bag' : 'Sold Out' }}
                </button>
                </div>
            </div>
            </div>
        </div>
        </main>
    </div>
    </template>

    <script setup lang="ts">
    import { ref, computed } from 'vue';
    import { ForSales_Type, Promo_Type } from '../../../data/Sales';

    // Reactive filters state
    const selectedBrand = ref<string>('All');
    const sortBy = ref<string>('discount');

    // Helper to extract image URL from Promo_Type object structure (`item.imageUrl.img`)
    const getPromoImg = (imgObj: any): string => {
    if (typeof imgObj === 'string') return imgObj;
    if (imgObj && typeof imgObj === 'object' && imgObj.img) return imgObj.img;
    return 'https://via.placeholder.com/150';
    };

    // Copy coupon code to clipboard
    const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code "${code}" copied to clipboard!`);
    };

    // Get unique brands for sales filter dropdown
    const brands = computed(() => {
    return Array.from(new Set(ForSales_Type.map(item => item.brand).filter(Boolean)));
    });

    // Filtered and sorted sale items
    const filteredSales = computed(() => {
    let result = [...ForSales_Type];

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

    // Reset filter selections
    const resetFilters = () => {
    selectedBrand.value = 'All';
    sortBy.value = 'discount';
    };

    // Add product to cart handler
    const addToCart = (product: typeof ForSales_Type[0]) => {
    alert(`Added ${product.title} to your bag for $${product.salePrice}!`);
    };
    </script>