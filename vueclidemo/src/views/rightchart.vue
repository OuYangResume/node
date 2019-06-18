<template>
    <div>
        <h1>测试兄弟组件通信</h1>
        <button @click="add">+1</button>
        <button @click="jian">-1</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        add(){
            this.count+=1;
            this.$emit('jia',this.count);
        },
        jian(){
            this.count -=1;
            this.$emit('jian1',this.count)
        }
    }
}
</script>
