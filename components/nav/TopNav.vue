<template>
  <div class="top-nav">
    <NuxtLink class="logo" to="/">NBA mag</NuxtLink>
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

  // font-family: 'Michroma', sans-serif;
  font-family: "Michroma", sans-serif;
  font-size: large;
  color: $fifth;

  & .logo {
    font-size: 32px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:visited {
      color: inherit;
    }
    &:hover {
      color: black;
    }
  }
}
</style>
