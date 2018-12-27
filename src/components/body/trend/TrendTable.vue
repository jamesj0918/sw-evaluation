<template>
    <div id="TrendTable">
        <table>
            <thead>
                <tr>
                    <th v-for="key in columns"
                        @click="sort_by(key)"
                        :class = "{active: sort_key == key}">
                        {{key | capitalize}}
                        <span class="arrow" :class = "sort_orders[key] > 0 ? 'asc' : 'dsc'"></span>
                    </th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="entry in filteredData" @click="show_graph(entry['Num'])" >
                    <td v-for="key in columns" style="cursor: pointer">
                        {{entry[key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TrendTable",
        props:{
            data: Array,
            columns: Array,
        },
        data(){
            const sort_orders = {};
            this.columns.forEach(key=>{
                sort_orders[key] = 1;
            });
            return{
                sort_key: '',
                sort_orders: sort_orders,
            }
        },//data
        computed:{
            filteredData(){
                const sort_key = this.sort_key;
                const order = this.sort_orders[sort_key] || 1;
                let data = this.data;

                if(sort_key){
                    data = data.slice().sort((a,b)=>{
                        a = a[sort_key];
                        b = b[sort_key];
                        return (a === b ? 0 : a > b ? 1 : -1)*order
                    })
                }
                return data
            }
        },//computed

        filters:{
            capitalize(str){
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },//filters
        methods:{
            sort_by(key){
                this.sort_key = key;
                this.sort_orders[key] = this.sort_orders[key] * -1;
            },
            show_graph(num){
                this.$bus.$emit('show-graph',num);
            }

        },
    }
</script>

<style scoped>

    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        width: 100%; height: 100%;
        border: 1px solid lightgray;
        border-radius: 3px;
        background: rgba(255,255,255,0);
    }

    thead {
        background-color: rgb(97,99,104);
    }

    th {
        background-color: rgb(97,99,104);
        color: rgba(255,255,255,0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    tbody{
        height: 100%;
        display: inline-block;
        overflow-y: auto;
    }

    td {
        display : inline-block;
        background: rgba(255,255,255,0);
        text-align: center;
        color:white;
    }

    th, td {
        min-width: AUTO;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    /********************************/

    table {
        width: 100%;
        border-spacing: 0;
    }

    thead, tbody, tr, th, td { display: block; }

    thead tr {
        /* fallback */
        width: 97%;
        /* minus scroll bar width */
        width: -webkit-calc(100% - 16px);
        width:    -moz-calc(100% - 16px);
        width:         calc(100% - 16px);
    }

    tr:after {  /* clearing float */
        content: ' ';
        display: block;
        visibility: hidden;
        clear: both;
    }

    tbody {
        height: calc(100% - 36px);
        overflow-y: auto;
        overflow-x: hidden;
    }

    tbody td, thead th {
        width: 18.5%;  /* 19% is less than (100% / 5 cols) = 20% */
        float: left;
    }

    td:hover {
        background-color: rgba(97,99,104, 0.5);
    }

    /*************id css*************/

    #TrendTable {
        width: 100%; height: 100%;
    }

    /*************class css*************/

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
</style>
