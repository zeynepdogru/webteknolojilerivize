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
        border: 1px solid #ff4081;
      "
    >
      <h6 style="margin-top: 0px; margin-bottom: 10px; font-size: 18px">
        ÜYE GİRİŞİ
      </h6>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          style="border: 1px solid rgb(222, 221, 221)"
          filled
          v-model="email"
          label="E-mail adresiniz"
        ></q-input>

        <q-input
          style="border: 1px solid rgb(222, 221, 221)"
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
            style="
              text-align: right;
              cursor: pointer;
              text-transform: capitalize;
            "
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
            style="
              width: 100%;
              height: 45px;
              margin-bottom: 8px;
              border-radius: 30px;
            "
          ></q-btn>

          <div style="margin-bottom: 8px; text-align: left">
            <p
              style="
                font-weight: 400;
                font-size: 16px;
                margin-bottom: 10px;
                margin-top: 10px;
              "
            >
              ÜYE OLMAK İÇİN
            </p>
            <p style="font-weight: 300">
              Üye olun, fırsat ve kampanyalardan üyelere özel avantajlardan
              yararlanın.
            </p>
          </div>

          <q-btn
            label="Üye Olun"
            type="button"
            color="red"
            style="width: 100%; height: 45px; border-radius: 30px"
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
