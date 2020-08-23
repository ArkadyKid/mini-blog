<template>
  <div class="app__comment-form comment-form">
    <form>
      <app-input :label-text="'Имя'"
                 v-model="author"
                 :max-length="30"
                 :name="'comment-author'"
                 :id="'comment-author'"
      ></app-input>
      <app-textarea :label-text="'Текст комментария'"
                    v-model="text"
                    :max-length="60"
                    :name="'comment-text'"
                    :id="'comment-text'"
                    :is-error="isError"
                    :error-message="'Обязательное поле'"
      ></app-textarea>
      <app-button :type="'submit'"
                  @click="onSubmitClick"
                  :text-button="'Опубликовать'"
      ></app-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AppButton from "@/components/ui/app-button";
import AppInput from "@/components/ui/app-input";
import AppTextarea from "@/components/ui/app-textarea";

export default {
  name: 'app-comment-form',
  components: {
    AppTextarea,
    AppInput,
    AppButton
  },
  data: () => ({
    author: '',
    text: '',
    isError: false,
  }),
  props: {
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(['SET_COMMENT_TO_LOCAL_STORAGE']),
    onSubmitClick() {
      let reformedAuthor = this.author.trim().replace(/^ *$/g, '');
      const reformedText = this.text.trim().replace(/^ *$/g, '');
      const reformedObject = {
        author: reformedAuthor,
        text: reformedText,
        index: this.index,
      };
      if (reformedText) {
        (!reformedAuthor) && (reformedAuthor = 'аноним');
        this.SET_COMMENT_TO_LOCAL_STORAGE(reformedObject);
        this.author = '';
        this.text = '';
        this.isError = false;
      } else {
        this.isError = true;
      }
    }
  }
}
</script>

<style scoped lang="css">
  .comment-form {
    padding: 10px 0;
  }
</style>
