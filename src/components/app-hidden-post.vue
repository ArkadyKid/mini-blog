<template>
  <div class="app__hidden-post hidden-post">
    <p class="hidden-post__summary">
      {{ summary }}
    </p>
    <span>
      Количество комментариев
    </span>
    <span class="hidden-post__comments-count">
      {{ commentsCount }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'app-hidden-post',
  props: {
    title: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped lang="css">
</style>
