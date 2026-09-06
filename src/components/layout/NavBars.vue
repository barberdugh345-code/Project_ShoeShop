    <template>
    <header class="sticky top-0 z-50 w-full bg-white border-b border-gray-200 font-sans">
        <!-- Top Announcement Bar -->
        <div class="bg-red-700 text-white text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
        BUY ONE, GET ONE 50% OFF + FREE SHIPPING FOR REWARDS MEMBERS
        </div>

        <!-- Main Navigation Container -->
        <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <!-- Brand Logo -->
        <router-link to="/" class="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">
            Famous<span class="text-red-600">Footwear</span>
        </router-link>

        <!-- Category Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-6">
            <router-link to="/" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Home</router-link>
            <router-link to="/man" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Man</router-link>
            <router-link to="/woman" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Woman</router-link>
            <router-link to="/kids" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Kids</router-link>
            <router-link to="/accesory" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Accessories</router-link>
            <router-link to="/brands" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Brands</router-link>
            <router-link to="/sales" class="text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors" active-class="text-red-600">Sales</router-link>
        </nav>

        <!-- Search Input -->
        <div class="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5 w-52 md:w-64">
            <input 
            v-model="searchQuery" 
            type="search" 
            placeholder="Search shoes, brands..." 
            class="bg-transparent border-none outline-none w-full text-xs text-gray-700 placeholder-gray-400"
            @keyup.enter="handleSearch"
            />
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-4">
            <router-link to="/account" class="text-xs font-bold text-gray-900 hover:text-red-600">Sign In</router-link>
            <router-link to="/cart" class="text-xs font-bold bg-gray-900 text-white px-3 py-1.5 rounded hover:bg-gray-800">
            Bag ({{ cartCount }})
            </router-link>
        </div>
        </div>
    </header>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';

    const searchQuery = ref<string>('');
    const cartCount = ref<number>(0);

    const handleSearch = () => {
    if (searchQuery.value.trim()) {
        console.log('Searching for:', searchQuery.value);
    }
    };
    </script>