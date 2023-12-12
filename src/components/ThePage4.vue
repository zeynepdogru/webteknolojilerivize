<template>
  <h6 style="margin-bottom: 20px">ÜST KATEGORİ</h6>
  <div
    class="q-gutter-md col"
    style="width: 2500px; height: 100px; margin-bottom: 100px"
  >
    <q-card v-for="(category, index) in category2" :key="index" flat>
      <q-card-actions style="width: auto">
        <div style="font-weight: 500; font-size: 17px; color: black">
          <div class="slide">
            {{ category.category2Name }}
            <q-icon class="fa-solid fa-caret-down"></q-icon>
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </div>
  <h6 style="margin-bottom: 10px">Kategorilere Göre</h6>
  <div
    class="q-gutter-md col"
    style="
      width: 250px;
      border-bottom: 1px solid grey;
      border-top: 1px solid grey;
      overflow-y: auto;
      max-height: 150px;
    "
  >
    <q-card v-for="(category, index) in category2" :key="index" flat>
      <q-card-actions style="width: auto">
        <div
          style="
            font-weight: 300;
            font-size: 17px;
            color: black;
            margin: -15px 0px;
          "
        >
          <div
            class="slide"
            v-for="(subCategory, subIndex) in category.category2SubTitles"
            :key="subIndex"
          >
            <q-icon class="fa-regular fa-square"></q-icon>
            {{ subCategory }}
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </div>
  <h6 style="margin-bottom: 10px">Markalara Göre</h6>
  <div
    class="q-gutter-md col"
    style="
      width: 250px;
      height: 150px;
      border-top: 1px solid grey;
      overflow-x: auto;
    "
  >
    <q-card v-for="(product, index) in products2" :key="index" flat>
      <q-card-actions style="width: auto">
        <div
          style="
            font-weight: 300;
            font-size: 17px;
            color: black;
            margin: -15px 0px;
          "
        >
          <div class="slide">
            <q-icon class="fa-regular fa-square"></q-icon>
            {{ product.productBrand }}
          </div>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>
<style>
.slide:hover {
  color: pink;
}
</style>

<script setup langs="ts">
import { products2 } from './ThePage3.vue';
</script>

<script>
export const category2 = [
  {
    category2Name: 'Göz Makyajı',
    category2SubTitles: [
      'Maskara',
      'Göz Kalemi',
      'Eyeliner',
      'Far',
      'Kaş Kalemi ve Farı',
      'Kaş Maskarası',
    ],
  },
  {
    category2Name: 'Yüz Makyajı',
    category2SubTitles: [
      'Fondöten',
      'Kapatıcı',
      'Pudra',
      'Makyaj Sabitleyici',
      'Allık',
      'Makyaj Bazı',
      'Aydınlatıcı',
      'Kontür',
    ],
  },
  {
    category2Name: 'Makyaj Aksesuar',
    category2SubTitles: [
      'Makyaj Fırçası',
      'Makyaj Süngeri',
      'Takma Kirpik',
      'Makyaj Çantası',
    ],
  },
];
</script>
