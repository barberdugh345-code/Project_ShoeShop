<template>
  <div class="cart-page">
    <div class="cart-container">

      <div class="cart-header">
        <h1>Your Bag</h1>
        <p v-if="cart.length > 0">{{ cartCount }} item{{ cartCount > 1 ? "s" : "" }}</p>
      </div>

      <!-- Empty -->
      <div v-if="cart.length === 0" class="empty-cart">
        <div class="empty-icon">🛍️</div>
        <h2>Your bag is empty</h2>
        <p>Looks like you haven’t added anything yet.</p>
        <router-link to="/" class="btn-primary">Continue Shopping</router-link>
      </div>

      <!-- Cart Items -->
      <div v-else class="cart-content">
        <div class="cart-items">
          <div v-for="item in cart" :key="item.id" class="cart-item">
            <div class="item-image">
              <img :src="item.image" :alt="item.title" />
            </div>

            <div class="item-info">
              <h3>{{ item.title }}</h3>
              <p class="brand">{{ item.brand }}</p>
              <p class="type" v-if="item.type">{{ item.type }}</p>
              <p class="price">${{ item.price.toFixed(2) }}</p>
            </div>

            <div class="item-actions">
              <div class="quantity">
                <button @click="decreaseQty(item.id)">−</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQty(item.id)">+</button>
              </div>
              <button class="remove-btn" @click="removeFromCart(item.id)">Remove</button>
            </div>

            <div class="item-total">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="cart-summary">
          <h3>Order Summary</h3>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>${{ subtotal.toFixed(2) }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span>{{ shipping === 0 ? "FREE" : "$" + shipping.toFixed(2) }}</span>
          </div>

          <div class="summary-row total">
            <span>Total</span>
            <span>${{ total.toFixed(2) }}</span>
          </div>

          <button class="btn-checkout" @click="checkout">Checkout</button>
          <router-link to="/" class="continue-link">Continue Shopping</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCart } from "../../../composables/useCart"; 

const router = useRouter();

// Destructure useCart once
const {
  cart,
  cartCount,
  subtotal,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart
} = useCart();

const shipping = computed(() => (subtotal.value >= 75 ? 0 : 8.99));
const total = computed(() => subtotal.value + shipping.value);

function checkout() {
  alert("Checkout successful! Thank you for shopping with Famous Footwear.");
  clearCart();
  router.push("/");
}
</script>

<style scoped>
.cart-page {
  min-height: 80vh;
  background: #f8f8f8;
  padding: 40px 20px;
}

.cart-container {
  max-width: 1100px;
  margin: 0 auto;
}

.cart-header {
  margin-bottom: 32px;
}

.cart-header h1 {
  margin: 0;
  font-size: 32px;
  font-weight: 800;
}

.cart-header p {
  margin: 6px 0 0;
  color: #777;
}

.empty-cart {
  background: white;
  border-radius: 16px;
  padding: 80px 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-cart h2 {
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 800;
}

.empty-cart p {
  color: #777;
  margin-bottom: 28px;
}

.btn-primary {
  display: inline-block;
  padding: 14px 32px;
  background: #111;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 700;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 30px;
  align-items: start;
}

.cart-items {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 20px;
  padding: 24px;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f3f3;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info h3 {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
}

.item-info .brand {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.item-info .type {
  margin: 2px 0 6px;
  font-size: 12px;
  color: #999;
}

.item-info .price {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px 8px;
}

.quantity button {
  width: 28px;
  height: 28px;
  border: none;
  background: #f3f3f3;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.quantity span {
  font-weight: 700;
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  border: none;
  background: none;
  color: #d71920;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.item-total {
  font-size: 16px;
  font-weight: 800;
  min-width: 80px;
  text-align: right;
}

.cart-summary {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 100px;
}

.cart-summary h3 {
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: 800;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 14px;
  color: #555;
}

.summary-row.total {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid #eee;
  font-size: 18px;
  font-weight: 800;
  color: #111;
}

.btn-checkout {
  width: 100%;
  height: 50px;
  margin-top: 24px;
  border: none;
  border-radius: 10px;
  background: #111;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

.continue-link {
  display: block;
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 800px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-item {
    grid-template-columns: 80px 1fr;
  }

  .item-actions,
  .item-total {
    grid-column: 1 / -1;
  }

  .item-actions {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>