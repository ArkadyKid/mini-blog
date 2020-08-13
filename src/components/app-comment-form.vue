<template>
  <div class="app__comment-form comment-form">
    <form>
      <label for="comment-author"
             class="comment-form__author"
      >
        <span class="comment-form__text">
          Имя
        </span>
        <input type="text"
               id="comment-author"
               name="comment-author"
        >
      </label>
      <label for="comment-text"
             class="comment-form__comment-text"
      >
        <span class="comment-form__text">
          Текст комментария
        </span>
        <textarea type="text"
                  id="comment-text"
                  name="comment-text"
        ></textarea>
      </label>
      <button class="comment-form__submit"
              @click.prevent="onSubmitClick"
              type="submit"
      >
        Опубликовать
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app-comment-form',
  methods: {
    onSubmitClick() {
      console.log(1);
    }
  }
}
</script>

<style scoped lang="css">
.comment-form {
  padding: 10px 0;
}

.comment-form__author,
.comment-form__comment-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.comment-form__comment-text textarea {
  resize: vertical;
}

.comment-form__text {
  margin-bottom: 5px;
}

.comment-form__submit {
  margin: 10px 0 0;
  padding: 10px;
  width: auto;
  cursor: pointer;
}
</style>
