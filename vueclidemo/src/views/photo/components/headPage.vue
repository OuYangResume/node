<template>
  <div class="headpage">
    <div class="main">
      <div class="title">
        有待开发
      </div>
      <div class="photo">
       
        <div v-for="(item,index) in photoData" :key="index">
          <img :src="item.imagePath" alt="" srcset="">
          <p>{{item.imageDate}}</p>
        </div>
        <!-- <div>
          <img src="http://39.108.100.163:8084/dapeng1_20180915.jpg" alt="" srcset="">
          <p>二零一八年十二月二十九日</p>
        </div>
        <div>
          <img src="http://39.108.100.163:8084/dapeng2_20180915.jpg" alt="" srcset="">
          <p>二零一八年二月二日</p>
        </div>
        <div>
          <img src="http://39.108.100.163:8084/dapeng3_20180915.jpg" alt="" srcset="">
          <p>二零一八年二月二十二日</p>
        </div>
        <div>
          <img src="http://39.108.100.163:8084/shixia_20181030.jpg" alt="" srcset="">
          <p>二零一八年十一月二日</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            photoData: [
                {
                    imagePath: "http://39.108.100.163:8084/dapeng1_20180915.jpg",
                    imageDate: "二零一八年十二月二十九日"
                },
                {
                    imagePath: "http://39.108.100.163:8084/dapeng2_20180915.jpg",
                    imageDate: "二零一八年二月二日"
                },
                {
                    imagePath: "http://39.108.100.163:8084/dapeng3_20180915.jpg",
                    imageDate: "二零一八年二月二十二日"
                },
                {
                    imagePath: "http://39.108.100.163:8084/shixia_20181030.jpg",
                    imageDate: "二零一八年十一月二日"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.headpage {
    background-color: rgb(186, 245, 233);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
        display: flex;
        width: 75%;
        height: 70%;
        border: 1px solid;
        .title {
            width: 30%;
        }
        .photo {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            div {
                width: calc(50% - 100px);
                height: calc(50% - 100px);
                padding: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: opacity 0.5s;
                &:hover {
                    opacity: 0.6;
                    p {
                        color: red;
                    }
                }
                img {
                    width: calc(100% - 20px);
                    height: calc(100% - 20px);
                    padding: 10px;
                    background-color: white;
                }
                p {
                    margin-top: 10px;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>

