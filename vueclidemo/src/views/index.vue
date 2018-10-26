<template>
    <div class="index">
        <div class="index_left">
            <welcome></welcome>
            <div v-for="(item,index) in userList" :key="index">
                <div @click="test">{{item.name}}</div>
                <div>{{item.age}}</div>
            </div>
            <router-link to="/index/welcome">欢迎页</router-link>
            <router-link to="/index/lol">lol</router-link>
        </div>
        <div class="index_right">
             <router-view></router-view>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import welcome from "./welcome"
export default {
    components:{
        welcome
    },
    data() {
        return {
            name: "zhuye",
            userList: []
        };
    },
    mounted() {
        this.initGetData();
    },
    methods: {
        //测试express框架提供的后台服务
        initGetData() {
            var vm = this;
            axios({
                method: "get",
                url: vm.localExpressUrl() + "/hello/userData"
            }).then(res => {
                console.log(res);
                vm.userList = res.data;
            });
        },
        test() {
            this.testCommin(); //公共方法
        }
    }
};
</script>


<style lang="scss" scoped>
.index {
    display: flex;
    height: 100vh;
    .index_left {
        width: 20%;
    }
    .index_right {
        width: 80%;
    }
}
</style>



