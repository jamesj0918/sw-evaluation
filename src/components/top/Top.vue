<template>
    <div id="top">
        <div id="top_wrap">
            <div id="page_title" @click="go_to_home">Ex-Online Judge</div>
            <div id="logout"><i class="sign out icon"></i>LOGOUT</div>
            <div id="user_id"><i class="user icon"></i>17011564</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Top",
        methods:{
            go_to_home(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    *{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        margin: 0; padding: 0;
    }

    #top {
        height: 50px;
        text-align: center;
        background-color: rgba(77,79,84,1);
        border-bottom: 1px solid rgba(170, 170, 170, 1);
    }

    #top_wrap {
        height: 50px; width: 90%;

        color: rgba(163, 163, 163, 1);

        display: inline-block;
    }

    #page_title {
        font-size: 18px;
        margin: 15px;
        display: inline-block;
        float: left;
        line-height: 20px;
    }

    #user_id {
        margin: 0 15px;
        font-size: 14px;
        line-height: 50px;
        display: inline-block;
        float: right;

    }

    #logout {
        margin: 0 15px;
        font-size: 14px;
        line-height: 50px;
        display: inline-block;
        float: right;
    }
</style>
