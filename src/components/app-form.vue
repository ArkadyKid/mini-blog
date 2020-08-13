<template>
  <div class="app-form form">
    <form>
      <label class="form__title-label"
             for="title"
      >
        Заголовок
        <input class="form__title-input"
               id="title"
               type="text"
               name="text"
        >
      </label>
      <label class="form__summary"
             for="summary"
      >
        Короткое описание
        <input id="summary"
               type="text"
               name="summary"
        >
      </label>
      <label class="form__description"
             for="description"
      >
        Полное описание
        <input id="description"
               type="text"
               name="description"
        >
      </label>
      <button class="form__submit"
              type="submit"
              @click.prevent="onSubmitClick"
      >
        Опубликовать
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app-form',
  methods: {
    onSubmitClick() {
      console.log(2);
    },
  }
}
</script>

<style scoped lang="css">
  .form__title-label,
  .form__summary,
  .form__description {
    display: flex;
    flex-direction: column;
  }
</style>
