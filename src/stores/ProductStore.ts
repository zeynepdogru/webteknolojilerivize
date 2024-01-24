import { defineStore } from 'pinia';
import products2 from 'src/components/ThePage3.vue';
export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products2: [],
    };
  },
  actions: {
    async fill() {
      this.products2 = (await import('src/components/ThePage3.vue')).default;
    },
  },
});
