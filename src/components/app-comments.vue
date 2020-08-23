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
        <div class="comments__wrapper">
          <span class="comments__comment-author">
            {{ comment.author }}
          </span>
          <span class="comments__comment-text">
            {{ comment.text }}
          </span>
        </div>
        <app-button :text-button="'удалить'"
                    @click="onDelButtonClick(index)"
                    :type="'submit'"
        ></app-button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import AppButton from "@/components/ui/app-button";

export default {
  name: 'app-comments',
  components: {
    AppButton
  },
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
    },
  },
  methods: {
    ...mapActions(['DEL_COMMENT']),
    onDelButtonClick(indexComment) {
      const index = {
        index: this.index,
        indexComment,
      };
      this.DEL_COMMENT(index);
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

  .comments__comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .comments__comment:not(:last-child) {
    margin-bottom: 5px;
  }

  .comments__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }

  .comments__comment-author {
    font-style: italic;
    margin-right: 50px;
  }
</style>
