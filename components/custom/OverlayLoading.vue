<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <div class="space-y-1 text-sm">
                            <h6 class="font-medium text-white">Loading</h6>
                            <p class="text-blue-100 leading-tight">Loading component....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "OverlayLoading"
    }
</script>

<style scoped>

</style>