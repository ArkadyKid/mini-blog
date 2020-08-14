<template>
  <div class="app-form form">
    <form ref="form">
      <app-input :label-text="'Заголовок'"
                 v-model="title"
                 :max-length="15"
                 :name="'title'"
                 :id="'title'"
                 :is-error="isError"
                 :error-message="'Обязательное поле'"
      ></app-input>
      <app-input :label-text="'Краткое описание'"
                 v-model="summary"
                 :max-length="30"
                 :name="'summary'"
                 :id="'summary'"
      ></app-input>
      <app-textarea :label-text="'Полное описание'"
                    v-model="description"
                    :max-length="60"
                    :name="'description'"
                    :id="'description'"
      ></app-textarea>
      <app-button :text-button="'Опубликовать'"
                  @click="onButtonClick"
                  :type="'submit'"
      ></app-button>
    </form>
  </div>
</template>

<script>
import service from '../services/service.js';

import AppButton from '@/components/ui/app-button';
import AppInput from '@/components/ui/app-input';
import AppTextarea from '@/components/ui/app-textarea';

export default {
  name: 'app-form',
  components: {AppTextarea, AppInput, AppButton},
  data: () => ({
    title: '',
    summary: '',
    description: '',
    isError: false,
  }),
  methods: {
    onButtonClick() {
      const reformedTitle = this.title.trim().replace(/^ *$/g, '');
      const reformedSummary = this.summary.trim().replace(/^ *$/g, '');
      const reformedDescription = this.description.trim().replace(/^ *$/g, '');
      if (reformedTitle) {
        service.setFormToLocalStorage(reformedTitle, reformedSummary, reformedDescription);
        this.title = '';
        this.summary = '';
        this.description = '';
        this.isError = false;
      } else {
        this.isError = true;
      }
    },
  },
}
</script>

<style scoped lang="css">
</style>
