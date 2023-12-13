<template>
  <q-btn icon="account_circle" color="pink" @click="showContent = true" />

  <div
    id="q-app"
    v-show="showContent"
    style="min-height: 100vh; background-color: #f8f8f8"
  >
    <div
      class="q-pa-md"
      style="
        max-width: 400px;
        background-color: #ffffff;
        border: 2px solid #ff4081;
        border-radius: 8px;
      "
    >
      <h6>Üye Girişi</h6>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="email" label="E-mail adresiniz"></q-input>

        <q-input
          filled
          type="password"
          v-model="password"
          label="Şifreniz"
        ></q-input>

        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
          "
        >
          <q-checkbox v-model="rememberMe" label="Beni hatırla"></q-checkbox>
          <q-btn
            flat
            dense
            label="Şifremi Unuttum"
            style="text-align: right; cursor: pointer"
            @click="forgotPassword"
          ></q-btn>
        </div>

        <div
          style="
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        >
          <q-btn
            label="Giriş Yap"
            type="submit"
            color="pink"
            style="width: 100%; margin-bottom: 8px"
          ></q-btn>

          <p style="margin-bottom: 8px; text-align: center">
            Üye olun, fırsat ve kampanyalardan üyelere özel avantajlardan
            yararlanın.
          </p>

          <q-btn
            label="Üye Olun"
            type="button"
            color="red"
            style="width: 100%"
            @click="goToSignUp"
          ></q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>
<style></style>

<script setup>
import { ref } from 'vue';

const showContent = ref(false);
</script>
