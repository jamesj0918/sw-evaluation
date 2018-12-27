<template>
    <div id="TrendGraph">
        <apexchart id="chart" type="area" height=350c :options="chartOptions"  :series="series" />
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
        props:{
            question: Number,
        },
        data(){
            return{
                category: [],
                data: [],
                test: this.$route.params.test,
                test_pk: 1,
                x: '',
                series: [{
                    name: "Students",
                    data: [],

                    labels:{
                        enabled: false,
                    },

                }],

                chartOptions:{
                    title:{
                        text:'번문제',
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                position: 'top', // top, center, bottom
                            },
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        /*
                        formatter: function (val) {
                            return val + "명";
                        },*/
                        offsetY: -20,
                        style: {
                            fontSize: '12px',
                            colors: ["white"]
                        }
                    },
                    annotations: {
                        xaxis: [{
                            x: 100.5,
                            borderColor: '#FEB019',
                            label: {
                                x: 70,
                                borderColor: '#FEB019',
                                style: {
                                    color: '#fff',
                                    background: '#FEB019',
                                },
                                orientation: 'horizontal',
                                text: 'ME',
                            }
                        }],
                    },
                    theme: {
                        monochrome: {
                            enabled: true,
                            color: 'lightgrey',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
                        },
                    },
                    tooltip:{
                        enabled: true,
                    },
                    legend:{
                      show: false,
                    },
                    chart: {
                        height: 350,
                        zoom: {
                            enabled: false
                        },

                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    grid: {
                        row: {
                            colors: 'rgb(58,80,99)', // takes an array which will be repeated on columns
                            opacity: 0
                        },
                    },
                    xaxis: {
                        categories: [],
                        type: "numeric",
                        colors:[ 'white'],
                    }
                }
            }
        },//data
        methods:{

            show_graph(num){
                if(this.test=='C1'){
                    this.test_pk = 1;
                }
                else if(this.test=='C2'){
                    this.test_pk = 2;
                }
                else if(this.test=='AC1'){
                    this.test_pk = 3;
                }
                else if(this.test=='AC2'){
                    this.test_pk = 4;
                }

                this.category=[];
                this.data=[];
                axios.get(this.test_pk+'/questions/tscore/?question='+num)
                    .then((response)=> {
                        console.log(response)
                        for (let i = 0; i < response.data.length; i++) {
                            this.category.push(response.data[i].tscore);
                            this.data.push(response.data[i].tie_count);
                        }
                        this.chartOptions = {
                            xaxis:{
                                categories: this.category
                            },
                            title:{
                                text: num+'번 문제'
                            },
                            theme: {
                                monochrome: {
                                    enabled: true,
                                    color: 'lightgrey',
                                    shadeTo: 'light',
                                    shadeIntensity: 0.65
                                },
                            },
                            dataLabels: {
                                enabled: false,
                                /*
                                formatter: function (val) {
                                    return val + "명";
                                },*/
                                offsetY: -20,
                                style: {
                                    fontSize: '12px',
                                    colors: ["white"]
                                }
                            },
                            chart: {
                                height: 350,
                                zoom: {
                                    enabled: false
                                },

                                background: 'none',
                                foreColor: 'lightgrey'
                            },
                        };
                        this.series=[{
                            data: this.data
                        }]
                    });

                axios.get(this.test_pk+'/students/tscore/?student_id='+this.$route.params.student_id)
                    .then((response)=>{
                        this.x = String(response.data[num-1].tscore);
                        this.chartOptions = {
                            annotations:{
                                xaxis: [{
                                    x: this.x,
                                    borderColor: 'rgb(163,69,180)',
                                    label: {
                                        borderColor: 'rgb(163,69,180)',
                                        style: {
                                            color: '#fff',
                                            background: 'rgb(163,69,180)',
                                        },
                                        orientation: 'horizontal',
                                        text: 'ME',
                                    }
                                }]
                            }
                        }
                    })
            }
        },
        mounted(){
            if(this.test=='C1'){
                this.test_pk = 1;
            }
            else if(this.test=='C2'){
                this.test_pk = 2;
            }
            else if(this.test=='AC1'){
                this.test_pk = 3;
            }
            else if(this.test=='AC2'){
                this.test_pk = 4;
            }
            this.$bus.$on('show-graph',this.show_graph);
            axios.get(this.test_pk+'/tscores/')
                .then((response)=> {
                    console.log(response.data);
                    for(let i=0;i<response.data.length;i++){
                        this.category.push(response.data[i].tscore);
                        this.data.push(response.data[i].tie_count);
                    }
                    console.log(this.category);
                    this.chartOptions = {
                        xaxis:{
                            categories: this.category
                        },
                        theme: {
                            monochrome: {
                                enabled: true,
                                color: 'lightgray',
                                shadeTo: 'light',
                                shadeIntensity: 0.65
                            },
                        },
                        chart: {
                            height: 350,
                            zoom: {
                                enabled: false
                            },
                            type: 'area',
                            background: 'rgba(255,255,255, 0)',
                            foreColor: 'lightgrey'
                        },

                    };
                    this.series=[{
                        data: this.data
                    }]
                });

            axios.get(this.test_pk+'/tscore/?student_id='+this.$route.params.student_id)
                .then((response)=>{

                    this.x = String(response.data.tscore);
                    this.chartOptions = {

                        annotations:{
                            xaxis: [{
                                x: this.x,
                                borderColor: 'rgb(163,69,180)',
                                label: {
                                    borderColor: 'rgb(163,69,180)',
                                    style: {
                                        color: '#fff',
                                        background: 'rgb(163,69,180)',
                                    },
                                    orientation: 'horizontal',
                                    text: 'ME',
                                }
                            }]
                        }
                    }
                })
        }
    }
</script>

<style scoped>
    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    /*************id css*************/

    #TrendGraph {
        width: 100%; height: auto;
    }

    #chart {
        width: 100%;
        margin: 0 auto;
    }

    /*************class css*************/

</style>
