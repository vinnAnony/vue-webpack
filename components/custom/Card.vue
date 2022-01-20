<template>
    <div class="bg-gray-100 p-6 shadow-md rounded-md">
        <h3 class="text-xl text-gray-800 font-semibold mb-3">{{noteTitle}}</h3>
        <p class="my-4">{{noteContent}}</p>
        <button v-on:click="$emit('remove-note',noteTitle)" class="text-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-1 block mx-auto rounded-md">Done</button>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['noteTitle','noteContent'],
        methods: {
            // deleteNote(){
            //
            // }
        }
    }
</script>

<style scoped>

</style>