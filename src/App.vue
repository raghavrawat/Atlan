<template>
  <v-app>
    <query-view />
  </v-app>
</template>

<script>
import QueryView from './views/QueryView.vue';

export default {
  name: 'App',
  components: {
    QueryView,
  }
};
</script>

<style>
body {
  overflow: hidden;
}
</style>
