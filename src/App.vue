<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@400;600;700&display=swap');
}
body{
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(to right, #1967E0 3%, #032C69 100%);
}
</style>
