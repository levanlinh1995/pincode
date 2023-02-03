<template>
    <div class="pin-input">
      <div v-for="i in length" :key="i">
        <input
          ref="input"
          :pattern="regex"
          :maxlength="1"
          v-model="values[i]"
          @keydown.stop.prevent
          @input="moveFocus(i, $event)"
          :type="secret ? 'password' : 'text'"
          :value="values[i] || ''"
        />
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      length: {
        type: Number,
        default: 4
      },
      secret: {
        type: Boolean,
        default: false
      },
      regex: {
        type: String,
        default: '[0-9]'
      },
      defaultValue: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        values: this.defaultValue
      };
    },
    mounted() {
      this.$refs.input[0].focus();
    },
    methods: {
      moveFocus(i, event) {
        if (event.target.validity.valid) {
          if (i < this.length - 1) {
            this.$refs.input[i + 1].focus();
          } else {
            this.$emit('filled', this.values);
          }
        }
      }
    }
  };
  </script>

  <style>
  .pin-input input {
    width: 40px;
    height: 40px;
    text-align: center;
  }
  </style>
