<template>
    <div id="map">
    </div>
</template>

<script>
import * as maptalks from "maptalks";
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new maptalks.Map("map", {
        center: [-0.113049, 51.498568],
        zoom: 14,
        baseLayer: new maptalks.TileLayer("base", {
          urlTemplate:
            "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
          subdomains: ["a", "b", "c", "d"],
          attribution:
            '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
}
</style>


