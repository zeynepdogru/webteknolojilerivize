<template>
  <q-header style="position: absolute; top: 0; right: 0; background: white">
    <q-toolbar>
      <q-btn
        class="capitalize"
        style="font-family: sans-serif; font-size: 12px"
        flat
        dense
        icon="card_giftcard"
        color="pink"
        label="Eve Card ile Fırsatları yakala"
      ></q-btn>

      <q-space></q-space>

      <q-btn
        class="capitalize"
        flat
        dense
        icon="library_books"
        label="Katalog"
        color="black"
        style="margin-right: 10px; font-family: sans-serif; font-size: 12px"
      ></q-btn>
      <q-btn
        class="capitalize"
        flat
        dense
        icon="store_mall_directory"
        label="Mağazalarımız"
        color="black"
        style="margin-right: 10px; font-family: sans-serif; font-size: 12px"
      ></q-btn>
      <q-btn
        class="capitalize"
        flat
        dense
        icon="local_shipping"
        label="Sipariş Takip"
        color="black"
        style="font-family: sans-serif; font-size: 12px"
      ></q-btn>
    </q-toolbar>
    <q-toolbar inset>
      <q-toolbar-title>
        <a href="https://www.eveshop.com.tr/#"
          ><q-img
            src="https://www.eveshop.com.tr/custom/header_left_1_0.png?rn1700338600"
            style="height: 70px; margin-bottom: 10px"
          />
        </a>
      </q-toolbar-title>

      <q-input
        style="width: 70%; margin-bottom: 5px; margin-right: 10%"
        outlined
        rounded
        v-model="text"
        placeholder="Ürün ara"
      />

      <q-btn icon="account_circle" color="pink" />
      <q-btn icon="shopping_basket" color="pink" />
    </q-toolbar>

    <div class="q-xs">
      <q-btn-group spread>
        <q-btn
          class="capitalize"
          style="font-family: sans-serif; margin-bottom: 10px"
          v-for="(button, index) in buttons"
          :key="index"
          :color="button.color"
          :label="button.label"
        />
      </q-btn-group>
    </div>
  </q-header>
</template>
<style>
.capitalize {
  text-transform: capitalize;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const buttons: { color: string; label: string }[] = [
  { color: 'pink', label: 'Markalar' },
  { color: 'pink', label: 'Makyaj' },
  { color: 'pink', label: 'Cilt Bakım' },
  { color: 'pink', label: 'Saç Bakım' },
  { color: 'pink', label: 'Parfüm' },
  { color: 'pink', label: 'Kişisel Bakım' },
  { color: 'pink', label: 'Erkek Bakım' },
  { color: 'pink', label: 'Anne&Bebek' },
  { color: 'pink', label: 'Ev&Yaşam' },
  { color: 'pink', label: 'Kampanyalar' },
  { color: 'pink', label: 'Blog' },
];
const text = ref('');
</script>
