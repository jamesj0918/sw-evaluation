<template>
    <div id="TrendAll">
        <div id="trend_all_wrap">
            <div id="title">
                전체성적
            </div>
            <div id="content">
                <trend-all-graph></trend-all-graph>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import TrendAllGraph from './TrendAllGraph'
    export default {
        name: "TrendAll",
        components:{
            'trend-all-graph': TrendAllGraph,
        },
        mounted:{

        }
    }
</script>

<style scoped>

    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    #TrendAll {
        width: 100%; height: auto;
    }

    #trend_all_wrap {
        width: 100%; height: auto;
    }

    #title {
        margin: 20px 0 10px 0;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        color: rgba(231, 234, 237, 0.7);
    }

    #content {
        margin-top: calc(120px - 20px - 10px - 32px);
    }
</style>
