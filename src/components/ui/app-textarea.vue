<template>
  <label class="app__textarea textarea"
         :for="id"
  >
        <span class="textarea__text-wrapper">
          <span class="textarea__label-text">
            {{ labelText }}
          </span>
          <span class="textarea__text-error"
                v-if="isError"
          >
             {{ errorMessage }}
          </span>
        </span>
    <textarea class="textarea__textarea"
              :id="id"
              :name="name"
              :maxlength="maxLength"
              v-model="inputValue"
              @input="onInput"
    ></textarea>
  </label>
</template>

<script>
export default {
  name: 'app-textarea',
  data: () => ({
    inputValue: '',
  }),
  props: {
    isError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 15,
    },
    labelText: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput() {
      this.$emit('input', this.inputValue);
    },
  },
  mounted() {
    this.inputValue = this.value;
  },
  watch: {
    value(val) {
      this.inputValue = val;
    },
  },
}
</script>

<style scoped lang="css">
  .textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .textarea__label-text {
    margin-bottom: 5px;
  }

  .textarea__text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .textarea__text-error {
    color: red;
    margin-left: 5px;
  }

  .textarea__textarea {
    resize: vertical;
  }
</style>
