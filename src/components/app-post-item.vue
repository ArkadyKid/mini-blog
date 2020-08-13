<template>
  <li class="app__post-item post-item">
    <div class="post-item__wrapper">
      <app-post-title :title="title"
                      v-if="!isEdit"
                      @on-title-button-click="onTitleButtonClick"
      ></app-post-title>
      <app-post-interface class="post-item__post-interface"
                          @on-edit-button-click="onEditButtonClick"
                          :is-edit="isEdit"
      ></app-post-interface>
    </div>
    <app-hidden-post :summary="summary"
                     :comments-count="commentsCount"
                     v-if="!isOpen && !isEdit"
    ></app-hidden-post>
    <app-opened-post :description="description"
                     :comments="comments"
                     v-if="isOpen && !isEdit"
    ></app-opened-post>
    <app-post-editor v-if="isEdit"
                     :is-edit="isEdit"
                     :comments="comments"
    ></app-post-editor>
  </li>
</template>

<script>
import AppHiddenPost from '@/components/app-hidden-post';
import AppOpenedPost from '@/components/app-opened-post';
import AppPostInterface from '@/components/app-post-interface';
import AppPostEditor from '@/components/app-post-editor';
import AppPostTitle from "@/components/app-post-title";

export default {
  name: 'app-post-item',
  data: () => ({
    isOpen: false,
    isEdit: false,
  }),
  components: {
    AppPostTitle,
    AppPostEditor,
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
  },
  methods: {
    onTitleButtonClick() {
      this.isOpen = !this.isOpen;
    },
    onEditButtonClick() {
      this.isEdit = !this.isEdit;
    },
  }
}
</script>

<style scoped lang="css">
  .post-item {
    padding: 10px;
    margin-bottom: 40px;
    border: 1px solid #000000;
  }

  .post-item__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-item__post-interface {
    margin-left: auto;
  }
</style>
