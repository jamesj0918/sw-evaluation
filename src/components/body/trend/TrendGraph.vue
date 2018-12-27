<template>
    <div id="TrendGraph">
        <apexchart id="chart" type=area height=350c :options="chartOptions"  :series="series" />
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
                series: [{
                    name: "Desktops",
                    data: [100, 300, 200, 400,],

                    labels:{
                        enabled: false,
                    },

                }],
                chartOptions:{
                    annotations: {
                        xaxis: [{
                            x: 114,
                            offsetX: "50%",
                            borderColor: '#FEB019',
                            label: {
                                offsetX: "50%",
                                borderColor: '#FEB019',
                                style: {
                                    color: '#fff',
                                    background: '#FEB019',
                                },
                                orientation: 'horizontal',
                                text: 'New Beginning',
                            }
                        }],
                    },
                    theme: {
                        monochrome: {
                            enabled: true,
                            color: 'lightgray',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
                        },
                    },
                    tooltip:{
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
                        background: 'none',
                        foreColor: 'lightgrey'
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
                        colors:[ 'white'],
                    }
                }
            }
        },//data
        mounted(){
            axios.get('questions/tscore/?question=1')
                .then((response)=> {
                    for (let i = 0; i < response.data.length; i++) {
                        this.category.push(response.data[i].tscore);
                        this.data.push(response.data[i].tie_count);
                    }
                    this.chartOptions = {
                        xaxis:{
                            categories: this.category
                        }
                    };
                    this.series=[{
                        data: this.data
                    }]
                });

            axios.get('students/tscore/?student_id=18010001')
                .then((response)=>{

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
