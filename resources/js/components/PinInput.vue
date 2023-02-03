<template>
    <div>
        <a-row type="flex" justify="center">
            <a-col span="12">
                <div class="pincode-wrapper">
                    <template v-for="(item, i) in length" :key="i">
                        <a-input
                            v-model:value="values[i]"
                            :type="secret ? 'password' : 'text'"
                            @input="handleInput(i)"
                            @keydown.delete="handleDelete(i, $event)"
                            @keydown.left="handleLeft(i)"
                            @keydown.right="handleRight(i)"
                            @keydown.enter="handleEnter"
                            @paste="handlePaste($event)"
                            :ref="`input-${i}`" class="pincode-input" />
                    </template>
                </div>
            </a-col>
        </a-row>
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
        },
    },
    data() {
        return {
            values: this.defaultValue
        };
    },
    mounted() {
        this.$refs[`input-0`][0].focus();
    },
    watch: {
        values: {
            handler: 'checkFilled',
            deep: true
        }
    },
    methods: {
        handleInput(index) {
            if (!this.values[index].match(this.regex)) {
                this.values[index] = '';
                return;
            }

            if (index === this.length - 1) {
                this.checkFilled();
            } else {
                this.$refs[`input-${index + 1}`][0].focus();
                this.$refs[`input-${index + 1}`][0].select();
            }
        },
        handleDelete(index, e) {
            const isThisCellFilled = this.values[index];

            if (!isThisCellFilled && index > 0) {
                this.$refs[`input-${index - 1}`][0].focus();
                e.preventDefault();
            }
        },
        handleLeft(index) {
            if (index > 0) {
                this.$refs[`input-${index - 1}`][0].focus();
            }
        },
        handleRight(index) {
            if (index < this.length - 1) {
                this.$refs[`input-${index + 1}`][0].focus();
            }
        },
        handleEnter() {
            this.checkFilled();
        },
        checkFilled() {
            if (this.values.filter(value => value !== '').length === this.length) {
                this.$emit('filled', this.values);
            }
        },
        handlePaste(event) {
            const pastedData = event.clipboardData.getData('text/plain')
            const pastedValues = pastedData.split('').slice(0, this.length)
            const validValues = pastedValues.filter(value => value.match(this.regex))
            this.values = Array.from({ length: this.length }, (_, i) => validValues[i] || '')
            event.preventDefault()
        },
    },
};
</script>
<style>
.pincode-wrapper {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.pincode-input {
    margin: 3px;
    padding: 5px;
    max-width: 40px;
    text-align: center;
    font-size: 1.1rem;
    border: none;
    border-radius: 3px;
}

.pincode-input:focus {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
