<template>
    <div id="ProfessorTrendTable">
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
                <tr v-for="(entry,index) in filteredData" @click="gotoGraph(entry['Num'],entry['UserID'])">
                    <td v-for="(key) in columns" >
                        {{entry[key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProfessorTrendTable",
        data(){

            return{
                sort_key: '',
                sort_orders : {},
                test: this.$route.params.test,
                data: [{
                    Num: "1", UserID: "17011572", Grade: 1, Class: 1,Department: "컴퓨터공학과",Total:200, 1: 100, 2: 80, 3: 20
                }],
                columns: ["Num", "UserID", "Grade","Class","Department","Total","1", "2","3",]
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
            gotoGraph(index,student_id){
                location.reload();

                this.$router.push('/student/'+student_id+'/trend/');
            }
        },
        mounted(){
            this.columns.forEach(key=>{
               this.sort_orders[key] = 1;
            });
        }
    }
</script>

<style scoped>
    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 2px solid rgb(58,80,99);
        border-radius: 3px;
        background-color: #fff;
        width: 80%;
    }

    th {
        background-color: rgb(58,80,99);
        color: rgba(255,255,255,0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    td {
        background-color: #f8f8f8;
        text-align: center;
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

    #ProfessorTrendTable {
        width: 100%; height: auto;
        text-align: center;
        padding-bottom: 20px;
        overflow: auto;
    }

    table {
        min-width: 100%;
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
