<!--
 * @Author: your name
 * @Date: 2020-04-02 17:27:10
 * @LastEditTime: 2020-04-03 17:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/indexdbvue/src/components/DictComponents.vue
 -->
<template>
  <div>
    <div v-if="showType=='select'">
      <el-select
        v-model="selectedValue"
        clearable
        filterable
        :placeholder="placeholder"
        @change="changValue"
      >
        <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>
    </div>
    <!-- <div v-if="showType=='text'">{{selectedValue | filtersValue}}</div> -->
    <div v-if="showType=='text'">{{textValue}}</div>
  </div>
</template>

<script>
import axios from "axios";
import indexDb from "@/utils/indexDB/indexDbManager";
export default {
  data() {
    return {
      options: [], //选择项
      selectedValue: "" //当前选择的值
    };
  },
  props: {
    //父组件上的v-model会把value来绑定
    value: {
      type: [String, Number],
      default: () => {
        return "";
      }
    },
    //字典名称
    name: {
      type: String,
      //default: 0,
      required: false //非必传---如果是自己传递了optionData
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    //optionData不需要从后台取数据。
    optionData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //显示类型--"text"||"select"
    showType: {
      type: String,
      default: "select"
    }
  },
  computed: {
    // 这里用作转译
    textValue() {
      let text = "";
      for (let i of this.options) {
        if (this.selectedValue === i.value) {
          return i.name;
        }
      }
    }
  },
  filters: {
    //过滤--这里用作转译--读取不到data里面的数据
    filtersValue(value) {}
  },
  watch: {
    //为了回绑定父组件的v-model
    selectedValue(newValue, oldValue) {
      this.$emit("input", newValue);
    }
  },
  mounted() {
    var indexDbManager = new indexDb();
    let key = this.name;
    this.selectedValue = this.value;
    this.getOptionData(indexDbManager, key);
  },
  methods: {
    /**
     * @description: 赋值data中的options
     * @param {type}
     * @return:
     */
    async getOptionData(indexDbManager, key) {
      let vm = this;
      //判断是否需要从数据库查询
      if (this.optionData.length == 0) {
        //从indexDB查数据
        let resIndexDb = await indexDbManager.readDataByKey(
          this.dbObject,
          "dict",
          key
        );
        //没有取到。先从后台查询然后存入indexdb
        if (resIndexDb.length === 0) {
          let res = await this.getDictById(key);
          if (res.status == 200) {
            vm.options = res.data[key];
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
            //存入indexDB
            indexDbManager.add(this.dbObject, "dict", res.data);
          }
        } else {
          //indexDb数据库取到数据的数据赋值
          vm.options = resIndexDb.list;
        }
      } else {
        this.options = this.optionData;
      }
    },
    /**
     * @description: 从后台获取数据
     * @param {type}
     * @return:
     */
    getDictById(key) {
      let url1 = `http://localhost:8082/indexDB/getDictById`;
      return axios({
        method: "get",
        url: url1,
        params: {
          id: key
        }
      }).then(res => {
        return res;
      });
    },
    /**
     * @description: 选中值发生变化时触发
     * @param {type}
     * @return: 目前的选中值
     */
    changValue(value) {
      this.$emit("change", value);
    }
  }
};
</script>