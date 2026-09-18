<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

      <div class="mb-6 sm:mb-8">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-wide">Checkout</h1>
        <p class="text-sm text-gray-500 mt-1">Complete your order details below</p>
      </div>

      <div v-if="!orderItems.length" class="text-center py-20">
        <p class="text-gray-500 text-lg mb-4">No items to checkout.</p>
        <router-link
          to="/accesories"
          class="inline-block px-6 py-3 bg-black text-white text-sm font-bold rounded-lg hover:bg-red-600 transition"
        >
          Continue Shopping
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

        <!-- LEFT FORMS -->
        <div class="lg:col-span-2 space-y-5">

          <!-- 1. Contact -->
          <section class="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-black text-white text-xs flex items-center justify-center">1</span>
              Contact Information
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                <input v-model="form.fullName" type="text" placeholder="John Doe"
                  class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                <input v-model="form.phone" type="tel" placeholder="+855 12 345 678"
                  class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                <input v-model="form.email" type="email" placeholder="you@gmail.com"
                  class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black" />
              </div>
            </div>
          </section>

          <!-- 2. Location -->
          <section class="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-black text-white text-xs flex items-center justify-center">2</span>
              Shipping Location
            </h2>
            <div class="space-y-3 sm:space-y-4">
              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Street Address *</label>
                <input v-model="form.address" type="text" placeholder="House No, Street name..."
                  class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">City / Province *</label>
                  <input v-model="form.city" type="text" placeholder="Phnom Penh"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1.5">District</label>
                  <input v-model="form.district" type="text" placeholder="Chamkarmon"
                    class="w-full h-11 px-3.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5">Additional Notes</label>
                <textarea v-model="form.notes" rows="2" placeholder="Landmark, special instructions..."
                  class="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-black resize-none"></textarea>
              </div>
            </div>
          </section>

          <!-- 3. Delivery Time -->
          <section class="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-black text-white text-xs flex items-center justify-center">3</span>
              Delivery Time
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label
                v-for="option in deliveryOptions"
                :key="option.id"
                class="relative flex flex-col p-3.5 sm:p-4 border rounded-xl cursor-pointer transition"
                :class="form.delivery === option.id ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-400'"
              >
                <input type="radio" :value="option.id" v-model="form.delivery" class="sr-only" />
                <span class="text-sm font-bold text-gray-900">{{ option.title }}</span>
                <span class="text-xs text-gray-500 mt-1">{{ option.time }}</span>
                <span class="text-sm font-extrabold text-gray-900 mt-2">
                  {{ option.price === 0 ? 'FREE' : `$${option.price.toFixed(2)}` }}
                </span>
              </label>
            </div>
          </section>

          <!-- 4. Payment -->
          <section class="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-black text-white text-xs flex items-center justify-center">4</span>
              Payment Method
            </h2>
            <div class="space-y-2.5">
              <label
                v-for="method in paymentMethods"
                :key="method.id"
                class="flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer transition"
                :class="form.payment === method.id ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-400'"
              >
                <input type="radio" :value="method.id" v-model="form.payment" class="w-4 h-4 accent-black" />
                <span class="text-sm font-semibold text-gray-800">{{ method.label }}</span>
              </label>
            </div>
          </section>
        </div>

        <!-- RIGHT SUMMARY -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm sticky top-24">
            <h2 class="text-base sm:text-lg font-bold text-gray-900 mb-4">Order Summary</h2>

            <div class="space-y-3 mb-5 max-h-60 overflow-y-auto">
              <div v-for="item in orderItems" :key="item.id" class="flex gap-3">
                <img :src="item.image" :alt="item.title" class="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover bg-gray-100 flex-shrink-0" />
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-gray-900 line-clamp-2">{{ item.title }}</p>
                  <p class="text-[11px] text-gray-500 mt-0.5">{{ item.brand }}</p>
                  <div class="flex justify-between items-center mt-1">
                    <span class="text-xs text-gray-500">Qty: {{ item.quantity }}</span>
                    <span class="text-sm font-bold text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-100 pt-4 space-y-2.5 text-sm">
              <div class="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span class="font-medium text-gray-900">${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span class="font-medium text-gray-900">{{ shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}` }}</span>
              </div>
              <div class="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${{ total.toFixed(2) }}</span>
              </div>
            </div>

            <button
              @click="placeOrder"
              :disabled="!canPlaceOrder || isSubmitting"
              class="w-full mt-5 h-12 rounded-xl text-sm font-bold uppercase tracking-wide transition"
              :class="canPlaceOrder && !isSubmitting ? 'bg-black text-white hover:bg-red-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
            >
              {{ isSubmitting ? 'Processing...' : 'Place Order' }}
            </button>

            <p class="text-[11px] text-gray-400 text-center mt-3">
              By placing this order you agree to our terms of service.
            </p>
          </div>
        </div>
      </div>

      <!-- Success Modal -->
      <div v-if="orderSuccess" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
        <div class="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-xl font-extrabold text-gray-900 mb-2">Order Placed!</h3>
          <p class="text-sm text-gray-500 mb-1">Order ID: <span class="font-bold text-gray-800">{{ orderId }}</span></p>
          <p class="text-sm text-gray-500 mb-6">
            We will deliver within <span class="font-semibold text-gray-800">{{ selectedDeliveryTime }}</span>
          </p>
          <div class="flex flex-col sm:flex-row gap-2.5">
            <router-link to="/" class="flex-1 h-11 flex items-center justify-center rounded-xl bg-black text-white text-sm font-bold hover:bg-red-600 transition">
              Back to Home
            </router-link>
            <router-link to="/account" class="flex-1 h-11 flex items-center justify-center rounded-xl border border-gray-300 text-sm font-bold text-gray-700 hover:bg-gray-50 transition">
              View Account
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface OrderItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
  type?: string;
}

