<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <pageone></pageone>
    </div>
    <div class="section">Second 2section ...</div>
    <div class="section">Second 3section ...</div>
    <div class="section">Second 4section ...</div>
    <div class="section">Second 5section ...</div>
  </full-page>
</template>

<script>
import pageone from './pages/pageone'
export default {
  components:{
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
  }
};
</script>
