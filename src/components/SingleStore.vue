<template>
    <div class="single-store">
        <div class="single-store__details" @click="getDirection(storeLat, storeLong)">
            <div class="single-store__header">
                <h3 class="single-store__name">{{ storeName }}</h3>
                <span class="single-store__distance">{{ storeDistance }} miles</span>
            </div>

            <div class="single-store__address" v-html="storeAddress"></div>
            <span class="single-store__hour">Open today until {{ storeHour }}</span>
            <a :href="'tel:' + storePhone" class="single-store__phone"><img src="../assets/phone-icon.png" /> {{ storePhone }}</a>
        </div>
        <div class="btn-wrapper">
            <a :href="'https://www.google.com/maps?saddr&daddr=' + storeAddress.replace('<br>', '')" class="single-store__direction btn btn-default" target="_blank">Direction</a>
            <a href="#" class="single-store__details btn btn-default" @click="triggerEvent">More Info</a>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'SingleStore',
        props: {
            storeName: {
                type: String,
                value: ''
            },
            storeDistance: {
                type: Number,
                value: ''
            },
            storeAddress: {
                type: String,
                value: ''
            },
            storeHour: {
                type: String,
                value: ''
            },
            storePhone: {
                type: String,
                value: ''
            },
            storeLat: {
                type: String,
                value: ''
            },
            storeLong: {
                type: String,
                value: ''
            },
            index: {
                type: Number,
                value: 0
            }
        },
        methods: {
            getDirection: function(long, lat) {
                let mapWidth = document.querySelector('.map').clientWidth + 20;
                let mapHeight = document.querySelector('.map').clientHeight + 20;

                let mapImage = document.querySelector('.map-image');

                mapImage.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + long + ',' + lat +'&zoom=13&scale=2&size=' + mapWidth + 'x' + mapHeight + '&maptype=roadmap&format=png&visual_refresh=true&markers=size:small%7Ccolor:0xff0000%7Clabel:1%7C' + long + ',' + lat +'&key=AIzaSyDD9OYQwdkwds_OcANaxiy1d_Z8DzAxKmc';
                this.$emit('test-event');
            },
            triggerEvent: function() {
                this.$parent.$emit('open-modal', this.index);
                this.getDirection(this.storeLat, this.storeLong);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../variables.scss";

    .single-store {
        position: relative;
        border: 1px solid #f5f5f5;
        box-shadow: 1px 1px 3px #f5f5f5;
        color: #333;
        padding: 20px 10px;
        font-size: 14px;
    }
    h3.single-store__name {
        font-size: 20px;
    }
    /*.single-store__distance {*/
        /*position: absolute;*/
        /*top: 0;*/
        /*right: 0;*/
    /*}*/
    .single-store__header {
        display: flex;
        justify-content: space-between;
    }
    .single-store__hour,
    .single-store__phone{
        display: block;
        margin: 10px 0;
    }
    .single-store__hour {
        color: #15c9ea;
    }
    .single-store__phone {
        color: $brand-primary;
    }
    .btn-wrapper {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .btn {
            width: 47%;
        }
    }
</style>
