<template>
  <input type='text' @keyup='handleKeyUp'>
</template>

<script>
import { invokeOnce } from '@/assets/features.js';

export default {
  name: 'Main',
  methods: {
    handleKeyUp(event) {
      const value = event.target.value;
      return invokeOnce(() => this.fetchApi(value), 500);
    },
    fetchApi(value) {
      fetch('https://uvarovandrey.ru/api/')
        .then(response => response.json())
        .then(response => console.log(response));
    },
  },
};
</script>

<style scoped>
</style>
