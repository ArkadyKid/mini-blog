<template>
  <div class="app__posts posts">
    <ul class="posts__list">
      <app-post-item v-for="(post, index) in POSTS"
                     :key="index"
                     :title="post.title"
                     :summary="post.summary"
                     :description="post.description"
                     :comments-count="getCommentsCount(index)"
                     :comments="getComments(index)"
                     :index="index"
      ></app-post-item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppPostItem from '@/components/app-post-item';

export default {
  name: 'app-posts',
  components: {
    AppPostItem,
  },
  methods: {
    getComments(index) {
      return this.POSTS[index].comments ? this.POSTS[index].comments : [];
    },
    getCommentsCount(index) {
      return this.getComments(index).length;
    },
  },
  computed: {
    ...mapGetters(['POSTS']),
  },
  mounted() {
    this.$store.dispatch('GET_POSTS');
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
