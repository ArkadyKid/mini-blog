<template>
  <div class="app__post-item post-item">
    <app-post-interface :title="title"
                         @on-title-button-click="onTitleButtonClick"
    ></app-post-interface>
    <app-hidden-post :short-description="shortDescription"
                      :comments-count="commentsCount"
                      v-if="!isOpen"
    ></app-hidden-post>
    <app-opened-post :full-description="fullDescription"
                      :comments="comments"
                      v-if="isOpen"
    ></app-opened-post>
  </div>
</template>

<script>
import AppHiddenPost from '@/components/app-hidden-post';
import AppOpenedPost from '@/components/app-opened-post';
import AppPostInterface from "@/components/app-post-interface";

export default {
  name: 'app-post-item',
  data: () => ({
    isOpen: false,
  }),
  components: {
    AppPostInterface,
    AppOpenedPost,
    AppHiddenPost,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    shortDescription: {
      type: String,
      default: '',
    },
    fullDescription: {
      type: String,
      default: '',
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    onTitleButtonClick() {
      this.isOpen = !this.isOpen;
    },
  }
}
</script>

<style scoped lang="css">
  .post-item {
    margin-bottom: 40px;
  }
</style>
