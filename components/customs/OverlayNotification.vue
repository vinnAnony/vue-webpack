<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <div class="space-y-1 text-sm">
                            <h6 class="font-medium text-white">Yaaaa!</h6>
                            <p class="text-blue-500 leading-tight">You have finally loaded me....</p>
                            <p class="text-purple-500 leading-tight">🤟{{authorName}} </p>
                            <p class="text-purple-500 leading-tight">🏠{{homeArea}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "OverlayNotification",
        data(){
            return{
                authorName: this.$root.authorName,
                homeArea: this.$parent.homeOrigin,
            }
        }
    }
</script>

<style scoped>

</style>