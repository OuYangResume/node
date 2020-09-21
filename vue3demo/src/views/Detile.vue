<template>
  <div>
    {{computedName}}
    <button @click="goback">goback</button>

  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    let name = route.params.id;

    const computedName = computed(() => {
      switch (name) {
        case "Vue-router":
          return "Vue-router路由";
          break;
        case "VueX":
          return "VueX状态管理器";
          break;
        case "Vue_Composition_API":
          return "Vue组合式API";
      }
    });

    const goback = () => {
      router.go(-1);
    };
    onMounted(() => {
      console.log(route);
    });
    return {
      computedName,
      goback
    };
  },
};
</script>