<template>
  <h4 style="text-align: center; margin-top: 15px; margin-bottom: 0px">
    Popüler Ürünler
  </h4>

  <div class="q-pa-md">
    <q-carousel
      style="display: flex; justify-content: center"
      v-model="slide"
      swipeable
      animated
      padding
      control-color="grey"
      autoplay
      arrows
      height="400px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="q-gutter row">
          <q-card
            v-for="(product, index) in products1"
            :key="index"
            class="my-card main"
            flat
            bordered
          >
            <img :src="product.imageUrl" alt="Product Image" /><q-icon
              style="
                float: right;
                margin-right: 5px;
                margin-top: -185px;
                color: pink;
                border: 1px solid palevioletred;
                border-radius: 100%;
                box-shadow: 0px 1px 5px grey;
                width: 25px;
                height: 25px;
              "
              name="fa-regular fa-heart"
            />

            <q-card-actions style="text-align: center">
              <q-btn
                class="capitalize hov"
                style="margin-right: -10px; width: 60%"
                color="pink"
                >Sepete Ekle</q-btn
              >
              <q-btn class="capitalize hov" style="width: 40%" color="teal"
                >İncele</q-btn
              >
              <div style="margin: 0 auto">
                <div class="upper-case" style="font-weight: 500">
                  {{ product.productBrand }}
                </div>
                <div>{{ product.productName }}</div>
                <div>{{ product.price }}</div>
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="q-gutter row">
          <q-card
            v-for="(product, index) in products2"
            :key="index"
            class="my-card main"
            flat
            bordered
          >
            <img :src="product.imageUrl" alt="Product Image" /><q-icon
              style="
                float: right;
                margin-right: 5px;
                margin-top: -185px;
                color: pink;
                border: 1px solid palevioletred;
                border-radius: 100%;
                box-shadow: 0px 1px 5px grey;
                width: 25px;
                height: 25px;
              "
              name="fa-regular fa-heart"
            />

            <q-card-actions style="text-align: center; width: 100%">
              <q-btn
                class="capitalize hov"
                style="margin-right: -10px; width: 60%"
                color="pink"
                >Sepete Ekle</q-btn
              >
              <q-btn class="capitalize hov" style="width: 40%" color="teal"
                >İncele</q-btn
              >
              <div style="margin: 0 auto">
                <div class="upper-case" style="font-weight: 500">
                  {{ product.productBrand }}
                </div>
                <div>{{ product.productName }}</div>
                <div>{{ product.price }}</div>
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="q-gutter row">
          <q-card
            v-for="(product, index) in products3"
            :key="index"
            class="my-card main"
            flat
            bordered
          >
            <img :src="product.imageUrl" alt="Product Image" /><q-icon
              style="
                float: right;
                margin-right: 5px;
                margin-top: -185px;
                color: pink;
                border: 1px solid palevioletred;
                border-radius: 100%;
                box-shadow: 0px 1px 5px grey;
                width: 25px;
                height: 25px;
              "
              name="fa-regular fa-heart"
            />

            <q-card-actions style="text-align: center">
              <q-btn
                class="capitalize hov"
                style="margin-right: -10px; width: 60%"
                color="pink"
                >Sepete Ekle</q-btn
              >
              <q-btn class="capitalize hov" style="width: 40%" color="teal"
                >İncele</q-btn
              >
              <div style="margin: 0 auto">
                <div class="upper-case" style="font-weight: 500">
                  {{ product.productBrand }}
                </div>
                <div>{{ product.productName }}</div>
                <div>{{ product.price }}</div>
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <h4 style="text-align: center; margin-bottom: 0">Markalar</h4>

  <div class="image-wrapper">
    <div
      v-for="(image, index) in imageList"
      :key="index"
      class="image-container"
    >
      <img :src="image" alt="Marka Fotoğrafları" />
    </div>
  </div>
</template>

<style>
.my-card {
  width: 100%;
  max-width: 200px;
}
.hov {
  display: none;
}
.my-card:hover .hov {
  display: flex;
}
.capitalize {
  text-transform: capitalize;
}
.image-container {
  display: inline-block;
  margin: 5px;
  width: 7%;
}
.image-wrapper {
  display: flex;
  justify-content: center;
}
.image-container img {
  margin: 0 auto;
  max-width: 100%;
}
</style>
<script setup>
import { ref } from 'vue';

