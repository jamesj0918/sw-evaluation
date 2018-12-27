<template>
    <div>
        <div id="student_wrap">
            <div id="student">
                <div>
                    학생
                </div>
                <div>
                    <input v-model="student_id" />
                </div>
                <button @click="set_student">ENTER</button>
            </div>

        </div>
        <div id="professor_wrap">
            <div>
                교수
            </div>
            <button  @click="set_professor">ENTER</button>
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
        margin: 0;
        padding: 0;
    }
    #student_wrap{
        display:inline-block;
        float: left;
        width: 50%;
        height: 100%;
        font-size: 50px;
        color: white;
        font-weight: bold;
        margin: auto;
    }
    #professor_wrap{
        display: inline-block;
        float: right;
        width: 50%;
        height: 100%;
        font-size: 50px;
        color: white;
        font-weight: bold;
    }

    button{
        display: inline-block;
        width: 20%;
        height: 5vh;
        border-radius: 10px;
        outline:none;
        font-size: 30px;
        font-weight: bold;
    }

</style>
