<template>
    <div id="app" class="container">
        <desktop-header v-if="!isMobile" />
        <mobile-header v-if="isMobile" />
        <router-view />
    </div>
</template>

<script>
    import DesktopHeader from './components/DesktopHeader';
    import MobileHeader from './components/MobileHeader';

    export default {
        name: 'App',
        components: {DesktopHeader, MobileHeader},
        data() {
            return {
                isMobile: window.innerWidth < 415
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Open Sans', Arial, sans-serif;
    }

    @media screen and (max-width: 414px) {
        #app {
            height: 100vh;
            overflow: hidden;
        }
    }
    .btn-default {
        background: #333;
        color: white;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
        &:hover {
            color: white;
        }
    }
    @media screen and (max-width: 414px) {
        .container {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
