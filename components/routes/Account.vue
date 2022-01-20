<template>
    <keep-alive>
        <component v-bind:is="accountView" @switchView="changeView"/>
    </keep-alive>

</template>

<script>
    import Login from "../customs/Login";
    import SignUp from "../customs/SignUp";
    export default {
        name: "Account",
        components: {
          Login,SignUp
        },
        data(){
            return {
                accountView: 'SignUp'
            }
        },
        methods: {
            changeView(){
                if (this.accountView === Login) {
                    this.accountView = SignUp;
                } else {
                    this.accountView = Login;
                }
            }
        },
        beforeDestroy() {
            console.log("Before destroy")
        },
        destroyed() {
            console.log("Destroyed" + this)
        }
    }
</script>

<style scoped>

</style>