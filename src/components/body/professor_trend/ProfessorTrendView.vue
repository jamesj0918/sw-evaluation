<template>
    <div id="ProfessorTrendView">
        <div id="title">
            {{title}}
        </div>
        <div id="menu_wrap">
            <span @click="showTable" class="menu_link">
                [ Table ]
            </span>
            &nbsp;&nbsp;&nbsp;
            <span @click="showGraph()" class="menu_link">
                [ Graph ]
            </span>
        </div>
        <div id="content">
            <div id="trend_view">
                <router-view></router-view>
            </div>
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

    #ProfessorTrendView{
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

    #menu_wrap {
        margin: 30px 0 10px 0;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
    }

    #content {
        width: 100%; height: auto;
        /*padding-bottom: 20px;*/
        margin-top: calc(120px - 20px - 32px - 30px - 17px);
        /*overflow-x: auto; overflow-y: auto;*/
    }

    #trend_view {
        width: 100%; height: auto;
    }

    /*************class css*************/

    .menu_link {
        text-decoration: none;
        color: #337ab7;
        outline: none;
        cursor: pointer;
    }

</style>
