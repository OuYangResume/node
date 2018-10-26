<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>欢迎</h2>
    <div  class="login" @click="goLogin">登录</div>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
        goLogin() {
           this.$router.push('/index');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello{
    .login{
      cursor: pointer;
      &:hover{
        color: aqua;
      }
    }
  }
</style>

