<template>
  <div class="welcome">
    <div class="welcome-head">
      <div class="welcome-head-title">
        <img src="../assets/welcome/icon_bytj1.png" alt>
        <p>本月统计</p>
      </div>
      <div class="welcome-head-main" >
        <!-- <div class="welcome-head-item" >
          <img src="../../../assets/images/welcome/icon_ajzs.png" alt>
          <div class="headitem">
            <div class="number" >265,790</div>
            <div class="title">案件总数
              <p>(件)</p>
            </div>
            <div class="line"></div>
          </div>
        </div> -->
        <div class="welcome-head-item" v-for="(item,index) in headData" :key='index'>
            <img :src='"../assets/welcome/icon_"+(item.name)+".png"' alt>
          <div class="headitem">
            <div class="number" :style="{'color':item.color}">{{format_number(item.number)}}</div>
            <div class="title">{{item.title}}
              <p>(件)</p>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-content">
      <div class="welcome-content-left welcome-content-item">
          <img src="../assets/welcome/icon_ajzs.png" alt>
          <div class="headitem">
            <div class="number" style="color: #006cff;" >{{format_number(contentleftData.number)}}</div>
            <div class="title">{{contentleftData.title}}
              <p>(件)</p>
            </div>
            <div class="line"></div>
            <div class="valueup">
                <p>同比上周</p> 
                <div class="valuelv" v-if="contentleftData.valuelv>0">
                    <img  src="../assets/welcome/left_drop-up.png" alt=""> 
                    <p style="color: #fb1414;">{{contentleftData.valuelv}}%</p>
                </div>
                <div class="valuelv" v-else>
                    <img  src="../assets/welcome/left_drop-down1.png" alt="">
                    <p style="color: #02c993;">{{Math.abs(contentleftData.valuelv)}}%</p>
                </div>
             </div>
          </div>
          <div class="markline">

          </div>
      </div>
      <div class="welcome-content-right">
        <div class="welcome-content-item" v-for="(item,index) in contentrightData" :key='index'>
            <div>
                <div class="number" >{{format_number(item.number)}}</div>
            <div class="title">{{item.title}}
              <p>(件)</p>
            </div>
            <div class="line"></div>
            <div class="valueup">
                <p>同比上周</p> 
                <div class="valuelv" v-if="item.valuelv>0">
                    <img  src="../assets/welcome/left_drop-up.png" alt=""> 
                    <p style="color: #fb1414;">{{item.valuelv}}%</p>
                </div>
                <div class="valuelv" v-else>
                    <img  src="../assets/welcome/left_drop-down1.png" alt="">
                    <p style="color: #02c993;">{{Math.abs(item.valuelv)}}%</p>
                </div>
             </div>
            </div>
            </div>
      </div>
    </div>
    <div class="welcome-footer">
      <div class="welcome-footer-left">

          <input type="text" v-model="newObj.name">
          <ul v-for="(item,index) in newObj.ary" :key="index">
            <li>{{item}}</li>
          </ul>
           <piechart :msg='newObj'></piechart>
           <button @click="addTotal">alert</button>
      </div>
      <div class="welcome-footer-right">
          {{total}}
          <rightchart ref="right" @jia='handClick'  @jian1='handClick'></rightchart>  
      </div>
    </div>
  </div>
</template>
<script>
 import piechart from "./piechart"
 import rightchart from './rightchart'
