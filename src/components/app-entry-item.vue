<template>
  <li class="app__entry-item entry-item">
    <app-entry-interface :title="title"
                         @on-title-button-click="onTitleButtonClick"
    ></app-entry-interface>
    <app-hidden-entry :short-description="shortDescription"
                      :comments-count="commentsCount"
                      v-if="!isOpen"
    ></app-hidden-entry>
    <app-opened-entry :full-description="fullDescription"
                      :comments="comments"
                      v-if="isOpen"
    ></app-opened-entry>
  </li>
</template>

<script>
import AppHiddenEntry from '@/components/app-hidden-entry';
import AppOpenedEntry from '@/components/app-opened-entry';
import AppEntryInterface from "@/components/app-entry-interface";

export default {
  name: 'app-entry-item',
  data: () => ({
    isOpen: false,
  }),
  components: {
    AppEntryInterface,
    AppOpenedEntry,
    AppHiddenEntry,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    shortDescription: {
      type: String,
      default: '',
    },
    fullDescription: {
      type: String,
      default: '',
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    onTitleButtonClick() {
      this.isOpen = !this.isOpen;
    },
  }
}
</script>

<style scoped lang="css">
  .entry-item {
    margin-bottom: 40px;
  }
</style>
