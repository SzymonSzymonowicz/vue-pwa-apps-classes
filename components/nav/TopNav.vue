<template>
  <div class="top-nav">
    <NuxtLink to="/">NBA mag</NuxtLink>
    <NuxtLink to="/hall-of-fame">Hall of fame</NuxtLink>
    <NuxtLink to="/records">Records</NuxtLink>
    <NuxtLink to="/championships">Championships</NuxtLink>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.top-nav {
  min-width: 100%;
  min-height: 70px;
  background-color: $primary;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:first {
    justify-self: self-start;
  }

  // font-family: 'Michroma', sans-serif;
  font-family: "Michroma", sans-serif;
  font-size: large;
  color: $fifth;
}
</style>
