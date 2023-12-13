<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        >
        </component-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'The Page 1',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/page1',
  },
  {
    title: 'The Page 2',
    caption: 'Carousel',
    icon: 'code',
    link: '/page2',
  },
  {
    title: 'The Page 3',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/page3',
  },
  {
    title: 'The Page 4',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/page4',
  },
  {
    title: 'The Page 5',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/page5',
  },
  {
    title: 'The Page 6',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/page6',
  },
  {
    title: 'The Page 7',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/page7',
  },
  {
    title: 'The Page 8',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/page8',
  },
  {
    title: 'The Page 9',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/page9',
  },
  {
    title: 'The Page 10',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/page10',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
