<template>
    <div>
        英雄联盟模块
        来自mysql的数据
        <div v-for="(item,index) in userData" :key="index">
            {{item.age}} -{{item.user_name}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            userData:null
        }
    },
    mounted(){
        this.initData();
    },
    methods:{
        initData(){
            var vm = this;
            axios({
                method: "get",
                url: vm.localExpressUrl() + "/user/getAllUser" 
            }).then(res => {
                console.log(res);
                vm.userData = res.data;
            });
        }
    }
}
</script>

