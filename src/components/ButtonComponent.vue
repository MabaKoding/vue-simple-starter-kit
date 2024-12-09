<template>
    <button 
        :class="buttonClass"
        class="rounded-xl disabled:opacity-50"
        @click="callback($event)" :disabled="disabled">
        <span class="flex flex-row justify-center mx-auto" v-if="loading">
            <svg class="animate-spin h-5 w-5 text-white my-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </span>
        <span class="font-medium" :class="classButtonText" v-else>
            {{ buttonText }}
        </span>
    </button>
</template>
<script>
export default {
    name: "button-component",
    props: {
        buttonText: {
            type: String,
            default: ""
        },
        classButtonText: {
            type: String,
            default: ""
        },
        loadingText: {
            type: String,
            default: ""
        },
        buttonClass: {
            type: String,
            default: ""
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        callback: function (e) {
            this.$emit("click", e);
        },
    },
};
</script>