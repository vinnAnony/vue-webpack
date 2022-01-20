<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <div class="space-y-1 text-sm">
                            <h6 class="font-medium text-white">Fatal error</h6>
                            <p class="text-red-100 leading-tight">Error loading component</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "OverlayLoadingError"
    }
</script>

<style scoped>

</style>