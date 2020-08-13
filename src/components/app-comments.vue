<template>
  <section class="app__comments comments">
    <h4 class="comments__title"
    >
      {{ commentsTitle }}
    </h4>
    <ul class="comments__list">
      <li class="comments__comment"
          v-for="(comment, index) in comments"
          :key="index"
      >
        <span class="comments__comment-author">
          {{ comment.author }}
        </span>
        <span class="comments__comment-text">
          {{ comment.text }}
        </span>
        <button class="comments__comment-delete"
                type="button"
                v-if="isEdit"
                @click="onDelButtonClick(index)"
        >
          x
        </button>
      </li>
    </ul>
  </section>
</template>

<script>

import service from '@/services/service';

export default {
  name: 'app-comments',
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
  computed: {
    commentsTitle() {
      return this.isEdit ? 'Удалить комментарии' : 'Комментарии';
    },
  }
}
</script>

<style scoped lang="css">
  .comments__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .comments__comment:not(:last-child) {
    margin-bottom: 5px;
  }

  .comments__comment-delete {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    background: transparent;
    cursor: pointer;
  }
</style>
