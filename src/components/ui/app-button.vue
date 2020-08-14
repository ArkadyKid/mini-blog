<template>
  <button class="app__button button"
          :type="type"
          @click.prevent="onButtonClick"
  >
    {{ textButton }}
  </button>
</template>

<script>
export default {
  name: 'app-button',
  props: {
    textButton: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    onButtonClick() {
      this.$emit('click');
    },
  },
}
</script>

<style scoped lang="css">
  .button {
    margin: 0;
    padding: 10px;
    width: auto;
    cursor: pointer;
  }

  .button:not(:last-child) {
    margin-right: 5px;
  }
</style>
