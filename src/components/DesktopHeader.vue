<template>
    <div class="desktop-header">
        <img src="../assets/rioseo-logo.png" />
        <div class="menu-elements">
            <a href="#">Menu</a>
            <a href="#"><img src="../assets/location-icon.png" /> Truck Locator</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DesktopHeader',
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    @import '../variables.scss';

    .desktop-header {
        position: relative;
        font-size: 14px;
        padding: 20px 10px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .desktop-header .menu-elements {

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
