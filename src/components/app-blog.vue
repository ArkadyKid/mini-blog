<template>
  <div class="app__blog blog">
    <app-posts></app-posts>
    <app-form ></app-form>
  </div>
</template>

<script>
import AppPosts from '@/components/app-posts';
import AppForm from '@/components/app-form';

export default {
  name: 'app-blog',
  components: {
    AppForm,
    AppPosts,
  },
  methods: {
    onSubmitClick() {
      const postObject = {
        title: this.title,
        summary: this.summary,
        description: this.description,
      };
      const localstorage = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
      localstorage.push(postObject);
      localStorage.setItem(`posts`, JSON.stringify(localstorage));
      this.title = '';
      this.description = '';
      this.summary = '';
    },
  },
}
</script>

<style scoped lang="css">

</style>
