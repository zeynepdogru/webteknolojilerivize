<template>
  <div class="q-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      autoplay="true"
      autoplayTimeOut="3000"
      autoPlayHoverPause="true"
      style="width: 100%; height: 570px; margin-top: 10px"
    >
      <q-carousel-slide
        v-for="(item, index) in items"
        :key="index"
        :name="index + 1"
        :img-src="item.imgSrc"
      />
    </q-carousel>
  </div>
  <div class="q-pa-md" id="rounded-photos">
    <div class="q-gutter-sm row image-wrapper">
      <div
        v-for="(item, index) in photoData"
        :key="index"
        class="image-container"
      >
        <a :href="item.link"
          ><q-img :src="item.imageUrl" class="rounded-images" rounded
        /></a>
        <div>
          {{ item.caption }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.product-item {
  text-align: center;
  margin-right: 20px;
}
.image-container {
  display: inline-block;
  margin: 5px;
  width: 7%;
}
.image-container img {
  margin: 0 auto;
  max-width: 100%;
}

.rounded-images {
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid orange;
}
</style>

<script setup>
import { ref } from 'vue';
const photoData = [
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1026805_1_LARGE.jpg',
    caption: 'Yüz Bakım',
    link: 'https://www.eveshop.com.tr/cilt-bakimi/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1024800_1_LARGE.jpg',
    caption: 'Makyaj',
    link: 'https://www.eveshop.com.tr/makyaj/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1005235_1_LARGE.jpg',
    caption: 'Saç Bakım',
    link: 'https://www.eveshop.com.tr/sac-bakimi/sac-bakim-urunleri/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1019093_1_SMALL.jpg',
    caption: 'Ağız Bakım',
    link: 'https://www.eveshop.com.tr/kisisel-bakim/agiz-bakim/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028320_1_SMALL.jpg',
    caption: 'Anne&Bebek',
    link: 'https://www.eveshop.com.tr/anne-bebek-bakimi/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027159_1_SMALL.jpg',
    caption: 'Parfümler',
    link: 'https://www.eveshop.com.tr/parfum-deodorant/parfum/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1024462_1_SMALL.jpg',
    caption: 'Duş Jelleri',
    link: 'https://www.eveshop.com.tr/kisisel-bakim/banyo-ve-vucut/dus-jeli/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1029811_1_SMALL.jpg',
    caption: 'Maruderm',
    link: 'https://www.eveshop.com.tr/maruderm_br_549',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028968_1_SMALL.jpg',
    caption: 'Maskaralar',
    link: 'https://www.eveshop.com.tr/makyaj/goz-urunleri/maskara/',
  },
  {
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1016467_1_SMALL.jpg',
    caption: 'Nemlendiriciler',
    link: 'https://www.eveshop.com.tr/cilt-bakimi/yuz-bakimi/nemlendirici-bakim/',
  },
];

const slide = ref(1);
const items = ref([
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/1705504528116-19ocak-air-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17055255151Signal-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/1705504550116-19ocak-ruj-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/1705504568116-19ocak-sky-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/1705504585116-19ocak-telescopic-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/1705504609116-19ocak-truematch-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17059292991GENEL-BANNER.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17055047531ysb-serum-1920x720-2.jpg',
  },
]);
</script>
