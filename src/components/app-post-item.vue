<template>
  <li class="app__post-item post-item">
    <div class="post-item__wrapper">
      <app-post-title :title="title"
                      v-if="!isEdit"
                      @on-title-button-click="onTitleButtonClick"
      ></app-post-title>
      <app-post-interface class="post-item__post-interface"
                          :index="index"
                          @on-edit-button-click="onEditButtonClick"
                          :is-edit="isEdit"
      ></app-post-interface>
    </div>
    <app-hidden-post :summary="summary"
                     :index="index"
                     :comments-count="commentsCount"
                     v-if="!isOpen && !isEdit"
    ></app-hidden-post>
    <app-opened-post :description="description"
                     :index="index"
                     v-if="isOpen && !isEdit"
    ></app-opened-post>
    <app-editor-post v-if="isEdit"
                     :is-edit="isEdit"
                     :comments="comments"
                     :index="index"
                     @on-submit-click="onSubmitEditorClick"
    ></app-editor-post>
    <div class="post-item__comments-wrapper"
         v-if="isOpen && !isEdit"
    >
      <app-comments :comments="comments"
                    :is-edit="isEdit"
                    :index="index"
      ></app-comments>
      <app-comment-form :index="index"></app-comment-form>
    </div>
  </li>
</template>

<script>
import AppHiddenPost from '@/components/app-hidden-post';
import AppOpenedPost from '@/components/app-opened-post';
import AppPostInterface from '@/components/app-post-interface';
import AppEditorPost from '@/components/app-editor-post';
import AppPostTitle from '@/components/app-post-title';
import AppComments from '@/components/app-comments';
import AppCommentForm from '@/components/app-comment-form';

export default {
  name: 'app-post-item',
  data: () => ({
    isOpen: false,
    isEdit: false,
  }),
  components: {
    AppCommentForm,
    AppComments,
    AppPostTitle,
    AppEditorPost,
    AppPostInterface,
    AppOpenedPost,
    AppHiddenPost,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    commentsCount: {
      type: Number,
      default: 0,
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
    onTitleButtonClick() {
      this.isOpen = !this.isOpen;
    },
    onEditButtonClick() {
      this.isEdit = !this.isEdit;
    },
    onSubmitEditorClick() {
      this.isEdit = false;
    },
  }
}
</script>

<style scoped lang="css">
  .post-item {
    padding: 10px;
    margin-bottom: 40px;
    border: 2px solid #000000;
  }

  .post-item__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-item__post-interface {
    margin-left: auto;
  }

  .post-item__comments-wrapper {
    border: 1px solid #000000;
    padding: 10px;
  }
</style>
