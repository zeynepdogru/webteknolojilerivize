<template>
  <div class="q-xs" style="margin-top: 10px">
    <q-btn-group spread>
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
</template>

<script>
import { ref } from 'vue';
import { category2 } from './ThePage4.vue';
export default {
  setup() {
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

    return {
      showContent,
      toggleContent,
      category2,
      buttons,
    };
  },
};
</script>
