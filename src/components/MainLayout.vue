<template>
    <div>
        <div id="main_top">
            <top></top>
        </div>
        <div id="main_body">
            <trend-view></trend-view>
        </div>
    </div>
</template>


<script>
    import TrendView from './body/trend/TrendView.vue'
    import Top from './top/Top'
    export default {
        name: "MainLayout",
        components:{
            'trend-view': TrendView,
            'top': Top,
        }
    }
</script>

<style scoped>
    #main_top{
        display: inline-block;
        height: 7vh;
        margin-bottom: 1px;
        width: 100vw;
        background: rgb(51,54,57);
    }
    #main_body{
        display:inline-block;
        height: 90vh;
        width: 100vw;
        background: white;
    }

</style>
