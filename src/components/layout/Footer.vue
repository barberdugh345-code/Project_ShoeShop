    <template>
    <footer class="bg-gray-950 text-white pt-10 pb-6 mt-12">
        <div class="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
        <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-200 mb-3">Popular Categories</h4>
            <ul class="space-y-2 text-xs text-gray-400">
            <li><router-link to="/man" class="hover:text-white transition-colors">Men's Shoes</router-link></li>
            <li><router-link to="/woman" class="hover:text-white transition-colors">Women's Shoes</router-link></li>
            <li><router-link to="/kids" class="hover:text-white transition-colors">Kids' Shoes</router-link></li>
            </ul>
        </div>

        <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-200 mb-3">Rewards Program</h4>
            <ul class="space-y-2 text-xs text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Join Famously YOU</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Card Benefits</a></li>
            </ul>
        </div>

        <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-200 mb-3">Help & Support</h4>
            <ul class="space-y-2 text-xs text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Order Status</a></li>
            </ul>
        </div>
        </div>

        <div class="text-center text-xs text-gray-500 mt-6">
        <p>&copy; Famous Footwear Store Clone. All rights reserved.</p>
        </div>
    </footer>
    </template>