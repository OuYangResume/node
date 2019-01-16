<template>
  <div id="app">
    <div class="container">
      <!-- ===========================
        HEADER
      ============================-->
      <div id="header" class="row">
        <div class="col-sm-2">
          <img class="propic" src="../../../static/images/oyb.jpg" alt>
        </div>
        <!-- photo end-->
        <div class="col-sm-10">
          <div class="cv-title">
            <div class="row">
              <div class="col-sm-7">
                <h1>{{personal.name}}</h1>
              </div>
            </div>
            <h2>求职意向:{{personal.jobHutter}}</h2>
          </div>
          <!-- Title end-->
          <!-- ===========================
                基本情况
          ============================-->
          <div class="row">
            <div class="col-sm-4">
              <ul class="list-unstyled">
                <li>
                  <a href="https://ouyangresume.github.io" title="个人网站">
                    <span class="social fa fa-home"></span>博客
                  </a>
                </li>
                <li>
                  <a href>
                    <span class="social fa fa-phone" title="手机号码"></span>+86 13135667053
                  </a>
                </li>
                <li>
                  <a href="#map" title="家庭住址" id="showMap">
                    <span class="social fa fa-map-marker"></span>查看地图
                  </a>
                </li>
              </ul>
            </div>
            <!-- social 1st col end-->
            <div class="col-sm-4">
              <ul class="list-unstyled">
                <li>
                  <a href title="QQ号码">
                    <span class="social fa fa-qq"></span>812634676
                  </a>
                </li>
                <li>
                  <a href="https://github.com/OuYangResume" title="Github">
                    <span class="social fa fa-github"></span>OuYangResume
                  </a>
                </li>
                <!-- <li><a href=""><span class="social fa fa-linkedin"></span>Linkedin</a>
                </li>-->
              </ul>
            </div>
            <!-- social 2nd col end-->
            <div class="col-sm-4">
              <ul class="list-unstyled">
                <li
                  class="weixin"
                  onmouseover="this.className = 'weixin on';"
                  onmouseout="this.className = 'weixin';"
                >
                  <a href="javascript:void(0)" title="微信">
                    <span class="social fa fa-wechat"></span>Go
                  </a>
                  <div class="weixin_nr">微信扫一扫
                    <div class="arrow"></div>
                    <img src="../../../static/images/weixin.jpg" width="130" height="130">
                  </div>
                </li>
                <li>
                  <a href title="邮箱地址">
                    <span class="social fa fa-envelope-o"></span>oouyang@yandex.com
                  </a>
                </li>
                <!-- <li><a href=""><span class="social fa fa-instagram"></span>Instagram</a>
                </li>-->
              </ul>
            </div>
            <!-- social 3rd col end-->
          </div>
          <!-- header social end-->
        </div>
        <!-- header right end-->
      </div>
      <!-- header end-->
      <hr class="firsthr">

      <!-- ===========================
        左边部分
      ============================-->
      <div class="col-md-8 mainleft">
        <div id="statement" class="row mobmid">
          <div class="col-sm-1">
            <span class="secicon fa fa-user"></span>
          </div>
          <!--icon end-->
          <div class="col-sm-11">
            <h3>个人介绍</h3>
            <p>{{personal.introduce}}</p>
          </div>
          <!--info end-->
        </div>
        <!--personal statement end-->
        <hr>

        <div id="education" class="row mobmid">
          <div class="col-sm-1">
            <span class="secicon fa fa-graduation-cap"></span>
          </div>
          <!--icon end-->
          <div class="col-sm-11">
            <h3>教育经历</h3>
            <div v-for="(education,index) in educations" :key="index">
              <div class="row">
                <div class="col-md-9">
                  <h4>{{education.name}}</h4>
                  <p class="sub">
                    <a
                      href
                    >{{education.property=="university"?"专业:"+education.position:"职位:"+education.position}}</a>
                  </p>
                  <p>{{education.introduce}}</p>
                </div>
                <div class="year col-md-3">
                  <p>{{education.time}}</p>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
        <hr>
        <!-- ===========================
            工作经历
        ============================-->
        <div id="job" class="row mobmid">
          <div class="col-sm-1">
            <span class="secicon fa fa-briefcase"></span>
          </div>
          <!--icon end-->
          <div class="col-sm-11">
            <h3>工作经历</h3>
            <div v-for="(job,index) in jobExp" :key="index">
              <div class="row">
                <div class="col-md-9">
                  <h4>{{job.company}}</h4>
                  <p class="sub">
                    <a href>职位:{{job.position}}</a>
                  </p>
                  <p>{{job.describe}}</p>
                </div>
                <div class="year col-md-3">
                  <p>{{job.time}}</p>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mainright">
        <div class="row">
          <div class="col-sm-1 col-md-2 mobmid">
            <span class="secicon fa fa-magic"></span>
          </div>
          <!--icon end-->
          <div class="col-sm-11 col-md-10">
            <h3 class="mobmid">技能</h3>
            <div v-for="(skill,index) in skills" :key="index">
              <p>{{skill.name}}</p>
              <div class="progress progress-striped">
                <div
                  class="progress-bar"
                  v-bind:class="skill.class"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="skill.styleObject"
                ></div>
              </div>
              <!--skill end-->
            </div>
          </div>
          <!--info end-->
        </div>
        <!--tech skills end-->
        <hr>
        <div class="row mobmid">
          <div class="col-sm-1 col-md-2">
            <span class="secicon fa fa-trophy"></span>
          </div>
          <!--icon end-->
          <div class="col-sm-11 col-md-10">
            <h3>获奖情况</h3>
            <div class="award" v-for="(award,index) in awards" :key="index">
              <h4>{{award.name}}</h4>
              <p class="sub">{{award.time}}</p>
              <p>{{award.describe}}</p>
            </div>
          </div>
          <!--awards end-->
        </div>
        <hr>
        <div class="row mobmid">
          <div class="col-sm-1 col-md-2">
            <span class="secicon fa fa-heart"></span>
          </div>
          <!--icon end-->
          <div class="col-sm-11 col-md-10">
            <h3>个人作品</h3>
            <div class="award" v-for="(work,index) in works" :key="index">
              <h4>{{work.name}}</h4>
              <p class="sub">
                <a :href="work.url">作品地址</a>
              </p>
              <p>{{work.describe}}</p>
            </div>
          </div>
          <!--awards end-->
        </div>
      </div>
      <!--right end-->
      <div class="col-sm-12" id="map">
        <div id="closeMap" title="关闭地图">X</div>
      </div>
    </div>
    <!--container end-->
    <!-- <footer class="text-center">
            <p>power by
                <a href="http://www.birdgis.com/">birdgis</a>
            </p>
    </footer>-->
    <div class="btn-group-vertical fixed-btn">
      <button type="button" class="btn btn-default">
        <a href="#" title="回到顶部">
          <span class="social fa fa-2x fa-arrow-up" style="margin-right:0px"></span>
        </a>
      </button>
      <button type="button" class="btn btn-default">
        <a href="https://ouyangresume.github.io/" title="回到首页">
          <span class="social fa fa-2x fa-home" style="margin-right:0px"></span>
        </a>
      </button>
      <button type="button" class="btn btn-default" v-on:click="renderPdf">
        <a href="#" title="导出成PDF">
          <span class="social fa fa-2x fa-cloud-download" style="margin-right:0px"></span>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import * as html2canvas from "html2canvas"
