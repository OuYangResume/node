<template>
    <div>测试props{{msg}}
        <p>{{msgs}}</p>
        <input type="text" v-model="msg.name">
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        msg:{
            type:Object,
            required:true
        }
    },
    computed:{
        msgs(){
            return this.msg.ary[1]+3
        }
    }
}
</script>
