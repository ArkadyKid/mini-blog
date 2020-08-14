<template>
  <div class="app__hidden-post hidden-post">
    <span class="hidden-post__summary-title">
      Краткое описание
    </span>
    <p class="hidden-post__summary">
      {{ summary }}
    </p>
    <span class="hidden-post__comments-title">
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
  .hidden-post__summary-title,
  .hidden-post__comments-title {
    font-weight: bold;
  }
</style>