import * as jsPDF from 'jspdf'
export default {
  data() {
    return {
      personal: {
        styleObject: {
          "background-color":
            "#" + (~~(Math.random() * (1 << 24))).toString(16),
          height: "1px",
          border: "none"
        },
        name: "欧阳波",
        jobHutter: "软件开发工程师",
        introduce:
          "本人吃苦耐劳，工作认真，能很快适应新环境，处事冷静，学习能力较强，对自己要求严格，条理性强，善于整理，具有良好的团队精神和较强的组织能力，具有扎实的专业知识和较强的实务操作技能，能熟练地运用专业软件，熟练各类办公软件，拥有《全国信息化工程师》、《全国计算机二级证》等证书。" +
          "热爱GIS，愿意为GIS事业奋斗终身。自我的评价就是自学，自律能力强，追求的是学无止境，止于至善。"
      },
      educations: [
        {
          property: "university",
          name: "江西农业大学",
          position: "地理信息科学",
          time: "2013.9-2017.6",
          introduce:
            "在校期间学习了高等数学、数据结构、线性代数、AutoCAD、JAVA、C++、HTML、CSS、JavaScript、地理学、地图学、计算机科学与技术、遥感技术、数据库技术、地理信息系统原理、测量学、地理信息系统设计与应用、地理信息系统二次开发等等,对ArcGIS,WebGIS的二次开发,对GIS软件操作比较熟悉,无论是MapGIS,QGIS还是ArcGIS。自学Python和数据库的相关操作,还有数据可视化。毕业设计做的《江西省新干县最短路径分析信息系统》,是基于arcgis api for javascript，ArcGISServer，MYSQL，JAVA,Echart等等技术开发的系统。"
        },
        {
          property: "internship",
          name: "广州奥格智能有限公司",
          position: "软件测试工程师",
          time: "2016.10-2017.4",
          introduce:
            "这是实习期，在该公司做的是测试工作，测试的是赣州崇义不动产项目登记的软件平台。期间对数据库语言进一步熟悉还认识到对业务的了解也是软件开发中很重要的一部分。"
        }
      ],
      jobExp: [
        {
          name: "firstJob",
          position: "webgis开发工程师",
          company: "武汉智图科技有限责任公司",
          time: "2017.6-2017.10",
          describe:
            "湖北省精准扶贫地理信息公共服务平台的研发工作。负责在线地图模块的专题图和专题监测的开发。" +
            "具体实现技术：Git版本控制，前端使用的bootstrap写的静态的页面，后台是ssm框架。" +
            "读取oracle中的贫困户数据转成json格式结合echarts生成热力图，迁徙图等一系列专题图。利用GeometryService重写实现性能相对较好的测量功能(博客中有代码哦) "
        },
        {
          name: "firstJob",
          position: "软件开发工程师",
          company: "武汉新烽光电股份有限公司",
          time: "2017.10-至今",
          describe:
            "负责西宁海绵城市信息平台和潜江智慧河长信息平台有关于地图的研发工作。" +
            "核心在于硬件设备（液位计，流量计,SS）获取数据的准确度。根据测绘院提供数据分析得到区域地块，河流,设备信息在地图上展示交互。其中值得一提有河长巡查河流动态轨迹的展示和村级河长点信息过多时采取聚类的方式得到解决。 "
        }
      ],
      awards: [
        {
          name: "三等奖学金",
          time: "2014-2017",
          describe: "多次获得该等奖学金"
        },
        {
          name: "二等奖学金",
          time: "2015/6",
          describe: "曾获得过一次该奖学金"
        },
        {
          name: "运动会长跑第四",
          time: "2014/11",
          describe: "在大学的运动会上的长跑项目获得了第四名。"
        }
      ],
      works: [
        {
          name: "Vue-GIS",
          url: "https://github.com/OuYangResume/Vue-Gis",
          describe: "从VUE出发一步一步靠近gis"
        },
        {
          name: "小小的诗不敢递给她",
          url: "https://ouyangresume.github.io",
          describe: "记录学习,生活状态， 我的一切"
        }
      ],
      skills: [
        {
          name: "ArcGIS",
          class: "progress-bar-info",
          styleObject: {
            width: "70%"
          }
        },
        {
          name: "Python",
          class: "progress-bar-success",
          styleObject: {
            width: "40%",
            color: "blue"
          }
        },
        {
          name: "Vue",
          class: "progress-bar-primary",
          styleObject: {
            width: "55%"
          }
        },
        {
          name: "JavaScript",
          class: "progress-bar-warning",
          styleObject: {
            width: "70%"
          }
        },
        {
          name: "JAVA",
          class: "progress-bar-danger",
          styleObject: {
            width: "60%"
          }
        }
      ]
    };
  },
  methods: {
    renderPdf() {
      html2canvas(document.getElementsByClassName("container"), {
        onrendered: function(canvas) {
          var contentWidth = canvas.width;
          var contentHeight = canvas.height;

          //一页pdf显示html页面生成的canvas高度;
          var pageHeight = (contentWidth / 595.28) * 841.89;
          //未生成pdf的html页面高度
          var leftHeight = contentHeight;
          //pdf页面偏移
          var position = 0;
          //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
          var imgWidth = 595.28;
          var imgHeight = (595.28 / contentWidth) * contentHeight;
          //返回图片URL，参数：图片格式和清晰度(0-1)
          var pageData = canvas.toDataURL("image/jpeg", 1.0);
          //方向默认竖直，尺寸ponits，格式a4【595.28,841.89]
          var pdf = new jsPDF("", "pt", "oouyang");
          //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
          //当内容未超过pdf一页显示的范围，无需分页
          // if (leftHeight < pageHeight) {
          //     pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
          // } else {
          //     while (leftHeight > 0) {
          //         pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          //         leftHeight -= pageHeight;
          //         position -= 841.89;
          //         //避免添加空白页
          //         if (leftHeight > 0) {
          //             pdf.addPage();
          //         }
          //     }
          // }

          //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
          pdf.addImage(pageData, "JPEG", 0, 0, 595.28, 900);
          pdf.save("oouyang.pdf");

          // document.body.appendChild(canvas);
        }
      });
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f4f4f4;
  color: #757575;
  font-family: "΢���ź�", "Alegreya Sans", sans-serif;
  letter-spacing: 2px;
  padding-bottom: 60px;
}

.container {
  background: #fff;
  padding: 70px 75px;
  margin: 50px auto;
  border: 1px solid #a5d4fc;
}

img {
  max-width: 100%;
}

.propic {
  border-radius: 10px;
}

hr {
  margin: 40px 0;
}

h1 {
  font-size: 2em;
  font-weight: bolder;
  text-transform: uppercase;
  color: #000;
  margin: 0;
}

h2 {
  font-size: 1.3em;
  background: #fcfcfc;
  padding: 10px;
}

h3 {
  font-size: 1.4em;
  text-transform: uppercase;
  color: #000;
  margin-top: 0;
}

h4 {
  margin: 15px 0 0;
}

p,
a {
  line-height: 1.7em;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 14px;
}

li {
  padding: 7px 0;
}

.dl-share .btn {
  min-width: 120px;
}

.signature {
  font-family: "Kristi", cursive;
  color: #3e3f40;
  font-size: 2.2em;
  margin-top: 20px;
}

.social {
  margin-right: 7px;
}

.btn .fa {
  margin-right: 10px;
}

.secicon.fa {
  font-size: 28px;
  color: #000;
  margin-right: 10px;
}

.sub {
  margin-bottom: 15px;
}

.award {
  padding-top: 20px;
}

blockquote {
  font-size: 1em;
  padding: 0 15px;
  margin: 30px 0;
}
.copyrights {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}
.mainleft {
  padding-right: 30px;
}

.testimonials img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  float: left;
  margin-right: 15px;
  margin-top: -10px;
  border: 1px solid #ededed;
}

.year,
.share {
  text-align: right;
}

footer p,
footer a {
  font-size: 13px;
}
/* mystyle */
.weixin {
  position: relative;
  font-size: 12px;
}

.weixin a img {
  width: 300px;
  height: 300px;
  background: red;
}

.weixin .weixin_nr {
  width: 145px;
  height: 170px;
  padding: 10px;
  background: lightblue;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  color: yellow;
  left: 0px;
  top: -160px;
  display: none;
}

.weixin .weixin_nr img {
  margin-bottom: 5px;
}

.weixin .weixin_nr .arrow {
  width: 0;
  height: 0;
  border-top: 10px solid #fff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  left: 60px;
  top: 156px;
}

.weixin.on .weixin_nr {
  display: block;
}

.fa-wechat {
  color: green;
}
.fixed-btn {
  position: fixed;
  right: 1%;
  bottom: 3%;
  border: 1px solid #eee;
  background-color: white;
  font-size: 24px;
  z-index: 1040;
}
.fa:hover {
  color: rgb(2, 252, 127);
}

#map {
  height: 300px;
  width: 100%;
  display: none;
  position: relative;
}
#closeMap {
  width: 30px;
  height: 30px;
  font-size: 20px;
  position: absolute;
  z-index: 9999;
  right: 0px;
  top: 0px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  background: #f1f1f1;
}
#closeMap:hover {
  background: gray;
  color: red;
}
</style>

