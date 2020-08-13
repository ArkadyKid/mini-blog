<template>
  <div class="app__user-interface user-interface">
    <div class="user-interface__wrapper">
      <button class="user-interface__edit-button"
              type="button"
              @click="onEditClick"
      >
        {{ buttonText }}
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
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onEditClick() {
      this.$emit('on-edit-button-click');
    },
  },
  computed: {
    buttonText() {
      return this.isEdit ? 'Сохранить' : 'Редактировать';
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
.user-interface__delete-button {
  margin: 0;
  padding: 10px;
  width: auto;
  cursor: pointer;
}

.user-interface__edit-button {
  margin-right: 10px;
}
</style>
