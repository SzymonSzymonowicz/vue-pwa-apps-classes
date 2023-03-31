<template>
    <div class="smallerPhoto">
        <img :src="photoSrc" v-on:click="$emit('choose-photo', photoIndex)"/>
    </div>
</template>
<script>
export default {
    props: {
        photoSrc: String,
        photoIndex: Number
    }
}
</script>
<style lang="scss" scoped>
    .smallerPhoto {
        display: flex;
        max-width: 100%;
        max-height: 100%;
        flex: 1; //?????

        margin: 0px 10px;

        &:hover {
            opacity: 0.5;
            transition-timing-function: ease;
            transition-duration: 0.5s;
            cursor: pointer;
            background-color: white;
        }

        transition-timing-function: ease;
        transition-duration: 1s;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>