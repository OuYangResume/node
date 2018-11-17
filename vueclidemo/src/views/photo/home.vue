<template>
     <div class="part">
        <head-page></head-page>
        <main-page></main-page>
    </div>
   
   
</template>

<script>
import headPage from "./components/headPage"
import mainPage from "./components/mainPage"
export default {
    components: {
        headPage,mainPage
  },
  data() {
    return {
      name: "照片流动图"
    };
  }
};
</script>

<style lang="scss" scoped>
.part{
    height: 100%;
}
</style>


