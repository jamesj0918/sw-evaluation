<template>
    <div id="trend_view_wrap">
        <div id="title">
            {{title}}
        </div>
        <div id="trend_view">
            <trend-graph :question=question></trend-graph>
        </div>
        <div id="trend_table">
            <trend-table
                    :data = "data"
                    :columns = "columns"
            ></trend-table>
        </div>

    </div>

</template>

<script>
    import TrendTable from './TrendTable'
    import TrendGraph from "./TrendGraph";
    import axios from 'axios'

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
                question: 1,
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

            axios.get('questions/tscore/?question=1')
                .then((response)=>{
                    console.log(response);
                })
        },
    }
</script>

<style scoped>
    trend{
        display: inline-block;
        width: 50%;
        height: 10%;
    }
    #trend_view_wrap{
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
