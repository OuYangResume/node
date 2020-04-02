<!--
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-02 11:52:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/views/About.vue
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import indexDb from "../utils/indexDB/indexDbManager";
export default {
  mounted() {
    var indexDbManager = new indexDb();
    this.add(indexDbManager);
    this.read(indexDbManager);
  },
  methods: {
    add(indexDbManager) { 
      indexDbManager.add(this.dbObject,"dict");
    },
    read(indexDbManager){
      indexDbManager.read(this.dbObject,"dict").then(res=>{
        console.log(res);
      })
    }
  }
};
</script>