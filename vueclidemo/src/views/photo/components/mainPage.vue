<template>
  <div class="mianpage">
    <div class="zhuti">主题</div>
    <div class="mian">
      <div class="windon">
        <img src="http://39.108.100.163:8084/hzzx1_20180930.jpg" alt="">
        <h2>会展中心</h2>
        <hr>
        <p>2018/9/30</p>
      </div>
      <div class="windon">
        <img src="http://39.108.100.163:8084/hzzx2_20180930.jpg" alt="">
        <h2>会展中心</h2>
        <hr>
        <p>2018/9/30</p>
      </div>
      <div class="windon">
        <img src="http://39.108.100.163:8084/hzzx3_20180930.jpg" alt="">
        <h2>会展中心</h2>
        <hr>
        <p>2018/9/30</p>
      </div>
      <div class="windon">
        <img src="http://39.108.100.163:8084/hzzx4_20180930.jpg" alt="">
        <h2>会展中心</h2>
        <hr>
        <p>2018/9/30</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
 <style lang="scss" scoped>
.mianpage {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: white;
    width: 100%;
    margin: 0px auto;
    padding: 0px;
    .zhuti {
        height: 10%;
    }
    .mian {
        height: 90%;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        .windon {
            width: calc(33% - 60px);
            height: 40%;
            margin: 0 30px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 25px;
                margin-top: 10px;
            }
            img {
                width: calc(100% - 20px);
                height: calc(85% - 20px);
                padding: 10px;
                background-color: rgb(186, 245, 233);
            }
            hr {
                width: 70%;
                height: 1px;
            }
        }
    }
}
</style>
 
