<template>
  <div class="app__user-interface user-interface">
    <div class="user-interface__wrapper">
      <app-button @click="onEditClick"
                  :text-button="buttonText"
      ></app-button>
      <app-button @click="onDeleteClick"
                  :text-button="'Удалить'"
      ></app-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppButton from '@/components/ui/app-button';

export default {
  name: 'app-post-interface',
  components: {AppButton},
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(['DEL_POST']),
    onEditClick() {
      this.$emit('on-edit-button-click');
    },
    onDeleteClick() {
      this.DEL_POST(this.index);
    },
  },
  computed: {
    buttonText() {
      return this.isEdit ? 'Вернуться' : 'Редактировать';
    },
  },
}
</script>

<style scoped lang="css">
  .user-interface {
    display: flex;
    justify-content: space-between;
  }
</style>
