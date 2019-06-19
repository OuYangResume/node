<template>
  <div>
    测试props{{msg}}
    <p>{{msgs}}</p>
    <input type="text" v-model="msg.name">
    兄弟组件传递的值： {{total}}
  </div>
</template>
<script>
import bus from "./eventBus.js";
export default {
  data() {
    return {
      total: 0
    };
  },
  props: {
    msg: {
      type: Object,
      required: true
    }
  },

  computed: {
    msgs() {
      return this.msg.ary[1] + 3;
    }
  },
  mounted() {
    bus.$on("addCount", count => {
        this.total=count;
    });
  }
};
</script>
