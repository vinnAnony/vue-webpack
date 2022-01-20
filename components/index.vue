<template>
    <div>
        <Header app-name="Hot Notes" />
        <router-view>

        </router-view>

        <Footer/>
    </div>
</template>

<script>
    import Login from "./custom/Login";
    import Home from "./views/Home";
    import Header from "./custom/Header";
    import Footer from "./custom/Footer";
    export default {
        name: "index",
        components: {Footer, Header, Home, Login},
        data(){
          return {
              notes: 6,
          }
        },

        beforeCreate() {
            console.log('beforeCreate hook has been called');
        },
        created() {
            console.log(`Created hook : Notes is of type ${typeof this.notes}`);
        },
        beforeMount() {
            console.log('beforeMount hook called')
        },
        mounted() {
            console.log('mounted has been called');
        },
        beforeUpdate(){
            console.log('beforeUpdate hook has been called');
        },

    }
</script>

<style scoped>

</style>