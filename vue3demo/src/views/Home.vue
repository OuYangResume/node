<template>
  <div class="home">
    {{name}}
    {{title}}
    <!-- {{bookName}} -->
    {{num}}
    {{doubleNum}}
    {{plusOne}}
    <button @click="add">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref, toRefs, onMounted, computed, onUpdated } from "vue";
import {} from "vue-router";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "oouyang",
    };
  },
  // Composition API----组合式 API
  setup() {
    const book = reactive({
      title: "Vue 3 Guide",
      num: 1,
      doubleNum: computed(() => {
        book.num * 2;
      }),
    });
    const bookName = ref(1);
    const plusOne = computed(() => book.num + 1)
    onMounted(() => {
      console.log("------mounted!--------");
    });
    onUpdated(()=>{
      console.log("------onUpdated!--------");
      console.log(book.doubleNum)
    })
    const add = () => {
       book.num++;
    };
    return {
      ...toRefs(book),
      //book,
      plusOne,
      bookName,
      add,
    };
  },
  beforeCreate() {
    console.log("-------beforeCreate---------");
  },
  created() {
    console.log("-------created---------");
  },
  beforeMount() {
    console.log("-------beforeMount---------");
  },
  mounted() {
    console.log("-------mounted---------");
  },
  beforeUpdate() {
    console.log("-------beforeMount---------");
  },
  updated() {
    console.log("-------updated---------");
  },
  beforeUnmount() {
    console.log("-------beforeUnmount---------");
  },
  unmounted() {
    console.log("-------beforeMount---------");
  },
};
</script>
