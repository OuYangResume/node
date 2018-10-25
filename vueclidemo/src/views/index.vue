<template>
    <div>
        <div v-for="(item,index) in userList" :key="index">
            <div @click="test">{{item.name}}</div>
            <div>{{item.age}}</div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
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
                url: vm.localExpressUrl()+"/hello/userData"
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


