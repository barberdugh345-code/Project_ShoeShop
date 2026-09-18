<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

      <!-- Not logged in -->
      <div v-if="!user" class="text-center py-24">
        <h1 class="text-2xl font-extrabold text-gray-900 mb-2">Welcome</h1>
        <p class="text-gray-500 mb-6">Please login to view your account</p>
        <div class="flex justify-center gap-3">
          <router-link to="/login" class="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-lg hover:bg-red-600 transition">
            Login
          </router-link>
          <router-link to="/signup" class="px-6 py-2.5 border border-gray-300 text-sm font-bold rounded-lg hover:bg-gray-100 transition">
            Sign Up
          </router-link>
        </div>
      </div>

      <!-- Logged in -->
      <div v-else class="space-y-6">

        <!-- Header Card -->
        <div class="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div class="flex items-center gap-4 sm:gap-5">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 to-black text-white flex items-center justify-center text-xl sm:text-2xl font-black shrink-0">
                {{ userInitials }}
              </div>
              <div>
                <h1 class="text-xl sm:text-2xl font-extrabold text-gray-900">{{ user.name }}</h1>
                <p class="text-sm text-gray-500 mt-0.5">{{ user.email }}</p>
                <p class="text-xs text-gray-400 mt-1">Member since {{ memberSince }}</p>
              </div>
            </div>

            <button
              @click="logout"
              class="self-start sm:self-center px-5 py-2.5 text-xs font-bold uppercase border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-400 hover:text-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div class="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 text-center shadow-sm">
            <p class="text-2xl sm:text-3xl font-extrabold text-gray-900">{{ orders.length }}</p>
            <p class="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-semibold tracking-wide">Total Orders</p>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 text-center shadow-sm">
            <p class="text-2xl sm:text-3xl font-extrabold text-gray-900">{{ cartCount }}</p>
            <p class="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-semibold tracking-wide">In Bag</p>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 text-center shadow-sm">
            <p class="text-2xl sm:text-3xl font-extrabold text-red-600">${{ totalSpent.toFixed(0) }}</p>
            <p class="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-semibold tracking-wide">Total Spent</p>
          </div>
          <div class="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 text-center shadow-sm">
            <p class="text-2xl sm:text-3xl font-extrabold text-gray-900">{{ savedAddress ? 'Yes' : 'No' }}</p>
            <p class="text-[11px] sm:text-xs text-gray-500 mt-1 uppercase font-semibold tracking-wide">Address Saved</p>
          </div>
        </div>

        <!-- Tabs -->
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div class="flex border-b border-gray-200 overflow-x-auto">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wide whitespace-nowrap transition border-b-2"
              :class="activeTab === tab.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-400 hover:text-gray-700'"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="p-5 sm:p-6">

            <!-- ORDERS -->
            <div v-if="activeTab === 'orders'">
              <div v-if="orders.length === 0" class="py-14 text-center">
                <p class="text-gray-400 text-sm mb-4">No orders yet</p>
                <router-link to="/man" class="inline-block px-5 py-2.5 bg-black text-white text-xs font-bold rounded-lg hover:bg-red-600 transition">
                  Start Shopping
                </router-link>
              </div>

              <div v-else class="space-y-4">
                <div
                  v-for="order in orders"
                  :key="order.id"
                  class="border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-gray-300 transition"
                >
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <p class="text-sm font-bold text-gray-900">Order #{{ order.id }}</p>
                      <p class="text-xs text-gray-500 mt-0.5">{{ formatDate(order.date) }}</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-[11px] font-bold uppercase text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                        Completed
                      </span>
                      <span class="text-sm font-extrabold text-gray-900">
                        ${{ Number(order.total).toFixed(2) }}
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <div
                      v-for="item in order.items"
                      :key="item.id"
                      class="bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-100 text-[11px] font-medium text-gray-700"
                    >
                      {{ item.title }}
                      <span class="text-gray-400 ml-1">x{{ item.quantity }}</span>
                    </div>
                  </div>

                  <div v-if="order.form" class="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                    <p>
                      Deliver to:
                      <span class="font-medium text-gray-700">
                        {{ order.form.fullName }} — {{ order.form.address }}, {{ order.form.city }}
                      </span>
                    </p>
                    <p class="mt-1">
                      Delivery:
                      <span class="font-medium text-gray-700">{{ order.form.delivery }}</span>
                      · Payment:
                      <span class="font-medium text-gray-700">{{ order.form.payment }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ADDRESS -->
            <div v-if="activeTab === 'address'">
              <h3 class="text-sm font-bold text-gray-900 mb-4">Shipping Address</h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                  <input
                    v-model="addressForm.fullName"
                    type="text"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                  <input
                    v-model="addressForm.phone"
                    type="tel"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                    placeholder="+855 12 345 678"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">City / Province</label>
                  <input
                    v-model="addressForm.city"
                    type="text"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                    placeholder="Phnom Penh"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">Street Address</label>
                  <input
                    v-model="addressForm.address"
                    type="text"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                    placeholder="House No, Street name..."
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">Notes (optional)</label>
                  <textarea
                    v-model="addressForm.notes"
                    rows="2"
                    class="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black resize-none"
                    placeholder="Landmark, gate color..."
                  ></textarea>
                </div>
              </div>

              <button
                @click="saveAddress"
                class="mt-5 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-lg hover:bg-red-600 transition"
              >
                Save Address
              </button>

              <p v-if="addressSaved" class="mt-3 text-xs text-green-600 font-semibold">
                Address saved successfully!
              </p>
            </div>

            <!-- SETTINGS -->
            <div v-if="activeTab === 'settings'">
              <h3 class="text-sm font-bold text-gray-900 mb-4">Account Settings</h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                  <input
                    v-model="settingsForm.name"
                    type="text"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                  <input
                    v-model="settingsForm.email"
                    type="email"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">New Password (optional)</label>
                  <input
                    v-model="settingsForm.password"
                    type="password"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black"
                    placeholder="Leave blank to keep current password"
                  />
                </div>
              </div>

              <button
                @click="saveSettings"
                class="mt-5 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-lg hover:bg-red-600 transition"
              >
                Save Changes
              </button>

              <p v-if="settingsSaved" class="mt-3 text-xs text-green-600 font-semibold">
                Profile updated successfully!
              </p>
            </div>

            <!-- QUICK LINKS -->
            <div v-if="activeTab === 'quick'">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <router-link
                  to="/cart"
                  class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition"
                >
                  <div>
                    <p class="text-sm font-bold text-gray-900">My Bag</p>
                    <p class="text-xs text-gray-500">{{ cartCount }} items in cart</p>
                  </div>
                </router-link>

                <router-link
                  to="/man"
                  class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition"
                >
                  <div>
                    <p class="text-sm font-bold text-gray-900">Continue Shopping</p>
                    <p class="text-xs text-gray-500">Browse all products</p>
                  </div>
                </router-link>

                <router-link
                  to="/sales"
                  class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition"
                >
                  <div>
                    <p class="text-sm font-bold text-gray-900">Sale Items</p>
                    <p class="text-xs text-gray-500">Check special offers</p>
                  </div>
                </router-link>

                <button
                  @click="clearOrders"
                  class="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-red-300 transition text-left"
                >
                  <div>
                    <p class="text-sm font-bold text-gray-900">Clear Order History</p>
                    <p class="text-xs text-gray-500">Reset all past orders</p>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = ref<{ name: string; email: string; password?: string } | null>(null);
const orders = ref<any[]>([]);
const cartCount = ref(0);
const activeTab = ref('orders');
const addressSaved = ref(false);
const settingsSaved = ref(false);
const savedAddress = ref(false);

const tabs = [
  { id: 'orders', label: 'My Orders' },
  { id: 'address', label: 'Address' },
  { id: 'settings', label: 'Settings' },
  { id: 'quick', label: 'Quick Links' }
];

const addressForm = ref({
  fullName: '',
  phone: '',
  city: '',
  address: '',
  notes: ''
});

const settingsForm = ref({
  name: '',
  email: '',
  password: ''
});

const userInitials = computed(() => {
  if (!user.value?.name) return 'U';
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const memberSince = computed(() =>
  new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
);

const totalSpent = computed(() =>
  orders.value.reduce((sum, o) => sum + Number(o.total || 0), 0)
);

function loadData() {
  const savedUser = localStorage.getItem('famous_footwear_user');
  if (savedUser) {
    try {
      user.value = JSON.parse(savedUser);
      settingsForm.value.name = user.value?.name || '';
      settingsForm.value.email = user.value?.email || '';
    } catch {
      user.value = null;
    }
  }

  const savedOrders = localStorage.getItem('famous_footwear_orders');
  if (savedOrders) {
    try {
      orders.value = JSON.parse(savedOrders);
    } catch {
      orders.value = [];
    }
  }

  const savedCart = localStorage.getItem('famous_footwear_cart');
  if (savedCart) {
    try {
      const items = JSON.parse(savedCart);
      cartCount.value = items.reduce((s: number, i: any) => s + (i.quantity || 1), 0);
    } catch {
      cartCount.value = 0;
    }
  }

  const address = localStorage.getItem('famous_footwear_address');
  if (address) {
    try {
      addressForm.value = JSON.parse(address);
      savedAddress.value = true;
    } catch {}
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function saveAddress() {
  localStorage.setItem('famous_footwear_address', JSON.stringify(addressForm.value));
  savedAddress.value = true;
  addressSaved.value = true;
  setTimeout(() => (addressSaved.value = false), 2500);
}

function saveSettings() {
  if (!user.value) return;

  const updated = {
    name: settingsForm.value.name || user.value.name,
    email: settingsForm.value.email || user.value.email,
    password: settingsForm.value.password || user.value.password || ''
  };

  localStorage.setItem('famous_footwear_user', JSON.stringify(updated));
  user.value = updated;
  window.dispatchEvent(new Event('auth-updated'));

  settingsSaved.value = true;
  settingsForm.value.password = '';
  setTimeout(() => (settingsSaved.value = false), 2500);
}

function logout() {
  localStorage.removeItem('famous_footwear_user');
  window.dispatchEvent(new Event('auth-updated'));
  user.value = null;
  router.push('/login');
}

function clearOrders() {
  if (confirm('Clear all order history?')) {
    localStorage.removeItem('famous_footwear_orders');
    orders.value = [];
  }
}

onMounted(loadData);
</script>