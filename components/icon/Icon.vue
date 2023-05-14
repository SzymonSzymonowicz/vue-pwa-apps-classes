<template>
  <div class="icon-button-wrapper" @click="$emit('click')">
    <span class="material-symbols-outlined">
      {{ type }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
  },
  // methods: {
  //     test: function () {
  //         console.log('test')
  //     }
  // }
};
</script>
<style lang="scss" scoped>
.material-symbols-outlined {
  font-size: 40px;

  &:hover {
    cursor: pointer;
    color: white;
  }
}

.icon-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
