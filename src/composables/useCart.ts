// src/composables/useCart.ts

import { ref, computed } from "vue";

export interface CartItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
  type?: string;
}

const CART_KEY = "famous_footwear_cart";

const cart = ref<CartItem[]>([]);

// Load cart when the file is first imported
const saved = localStorage.getItem(CART_KEY);
if (saved) {
  try {
    cart.value = JSON.parse(saved);
  } catch (e) {
    cart.value = [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart.value));
  // Notify navbar to update the cart count
  window.dispatchEvent(new Event("cart-updated"));
}

export function useCart() {
  const cartCount = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  const subtotal = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  function addToCart(product: {
    id: string | number;
    title: string;
    brand: string;
    price: number;
    image: string;
    type?: string;
  }) {
    const cartId = String(product.id);

    const existing = cart.value.find((item) => item.id === cartId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.value.push({
        id: cartId,
        title: product.title,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1,
        type: product.type || ""
      });
    }

    saveCart();
  }

  function increaseQty(id: string) {
    const item = cart.value.find((i) => i.id === id);
    if (item) {
      item.quantity++;
      saveCart();
    }
  }

  function decreaseQty(id: string) {
    const item = cart.value.find((i) => i.id === id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        removeFromCart(id);
        return;
      }
      saveCart();
    }
  }

  function removeFromCart(id: string) {
    cart.value = cart.value.filter((item) => item.id !== id);
    saveCart();
  }

  function clearCart() {
    cart.value = [];
    saveCart();
  }

  return {
    cart,
    cartCount,
    subtotal,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart
  };
}