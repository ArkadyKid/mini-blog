<template>
  <div class="app__user-interface user-interface">
    <div class="user-interface__title-wrapper">
      <button class="user-interface__button-title"
              type="button"
              @click="onTitleButtonClick"
      >
        <span class="user-interface__title">
          {{ title }}
        </span>
      </button>
      <label class="user-interface__title-edit"
             v-if="false"
             for="title-edit"
      >
        <input type="text"
               id="title-edit"
               v-model="title"
        >
      </label>
    </div>
    <div class="user-interface__wrapper">
      <button class="user-interface__edit-button"
              type="button"
      >
        Редактировать
      </button>
      <button class="user-interface__delete-button"
              type="button"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-post-interface',
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
  },
}
</script>

<style scoped lang="css">
.user-interface {
  display: flex;
  justify-content: space-between;
}

.user-interface__edit-button,
.user-interface__delete-button,
.user-interface__button-title {
  margin: 0;
  padding: 0;
  width: auto;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
