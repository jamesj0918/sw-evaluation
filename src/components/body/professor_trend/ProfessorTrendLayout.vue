<template>
    <div id="ProfessorTrendLayout">
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
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    /*************id css*************/

    #ProfessorTrendLayout {
        height: 100%;
        margin: 0 5%;
        padding: 0 15px;
    }

    #test_list_wrap{
        width: 22%; height: 100%;
        display: inline-block;
        float: left;
    }

    #test_analysis{
        width: calc(100% - 22% - 30px - 15px);
        padding-left: 15px;
        display: inline-block;
        float: right;
    }

    /*************class css*************/
</style>
