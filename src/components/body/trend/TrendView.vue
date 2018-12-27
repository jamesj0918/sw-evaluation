<template>
    <div id="TrendView">
        <div id="title">
            {{title}}
        </div>
        <div id="content">
            <div id="trend_view">
                <trend-graph></trend-graph>
            </div>
            <div id="trend_table">
                <trend-table
                        :data = "data"
                        :columns = "columns"
                ></trend-table>
            </div>
        </div>
    </div>

</template>

<script>
    import TrendTable from './TrendTable'
    import TrendGraph from "./TrendGraph";

    export default {
        name: "TrendView",
        components:{
            'trend-graph': TrendGraph,
            'trend-table': TrendTable,
        },
        data(){
            return{
                test: this.$route.params.test,
                title: '',
                data: [{
                    Num: "1", Name: "문제1", Score: "100", TScore: "50", Highest : "100"
                }],
                columns: ["Num", "Name", "Score", "TScore", "Highest"]
            }
        },//data

        mounted(){
            console.log("trend");
            if(this.test == 'C1'){
                this.title = "C언어 1차 인증"
            }
            else if(this.test == 'C2'){
                this.title = "C언어 2차 인증"
            }
            else if(this.test == 'AC1'){
                this.title = "고급 C언어 1차 인증"
            }
            else if(this.test == 'AC2'){
                this.title = "고급 C언어 2차 인증"
            }
            else if(this.test == 'ALL'){
                this.title
            }
        },
    }
</script>

<style scoped>

    *{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0; padding: 0;
    }

    trend{
        display: inline-block;
        width: 50%;
        height: 10%;
    }

    /*************id css*************/

    #TrendView{
        width: 100%; height: auto;
    }

    #title {
        margin: 20px 0 10px 0;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        color: rgba(231, 234, 237, 0.7);
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

    /*************class css*************/




</style>
