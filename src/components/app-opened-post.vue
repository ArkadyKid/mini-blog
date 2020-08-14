<template>
  <div class="app__opened-post opened-post">
    <span class="opened-post__description-title">
      Полное описание
    </span>
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
  .opened-post__description-title {
    font-weight: bold;
  }
</style>
