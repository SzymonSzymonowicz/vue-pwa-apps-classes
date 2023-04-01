<template>
    <div class="smallerPhoto">
        <!-- on mouse click emit choose-photo event to parent, which reacts changing main photo to the clicked one -->
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
        flex: 1 0 0;
        max-width: 100%;
        max-height: 100%;
        margin: 0px 10px;

        transition-timing-function: ease;
        transition-duration: 1s;

        &:hover {
            cursor: pointer;
            transition-timing-function: ease;
            transition-duration: 0.5s;
            background-color: black;

            img{
                opacity: 0.5;
            }
        }

        &.selected{
            background-color: $fifth;
            
            img {
                opacity: 0.8;
            }
        }
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>