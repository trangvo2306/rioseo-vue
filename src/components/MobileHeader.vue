<template>
    <div class="mobile-header">
        <div class="mobile-menu">
            <span class="hamburger-menu"></span>
            <span class="hamburger-menu"></span>
            <span class="hamburger-menu"></span>
        </div>
        <img src="../assets/rioseo-logo-mobile.png" />
        <img src="../assets/map-pin.png" />
    </div>
</template>
<script>
    export default {
        name: 'MobileHeader',
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    @import '../variables.scss';

    .mobile-header {
        position: relative;
        font-size: 14px;
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #333;
    }
    .hamburger-menu {
        width: 30px;
        height: 4px;
        background: #fff;
        display: block;
        margin: 5px;
        border-radius: 2px;
    }
    .mobile-header .menu-elements {

        img {
            margin-top: -10px;
        }

        a {
            color: $brand-secondary;
            &:hover {
                text-decoration: none;
            }
        }
    }
</style>
