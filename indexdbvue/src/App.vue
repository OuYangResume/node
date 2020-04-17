<!--
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-07 10:49:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/test">Test</router-link> |
      <router-link to="/insert">Insert</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import indexDb from "./utils/indexDB/indexDbManager";
export default {
  mounted() {
    this.initDB();
  },
  destroyed() {
    debugger;
    if (this.dbObject) {
      this.dbObject.close();
    }
  },
  methods: {
    async initDB() {
      var dbname = "dictCache",
        version = 1,
        newStore = { name: "dict", key: "id" };
      // var indexDbManager = new indexDb();
      // indexDbManager.initIndexDB(dbname, version, newStore, this.getDBObjet);
      //用注册到vue上的方法创建数据库
     // let db = await this.initIndexDB(dbname, version, newStore);
     // console.log(db);
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
