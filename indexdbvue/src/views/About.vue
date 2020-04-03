<!--
 * @Author: your name
 * @Date: 2020-04-01 11:36:08
 * @LastEditTime: 2020-04-03 11:50:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/views/About.vue
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    检查类型:<dict v-model="filterInfo.checkType" :optionData="filterInfo.checkTypeOption"></dict>
    事件类型:<dict name="eventLevel" v-model="filterInfo.eventLevel"></dict>
    出租类型:<dict name="houseType" v-model="filterInfo.houseType" @change="getSelectValue"></dict>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import indexDb from "../utils/indexDB/indexDbManager";
import dict from "@/components/Dict.vue";
export default {
  components: {
    dict
  },
  data() {
    return {
      filterInfo: {
        houseType: "1",
        checkType: "",
        eventLevel:"",
        checkTypeOption: [
          { name: "未巡查", value: "0" },
          { name: "已巡查", value: "1" }
        ]
      }
    };
  },
  mounted() {
    var indexDbManager = new indexDb();
    // this.add(indexDbManager);
    //this.read(indexDbManager);
  },
  methods: {
    add(indexDbManager) {
      let dataObject = {
        sex: [
          { value: "1", name: "男" },
          { value: "2", name: "女" }
        ],
        houseType: [
          { value: "1", name: "出租" },
          { value: "2", name: "自用" },
          { value: "3", name: "待租" },
          { value: "4", name: "闲置" },
          { value: "5", name: "部分出租" },
          { value: "6", name: "其他" }
        ]
      };
      indexDbManager.add(this.dbObject, "dict", dataObject);
    },
    read(indexDbManager) {
      let key = "houseType";
      indexDbManager.readDataByKey(this.dbObject, "dict", key).then(res => {
        console.log(key, res);
      });
      indexDbManager.getdatabycursor(this.dbObject, "dict").then(res => {
        console.log("all", res);
      });
    },
    /**
     * @description: 获取选择的value
     * @param {type}
     * @return:
     */
    getSelectValue(val) {
      console.log("当前选择的", val);
    },
    submit() {
      console.log("houseType", this.filterInfo.houseType);
      console.log("checkType", this.filterInfo.checkType);
      console.log("eventLevel", this.filterInfo.eventLevel);
    }
  }
};
</script>