<template>
  <div class="app__editor-post editor-post">
    <form>
      <app-input :label-text="'Заголовок'"
                 v-model="title"
                 :max-length="45"
                 :name="'title'"
                 :id="'edit-title'"
                 :is-error="isError"
                 :error-message="'Обязательное поле'"
      ></app-input>
      <app-input :label-text="'Краткое описание'"
                 v-model="summary"
                 :max-length="60"
                 :name="'summary'"
                 :id="'summary'"
      ></app-input>
      <app-textarea :label-text="'Полное описание'"
                 v-model="description"
                 :max-length="160"
                 :name="'description'"
                 :id="'description'"
      ></app-textarea>
      <app-button :text-button="'Сохранить'"
                  @click="onSubmitClick"
                  :type="'submit'"
      ></app-button>
    </form>
  </div>
</template>

<script>
import service from '@/services/service';

import AppInput from '@/components/ui/app-input';
import AppButton from '@/components/ui/app-button';
import AppTextarea from '@/components/ui/app-textarea';

export default {
  name: 'app-editor-post',
  components: {
    AppTextarea,
    AppButton,
    AppInput
  },
  data: () => ({
    title: '',
    summary: '',
    description: '',
    isError: false,
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
      const reformedTitle = this.title.trim().replace(/^ *$/g, '');
      const reformedSummary = this.summary.trim().replace(/^ *$/g, '');
      const reformedDescription = this.description.trim().replace(/^ *$/g, '');
      if (reformedTitle) {
        service.editPost(this.index, reformedTitle, reformedSummary, reformedDescription);
        this.isError = false;
      } else {
        this.isError = true;
      }
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
</style>
