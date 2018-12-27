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
                    <td  >
                        {{entry['UserID']}}
                    </td>
                    <td  >
                        {{entry['Grade']}}
                    </td>
                    <td  >
                        {{entry['Department']}}
                    </td>
                    <td v-for="score in scores[index]">
                        {{score.tscore}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ProfessorTrendTable",
        data(){

            return{
                sort_key: '',
                sort_orders : {},
                scores: [],
                test: this.$route.params.test,
                test_pk:0,
                data: [],
                columns: ["UserID", "Grade","Department"]
            }
        },//data
        computed:{
            filteredData(){
                const sort_key = this.sort_key;
                const order = this.sort_orders[sort_key] || 1;
                let data = this.data;
                let scores = this.scores;
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

            axios.get('students/?exam='+this.test_pk)
                .then((response)=>{
                    console.log(response);

                    for(let i=0;i<response.data.length;i++){
                        this.data.push({
                            UserID: response.data[i].student_id, Grade: response.data[i].grade, Department: response.data[i].department,
                        })
                        this.scores.push(response.data[i].scores)
                    }
                    for(let i=0;i<response.data[0].scores.length;i++){
                        this.columns.push(response.data[0].scores[i].index);
                    }
                    console.log(this.scores);
                })
        }
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
        border: 1px solid lightgray;
        border-radius: 3px;
        background: rgba(255,255,255,0);
        width: 80%;
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
        color: white;
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
