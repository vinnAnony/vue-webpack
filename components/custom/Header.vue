<template>
    <div class="w-full bg- bg-gradient-to-tr from-indigo-600 to-purple-600 py-6 flex px-3 md:px-20 xl:px-60">
        <div class="w-full">
            <div class="float-left">
                <h1 class="text-white text-2xl font-semibold">{{this.appName}}</h1>
            </div>

            <div class="flex items-center space-x-10 float-right">
                <router-link to="/home"><Button>Home</Button></router-link>
                <router-link to="/about"><Button>About</Button></router-link>
                <router-link to="/archive"><Button>Archive</Button></router-link>
                <router-link to="/account"><Button>Account</Button></router-link>
            </div>

        </div>

    </div>
</template>

<script>
    import Button from "./Button";
    export default {
        name: "Header",
        components: {
            Button
        },
        props: ['appName']
    }
</script>

<style scoped>

</style>