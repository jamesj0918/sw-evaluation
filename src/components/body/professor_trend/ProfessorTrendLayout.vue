<template>
    <div id="trend_wrap">
        <div id="test_list_wrap">
            <test-list></test-list>
        </div>

        <div id="test_analysis">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import TestList from './ProfessorTestList'
    export default {
        name: "TrendLayout",
        components:{
            'test-list': TestList,
        },
        data(){

        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #trend_wrap{
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    #test_list_wrap{
        display: inline-block;
        width: 25%;
        margin: 1%;
        border-radius: 10px;
        height: auto;
        float: left;
        background: darkgray;
    }

    #test_analysis{
        display: inline-block;
        width: 70%;
        float: right;

    }
</style>
