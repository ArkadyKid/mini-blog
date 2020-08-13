<template>
  <div class="app__post-editor post-editor">
    <form>
      <label for="title-edit"
             class="post-editor__title-edit"
      >
        Заголовок
        <input id="title-edit"
               type="text"
               name="title"
        >
      </label>
      <label for="summary-edit"
             class="post-editor__title-edit"
      >
        Краткое описание
        <input id="summary-edit"
               name="summary"
               type="text"
        >
      </label>
      <label for="description-edit"
             class="post-editor__title-edit"
      >
        Полное описание
        <input id="description-edit"
               type="text"
               name="description"
        >
      </label>
    </form>
    <app-comments-list :is-edit="isEdit"
                       :comments="comments"
    ></app-comments-list>
  </div>
</template>

<script>
import AppCommentsList from "@/components/app-comments-list";
export default {
  name: 'app-post-editor',
  components: {
    AppCommentsList
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped lang="css">
  .post-editor form {
    display: flex;
    flex-direction: column;
  }
</style>
