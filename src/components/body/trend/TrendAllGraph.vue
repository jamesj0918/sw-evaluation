<template>
    <div id="TrendAllGraph">
        <div id="chart">
            <apexchart type=line height=350c  :options="chartOptions" :series="series" />
        </div>
    </div>
</template>

<script>
    import ApexCharts from 'vue-apexcharts'

    export default {
        name: "TrendGraph",
        components: {
            'apexchart': ApexCharts,
        },
        data(){
            return{
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
                            color: 'rgb(58,80,99)',
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
                        background: 'rgba(255,255,255, 0.6)',
                        foreColor: 'rgb(58,80,99)'
                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories: ["C언어 1차", "C언어 2차", "고급 C언어 1차" , "고급 C언어 2차"],
                        colors:[ 'rgb(58,80,99)'],
                    }
                }
            }
        },//data
        mounted(){
            var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            chart.render();
        }
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
