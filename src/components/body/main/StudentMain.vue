<template>
    <div id="StudentMain">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Main",
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
    #StudentMain{
        width: 100%;
        height: 100%;
    }
</style>
