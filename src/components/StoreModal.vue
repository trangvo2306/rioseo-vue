<template>
    <div class="store-modal">
        <span class="close" @click="closeModal">X</span>
        <div class="store-image"></div>
        <h3 class="single-store__distance">{{ store.name }}</h3>
        <div class="single-store__address" v-html="store.address + ', <br>' + store.city + ' ' + store.state + ' ' + store.postal_code"></div>
        <div>
            <a href="tel:123-456-7890" class="single-store__phone"><img src="../assets/phone-icon.png" /> 123-456-7890</a>

            <a href="#" class="single-store__direction"><img src="../assets/direction-icon.png" /> Get Direction</a>
        </div>

        <div class="store-hours">
            <div class="store-hours__row">
                <span class="store-date">Monday</span> <span class="store-hour">{{ store.monday_open }} - {{ store.monday_close }}</span>
            </div>
            <div class="store-hours__row">
                <span class="store-date">Tuesday</span> <span class="store-hour">{{ store.tuesday_open }} - {{ store.tuesday_close }}</span>
            </div>
            <div class="store-hours__row">
                <span class="store-date">Wednesday</span> <span class="store-hour">{{ store.wednesday_open }} - {{ store.wednesday_close }}</span>
            </div>
            <div class="store-hours__row">
                <span class="store-date">Thursday</span> <span class="store-hour">{{ store.thursday_open }} - {{ store.thursday_close }}</span>
            </div>
            <div class="store-hours__row">
                <span class="store-date">Friday</span> <span class="store-hour">{{ store.friday_open }} - {{ store.friday_close }}</span>
            </div>
            <div class="store-hours__row">
                <span class="store-date">Saturday</span> <span class="store-hour">{{ store.saturday_open }} - {{ store.saturday_close }}</span>
            </div>
            <div class="store-hours__row">
                <span class="store-date">Sunday</span> <span class="store-hour">{{ store.sunday_open }} - {{ store.sunday_close }}</span>
            </div>
        </div>

        <a class="btn btn-default btn-details" :href="store.url" target="_blank">View Full Details</a>
    </div>
</template>

<script>
    export default {
        name: 'StoreModal',
        data() {
            return {
                store: {},
            }
        },
        methods: {
            showModal: function (store) {
                this.store = store;
                console.log(store);

                document.querySelector('.store-modal').classList.add('open');
            },
            closeModal: function() {
                document.querySelector('.store-modal').classList.remove('open');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../variables.scss";

    .store-modal {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        border: 1px solid #f5f5f5;
        box-shadow: 1px 1px 3px #f5f5f5;
        background: #fff;
        overflow: auto;
        display: flex;
        align-content: space-between;
        flex-direction: column;
        visibility: hidden;
    }
    .store-modal.open {
        visibility: visible;
    }
    .store-image {
        height: 150px;
        width: 100%;
        background: #ababab;
        margin-bottom: 20px;
    }
    .store-hours {
        margin-top: 20px;
        font-size: 14px;
        flex-grow: 1;
    }
    .store-hours__row {
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
    .store-modal .single-store__phone,
    .store-modal .single-store__direction {
        display: inline-block;
        color: $brand-primary;
        margin-top: 10px;
    }
    .store-modal .single-store__phone {
        margin-right: 5rem;
    }
    .btn-details {
        width: 100%;
        margin-top: 15px;
    }
    .close {
        position: absolute;
        font-size: 18px;
        right: 5px;
        top: 5px;
    }
</style>
