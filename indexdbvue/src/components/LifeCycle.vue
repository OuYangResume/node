<!--
 * @Author: your name
 * @Date: 2020-05-25 14:40:47
 * @LastEditTime: 2020-05-25 18:10:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/components/LifeCycle.vue
--> 
<template>
  <div>
    {{propsName}}
    {{dataName}}
    {{computedName}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataName: "data---oouyang"
    };
  },
  props: ["propsName"],
  computed: {
    computedName() {
      return "computed---oouyang";
    }
  },
  methods:{
      testAlert(){
          alert(1)
      }
  },
  beforeCreate() {
      
    console.log("周期名字:" + "beforeCreate");
    //全部获取不到
   // this.testAlert()
    //   console.log('data:'+this.dataName)
    //   console.log('props:'+this.propsName)
    //   console.log('computed:'+this.computedName)
    //   console.log('$el:'+this.$el)
  },
  created() {
    console.log("周期名字:" + "created");
    this.testAlert()
    console.log("data:" + this.$data);
    console.log("props:" + this.propsName);
    console.log("computed:" + this.computedName);
     console.log('$el:'+this.$el)
  }
};
</script>