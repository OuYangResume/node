<template>
    <div class="index">
        <div class="index_left" v-if="item.children" v-for="(item,index) in routes" :key="index">
            <!-- <router-link to="/index/welcome">欢迎页</router-link>
            <router-link to="/index/lol">lol</router-link>
            <router-link to="/index/map">map</router-link>  -->
                 <router-link v-if="child" v-for="(child,i) in item.children" :key="i" :to="item.path+'/'+child.path">
                     {{child.name}}
                </router-link>
        </div>
        <div class="index_right">
             <router-view></router-view>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import welcome from "./welcome";
export default {
  components: {
    welcome
  },
  data() {
    return {
      name: "zhuye",
      userList: [],
      routerList: null
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  created() {
    this.getRouter();
  },
  mounted() {
    this.initGetData();
    console.log(this.routesaaaa);
  },
  methods: {
    //测试express框架提供的后台服务
    initGetData() {
      var vm = this;
      axios({
        method: "get",
        url: vm.serviceExpressUrl() + "/hello/userData"
      }).then(res => {
        console.log(res);
        vm.userList = res.data;
      });
    },
    test() {
      this.testCommin(); //公共方法
    },
    getRouter() {
      console.log("router的属性");
      console.log(this.$router);
    }
  }
};
</script>


<style lang="scss" scoped>
.index {
  display: flex;
  height: 100vh;
  .index_left {
    width: 10%;
    background: #ddd;
    display: flex;
    flex-flow: column;
    a {
      display: flex;
      align-items: center;
      height: 30px;
      justify-content: center;
    }
  }
  .index_right {
    width: 90%;
  }
}
</style>



