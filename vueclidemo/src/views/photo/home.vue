<template>
     <div class="part">
        {{name}}
    </div>
   
   
</template>

<script>
export default {
  data() {
    return {
      name: "照片流动图"
    };
  }
};
</script>

<style lang="scss" scoped>
.part {
  background-color: rgb(186, 245, 233);
  background-size: contain;
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0px auto;
  padding: 0px;
}
</style>


