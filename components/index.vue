<template>
    <div>
        <Header v-if="authState.loggedIn" app-name="Hot Notes" />
        <router-view>

        </router-view>

        <Footer v-if="authState.loggedIn"/>
    </div>
</template>

<script>
    import Login from "./custom/Login";
    import Home from "./views/Home";
    import Header from "./custom/Header";
    import Footer from "./custom/Footer";
    import {mapGetters} from "vuex";
    export default {
        name: "index",
        components: {Footer, Header, Home, Login},
        data(){
          return {
              notes: 6,
              showHeaderFooter: true,
          }
        },
        computed:{
            ...mapGetters('auth', {
                authState: 'authState'
            })
        },
        methods: {
            hideHeaderFooter(){
                this.showHeaderFooter = false;
            }
        },
    }
</script>

<style scoped>

</style>