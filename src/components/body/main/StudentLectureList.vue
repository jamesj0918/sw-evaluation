<template>
    <div id="StudentLectureList">
        <div id="student_lecture_list_wrap">
            <div id="download_link"><a href="#">[ Student Manual ]</a></div>
            <div id="menu_wrap">
                <div id="menu_public_class_wrap">
                    <div class="menu_title" id="menu_public_class_title">Public Class</div>
                    <div class="menu_content">OJ 연습문제</div>
                </div>
                <div id="menu_my_class_wrap">
                    <div class="menu_title">My Class</div>
                    <div class="menu_content border_bottom">C프로그래밍및실습(004)</div>
                    <div class="menu_content">고급프로그래밍C(009)</div>
                </div>
                <div id="menu_my_score_wrap">
                    <div class="menu_title">My Score</div>
                    <div class="menu_content border_bottom" id="menu_my_score_content" @click = "gotoTrend" >
                        내 점수 통계
                    </div>
                </div>
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
    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    a {
        text-decoration: none;
        color: #337ab7;
        outline: none;
    }

    /*************id css*************/

    #StudentLectureList {
        width: 100%; height:100%;
        text-align: center;
    }

    #student_lecture_list_wrap{
        width: 43%; height: 100%;
        padding: 0 15px;
        display: inline-block;
    }

    #download_link {
        margin: 20px 0 10px 0;
        font-size: 24px;
        font-weight: 500;
    }

    #menu_wrap {
        margin-bottom: 20px;
    }

    #menu_public_class_title {
        border-radius: 4px 4px 0 0;
    }

    #menu_my_score_content {
        border-radius: 0 0 4px 4px;
    }

    /*************class css*************/

    .menu_title {
        height: 20px;
        padding: 10px 15px;
        text-align: left;
        background-color: #204e75;/*#337ab7*/
        color: #fff;
        font-size: 14px;
        line-height: 20px;
    }

    .menu_content {
        height: 20px;
        padding: 10px 15px;
        text-align: left;
        color: rgba(231, 234, 237, 0.7);
        background-color: rgba(77,79,84,1);
        border-left: 1px solid rgba(231, 234, 237, 0.1);
        border-right: 1px solid rgba(231, 234, 237, 0.1);
    }

    .menu_content:hover {
        background-color: rgba(85, 87, 92, 1);
        cursor: pointer;
    }

    .border_bottom{
        border-bottom: 1px solid rgba(231, 234, 237, 0.1);
    }

</style>
