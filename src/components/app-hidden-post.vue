<template>
  <div class="app-hidden-post hidden-post">
    <p class="hidden-post__description">
      {{ shortDescription }}
    </p>
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
    shortDescription: {
      type: String,
      default: '',
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped lang="css">
</style>
