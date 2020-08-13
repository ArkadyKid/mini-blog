<template>
  <div class="app__posts posts">
    <ul class="posts__list">
      <app-post-item v-for="post in posts"
                      :key="post.title"
                      :title="post.title"
                      :summary="post.summary"
                      :description="post.description"
                      :comments-count="post.comments.length"
                      :comments="post.comments"
      ></app-post-item>
    </ul>
  </div>
</template>

<script>
import AppPostItem from '@/components/app-post-item';

export default {
  name: 'app-posts',
  components: {
    AppPostItem,
  },
  data: () => ({
    posts: [
      {
        title: 'Первая запись',
        summary: 'Короткое описание',
        description: 'Полное описание',
        comments: [
          {
            text: 'Хороший комментарий',
          },
          {
            text: 'Плохой комментарий',
          },
        ],
      },
      {
        title: 'Вторая запись',
        summary: 'Короткое описание',
        description: 'Полное описание',
        comments: [
          {
            text: 'Хороший комментарий',
          },
          {
            text: 'Плохой комментарий',
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped lang="css">
.posts__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
