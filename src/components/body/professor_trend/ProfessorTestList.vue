<template>
    <div id="ProfessorTestList">
        <div id="title">점수 통계</div>
        <div id="test_list_wrap">
            <div @click="go_to_test('C1')" class="list_menu">
               C언어 1차 인증
            </div>
            <div @click="go_to_test('C2')" class="list_menu">
                C언어 2차 인증
            </div>
            <div @click="go_to_test('AC1')" class="list_menu">
                고급C언어 1차 인증
            </div>
            <div @click="go_to_test('AC2')" class="list_menu">
                고급C언어 2차 인증
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TestList",
        data(){
          return{
              student_id : this.$route.params.student_id,
          }
        },
        methods:{
            go_to_test(test){
                this.$router.push('/professor/trend/'+test);
                location.reload();
            }
        }
    }
</script>

<style scoped>

    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    /*************id css*************/

    #ProfessorTestList {
        width: 100%;
    }

    #title {
        margin: 10px 0;
        padding: 3px 15px;
        font-size: 16px;
        font-weight: bold;
        color: #999999;
        text-align: center;
    }

    #test_list_wrap {
        min-height: 20px;
        padding: 19px;
        background-color: rgba(97,99,104,1);
        border: 1px solid rgba(231, 234, 237, 0.1);
        border-radius: 4px;
    }

    /*************class css*************/

    .list_menu {
        padding: 3px 15px;
        text-decoration: none;
        color: rgba(231, 234, 237, 0.7);
        outline: none;
        font-size: 14px;

        cursor: pointer;
    }

    .list_menu:hover {
        background-color: rgba(85, 87, 92, 1);
    }
</style>
