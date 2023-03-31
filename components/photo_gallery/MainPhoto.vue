<template>
    <div>
        <img class="big-photo" :src="photoSrc" />   
    </div>
</template>
<script>
export default {
    name: "MainPhoto",
    props: {
        photoSrc: String,
    }
}
</script>
<style lang="scss" scoped>
    .big-photo {
        width: 500px;
        height: 500px;
        justify-content: center;
        padding: 20px;
    }
</style>