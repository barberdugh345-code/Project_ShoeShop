<template>
  <div class="account-page">
    <div class="account-container">

      <!-- Header -->
      <div class="account-header">
        <div class="avatar">
          {{ user.name ? user.name.charAt(0).toUpperCase() : "U" }}
        </div>
        <div>
          <h1>{{ user.name || "Guest" }}</h1>
          <p>{{ user.email || "Not logged in" }}</p>
        </div>
      </div>

      <!-- Info Cards -->
      <div class="info-grid">
        <div class="info-card">
          <span class="label">Full Name</span>
          <strong>{{ user.name || "-" }}</strong>
        </div>

        <div class="info-card">
          <span class="label">Email Address</span>
          <strong>{{ user.email || "-" }}</strong>
        </div>

        <div class="info-card">
          <span class="label">Account Status</span>
          <strong class="status">Active</strong>
        </div>
      </div>

      <!-- Actions -->
      <div class="actions">
        <button class="btn-outline" @click="goHome">Continue Shopping</button>
        <button class="btn-danger" @click="logout">Logout</button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = ref({
  name: "",
  email: "",
  password: ""
});

onMounted(() => {
  const saved = localStorage.getItem("famous_footwear_user");

  if (saved) {
    user.value = JSON.parse(saved);
  } else {
    router.push("/login");
  }
});

function goHome() {
  router.push("/");
}

function logout() {
  localStorage.removeItem("famous_footwear_user");
  router.push("/login");
}
</script>

<style scoped>
.account-page {
  min-height: 80vh;
  background: #f8f8f8;
  padding: 50px 20px;
}

.account-container {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.account-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
  padding-bottom: 28px;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
}

.account-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: #111;
}

.account-header p {
  margin: 4px 0 0;
  color: #777;
  font-size: 14px;
}

.info-grid {
  display: grid;
  gap: 16px;
  margin-bottom: 36px;
}

.info-card {
  background: #f7f7f7;
  border-radius: 12px;
  padding: 18px 20px;
}

.info-card .label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.info-card strong {
  font-size: 15px;
  color: #111;
}

.status {
  color: #16a34a !important;
}

.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-outline {
  flex: 1;
  min-width: 160px;
  height: 48px;
  border: 1.5px solid #111;
  background: white;
  color: #111;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: #111;
  color: white;
}

.btn-danger {
  flex: 1;
  min-width: 140px;
  height: 48px;
  border: none;
  background: #d71920;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-danger:hover {
  background: #b3141a;
}

@media (max-width: 500px) {
  .account-container {
    padding: 28px 22px;
  }

  .account-header {
    flex-direction: column;
    text-align: center;
  }

  .actions {
    flex-direction: column;
  }
}
</style>