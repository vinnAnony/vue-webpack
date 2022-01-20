<template>
    <div class="container w-full md:px-40 mx-auto py-20">
        <div class="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
            <Card v-for="(note,index) in notes" :key="index" v-bind:note-title="note.title"
                  v-bind:note-content="note.content"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>

</style>