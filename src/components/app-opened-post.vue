<template>
  <div class="app__opened-post opened-post">
    <p class="opened-post__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'app-opened-post',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
    },
  },
}
</script>

<style scoped lang="css">
</style>
