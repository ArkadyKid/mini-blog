<template>
  <div class="app__opened-post opened-post">
    <p class="opened-post__description">
      {{ description }}
    </p>
    <app-comments-list :comments="comments"></app-comments-list>
    <app-comment-form></app-comment-form>
  </div>
</template>

<script>
import AppCommentForm from '@/components/app-comment-form';
import AppCommentsList from "@/components/app-comments-list";

export default {
  name: 'app-opened-post',
  components: {
    AppCommentsList,
    AppCommentForm
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    comments: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="css">
</style>