const orderItems = ref<OrderItem[]>([]);
const isSubmitting = ref(false);
const orderSuccess = ref(false);
const orderId = ref('');

const form = ref({
  fullName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  district: '',
  notes: '',
  delivery: 'standard',
  payment: 'cod'
});

const deliveryOptions = [
  { id: 'standard', title: 'Standard', time: '3 - 5 business days', price: 0 },
  { id: 'express', title: 'Express', time: '1 - 2 business days', price: 4.99 },
  { id: 'same-day', title: 'Same Day', time: 'Today (before 8 PM)', price: 9.99 }
];

const paymentMethods = [
  { id: 'cod', label: 'Cash on Delivery (COD)' },
  { id: 'aba', label: 'ABA Bank Transfer' },
  { id: 'wing', label: 'Wing Money' },
  { id: 'card', label: 'Credit / Debit Card' }
];

const subtotal = computed(() =>
  orderItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const shippingFee = computed(() => {
  const option = deliveryOptions.find(o => o.id === form.value.delivery);
  return option ? option.price : 0;
});

const total = computed(() => subtotal.value + shippingFee.value);

const selectedDeliveryTime = computed(() => {
  const option = deliveryOptions.find(o => o.id === form.value.delivery);
  return option ? option.time : '';
});

const canPlaceOrder = computed(() => {
  return (
    form.value.fullName.trim() !== '' &&
    form.value.phone.trim() !== '' &&
    form.value.address.trim() !== '' &&
    form.value.city.trim() !== '' &&
    orderItems.value.length > 0
  );
});

onMounted(() => {
  const buyNow = localStorage.getItem('famous_footwear_buynow');
  if (buyNow) {
    try {
      orderItems.value = [JSON.parse(buyNow)];
      return;
    } catch {}
  }

  const cart = localStorage.getItem('famous_footwear_cart');
  if (cart) {
    try {
      orderItems.value = JSON.parse(cart);
    } catch {
      orderItems.value = [];
    }
  }

  const user = localStorage.getItem('famous_footwear_user');
  if (user) {
    try {
      const u = JSON.parse(user);
      form.value.fullName = u.name || '';
      form.value.email = u.email || '';
    } catch {}
  }
});

function placeOrder() {
  if (!canPlaceOrder.value || isSubmitting.value) return;

  isSubmitting.value = true;

  setTimeout(() => {
    orderId.value = 'FF' + Date.now().toString().slice(-8);

    localStorage.removeItem('famous_footwear_buynow');
    localStorage.removeItem('famous_footwear_cart');
    window.dispatchEvent(new Event('cart-updated'));

    const orders = JSON.parse(localStorage.getItem('famous_footwear_orders') || '[]');
    orders.unshift({
      id: orderId.value,
      items: orderItems.value,
      form: { ...form.value },
      total: total.value,
      date: new Date().toISOString()
    });
    localStorage.setItem('famous_footwear_orders', JSON.stringify(orders));

    isSubmitting.value = false;
    orderSuccess.value = true;
  }, 1200);
}
</script>