export default {
    components:{
        piechart,rightchart
    },
    data(){
        return{
          total:0,
          newObj:{
            name:'',
            ary:[1,4,3,43,76]
          },
            headData:[
                {
                    imgUrl:"../../../assets/images/welcome/icon_ajzs.png",
                    name:"ajzs",
                    color:"#006cff",
                    title:"案件总数",
                    number:234213
                },
                {
                    imgUrl:"../../../assets/images/welcome/icon_ajzs.png",
                     name:"ybaj",
                    color:"#02c993",
                    title:"已办案件",
                    number:2342
                },
                {
                    imgUrl:"../../../assets/images/welcome/icon_ajzs.png",
                     name:"dbaj",
                    color:"#ffba00",
                    title:"待办案件",
                    number:233
                },
                {
                    imgUrl:"../../../assets/images/welcome/icon_ajzs.png",
                     name:"ja",
                    color:"#fb0000",
                    title:"结案",
                    number:23421
                }
            ],
            contentleftData:{
                    number:2344,
                    title:"今日办理案件数量",
                    valuelv:-108   
            },
            contentrightData:[
                {
                    number:2344,
                    title:"街道上报",
                    valuelv:18
                },
                {
                    number:2354,
                    title:"网格员上报",
                    valuelv:-24
                },
                {
                    number:234,
                    title:"收藏",
                    valuelv:-34
                },
                {
                    number:234,
                    title:"结案",
                    valuelv:36
                },
                {
                    number:234,
                    title:"xxxx",
                    valuelv:18
                }
            ],

        }
    },
    methods:{
      addTotal(){
        console.log(this.$ref)
        this.$refs.right.addTotal();

      },

      handClick(val){
        this.total=val;
      },
        /**
         * 将数字改为 三位数逗号隔开的格式
         * @param n number
         */
      format_number(n) {
        var b = parseInt(n).toString();
        var len = b.length;
        if (len <= 3) {
          return b;
        }
        var r = len % 3;
        return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g)
          .join(",");
      },
    }
}
</script>

<style lang="scss" scoped>

 .welcome-head-item {
        //未完成
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        margin-right: 10px;
        background-color: #fff;
        img {
          width: 60px;
          height: 60px;
        }
        .headitem {
          margin-left: 50px;
          .number {
            font-family: Swiss721BT-BlackCondensed;
            font-size: 38px;
            line-height: 30.8px;
            letter-spacing: 0.8px;
            color: #006cff;
          }
          .title {
            font-size: 14px;
            letter-spacing: 0px;
            color: #333333;
            line-height: 30px;
            p {
              display: inline-flex;
              color: #999999;
            }
          }
          .line {
            width: 55px;
            height: 4px;
            background-color: #e5e5e5;
          }
        }
      }

.welcome-content-item{
    width: 20%;
    display: flex;
        align-items: center;
        justify-content: center;
        .headitem{
            margin-left: 50px;
        }
         .number {
            font-family: Swiss721BT-BlackCondensed;
            font-size: 32px;
            line-height: 30.8px;
            letter-spacing: 0.8px;
            color: #333333;
          }
          .title {
            font-size: 14px;
            letter-spacing: 0px;
            color: #999999;
            line-height: 30px;
            p {
              display: inline-flex;
            }
          }
          .line {
            width: 55px;
            height: 4px;
            background-color: #e5e5e5;
          }
          .valueup{
              display: flex;
                  margin-top: 5px;
              p{
                  font-size: 12px;
                  color: #006cff;
              }
               .valuelv {
                font-size: 14px;
                margin-left: 10px;
                line-height: 23px;
                p{
                    display: inline;
                }
            }
          }
}

.welcome {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .welcome-head {
    height: 300px;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    .welcome-head-title {
      height: 40px;
      display: flex;
      p {
        color: #999999;
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
      }
    }
    .welcome-head-main {
      height: 100%;
      display: flex;
    }
  }
  .welcome-content {
    height: 300px;
    display: flex;
    background: #fff;
    margin: 10px 10px 10px 0;
    .welcome-content-left {
      width: 25%;
        position: relative;
        .markline{
            position: absolute;
    
    width: 1px;
    height: 100px;
    border-right: 1px dashed #006cff;
    right: 0;
        }
    }
    .welcome-content-right {
      display: flex;
      width: 75%;
    }
  }
  .welcome-footer {
    height: 100%;
    display: flex;
    padding-bottom: 20px;
    .welcome-footer-left {
      width: 30%;
      background-color: #fff;
      overflow: auto;
    }
    .welcome-footer-right {
      width: 70%;
      margin: 0 10px;
      background-color: #fff;
    }
  }
}
</style>

