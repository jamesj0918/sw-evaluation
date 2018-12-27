<template>
    <div id="trend_view_wrap">
        <div id="title">
            {{title}}
        </div>
        <div>
            <div @click="showTable">
                Table
            </div>
            <div @click="showGraph()">
                Graph
            </div>
        </div>
        <div id="trend_view">
            <router-view></router-view>
        </div>


    </div>

</template>

<script>
    import ProfessorTrendTable from './ProfessorTrendTable'
    import ProfessorTrendGraph from './ProfessorTrendGraph'

    export default {
        name: "TrendView",
        components:{
          'professor-trend-table': ProfessorTrendTable,
        },
        data(){
            return{
                test: this.$route.params.test,
                title: '',
                table: true,
                data: [{
                    Num: "1", UserID: "17011572", Grade: 1, Class: 1,Department: "컴퓨터공학과",Total:200, 1: 100, 2: 80, 3: 20
                }],
                columns: ["Num", "UserID", "Grade","Class","Department","Total","1", "2","3",]
            }
        },//data
        mounted(){
            console.log("trend"+this.test);
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
        },
        methods:{
            showTable(){
                this.$router.push('/professor/trend/'+this.test);
                location.reload();
            },
            showGraph(){
                this.$router.push('/professor/trend/'+this.test+'/graph');
                location.reload();

            }
        }
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
