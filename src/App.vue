<template>
    <div id="app" class="container">
        <desktop-header/>
        <router-view/>
    </div>
</template>

<script>
    import DesktopHeader from './components/DesktopHeader';

    export default {
        name: 'App',
        components: {DesktopHeader}
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
</style>
