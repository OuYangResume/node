<template>
    <div id="map">
    </div>
</template>

<script>
import * as maptalks from "maptalks";
export default {
  data() {
    return {
      map: null,
      markerLayer:null,
      imgUrl:null
    };
  },
  mounted() {
    this.initMap();
    let list =[
      {lon:"-0.113049",lat:"51.498568"},
      {lon:"0",lat:"51.498568"}
    ];
    this.addMarkerList(list);
  },
  created(){
    this.imgUrl = require("../../../static/images/logo.png")
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
    },
     addMarkerList(list) {
      let vm = this;
      if (vm.markerLayer == null) {
        vm.markerLayer = new maptalks.VectorLayer("markerLayer").addTo(vm.map);
      }
      vm.markerLayer.clear();
      //判断数据是否为空
      if (list == null) {
        return;
      } else {
        for (var i in list) {
          console
          var marker = new maptalks.Marker([list[i].lon, list[i].lat], {
          }).addTo(vm.markerLayer);
          marker.attributes = {
            data: list[i]
          };

          let symbol0 = [
            {
              textFaceName: "sans-serif",
              textName: parseInt(i)+1,
              textSize: 14,
              textDy: -43,
              textFill: "#333333"
            },
            {
              markerFile: vm.imgUrl,
              markerWidth: 36,
              markerHeight: 36
            }
          ];
          let symbol = [
            {
              markerFile:
                "../../../assets/images/icon/icon_operate_case-se.png",
              markerWidth: 8,
              markerHeight: 8
            }
          ];
          marker.setSymbol(symbol0);
          //先不写marker的样式
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
}
</style>


