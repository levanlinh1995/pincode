<template>
    <div class="pin-title">
        <h2 class="text-center">Enter a PIN</h2>
    </div>
    <div>
        <pin-input
            :length="length"
            :secret="secret"
            :regex="regex"
            :defaultValue="defaultValue"
            @filled="submitPin"
        ></pin-input>
    </div>
    <div class="pin-result" v-if="!secret">
        <p class="text-center">Final Result: {{ pin.join('') }}</p>
    </div>
</template>

<script>
import PinInput from './PinInput.vue';

export default {
  components: {
    PinInput
  },
  data() {
    return {
      pin: [],
      secret: false,
      length: 4,
      regex: '^\\d{1}$',
      defaultValue: [],
    };
  },
  methods: {
    submitPin(values) {
      this.pin = JSON.parse(JSON.stringify(values));
    }
  }
};
</script>

<style>
.pin-title h2 {
    margin-top: 50px;
    text-align: center;
}

.pin-result p {
    margin-top: 20px;
    text-align: center;
}
</style>
