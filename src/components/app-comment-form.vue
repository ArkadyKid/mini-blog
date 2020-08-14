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
               v-model="author"
               maxlength="15"
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
                  v-model="text"
                  maxlength="60"
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
import service from '@/services/service';

export default {
  name: 'app-comment-form',
  data: () => ({
    author: '',
    text: '',
  }),
  props: {
    index: {
      type: Number,
    },
  },
  methods: {
    onSubmitClick() {
      this.text && service.setCommentToLocalStorage(this.author, this.text, this.index);
      this.author = '';
      this.text = '';
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
