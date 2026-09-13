<template>
  <footer class="bg-gray-950 text-white pt-14 pb-8 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Main Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

        <!-- Brand Info -->
        <div>
          <h3 class="text-xl font-extrabold tracking-tight mb-4">
            FAMOUS <span class="text-red-500">FOOTWEAR</span>
          </h3>
          <p class="text-sm text-gray-400 leading-relaxed mb-6">
            Your go-to destination for the latest sneakers, shoes, and accessories from top brands.
          </p>

          <!-- Social Media -->
          <div class="flex items-center gap-4">
            <!-- Facebook -->
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
              title="Facebook"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition"
              title="Instagram"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
              </svg>
            </a>

            <!-- Telegram -->
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition"
              title="Telegram"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9.8 15.6l-.4 4.2c.6 0 .8-.2 1.1-.5l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9L21.8 5c.3-1.2-.5-1.7-1.4-1.4L3.3 10.2c-1.2.4-1.1 1.1-.2 1.4l4.7 1.5 10.9-6.9c.5-.3 1-.1.6.2L9.8 15.6z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Shop Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-200 mb-4">
            Shop
          </h4>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li><router-link to="/" class="hover:text-white transition">Home</router-link></li>
            <li><router-link to="/man" class="hover:text-white transition">Men's Shoes</router-link></li>
            <li><router-link to="/woman" class="hover:text-white transition">Women's Shoes</router-link></li>
            <li><router-link to="/kids" class="hover:text-white transition">Kids' Shoes</router-link></li>
            <li><router-link to="/accesory" class="hover:text-white transition">Accessories</router-link></li>
            <li><router-link to="/brands" class="hover:text-white transition">Brands</router-link></li>
            <li><router-link to="/sales" class="hover:text-white transition text-red-400">Sale</router-link></li>
          </ul>
        </div>

        <!-- Account Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-200 mb-4">
            My Account
          </h4>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li><router-link to="/login" class="hover:text-white transition">Login</router-link></li>
            <li><router-link to="/signup" class="hover:text-white transition">Sign Up</router-link></li>
            <li><router-link to="/account" class="hover:text-white transition">My Account</router-link></li>
            <li><router-link to="/cart" class="hover:text-white transition">My Bag</router-link></li>
          </ul>
        </div>

        <!-- Help & Support -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-200 mb-4">
            Help & Support
          </h4>
          <ul class="space-y-2.5 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" class="hover:text-white transition">Order Status</a></li>
            <li><a href="#" class="hover:text-white transition">Size Guide</a></li>
            <li><a href="#" class="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" class="hover:text-white transition">FAQs</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} Famous Footwear. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition">Privacy Policy</a>
          <a href="#" class="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>