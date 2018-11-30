<template>
  <div class="about">
    <h1 class="eeee">This is an about page456</h1>
  </div>
</template>
<script>
export default{
  name: 'about',
  data() {
    return {
      age: 100,
    };
  },
  created() {
    const array = [];
    const is = Array.isArray(array);
    if (is) { alert(33); }
  },
};
console.log(process.env.NODE_ENV);
console.log(process.env.BASE_URL);
</script>
<style scoped>
#about{color:about}
</style>
<style lang="scss">
   h1{
     &.eeee{color:dodgerblue}
   }
</style>
