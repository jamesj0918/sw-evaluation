<template>
    <div id="TrendView">
        <div id="title">
            {{title}}
        </div>
        <div id="content">
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
                test_pk:0,
                data: [],
                columns: ["Num", "Score", "TScore", "HighestScore"]
            }
        },//data
        methods:{
            show_graph(num){
                console.log("hi"+num);
            }
        },
        mounted(){
            this.$bus.$on('show-graph',this.show_graph);
            console.log("trend");
            if(this.test == 'C1'){
                this.title = "C언어 1차 인증";
                this.test_pk = 1;
            }
            else if(this.test == 'C2'){
                this.title = "C언어 2차 인증"
                this.test_pk  = 2;

            }
            else if(this.test == 'AC1'){
                this.title = "고급 C언어 1차 인증"
                this.test_pk  = 3;

            }
            else if(this.test == 'AC2'){
                this.title = "고급 C언어 2차 인증"
                this.test_pk = 4;

            }
            else if(this.test == 'ALL'){

            }

            axios.get(this.test_pk+'/students/tscore/?student_id='+this.$route.params.student_id)
                .then((response)=>{
                    console.log(response);
                    for(let i=0;i<response.data.length;i++){
                        this.data.push({
                            Num: response.data[i].index, Score: response.data[i].score, TScore: response.data[i].tscore, HighestScore : response.data[i].highest_tscore
                        })
                    }
                    console.log(this.data);
                })
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
