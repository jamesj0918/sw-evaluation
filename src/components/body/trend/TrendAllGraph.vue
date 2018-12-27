<template>
    <div id="TrendAllGraph">
        <apexchart id="chart" type=line height=350c  :options="chartOptions" :series="series" />
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
                data:[0,0,0,0],
                series: [{
                    name: "Desktops",
                    data: [100, 300, 200, 400],
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
                            colors: 'rgb(58,80,99)', // takes an array which will be repeated on columns
                            opacity: 0
                        },
                    },
                    xaxis: {
                        categories: ["C언어 1차","C언어 2차", "고급C 1차","고급C 2차"],
                        type: "category",
                        colors:[ 'white'],
                    }
                }
            }
        },//data
        created(){
            for(let i=1;i<=4;i++){
                axios.get(i+'/tscore/?student_id='+this.$route.params.student_id)
                    .then((response)=>{
                        this.data[i-1]=response.data.tscore_average;
                        this.series=[{
                            data: this.data
                        }]
                    })
            }
        },
    }
</script>

<style scoped>

    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    /*************id css*************/

    #TrendAllGraph {
        width: 100%; height: auto;
    }

    #chart{
        width: 100%;
        margin: 0 auto;
    }

    /*************class css*************/

</style>
