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
      style="width: 100%; height: 600px"
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
