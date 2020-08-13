<template>
  <div class="app__blog blog">
    <app-posts></app-posts>
    <app-form></app-form>
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
}
</script>

<style scoped lang="css">

</style>
