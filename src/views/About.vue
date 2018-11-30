<template>
  <div class="about">
    <h1 class="eeee">This is an about page222
      <h2 :class="$style.red"> 222</h2>
      <h2 :class="{ [$style.red]: true }"> 222</h2>

    </h1>
  </div>
</template>
<script>
export default{
  name: 'about',
  data() {
    return {
      age: 100,
      name: 'leo',
    };
  },
  created() {
    const array = [];
    const is = Array.isArray(array);
  },
};
console.log(process.env.NODE_ENV);
console.log(process.env.BASE_URL);
</script>
<style scoped>
#about{color:about}
</style>
<style lang="scss" scoped>
   h1{
     &.eeee{color:$red}
   }

</style>
<style module>
.red {
  color: pink;
  border:1px solid red;
}
</style>
