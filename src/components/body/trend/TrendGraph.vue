<template>
    <div id="chart">
        <apexchart type=area height=350c  :options="chartOptions" :series="series" />
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
                    annotations: {
                        xaxis: [{
                            x: 1000,
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
                        palette: 'palette9',

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
                        }
                    },
                    stroke: {
                        curve: 'smooth',
                    },
                    title: {
                        text: 'Product Trends by Month',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        categories: ["C언어 1차", "C언어 2차", "고급 C언어 1차" , "고급 C언어 2차"],
                        colors:[ '#f8f8f8'],
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
        margin : 0;
        padding: 0;
    }
    #chart{
        width: 80%;
    }
</style>
