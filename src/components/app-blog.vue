<template>
  <section class="app__blog blog">
    <h1 class="blog__title">
      Блог
    </h1>
    <app-posts></app-posts>
    <app-form ></app-form>
  </section>
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
}
</script>

<style scoped lang="css">
</style>
