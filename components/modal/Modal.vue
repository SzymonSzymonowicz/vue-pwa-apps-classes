<template lang="">
    <div class="modal">
        <!-- <div class="modal-content"> -->
            <slot class="modal-content">
            Something
            </slot>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .modal {
        // to be on top of everything
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
        // temporary, to delete
        display: none;
    }
    
    .modal-content {
        background: white;
        width: 100%;
        max-width: 90vw;
        height: auto;
        max-height: 90vh;

        overflow: hidden;
    }
</style>