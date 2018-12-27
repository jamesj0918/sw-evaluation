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
            <tbody>
                <tr v-for="entry in filteredData">
                    <td v-for="key in columns">
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
            }
        },
    }
</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 1px solid lightgray;
        border-radius: 3px;
        background: rgba(255,255,255,0);
        width: 100%;

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

    td {
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
