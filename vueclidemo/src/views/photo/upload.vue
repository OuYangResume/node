<template>
  <div>
    <div>
      <h3>文件上传：</h3>
      选择一个文件上传: <br />
      <input
        type="file"
        class="inputfile"
        accept="image/*"
        @change="handlerUpload($event)"
      >
      上传人:<input
        type="text"
        v-model="uploadname"
      >
      <button @click="uploadfile($event)">提交</button>

      <h3>{{resultInfo}}</h3>
    </div>
    <div>
      <template>
        <el-table
          :data="uploadTableData"
          style="width: 100%"
        >
          <el-table-column
            prop="filename"
            label="文件名"
            width="300"
          >
          </el-table-column>
          <el-table-column
            prop="uploadname"
            label="上传人"
            width="200"
          >
          </el-table-column>
          <el-table-column
            prop="uploadtime"
            label="上传时间"
          >
          </el-table-column>
          <el-table-column label="预览">
            <template slot-scope="scope">
               <img :src="'http://39.108.100.163:8084/'+scope.row.filename" alt="" srcset="" width="120" height="100">
            </template>

          </el-table-column>
        </el-table>
      </template>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file: "",
      uploadname: "",
      resultInfo: "",
      uploadTableData: [
        {
          filename: "", //文件名
          uploadname: "", //上传人
          uploadtime: "" //上传时间
        }
      ]
    };
  },
  mounted() {
    this.getAllfile();
  },
  methods: {
    /**
     * 清空表单
     */
    clearForm() {
      this.file = "";
      this.uploadname = "";
    },
    /**
     * 获取选择的文件
     */
    handlerUpload(e) {
      console.log(e);
      this.file = e.target.files[0];
    },
    /**
     * 上传事件
     */
    uploadfile() {
      var vm = this;
      //初始化一个FormData对象
      var param = new FormData();
      if (vm.uploadname == "") {
        vm.uploadname = "oouyang";
      }
      param.append("name", this.uploadname);
      //通过append向form对象添加数据
      param.append("file", vm.file);
      //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      console.log(param.get("file"));

      axios({
        method: "post",
        url: vm.localExpressUrl()+"/upload/insertUpload",
        headers: { "Content-Type": "multipart/form-data" },
        data: param
      }).then(res => {
        console.log(res);
        vm.clearForm();
        vm.resultInfo = res.data;
        vm.getAllfile();//更新列表
      });
    },
    /**
     * 获取所有图片
     */
    getAllfile() {
      var vm = this;
      axios({
        method: "get",
        url: vm.localExpressUrl()+"/upload/getAllupload"
      }).then(res => {
        console.log(res);
        this.uploadTableData = res.data.uploadList;
      });
    }
  }
};
</script>

