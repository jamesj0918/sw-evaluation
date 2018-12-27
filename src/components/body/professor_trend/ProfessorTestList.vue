<template>
    <div id="test_list">
        <div @click="go_to_test('C1')">
           C언어 1차 인증
        </div>
        <div @click="go_to_test('C2')">
            C언어 2차 인증
        </div>
        <div @click="go_to_test('AC1')">
            고급C언어 1차 인증
        </div>
        <div @click="go_to_test('AC2')">
            고급C언어 2차 인증
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
        margin: 0;
        padding: 0;
    }
    #test_list{
        display: inline-block;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        width: 100%;
        height: auto;
    }



</style>
