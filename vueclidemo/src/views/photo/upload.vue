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
        v-model="uploadfilename"
      >
      <button @click="uploadfile($event)">提交</button>
    </div>
    <div>
      <template>
        <el-table
          :data="pageData.uploadTableData"
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
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.currentPage"
      :page-sizes="[5, 6, 8, 10]"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total">
    </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import totas from "@/components/totas";
export default {
  components: { totas },
  data() {
    return {
      content:"adfs",
      file: "",
      uploadfilename: "",
      pageData: {
        //分页数据
        total: 0, //总数
        currentPage: 1, //当前页数
        pageSize: 5, //每页条数
        tableMaxHeight: null, //高度
        uploadTableData: [
          //列表数据
          {
            filename: "", //文件名
            uploadname: "", //上传人
            uploadtime: "" //上传时间
          }
        ]
      }
    };
  },
  mounted() {
    //this.getAllfile();
    this.getfileList();
  },
  methods: {
    /**
     * 清空表单
     */
    clearForm() {
      this.file = "";
      this.uploadfilename = "";
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
      if (vm.uploadfilename == "") {
        vm.uploadfilename = "oouyang";
      }
      param.append("name", this.uploadfilename);
      //通过append向form对象添加数据
      param.append("file", vm.file);
      //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      console.log(param.get("file"));

      axios({
        method: "post",
        url: vm.serviceExpressUrl() + "/upload/insertUpload",
        headers: { "Content-Type": "multipart/form-data" },
        data: param
      }).then(res => {
        console.log(res);
        vm.clearForm();
        vm.$toast({
            type:'error',
            content: res.data,
            autoClose: true
          })
        vm.getfileList(); //更新列表
      });
    },
    /**
     * 获取所有图片列表
     */
    getAllfile() {
      var vm = this;
      axios({
        method: "get",
        url: vm.serviceExpressUrl() + "/upload/getAllupload"
      }).then(res => {
        console.log(res);
        this.pageData.uploadTableData = res.data.uploadList;
      });
    },
    /**
     * 按条件查询图片列表
     */
    getfileList() {
      var vm = this;
      axios({
        method: "get",
        url: vm.serviceExpressUrl() + "/upload/getUploadByLimit",
        params: {
          pageNum: vm.pageData.currentPage,
          pageSize: vm.pageData.pageSize
        }
      }).then(res => {
        console.log(res);
        vm.pageData.uploadTableData = res.data.uploadList;
        vm.pageData.total = res.data.total;
      });
    },
    /**
     * 改变每页显示数量
     */
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageData.pageSize = val;
      this.getfileList();
    },
    /**
     * 改变页码
     */
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageData.currentPage = val;
      this.getfileList();
    }
  }
};
</script>

