<template>
  <div class="about">
    <h1>{{name}}</h1>
    <div v-for="(item,index) in list" :key="index">
      <li @click="clickBookEvent(item)">{{item.name}}</li>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const { state, clickBookEvent } = BooksMoudel();
    const router = useRouter();
    const route = useRoute();
    /**
     *书模块
     */
    function BooksMoudel() {
      const state = reactive({
        name: "This is an Books page",
        list: [
          {
            name: "Vue-router",
          },
          {
            name: "VueX",
          },
          {
            name: "Vue_Composition_API",
          },
        ],
      });
      //点击查看详情
      const clickBookEvent = (val) => {
        router.push({ path: `/detile/${val.name}` })
      };
      return {
        state,
        clickBookEvent,
      };
    }

    return {
      ...toRefs(state),
      clickBookEvent,
    };
  },
};
</script>
