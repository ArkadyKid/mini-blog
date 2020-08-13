<template>
  <div class="app-form form">
    <form>
      <label class="form__title-label"
             for="title"
      >
        <span class="form__label-text">
          Заголовок
        </span>
        <input class="form__title-input"
               id="title"
               type="text"
               name="text"
        >
      </label>
      <label class="form__summary"
             for="summary"
      >
        <span class="form__label-text">
          Короткое описание
        </span>
        <input id="summary"
               type="text"
               name="summary"
        >
      </label>
      <label class="form__description"
             for="description"
      >
        <span class="form__label-text">
          Полное описание
        </span>
        <textarea id="description"
                  type="text"
                  name="description"
        ></textarea>
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
  margin-bottom: 15px;
}

.form__submit {
  margin: 0;
  padding: 10px;
  width: auto;
  cursor: pointer;
}

.form__description textarea {
  resize: vertical;
}

.form__label-text {
  margin-bottom: 5px;
}
</style>
