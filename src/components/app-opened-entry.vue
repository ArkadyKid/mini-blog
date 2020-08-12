<template>
  <div class="app-opened-entry opened-entry">
    <p class="opened-entry__full-description">
      {{ fullDescription }}
    </p>
    <ul class="opened-entry__comments-list">
      <li class="opened-entry__comment"
          v-for="comment in comments"
          :key="comment.text"
      >
        <span class="opened-entry__text">
          {{ comment.text }}
        </span>
        <button class="opened-entry__comment-delete"
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
  name: 'app-opened-entry',
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
  .opened-entry__comments-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .opened-entry__comment-delete {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }
</style>
