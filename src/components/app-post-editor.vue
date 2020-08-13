<template>
  <div class="app__post-editor post-editor">
    <form>
      <label class="post-editor__title-edit"
             for="title-edit"
      >
        <span class="post-editor__label-text">
          Заголовок
        </span>
        <input id="title-edit"
               type="text"
               name="title"
        >
      </label>
      <label class="post-editor__summary-edit"
             for="summary-edit"
      >
        <span class="post-editor__label-text">
          Краткое описание
        </span>
        <input id="summary-edit"
               name="summary"
               type="text"
        >
      </label>
      <label class="post-editor__description-edit"
             for="description-edit"
      >
        <span class="post-editor__label-text">
          Полное описание
        </span>
        <textarea id="description-edit"
                  type="text"
                  name="description"
        ></textarea>
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

.post-editor__title-edit,
.post-editor__summary-edit,
.post-editor__description-edit {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.post-editor__label-text {
  margin-bottom: 5px;
}

.post-editor__description-edit textarea {
  resize: vertical;
}
</style>
