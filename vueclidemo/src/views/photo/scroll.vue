<template>
  <div>
    <section class="g-word">Header</section>
    <section>
      <img
       class="lazy"
        src
        alt
        data-src="http://up.enterdesk.com/edpic_source/21/00/00/210000f8e772d7fc0758e67ae4b48807.jpg"
      >
      <p class="g-img-content">IMG1</p>
    </section>
    <section class="g-word">Content1</section>
    <section >
      <img
      class="lazy"
        src
        alt
        data-src="https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop="
      >
      <p class="g-img-content">IMG2</p>
    </section>
    <section class="g-word">Content2</section>
    <section >
      <p class="g-img-content">IMG3</p>
      <img
      class="lazy"
        src
        alt
        data-src="http://39.108.100.163:8084/dapeng1_20180915.jpg"
      >
    </section>
    <section class="g-word">Footer</section>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initFun();
  },
  created(){
     this.initFun();
  },
  methods: {
    initFun() {
    
      document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages;
        // 浏览性兼容性判断
        if ("IntersectionObserver" in window) {
            debugger;
          lazyloadImages = document.querySelectorAll(".lazy");
          var imageObserver = new IntersectionObserver(function(
            entries,
            observer
          ) {
            entries.forEach(function(entry) {
              // 图片是否进入视窗
              if (entry.isIntersecting) {
                var image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove("lazy");
                imageObserver.unobserve(image);
              }
            });
          });
          // 将观察者注册到所有图片上
          lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
          });
        } else {
          // 对于不兼容intersection observer API的浏览器使用事件绑定方式
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$img1: "http://39.108.100.163:8084/dapeng1_20180915.jpg";

$img2: "http://up.enterdesk.com/edpic_source/21/00/00/210000f8e772d7fc0758e67ae4b48807.jpg";

$img3: "https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=";

@mixin img-type() {
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  display: flex;
  .g-img-content {
    cursor: pointer;
    color: #fff;
    transition: color 0.5s;
  }
  .g-img-content::before {
    content: "";
    height: 2px;
    width: 200px;
    color: deeppink;
    // z-index: -1;
    border-bottom: 2px solid #000;
    transition: all 0.5s;
  }
  .g-img-content:hover::before {
    width: 400px;
    color: red;
  }
}

section {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}

.g-img1 {
  background-image: url($img1);
  @include img-type();
}

.g-img2 {
  background-image: url($img2);
  @include img-type();
}

.g-img3 {
  background-image: url($img3);
  @include img-type();
}
</style>


