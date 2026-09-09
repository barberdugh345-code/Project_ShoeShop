    <template>
    <div class="category-page min-h-screen bg-white">
        <!-- Main Content Container -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Page Header -->
        <header class="mb-8">
            <h1 class="text-3xl font-extrabold uppercase tracking-wide text-gray-900 mb-2">
            Kids' Shoes & Sneakers
            </h1>
            <p class="text-gray-500 text-base">
            Durable, comfortable, and trendy footwear for active kids.
            </p>
        </header>

        <!-- Filter / Sort Bar -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 mb-6 gap-4">
            <div class="text-sm text-gray-500 font-medium">
            Showing <span class="font-bold text-gray-900">{{ filteredProducts.length }}</span> products
            </div>

            <div class="flex flex-wrap items-center gap-4">
            <!-- Category Filter -->
            <select 
                v-model="selectedCategory" 
                class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none"
            >
                <option value="All">All Categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
                </option>
            </select>

            <!-- Sort Options -->
            <select 
                v-model="sortBy" 
                class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-black focus:border-black p-2.5 outline-none"
            >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
            <p class="text-gray-500 text-lg">No kids' products found matching your criteria.</p>
            <button 
            @click="resetFilters" 
            class="mt-4 px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition"
            >
            Reset Filters
            </button>
        </div>

        <!-- Product Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div 
            v-for="item in filteredProducts" 
            :key="item.id" 
            class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
            <!-- Product Image Container -->
            <div class="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <img 
                :src="getImageUrl(item.images)" 
                :alt="item.title" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />

                <!-- Out of Stock Badge -->
                <span 
                v-if="!item.inStock" 
                class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 rounded"
                >
                Out of Stock
                </span>
            </div>

            <!-- Product Details -->
            <div class="p-4 flex flex-col flex-grow">
                <!-- Category -->
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                {{ item.category }}
                </p>

                <!-- Title -->
                <h3 class="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2">
                {{ item.title }}
                </h3>

                <!-- Available Sizes Display -->
                <div v-if="item.sizes && item.sizes.length" class="mb-3">
                <span class="text-[11px] text-gray-400 uppercase font-semibold block mb-1">Available Sizes:</span>
                <div class="flex flex-wrap gap-1">
                    <span 
                    v-for="size in item.sizes" 
                    :key="size" 
                    class="text-[10px] font-medium border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50 text-gray-700"
                    >
                    {{ size }}
                    </span>
                </div>
                </div>

                <!-- Price & Action Button -->
                <div class="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                <span class="text-lg font-extrabold text-gray-900">
                    ${{ Number(item.price).toFixed(2) }}
                </span>

                <button 
                    :disabled="!item.inStock"
                    @click="addToCart(item)"
                    class="px-3 py-1.5 text-xs font-bold uppercase rounded transition-colors"
                    :class="item.inStock ? 'bg-black text-white hover:bg-red-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
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
    import { Kids_Types } from '../../../data/Kids';

    // Reactive filters state
    const selectedCategory = ref<string>('All');
    const sortBy = ref<string>('featured');

    // Get unique categories
    const categories = computed(() => {
    return Array.from(new Set(Kids_Types.map(item => item.category).filter(Boolean)));
    });

    // Helper for image handling (supports both array of strings and single string URL)
    const getImageUrl = (images: string[] | string) => {
    if (Array.isArray(images) && images.length > 0) {
        return images[0];
    }
    if (typeof images === 'string') {
        return images;
    }
    return 'https://via.placeholder.com/300x300?text=No+Image';
    };

    // Filtered and sorted products list
    const filteredProducts = computed(() => {
    let result = [...Kids_Types];

    if (selectedCategory.value !== 'All') {
        result = result.filter(item => item.category === selectedCategory.value);
    }

    if (sortBy.value === 'price-low') {
        result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy.value === 'price-high') {
        result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
    });

    // Reset filter selections
    const resetFilters = () => {
    selectedCategory.value = 'All';
    sortBy.value = 'featured';
    };

    // Add product to cart handler
    const addToCart = (product: typeof Kids_Types[0]) => {
    alert(`Added ${product.title} to your bag!`);
    };
    </script>