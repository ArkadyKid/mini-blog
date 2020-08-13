<template>
  <ul class="app__comments-list comments-list">
    <li class="comments-list__comment"
        v-for="(comment, index) in comments"
        :key="index"
    >
        <span class="comments-list__comment-author">
          {{ comment.author }}
        </span>
        <span class="comments-list__comment-text">
          {{ comment.text }}
        </span>
      <button class="comments-list__comment-delete"
              type="button"
              v-if="isEdit"
              @click="onDelButtonClick(index)"
      >
        x
      </button>
    </li>
  </ul>
</template>

<script>

import service from '@/services/service';

export default {
  name: 'app-comments-list',
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
    }
  },
  methods: {
    onDelButtonClick(indexComment) {
      service.delComment(this.index, indexComment);
    },
  },
}
</script>

<style scoped lang="css">
  .comments-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .comments-list__comment:not(:last-child) {
    margin-bottom: 5px;
  }

  .comments-list__comment-delete {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }
</style>
