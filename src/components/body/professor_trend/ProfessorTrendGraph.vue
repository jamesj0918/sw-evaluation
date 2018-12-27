<template>
    <div id="ProfessorTrendGraph">
        <apexchart id="chart" type=area height=350c  :options="chartOptions" :series="series" />

        <div id="menu_wrap">
            <select v-model="flag" id="select_wrap">
                <option disabled value=""></option>
                <option >문항</option>
                <option >분반</option>
                <option >학과</option>
            </select>
            <input id="input_menu" v-model="division"/>
        </div>
        <button @click="show_graph">
            확인
        </button>
    </div>


</template>

<script>
    import ApexCharts from 'vue-apexcharts'
    import axios from 'axios'
    export default {
        name: "TrendGraph",
        components: {
            'apexchart': ApexCharts,
        },
        data(){
            return{
                test: this.$route.params.test,
                test_pk:0,
                question: null,
                flag: '',
                division: '',
                categories: [],
                data: [],
                results: [],
                department: '전체',
                series: [{
                    name: "Desktops",
                    data: [],
                    labels:{
                        enabled: false,
                    },

                }],
                chartOptions:{
                    theme: {
                        monochrome: {
                            enabled: true,
                            color: 'lightgray',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
                        },
                    },
                    tip:{
                        enabled: false,
                    },
                    legend:{
                      show: false,
                    },
                    dataLabels:{
                        enabled: false,
                    },
                    chart: {
                        height: 350,
                        zoom: {
                            enabled: false
                        },
                        background: 'rgba(255,255,255, 0)',
                        foreColor: 'lightgrey'
                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0
                        },
                    },
                    xaxis: {
                        categories: [],
                        type: "numeric",
                        colors:[ '#f8f8f8'],
                    }
                }
            }
        },//data
        methods:{
            show_graph(){
                this.data=[];
                this.series=[];
                this.categories=[];
                if(this.flag == '문항'){
                    axios.get(this.test_pk+'/questions/tscore/?question='+this.division)
                        .then((response)=>{
                            console.log(response);
                            for(let i=0;i<response.data.length;i++){
                                this.data.push(response.data[i].tie_count);
                                this.categories.push(response.data[i].tscore);
                                this.chartOptions = {
                                    xaxis: {
                                        categories: this.categories
                                    },
                                }
                                this.series= [{
                                    data: this.data,
                                }]
                            }
                        })
                }
                else if(this.flag == '학과'){
                    if(this.division == '전체'){
                        this.results=[];
                        axios.get(this.test_pk+'/department/tscore/?department=컴퓨터공학과')
                            .then((response)=>{


                                for(let i=0;i<response.data.length;i++){
                                    this.results.push(response.data[i].tie_count);
                                    this.categories.push(response.data[i].tscore_average);
                                }
                                this.data.push({name: '컴퓨터공학과',data: this.results});

                            })
                        this.results=[];
                        axios.get(this.test_pk+'/department/tscore/?department=정보보호학과')
                            .then((response)=>{

                                for(let i=0;i<response.data.length;i++){
                                    this.results.push(response.data[i].tie_count);
                                    this.categories.push(response.data[i].tscore_average);
                                }
                                this.data.push({name: '정보보호학과',data: this.results});
                                console.log(this.data);
                            })
                        this.results=[];
                        axios.get(this.test_pk+'/department/tscore/?department=소프트웨어학과')
                            .then((response)=>{

                                for(let i=0;i<response.data.length;i++){
                                    this.results.push(response.data[i].tie_count);
                                    this.categories.push(response.data[i].tscore_average);
                                }
                                this.data.push({name: '소프트웨어학과',data:this.results});
                                console.log(this.data);
                            })
                        this.results=[];
                        axios.get(this.test_pk+'/department/tscore/?department=지능기전학과')
                            .then((response)=>{

                                for(let i=0;i<response.data.length;i++){
                                    this.results.push(response.data[i].tie_count);
                                    this.categories.push(response.data[i].tscore_average);
                                }
                                this.data.push({name:'지능기전학과', data: this.results});
                                console.log(this.data);

                            })

                        console.log(this.data);
                        this.chartOptions = {
                            xaxis: {
                                type: 'numeric',
                                categories: this.categories.sort(),
                            },
                        }
                        console.log(this.categories.sort());
                        this.series= [{
                            name: this.data[0].name, data: this.data[0].data
                        },{
                            name: this.data[1].name, data: this.data[1].data
                        },{
                            name: this.data[2].name, data: this.data[2].data
                        },{
                            name: this.data[3].name, data: this.data[3].data
                        }]
                        console.log("series",this.series);
                    }
                    else{
                        axios.get(this.test_pk+'/department/tscore/?department='+this.division)
                            .then((response)=>{
                                console.log(response);
                                for(let i=0;i<response.data.length;i++){
                                    this.data.push(response.data[i].tie_count);
                                    this.categories.push(response.data[i].tscore);
                                    this.chartOptions = {
                                        xaxis: {
                                            categories: this.categories
                                        },
                                    }
                                    this.series= [{
                                        data: this.data,
                                    }]
                                }
                            })
                    }

                }
            }
        },

        mounted(){

            if(this.test == 'C1'){
                this.test_pk = 1
            }
            else if(this.test == 'C2'){
                this.test_pk = 2
            }
            else if(this.test == 'AC1'){
                this.test_pk = 3
            }
            else if(this.test == 'AC2'){
                this.test_pk = 4
            }
            axios.get(this.test_pk+'/tscores/')
                .then((response)=>{
                    console.log(response);

                    for(let i=0;i<response.data.length;i++){
                        this.data.push(response.data[i].tie_count);
                        this.categories.push(response.data[i].tscore)
                    }

                    this.chartOptions = {
                        xaxis: {
                            categories: this.categories
                        },
                    }

                    this.series= [{
                        data: this.data,
                    }]
                })
        }
    }
</script>

<style scoped>

    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    select:focus {
        outline: none;
    }

    input {
        height: 25px;
        border: rgb(51,54,57);
        border-radius: 4px;
        padding-left: 10px; padding-right: 10px;
    }

    input:focus {
        outline: none;
    }

    input:focus::placeholder {
        color: rgba(231, 234, 237, 1);
    }

    button {
        padding: 5px 15px;
        background-color: rgba(231, 234, 237, 1);
        border: 1px solid rgb(51,54,57);
        border-radius: 4px;
        color: rgb(51,54,57);
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        display: inline-block; float: right;
        cursor: pointer;
    }

    #ProfessorTrendGraph {
        width: 100%; height: auto;
    }

    #chart{
        width: 100%;
        margin: 0 auto;
    }

    #menu_wrap {
        margin-bottom: 15px;
    }

    #select_wrap {
        width: 60px; height: 25px;
        border-radius: 4px;
        margin-right: 15px;
    }

</style>
