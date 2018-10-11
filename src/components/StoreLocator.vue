<template>
    <div class="store-locator">
        <div class="store-list">
            <singleStore v-for="store, index in stores" :storeName=store.name :storeDistance=store.distance :storeAddress="store.address + ', <br>' + store.city + ' ' + store.state + ' ' + store.postal_code"  :storeHour=closingTime(store) :storeLong="store.longitude" :storeLat="store.latitude" storePhone='123-456-7890' :index="index"></singleStore>
        </div>
        <div class="map">
            <img class="map-image" src="" />
            <StoreModal ref="storeModal"></StoreModal>
        </div>
    </div>
</template>
<script>
    import SingleStore from './SingleStore';
    import axios from 'axios';
    import StoreModal from './StoreModal';

    export default {
        name: 'StoreLocator',
        components: {SingleStore,StoreModal},
        data() {
            return {
                stores: [],
                errors2: [],
            }
        },
        methods: {
            getStores: function() {
                axios.get(`https://my.api.mockaroo.com/locations.json?key=a45f1200`)
                    .then(response => {
                        this.stores = response.data;
                        this.getUserLocation();
                    })
                    .catch(e => {
                        this.errors2.push(e)
                    })
            },
            getUserLocation: function() {
                if (navigator.geolocation) {
                    return navigator.geolocation.getCurrentPosition(this.getDistance);
                }

            },
            // Source https://www.geodatasource.com/developers/javascript
            findDistance: function(lat1, lon1, lat2, lon2, unit) {
                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                return Math.round( dist * 10 ) / 10;
            },
            getDistance: function (position) {
                let that = this;
                that.stores.forEach(function (element) {
                    element.distance = that.findDistance(position.coords.latitude, position.coords.longitude, parseFloat(element.latitude), parseFloat(element.longitude), "M");
                });
                this.sortDistance();
            },
            sortDistance: function() {
                console.log(this.stores);

                this.stores.sort(function(a, b) {
                    return a.distance - b.distance;
                });

            },
            closingTime: function(store) {
                var d = new Date();
                var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

                return store[days[d.getDay()] + '_close'];
            }
        },
        mounted() {
            this.getStores();
            let that = this;
            this.$on('open-modal', function(index) {
                that.$refs.storeModal.showModal(that.stores[index]);
            });
        }
    }
</script>

<style lang="scss">
    .store-locator{
        display: flex;
        height: 80vh;
        border: 1px solid #f5f5f5;
        box-shadow: 1px 1px 4px #eaeaea;
    }
    .store-list, .map {
        height: 100%;
        width: 50%;
    }
    .map {
        background: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .store-list {
        overflow-x: hidden;
        overflow-y: auto;
        padding: 20px;
    }
    .store-modal .single-store__phone {
        display: inline-block;
    }

</style>
