<template>
  <div class="app-form form">
    <form>
      <label class="form__title-label"
             for="title"
      >
        <span class="form__text-wrapper">
          <span class="form__label-text">
            Заголовок
          </span>
          <span class="form__text-error"
                v-if="errors.length"
          >
            Обязательное поле
          </span>
        </span>
        <input class="form__title-input"
               id="title"
               type="text"
               name="title"
               maxlength="15"
               v-model="title"
        >
      </label>
      <label class="form__summary"
             for="summary"
      >
        <span class="form__label-text">
          Краткое описание
        </span>
        <input id="summary"
               type="text"
               name="summary"
               maxlength="30"
               v-model="summary"
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
                  maxlength="60"
                  v-model="description"
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
import service from '../services/service.js';

export default {
  name: 'app-form',
  data: () => ({
    title: '',
    summary: '',
    description: '',
    errors: [],
  }),
  methods: {
    onSubmitClick() {
      if (this.title) {
        service.setFormToLocalStorage(this.title, this.summary, this.description);
        this.title = '';
        this.summary = '';
        this.description = '';
        this.errors = [];
      } else {
        this.errors.push('ошибка');
      }
    },
  },
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

.form__text-wrapper {
  display: flex;
}

.form__text-error {
  color: red;
  margin-left: 5px;
}
</style>
