<template>
  <div class='cat-page'>
    <div class='cat-main'>
      <div v-if='theCat' class='cat-current-wrap'>
        <h1>{{ theCat.name }}</h1>
        <div>{{ theCat.greet }}</div>
      </div>
    </div>
    <div class='cat-sidebar'>
      <div class='cat-select-wrap'>
        <div
          class='cat-select'
          :class='{active: theCat && cat.name === theCat.name}'
          v-for='cat in cats'
          :key='cat.name'
          @click='setCat(cat.name)'
        >{{ cat.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CatHero',
  computed: {
    ...mapState(['theCat', 'cats']),
  },
  methods: {
    setCat: function(name) {
      this.$store.commit('setCat', name);
    },
  },
};
</script>


<style scoped>
.cat-page {
  display: flex;
  flex-wrap: wrap;
}
.cat-main {
  flex: 3;
}
.cat-sidebar {
  flex: 1;
}
.cat-select-wrap {
  display: flex;
  flex-direction: column;
}
.cat-select {
  border: 1px solid var(--c1);
  cursor: pointer;
  margin: 1px;
  padding: 4px;
}
.cat-select.active {
  background-color: var(--c1);
  color: #fff;
}
</style>
