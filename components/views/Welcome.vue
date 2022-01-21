<template>
    <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div class="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
            <div class="flex flex-wrap -mx-3 items-center">
                <div class="w-1/4 px-3 text-center hidden md:block">
                    <div class="p-5 xl:px-8 md:py-5">

                    </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
                    <div class="p-5 xl:px-8 md:py-5">
                        <h3 class="text-2xl">Welcome to Hot Notes!</h3>
                        </div>
                </div>
                <div class="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
                    <div class="p-5 xl:px-8 md:py-5">
                        <button class="w-full py-2 px-4 rounded text-white bg-indigo-900 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out">
                            <router-link :to="{name:'account'}">Login</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../custom/Button";
    export default {
        name: "Welcome",
        components: {Button}
    }
</script>

<style scoped>

</style>