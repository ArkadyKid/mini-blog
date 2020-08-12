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
      <label class="form__short-description"
             for="short-description"
      >
        Короткое описание
        <input id="short-description"
               type="text"
               name="short-description"
        >
      </label>
      <label class="form__full-description"
             for="full-description"
      >
        Полное описание
        <input id="full-description"
               type="text"
               name="full-description"
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
  .form__short-description,
  .form__full-description {
    display: flex;
    flex-direction: column;
  }
</style>
