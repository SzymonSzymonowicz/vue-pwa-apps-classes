<template>
<div>
  <TopNav/>
  <div id="container">
    <PhotoGallery/>
  </div>
</div>
</template>

<script>
import TopNav from '~/components/nav/TopNav.vue';
import PhotoGallery from '~/components/photo_gallery/PhotoGallery.vue';

export default {
  name: 'IndexPage',
  components: { TopNav, PhotoGallery }
}
</script>

<style lang="scss" scoped>
  #container {
    min-width: 100%;
    max-width: 100%;
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: center;
  }
</style>
