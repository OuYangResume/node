<template>
    <div class="map">  
        <div class="map_left">
             <router-link to="/index/map/addWMS">addwms</router-link>
        </div>
        <div class="map_right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
.map{
    display: flex;
    height: 100%;
    .map_left{
        width: 8%;
    }
    .map_right{
        width: 92%;
    }
}
</style>



