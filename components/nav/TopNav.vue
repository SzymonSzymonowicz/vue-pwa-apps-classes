<template>
    <div class="top-nav">
        <div>Logo</div>
        <div>Button1</div>
        <div>Button2</div>
        <div>Button3</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .top-nav {
        min-width: 100%;
        min-height: 70px;
        background-color: $primary;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        &:first{
            justify-self: self-start;
        }

// font-family: 'Michroma', sans-serif;
        font-family: 'Michroma', sans-serif;
        font-size: large;
        color: $fifth;
    }
</style>