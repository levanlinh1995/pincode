<template>
    <div>
      <a-input v-for="(item, index) in length" :key="index" :type="secret ? 'password' : 'text'" :value="values[index]" :pattern="regex" :autoFocus="index === 0" @input="handleInput(index, $event)" @paste="handlePaste($event)"></a-input>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        length: 4,
        values: Array(4).fill(''),
        secret: false,
        regex: '\\d',
      }
    },
    methods: {
      handleInput(index, event) {
        this.values[index] = event.target.value
        if (event.target.value.length === 1) {
          this.$nextTick(() => {
            if (index < this.length - 1) {
              this.$refs[index + 1][0].focus()
            } else {
              this.handleComplete()
            }
          })
        }
      },
      handlePaste(event) {
        const pastedData = event.clipboardData.getData('text/plain')
        const pastedValues = pastedData.split('').slice(0, this.length)
        this.values = Array.from({ length: this.length }, (_, i) => pastedValues[i] || '')
        event.preventDefault()
      },
      handleComplete() {
        console.log('Pin entered:', this.values.join(''))
      }
    }
  }
  </script>
