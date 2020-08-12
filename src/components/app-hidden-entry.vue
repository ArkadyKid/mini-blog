<template>
  <div class="app-hidden-entry hidden-entry">
    <p class="hidden-entry__description">
      {{ shortDescription }}
    </p>
    <span class="hidden-entry__comments-count">
        {{ commentsCount }}
      </span>
  </div>
</template>

<script>
export default {
  name: 'app-hidden-entry',
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
