<template>
    <div>
        <div>
            My Score
        </div>
        <div>
            <div @click = "gotoTrend">
                내 점수 통계
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentLectureList",
        data(){
            return{
                student_id : this.$route.params.student_id,
            }
        },
        methods:{
            gotoTrend(){
                this.$router.push('/student/'+this.student_id+'/trend');
            }
        }

    }
</script>

<style scoped>

</style>
