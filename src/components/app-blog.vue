<template>
  <div class="app__blog blog">
    <app-entries></app-entries>
    <app-form></app-form>
  </div>
</template>

<script>
import AppEntries from '@/components/app-entries';
import AppForm from '@/components/app-form';

export default {
  name: 'app-blog',
  components: {
    AppForm,
    AppEntries,
  },
}
</script>

<style scoped lang="css">

</style>
