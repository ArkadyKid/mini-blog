<template>
  <div class="app-opened-post opened-post">
    <p class="opened-post__full-description">
      {{ fullDescription }}
    </p>
    <ul class="opened-post__comments-list">
      <li class="opened-post__comment"
          v-for="comment in comments"
          :key="comment.text"
      >
        <span class="opened-post__text">
          {{ comment.text }}
        </span>
        <button class="opened-post__comment-delete"
                type="button"
                v-if="false"
        >
          x
        </button>
      </li>
    </ul>
    <app-comment-form></app-comment-form>
  </div>
</template>

<script>
import AppCommentForm from '@/components/app-comment-form';

export default {
  name: 'app-opened-post',
  components: {
    AppCommentForm
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    fullDescription: {
      type: String,
      default: '',
    },
    comments: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
}
</script>

<style scoped lang="css">
  .opened-post__comments-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .opened-post__comment-delete {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }
</style>
