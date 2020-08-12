<template>
  <div class="app__entries entries">
    <ul class="entries__list">
      <app-entry-item v-for="entry in entries"
                      :key="entry.title"
                      :title="entry.title"
                      :short-description="entry.shortDescription"
                      :full-description="entry.fullDescription"
                      :comments-count="entry.comments.length"
                      :comments="entry.comments"
      ></app-entry-item>
    </ul>
  </div>
</template>

<script>
import AppEntryItem from '@/components/app-entry-item';

export default {
  name: 'app-entries',
  components: {
    AppEntryItem,
  },
  data: () => ({
    entries: [
      {
        title: 'Первая запись',
        shortDescription: 'Короткое описание',
        fullDescription: 'Полное описание',
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
        shortDescription: 'Короткое описание',
        fullDescription: 'Полное описание',
        comments: [
          {
            text: 'Хороший комментарий',
          },
          {
            text: 'Плохой комментарий',
          },
        ],
      }
    ]
  })
}
</script>

<style scoped lang="css">
.entries__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