const products1 = ref([
  {
    productBrand: 'Versace',
    productName: ' Red Jeans Parfüm',
    price: '84,99 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1024800_1_SMALL.jpg',
  },
  {
    productBrand: 'Palette',
    productName: ' Yoğun Kalıcı Renkler',
    price: '19,99 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027191_1_SMALL.jpg',
  },
  {
    productBrand: 'Dalin ',
    productName: 'Bebek Kolonyası',
    price: '169,95 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1026514_1_SMALL.jpg',
  },
  {
    productBrand: 'Signal',
    productName: 'White Now',
    price: '14,95 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1001643_1_SMALL.jpg',
  },
  {
    productBrand: 'Dove',
    productName: ' Fresh Sıvı Sabun',
    price: '138,95 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1002271_1_SMALL.jpg',
  },
]);
const imageList = [
  'https://www.eveshop.com.tr/custom/product_display/16801641561maybelline-logolar.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16802456321mua-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16800705521revuele-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16801641281skinlite-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16801641481goldenrose-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16801641411nivea-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16800093771beautygirl-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16800705941loreal-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16800093291urbancare-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16801641121w7-kucuk.jpg',
  'https://www.eveshop.com.tr/custom/product_display/16802498591beautyhouse-kucuk.jpg',
];
</script>

<script>
export const products2 = ref([
  {
    productBrand: 'Nascita',
    productName: ' Fondöten Süngeri',
    price: '87,50 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1020640_1_SMALL.jpg',
  },
  {
    productBrand: 'Axe',
    productName: ' Erkek Deodorant Sprey',
    price: '136,50 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1001633_1_SMALL.jpg',
  },
  {
    productBrand: 'Maruderm',
    productName: ' Yüz Yıkama Jeli',
    price: '296,95 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028551_1_SMALL.jpg',
  },
  {
    productBrand: 'Rexona',
    productName: ' Çiçeksi Deodorant',
    price: '130,50 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1013870_1_SMALL.jpg',
  },
  {
    productBrand: 'Signal',
    productName: ' Diş Macunu -Gold',
    price: '147,50 TL',
    imageUrl:
      'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027329_1_SMALL.jpg',
  },
]);
export default {
  data() {
    return {
      slide: 1, // Initial slide index
      items: [
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
      ],
      // products1: [
      //   {
      //     productBrand: 'Versace',
      //     productName: ' Red Jeans Parfüm',
      //     price: '849,99 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1024800_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Palette',
      //     productName: ' Yoğun Kalıcı Renkler',
      //     price: '149,99 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028552_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Dalin ',
      //     productName: 'Bebek Kolonyası',
      //     price: '69,95 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028551_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Signal',
      //     productName: 'White Now',
      //     price: '154,95 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027329_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Dove',
      //     productName: ' Fresh Sıvı Sabun',
      //     price: '38,95 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1002271_1_SMALL.jpg',
      //   },
      // ],
      // products2: [
      //   {
      //     productBrand: 'Nascita',
      //     productName: ' Fondöten Süngeri',
      //     price: '87,50 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1023706_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Axe',
      //     productName: ' Erkek Deodorant Sprey',
      //     price: '136,50 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1001633_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Maruderm',
      //     productName: ' Yüz Yıkama Jeli',
      //     price: '296,95 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028288_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Rexona',
      //     productName: ' Çiçeksi Deodorant',
      //     price: '130,50 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1013870_1_SMALL.jpg',
      //   },
      //   {
      //     productBrand: 'Signal',
      //     productName: ' Diş Macunu -Gold',
      //     price: '147,50 TL',
      //     imageUrl:
      //       'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1004236_1_SMALL.jpg',
      //   },
      // ],
      products3: [
        {
          productBrand: 'Morfose',
          productName: 'Turuncu Saç Spreyi',
          price: '99,90 TL',
          imageUrl:
            'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1003174_1_SMALL.jpg',
        },
        {
          productBrand: 'Pastel ',
          productName: 'Dudak Parlatıcısı',
          price: '84,95 TL',
          imageUrl:
            'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027296_1_SMALL.jpg',
        },
        {
          productBrand: 'Golden Rose',
          productName: ' Emily 101',
          price: '44,95 TL',
          imageUrl:
            'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028551_1_SMALL.jpg',
        },
        {
          productBrand: 'Beauty Girl',
          productName: ' Maskara',
          price: '229,95 TL',
          imageUrl:
            'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1028970_1_SMALL.jpg',
        },
        {
          productBrand: 'Flormar',
          productName: ' Pearly Parlak Oje',
          price: '49,50 TL',
          imageUrl:
            'https://storage.googleapis.com/material_image_bucket/materials_image_approved/1027303_1_SMALL.jpg',
        },
      ],
    };
  },
};
</script>
