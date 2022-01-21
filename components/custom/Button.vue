<template>
    <button @click="$emit('clicked')" class="border border-white px-4 py-1 from-indigo-600 to-purple-600 hover:bg-indigo-500 rounded-md text-white text-xl float">
        <slot></slot>

    </button>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style scoped>

</style>