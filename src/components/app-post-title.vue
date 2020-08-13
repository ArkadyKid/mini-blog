<template>
  <div class="app__post-title post-title">
    <button class="post-title__button-title"
            type="button"
            @click="onTitleButtonClick"
    >
        <span class="post-title__title">
          {{ title }}
        </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'app-post-title',
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  methods: {
    onTitleButtonClick() {
      this.$emit('on-title-button-click');
    },
  }
}
</script>

<style scoped lang="css">
.post-title__title {
  font-size: 16px;
  font-weight: bold;
}

.post-title__button-title {
  margin: 0;
  padding: 0;
  width: auto;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
