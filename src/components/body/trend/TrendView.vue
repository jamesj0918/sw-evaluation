<template>
    <div id="trend_view_wrap">
        <div id="trend_view">
            <trend
                    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                    :gradient="['gray', 'lightgray', 'white']"
                    auto-draw
                    :radius="7"
                    smooth>
            </trend>
        </div>
        <div id="trend_table">

            <trend-table
                    :data = "grid_data"
                    :columns = "grid_columns"
            ></trend-table>
        </div>

    </div>

</template>

<script>
    import TrendTable from './TrendTable'
    export default {
        name: "TrendView",
        components:{
            'trend-table': TrendTable,
        },
        data(){
            return{

                grid_columns: ['PBName','Score'],
                grid_data: [
                    {PBName: '1', Score: 100},
                    {PBName: '2', Score: 30},
                    {PBName: '3', Score: 60},
                    {PBName: '4-1', Score: 0},
                    {PBName: '4-2', Score: 0},
                    {PBName: '5-1', Score: 100},
                    {PBName: '5-2', Score: 100},
                    {PBName: '5-3', Score: 0},
                ]
            }
        }
    }
</script>

<style scoped>
    #trend_view_wrap{
        display:inline-block;
        width: 100%;
        height: 100%;
        background:rgb(51,54,57);
    }

</style>
