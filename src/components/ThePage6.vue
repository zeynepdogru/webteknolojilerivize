<template>
  <q-header style="position: absolute; background: white">
    <q-toolbar>
      <q-btn
        class="capitalize"
        style="
          font-family: sans-serif;
          font-size: 15px;
          margin-left: 150px;
          font-weight: bold;
        "
        flat
        dense
        icon="card_giftcard"
        color="black"
        label="Eve Card ile Fırsatları yakala!"
      ></q-btn>

      <q-space></q-space>

      <q-btn
        class="capitalize"
        flat
        dense
        icon="library_books"
        label="Katalog"
        color="black"
        style="
          margin-right: 10px;
          font-family: sans-serif;
          font-size: 15px;
          font-weight: bold;
        "
      ></q-btn>
      <q-btn
        class="capitalize"
        flat
        dense
        icon="store_mall_directory"
        label="Mağazalarımız"
        color="black"
        style="
          margin-right: 10px;
          font-family: sans-serif;
          font-size: 15px;
          font-weight: bold;
        "
      ></q-btn>
      <q-btn
        class="capitalize"
        flat
        dense
        icon="local_shipping"
        label="Sipariş Takip"
        color="black"
        style="
          font-family: sans-serif;
          font-size: 15px;
          font-weight: bold;
          margin-right: 150px;
        "
      ></q-btn>
    </q-toolbar>
    <q-toolbar inset>
      <q-toolbar-title>
        <a href="https://www.eveshop.com.tr/#"
          ><q-img
            src="https://www.eveshop.com.tr/custom/header_left_1_0.png?rn1700338600"
            style="
              width: 160px;
              height: 80px;
              margin-bottom: 20px;
              margin-left: 110px;
            "
          />
        </a>
      </q-toolbar-title>

      <q-input
        style="
          width: 35%;
          margin-bottom: 5px;
          margin-right: 20%;
          margin-left: 0px;
        "
        outlined
        rounded
        v-model="text"
        placeholder="Ürün ara"
      />
      <router-link to="/page7">
        <q-item clickable v-close-popup>
          <q-btn icon="account_circle" color="pink" />
        </q-item>
          </router-link
      >
      <q-btn
        icon="shopping_basket"
        color="pink"
        style="margin-right: 150px"
        @mouseover="showAddProductOverlay = true"
        @mouseleave="handleMouseLeave"
      />
    </q-toolbar>
    <div class="q-xs" style="margin-top: 10px">
      <q-btn-group spread style="height: 60px">
        <q-btn
          class="capitalize"
          style="font-family: sans-serif; margin-bottom: 10px"
          v-for="(button, index) in buttons"
          :key="index"
          :color="button.color"
          :label="button.label"
          @click="toggleContent"
        />
      </q-btn-group>
      <q-overlay
        v-if="showAddProductOverlay"
        :offset="[0, 35]"
        :max-height="250"
        @mouseover="showAddProductOverlay = true"
        @mouseleave="showAddProductOverlay = false"
        @mouseenter="showAddProductOverlay = true"
      >
        <div
          style="
            width: 200px;
            height: 100px;
            background-color: white;
            border: 1px solid #ccc;
            padding: 10px;
            position: absolute;
            right: 90px;
            top: 120px;
          "
        >
          <p>Ürün eklemek için içerik</p>
          <q-btn
            @click="goToBasket"
            color="pink"
            style="margin-top: 10px; width: 100%"
            >Sepete Git</q-btn
          >
        </div>
      </q-overlay>
    </div>
    <div
      class="q-gutter-md row"
      v-show="showContent"
      style="margin: 15px 15px; max-width: 1000px; height: auto; z-index: 999"
    >
      <q-card v-for="(category, index) in category2" :key="index" flat>
        <q-card-actions style="width: auto">
          <div style="font-weight: 300; color: black">
            <div style="font-weight: 400">{{ category.category2Name }}</div>

            <div
              v-for="(subTitle, subtitleIndex) in category.category2SubTitles"
              :key="subtitleIndex"
            >
              {{ subTitle }}
            </div>
          </div>
        </q-card-actions>
      </q-card>
      <div class="q-gutter-md col-3">
        <img
          src="https://www.eveshop.com.tr/category_images/t54551429126_1.jpg"
          style="height: 100px"
        />
        <img
          src="https://www.eveshop.com.tr/category_images/t28571430040_1.jpg"
          style="height: 100px; margin-top: 0px"
        />
      </div>
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
import { category2 } from './ThePage4.vue';

const showAddProductOverlay = ref(false);
const handleMouseLeave = () => {
  showAddProductOverlay.value = false;
};

const goToBasket = () => {
  console.log('Sepete git butonuna tıklandı!');
};

const showContent = ref(false);
const toggleContent = () => {
  showContent.value = !showContent.value;
};

const buttons = [
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
