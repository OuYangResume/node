<template>
  <div id="fullpage">
    <div class="section">
      <pageone></pageone>
    </div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
  </div>
</template>

<script>
import pageone from "./pages/pageone";
import fullpage from "fullpage.js";
export default {
  components: {
    pageone
  },
  data() {
    return {
      options: {
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#41b883"]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new fullpage("#fullpage", {
        //options here
        licenseKey:"",
        autoScrolling: true,
        scrollHorizontally: true,
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#41b883"]
      });

    }
  }
};
</script>
