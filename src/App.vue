<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/'>Main</router-link>|
      <router-link to='/cat'>Cat</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --c1: #333;
}
</style>
