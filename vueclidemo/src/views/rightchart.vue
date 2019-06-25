<template>
  <div>
    <h1>测试兄弟组件通信</h1>
    <button @click="add">+1</button>
    <button @click="jian">-1</button>
    <slot>如果父组件没有插入内容。</slot>
    <slot name="head"></slot>
    <ul>
      <slot name="book" v-for="(book) in headData"  :book-name="book.color"></slot>
    </ul>
  </div>
</template>

<script>
import bus from "./eventBus.js";
export default {
  data() {
    return {
      count: 0
    };
  },
  props: {
    headData: {
      type: Array,
      defaulut: function() {
        return [];
      }
    }
  },
  mounted() {
    console.log(this.$slots);
  },
  methods: {
    add() {
      let a;
      this.count += 1;
      // this.$emit('jia',this.count);
      bus.$emit("addCount", this.count);
    },
    jian() {
      this.count -= 1;
      this.$emit("jian1", this.count);
    },
    addTotal() {
      alert(1);
    }
  }
};
</script>
