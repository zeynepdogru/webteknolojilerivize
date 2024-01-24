import { defineStore } from 'pinia';
export const useProductStore = defineStore('CartStore', {
  state: () => {
    return {
      items: [],
    };
  },

  getters: {
    count() {
      return this.items.length;
    },
  },

  actions: {
    addItems(count, item) {
      count = parseInt(count);

      for (let index = 0; index < count; index++) {
        this.items.push(item);
      }
    },
  },
});
