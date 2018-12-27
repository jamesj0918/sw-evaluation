<template>
    <div id="UserSelect">
        <div id="user_select_wrap">
            <div id="student_wrap">
                <div class="option_title">학생</div>
                <div id="input_student_id_wrap">
                    <input class="input_id" v-model="student_id" placeholder="student id"/>
                </div>
                <button class="enter_btn" @click="set_student">ENTER</button>
            </div>
            <div id="professor_wrap">
                <div class="option_title">교수</div>
                <div id="input_professor_id_wrap">
                    <input class="input_id" placeholder="professor id"/>
                </div>
                <button class="enter_btn" @click="set_professor">ENTER</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserSelect",
        data(){
            return{
                student: true,
                student_id: '',
            }
        },
        methods:{
            set_student(){
                this.$store.dispatch("SET_USER",true);
                this.$store.dispatch("SET_STUDENT_ID",this.student_id);
                this.$router.push('/student/'+this.student_id);

            },
            set_professor(){
                this.$store.dispatch("SET_USER",false);
                this.$router.push(('/professor'));
            }
        }
    }
</script>

<style scoped>

    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    button {
        padding: 5px 15px;
        background-color: rgba(231, 234, 237, 1);
        border: 1px solid rgb(51,54,57);
        border-radius: 4px;
        color: rgb(51,54,57);
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    input {
        height: 25px;
        border: rgb(51,54,57);
        border-radius: 4px;
        padding-left: 10px; padding-right: 10px;
    }

    input:focus {
        outline: none;
    }

    input:focus::placeholder {
        color: rgba(231, 234, 237, 1);
    }

    /*************id css*************/

    #UserSelect {
        width: 100%; height: 100%;
        text-align: center;
    }

    #user_select_wrap {
        width: 43%;
        margin-top: calc((100vh - 1px - 120px - 10px - 272px) / 2);
        background-color: rgba(77,79,84,1);
        border-radius: 4px;
        border: 1px solid rgba(231, 234, 237, 0.1);
        display: inline-block;
    }

    #student_wrap{
        width: calc(50% - 1px);
        padding: 60px 0;
        border-right: 1px solid rgba(231, 234, 237, 0.1);
        display:inline-block;
        float: left;
        text-align: center;
    }

    #professor_wrap{
        width: 50%;
        padding: 60px 0;
        display: inline-block;
        float: right;
        text-align: center;
    }

    /*************class css*************/

    .option_title {
        font-size: 30px;
        font-weight: bold;
        color: rgba(231, 234, 237, 0.7);
    }

    .input_id {
        margin: 50px 0;
    }

</style>
