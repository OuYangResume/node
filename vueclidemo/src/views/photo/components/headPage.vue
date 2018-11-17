<template>
    <div class="headpage">
        <div class="main">
            <div class="title">
                文字
            </div>
            <div class="photo">
                <div>
                    <img src="@/assets/images/shixia.jpg" alt="" srcset="">
                </div>
                <div><img src="@/assets/images/shixia.jpg" alt="" srcset=""></div>
                <div><img src="@/assets/images/shixia.jpg" alt="" srcset=""></div>
                <div><img src="@/assets/images/shixia.jpg" alt="" srcset=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
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
    width: 80%;
    height: 65%;
    border: 1px solid;
    .title {
      width: 30%;
    }
    .photo {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      div {
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.5s;
        &:hover {
          opacity: 0.6;
        }
        img {
          width: 300px;
          min-width: 303px;
          height: 210px;
          min-height: 210px;
          padding: 10px;
          background-color: rgb(255, 255, 255);
        }
      }
    }
  }
}
</style>

