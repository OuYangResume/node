<!--
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-01 16:58:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/views/Home.vue
 -->
<template>
  <div class="home">
    {{name}}
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "黄金糕"
        },
        {
          value: "2",
          label: "双皮奶"
        },
        {
          value: "3",
          label: "蚵仔煎"
        },
        {
          value: "4",
          label: "龙须面"
        },
        {
          value: "5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      name:""
    };
  },
  components: {
    HelloWorld
  },
  mounted(){
    this.getName();
  },
  methods:{
     getName(){
       let vm  = this;
     //  this.name = this.initIndexDB();
     }
  }
};
</script>
