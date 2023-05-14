<template>
  <div>
    <img class="big-photo" :src="photoSrc" @click="changeModalState" />
    <Modal v-if="isModalOpened" @change-modal-state="changeModalState">
      <img :src="photoSrc" />
    </Modal>
  </div>
</template>
<script>
import Modal from "../modal/Modal.vue";

export default {
  name: "MainPhoto",
  props: {
    photoSrc: String,
  },
  components: { Modal },
  data() {
    return {
      isModalOpened: false,
    };
  },
  methods: {
    changeModalState: function () {
      //   console.log("About to change modal state to: " + !this.isModalOpened);
      this.isModalOpened = !this.isModalOpened;
    },
  },
};
</script>
<style lang="scss" scoped>
.big-photo {
  width: 500px;
  height: 500px;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  padding: 20px;

  &:hover {
    cursor: pointer;
  }
}
</style>
