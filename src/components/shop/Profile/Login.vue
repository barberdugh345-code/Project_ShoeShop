<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gray-50">
    <div class="max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
      <h2 class="text-2xl font-black text-gray-900 text-center mb-1">Welcome Back</h2>
      <p class="text-xs text-gray-500 text-center mb-6">Login to your Famous Footwear account</p>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            required
            placeholder="test@example.com"
            class="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-blue-50/30 text-sm outline-none focus:border-black focus:bg-white transition"
          />
        </div>

        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            required
            placeholder="••••••"
            class="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-blue-50/30 text-sm outline-none focus:border-black focus:bg-white transition"
          />
        </div>

        <p v-if="errorMessage" class="text-xs text-red-600 font-medium text-center">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          class="w-full py-3 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition shadow-sm active:scale-[0.99]"
        >
          Login
        </button>
      </form>

      <p class="text-xs text-gray-500 text-center mt-6">
        Don't have an account? 
        <router-link to="/signup" class="text-red-600 font-bold hover:underline">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');

function handleLogin() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter both email and password.';
    return;
  }

  // 1. Check registered users list (if you save users during signup)
  const registeredUsersRaw = localStorage.getItem('famous_footwear_users');
  let userToLog = null;

  if (registeredUsersRaw) {
    try {
      const usersList = JSON.parse(registeredUsersRaw);
      if (Array.isArray(usersList)) {
        userToLog = usersList.find((u: any) => u.email.toLowerCase() === email.value.toLowerCase());
      }
    } catch (e) {
      console.error(e);
    }
  }

  // 2. Fallback: If not found in registered users, generate user data from email
  if (!userToLog) {
    const defaultName = email.value.split('@')[0].replace(/[._]/g, ' ');
    userToLog = {
      name: defaultName || 'User',
      email: email.value
    };
  }

  // 3. Save active logged-in user
  localStorage.setItem('famous_footwear_user', JSON.stringify(userToLog));

  // 4. Notify Header component to update immediately
  window.dispatchEvent(new Event('auth-updated'));

  // 5. Redirect user to home page
  router.push('/');
}
</script>