<template>
    <div id="trend_all_wrap">
        <div id="title">
            전체성적
        </div>
        <div>
            <trend-all-graph></trend-all-graph>
        </div>
    </div>
</template>

<script>
    import TrendAllGraph from './TrendAllGraph'
    export default {
        name: "TrendAll",
        components:{
            'trend-all-graph': TrendAllGraph,
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #trend_all_wrap{
        display:inline-block;
        width: 100%;
        height: 100%;
        background:rgb(51,54,57);
    }
    #title{
        font-size: 30px;
        font-weight: bold;
        color: white;
        padding-top: 10px;
    }
</style>
