<!--
 * @Author: your name
 * @Date: 2020-04-02 18:42:03
 * @LastEditTime: 2020-04-03 15:35:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/views/Test.vue
 -->
<template>
  <div>
    <dict name="sex" v-model="filterInfo.sex" placeholder="请选择你要过滤的数据"></dict>
    <dict name="eventLevel" v-model="filterInfo.eventLevel"></dict>
    <dict name="anmeldenType" v-model="filterInfo.anmeldenType" showType="text"></dict>
  </div>
</template>

<script>
import dict from "@/components/Dict.vue";
export default {
  components: {
    dict
  },
  data() {
    return {
      filterInfo: {
        eventLevel: "",
        sex: "",
        anmeldenType: "1"
      }
    };
  }
};
</script>