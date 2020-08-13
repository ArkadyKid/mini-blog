<template>
  <div id="app"
       class="app"
  >
    <app-blog class="app__blog"></app-blog>
  </div>
</template>

<script>
import AppBlog from '@/components/app-blog';

export default {
  name: 'App',
  components: {
    AppBlog,
  },
}
</script>

<style lang="css">
  .app {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app__blog {
    width: 768px;
    padding: 40px 20px;
  }
</style>
