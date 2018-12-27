<template>
    <div id="MainLayout">
        <div id="main_top">
            <top></top>
        </div>
        <div id="main_body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Top from './top/Top'
    export default {
        name: "MainLayout",
        components:{
            'top': Top,
        }
    }
</script>

<style scoped>
    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    #MainLayout{
        width: 100%; height: calc(100vh - 1px);

    }


    #main_top{
        height: 50px;
        margin-bottom: 1px;
        width: 100%;
    }
    #main_body{
        width: 100%; height: calc(100% - 50px - 10px);
        padding-top: 10px;
        background: rgb(51,54,57);
    }

</style>
