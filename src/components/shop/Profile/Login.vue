<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-header">
        <h1>Welcome Back</h1>
        <p>Login to your Famous Footwear account</p>
      </div>

      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="form.password"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit" class="btn-primary">Login</button>
      </form>

      <p class="switch-text">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  email: "",
  password: ""
});

const error = ref("");

function login() {
  error.value = "";

  const saved = localStorage.getItem("famous_footwear_user");

  if (!saved) {
    error.value = "No account found. Please sign up first.";
    return;
  }

  const user = JSON.parse(saved);

  if (form.value.email === user.email && form.value.password === user.password) {
    localStorage.setItem("famous_footwear_user", JSON.stringify(user));
    router.push("/account");
  } else {
    error.value = "Incorrect email or password.";
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  padding: 40px 20px;
}

.auth-card {
  background: white;
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 40px 36px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.auth-header {
  text-align: center;
  margin-bottom: 32px;
}

.auth-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  background: #f3f3f3;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.auth-header h1 {
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  color: #111;
}

.auth-header p {
  margin: 8px 0 0;
  color: #777;
  font-size: 14px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #333;
}

.form-group input {
  width: 100%;
  height: 46px;
  padding: 0 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus {
  border-color: #111;
}

.error {
  color: #d71920;
  font-size: 13px;
  margin: -6px 0 14px;
}

.btn-primary {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: #111;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #333;
}

.switch-text {
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #666;
}

.switch-text a {
  color: #d71920;
  font-weight: 700;
  text-decoration: none;
  margin-left: 4px;
}

.switch-text a:hover {
  text-decoration: underline;
}
</style>