<!--
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-03 15:20:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/views/Home.vue
 -->
<template>
  <div class="home">
    {{name}}
    <!-- <dict name="eventLevel" v-model="filterInfo.eventLevel"></dict> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import dict from "@/components/Dict.vue";
export default {
  data() {
    return {
      name: "",
      filterInfo: {
        eventLevel: ""
      }
    };
  },
  components: {
    HelloWorld,dict
  }
};
</script>
