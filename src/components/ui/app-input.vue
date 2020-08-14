<template>
  <label class="app__input input"
         :for="id"
  >
        <span class="input__text-wrapper">
          <span class="input__label-text">
            {{ labelText }}
          </span>
          <span class="input__text-error"
                v-if="isError"
          >
             {{ errorMessage }}
          </span>
        </span>
    <input class="input__input"
           :id="id"
           :type="typeInput"
           :name="name"
           :maxlength="maxLength"
           v-model="inputValue"
           @input="onInput"
    >
  </label>
</template>

<script>
export default {
  name: 'app-input',
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
    typeInput: {
      type: String,
      default: 'text',
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
  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .input__label-text {
    margin-bottom: 5px;
  }

  .input__text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input__text-error {
    color: red;
    margin-left: 5px;
  }
</style>
