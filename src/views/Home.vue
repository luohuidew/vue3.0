<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h1 class="eeee">h1333335</h1>
    <h3 @click="teturn">h3h344042</h3>

    <div id="global">
      fefe
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
// @ is an alias to /src
export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    teturn() {
      location.href=' http://127.0.0.1:8081/subpage.html';
    },
  },
});
</script>
<style scoped>
  #home{color:refefe}
</style>
