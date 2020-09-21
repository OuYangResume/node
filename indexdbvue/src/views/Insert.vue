<!--
 * @Author: your name
 * @Date: 2020-04-07 10:51:47
 * @LastEditTime: 2020-09-20 09:24:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/views/Insert.vue
 -->
<template>
  <div>
    <div>新建数据字典</div>
    <life-cycle :propsName="propsName"></life-cycle>
  </div>
</template>

<script>
import LifeCycle from "@/components/LifeCycle.vue";
export default {
  data() {
    return {
      propsName: "props----oouynag",
    };
  },
  provide: {
    foo: "bar",
  },
  components: {
    LifeCycle,
  },
};
</script>