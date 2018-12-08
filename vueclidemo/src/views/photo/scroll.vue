<template>
<div>
<section class="g-word">Header</section>
<section class="g-img1">
    <p class="g-img-content">
        IMG1
    </p>
</section>
<section class="g-word">Content1</section>
<section class="g-img2">
    <p class="g-img-content">
        IMG2
    </p>
</section>
<section class="g-word">Content2</section>
<section class="g-img3">
    <p class="g-img-content">
        IMG3
    </p>
</section>
<section class="g-word">Footer</section>
</div>
</template>

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
    transition: color .5s;
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


