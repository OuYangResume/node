<template>
    <div class="mianpage">
        <div class="zhuti">主题</div>
        <div class="mian">
            <div class="windon">
                <img src="@/assets/images/hzzx1_20180930.jpg" alt="">
                <h2>会展中心</h2>
                <hr>
                <p>2018/9/30</p>
            </div>
            <div>上中</div>
            <div>上右</div>
            <div>下左</div>
            <div>下中</div>
            <div>下右</div>
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
  background-color: rgb(255, 255, 255);
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
    div {
      width: 30%;
      height: 30%;
      .windon {
        img {
          width: 100%;
          height: 100%;
        }
        hr{
            width: 70%;
    height: 1px
        }
      }
    }
  }
}
</style>
 
