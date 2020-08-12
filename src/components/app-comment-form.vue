<template>
  <div class="app__comment-form comment-form">
    <form>
      <label for="comment-author"
             class="comment-form__author"
      >
        Имя
        <input type="text"
               id="comment-author"
               name="comment-author"
        >
      </label>
      <label for="comment-text"
             class="comment-form__text"
      >
        Текст комментария
        <input type="text"
               id="comment-text"
               name="comment-text"
        >
      </label>
      <button class="comment-form__submit"
              @click.prevent="onClickSubmit"
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
    onClickSubmit() {
      console.log(1);
    }
  }
}
</script>

<style scoped lang="css">
  .comment-form__submit {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }

  .comment-form__submit:focus,
  .comment-form__submit:active {
    border: none;
  }
</style>
