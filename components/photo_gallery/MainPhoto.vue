<template>
    <div>
        <img class="big-photo" :src="photoSrc" />
        <Modal>
            <img :src="photoSrc">
        </Modal>
    </div>
</template>
<script>
import Modal from '../modal/Modal.vue';

export default {
    name: "MainPhoto",
    props: {
        photoSrc: String,
    },
    components: { Modal }
}
</script>
<style lang="scss" scoped>
    .big-photo {
        width: 500px;
        height: 500px;
        max-height: 100%;
        max-width: 100%;
        justify-content: center;
        padding: 20px;
    }
</style>