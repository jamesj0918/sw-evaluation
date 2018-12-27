<template>
    <div>
        <div>
            Total Score
        </div>
        <div>
            <div @click = "gotoTrend">
                점수 통계
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfessorLectureList",
        methods:{
            gotoTrend(){
                this.$router.push('/professor/trend');
            }
        }
    }
</script>

<style scoped>

</style>
