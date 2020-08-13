<template>
  <div class="app__posts posts">
    <ul class="posts__list">
      <app-post-item v-for="(post, index) in posts"
                     :key="index"
                     :title="post.title"
                     :summary="post.summary"
                     :description="post.description"
                     :comments-count="getCommentsCount(index)"
                     :comments="getComments(index)"
      ></app-post-item>
    </ul>
  </div>
</template>

<script>
import service from '@/services/service';

import AppPostItem from '@/components/app-post-item';

export default {
  name: 'app-posts',
  components: {
    AppPostItem,
  },
  data: () => ({
    posts: [],
  }),
  methods: {
    getComments(index) {
      return this.posts[index].comment ? this.posts[index].comment : [];
    },
    getCommentsCount(index) {
      return this.getComments(index).length;
    },
  },
  mounted() {
    service.getPostsFromLocalStorage();
    this.posts = service.getPosts();
  },
}
</script>

<style scoped lang="css">
  .posts__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
