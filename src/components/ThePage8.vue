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
      style="width: 100%"
    >
      <q-carousel-slide
        v-for="(item, index) in items"
        :key="index"
        :name="index + 1"
        :img-src="item.imgSrc"
      />
    </q-carousel>
  </div>
</template>

<style>
.product-item {
  text-align: center;
  margin-right: 20px;
}
</style>

<script setup>
import { ref } from 'vue';

const slide = ref(1);
const items = ref([
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17014529611ybs-kapak-banner.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17016762171BGOJE-KAMPANYA-BANNER.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17014189071BG-SIVI-SABUN-BANNER.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17015019201KBM-BANNER.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/170137468311-6ARALIK-BANNER.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/170141652411920x500.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/16989933831Yayinda_1920x500.jpg',
  },
  {
    imgSrc:
      'https://www.eveshop.com.tr/custom/product_display/17015017651IST-BU%CC%88YU%CC%88KADA-ac%CC%A7ilis%CC%A7-banner-2li.jpg',
  },
]);
</script>
