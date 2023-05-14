<template lang="">
  <div class="modal">
    <div class="modal-content" @click="closeModal">
      <!-- click outside not working right now due to some bug -->
      <!-- <div class="modal-content" v-click-outside="closeModal"> -->
      <!-- can't add class to slot since vue 2, won't work -->
      <slot> Something </slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal: function () {
      //   console.log("About to emit");
      this.$emit("change-modal-state", true);
    },
  },
};
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
}

.modal-content {
  background: white;
  max-height: 90vh;
  width: auto;
  display: flex;
  overflow: hidden;
  align-content: center;

  &:hover {
    cursor: pointer;
  }
}

.hidden {
  display: none;
}
</style>
