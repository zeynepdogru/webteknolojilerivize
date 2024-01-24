<template>
  <!-- <div class="q-pa-md" id="rounded-photos">
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
  </div> -->

  <div id="q-app" style="margin-top: -60px">
    <div
      class="q-gutter row justify-center"
      style="display: flex; flex-direction: column; align-items: center"
    >
      <q-card
        v-for="(photo, index) in widePhoto"
        :key="index"
        class="genis-foto"
        flat
        @click="handlePhotoClick(photo)"
        style="text-align: center; cursor: pointer; margin-bottom: 5px"
      >
        <img
          :src="photo.url"
          alt="Photo"
          style="width: 100%; max-height: 100vh; object-fit: cover"
        />
        <div>{{ photo.caption }}</div>
      </q-card>
    </div>
  </div>

  <!-- <h4 style="text-align: center; margin-bottom: 0">Markalar</h4>

  <div class="image-wrapper">
    <div
      v-for="(image, index) in imageList"
      :key="index"
      class="image-container"
    >
      <img :src="image" alt="Marka Fotoğrafları" />
    </div>
  </div> -->
</template>

<style>
.image-container {
  display: inline-block;
  margin: 5px;
  width: 7%;
}
/* .image-wrapper {
  display: flex;
  justify-content: center;
} */
.image-container img {
  margin: 0 auto;
  max-width: 100%;
}

/* .rounded-images {
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid orange;
} */
</style>

<script setup>
// const photoData = [
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1026805_1_LARGE.jpg',
//     caption: 'Yüz Bakım',
//     link: 'https://www.eveshop.com.tr/cilt-bakimi/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1024800_1_LARGE.jpg',
//     caption: 'Makyaj',
//     link: 'https://www.eveshop.com.tr/makyaj/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1005235_1_LARGE.jpg',
//     caption: 'Saç Bakım',
//     link: 'https://www.eveshop.com.tr/sac-bakimi/sac-bakim-urunleri/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1019093_1_SMALL.jpg',
//     caption: 'Ağız Bakım',
//     link: 'https://www.eveshop.com.tr/kisisel-bakim/agiz-bakim/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028320_1_SMALL.jpg',
//     caption: 'Anne&Bebek',
//     link: 'https://www.eveshop.com.tr/anne-bebek-bakimi/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027159_1_SMALL.jpg',
//     caption: 'Parfümler',
//     link: 'https://www.eveshop.com.tr/parfum-deodorant/parfum/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1024462_1_SMALL.jpg',
//     caption: 'Duş Jelleri',
//     link: 'https://www.eveshop.com.tr/kisisel-bakim/banyo-ve-vucut/dus-jeli/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1029811_1_SMALL.jpg',
//     caption: 'Maruderm',
//     link: 'https://www.eveshop.com.tr/maruderm_br_549',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028968_1_SMALL.jpg',
//     caption: 'Maskaralar',
//     link: 'https://www.eveshop.com.tr/makyaj/goz-urunleri/maskara/',
//   },
//   {
//     imageUrl:
//       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1016467_1_SMALL.jpg',
//     caption: 'Nemlendiriciler',
//     link: 'https://www.eveshop.com.tr/cilt-bakimi/yuz-bakimi/nemlendirici-bakim/',
//   },
// ];
// const imageList = [
//   'https://www.eveshop.com.tr/custom/product_display/16801641561maybelline-logolar.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16802456321mua-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16800705521revuele-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16801641281skinlite-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16801641481goldenrose-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16801641411nivea-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16800093771beautygirl-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16800705941loreal-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16800093291urbancare-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16801641121w7-kucuk.jpg',
//   'https://www.eveshop.com.tr/custom/product_display/16802498591beautyhouse-kucuk.jpg',
// ];

const widePhoto = [
  {
    url: 'https://www.eveshop.com.tr/custom/product_display/17059294101YUZ-BANNER.jpg',
  },
  {
    url: 'https://www.eveshop.com.tr/custom/product_display/17055048321TECHNIC-FAR-BANNER.jpg',
  },
  {
    url: 'https://www.eveshop.com.tr/custom/product_display/17059293841MAKYAJ-BANNER.jpg',
  },
  {
    url: 'https://www.eveshop.com.tr/custom/product_display/17059294321SAC-BANNER.jpg',
  },
];
</script>
