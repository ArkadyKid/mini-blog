<template>
  <div class="app__editor-post editor-post">
    <form>
      <label class="editor-post__title-edit"
             for="title-edit"
      >
        <span class="editor-post__label-text">
          Заголовок
        </span>
        <input id="title-edit"
               type="text"
               name="title"
               v-model="title"
        >
      </label>
      <label class="editor-post__summary-edit"
             for="summary-edit"
      >
        <span class="editor-post__label-text">
          Краткое описание
        </span>
        <input id="summary-edit"
               name="summary"
               type="text"
               v-model="summary"
        >
      </label>
      <label class="editor-post__description-edit"
             for="description-edit"
      >
        <span class="editor-post__label-text">
          Полное описание
        </span>
        <textarea id="description-edit"
                  type="text"
                  name="description"
                  v-model="description"
        ></textarea>
      </label>
    </form>
    <button class="editor-post__submit"
            type="submit"
            @click.prevent="onSubmitClick"
    >
      Сохранить
    </button>
  </div>
</template>

<script>
import service from '@/services/service';

export default {
  name: 'app-editor-post',
  data: () => ({
    title: '',
    summary: '',
    description: '',
  }),
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
    },
  },
  methods: {
    onSubmitClick() {
      service.editPost(this.index, this.title, this.summary, this.description);
      this.$emit('on-submit-click');
    },
  },
  mounted() {
    this.title = service.getPost(this.index).title;
    this.summary = service.getPost(this.index).summary;
    this.description = service.getPost(this.index).description;
  },
}
</script>

<style scoped lang="css">
.editor-post form {
  display: flex;
  flex-direction: column;
}

.editor-post__title-edit,
.editor-post__summary-edit,
.editor-post__description-edit {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.editor-post__label-text {
  margin-bottom: 5px;
}

.editor-post__description-edit textarea {
  resize: vertical;
}
</style>
