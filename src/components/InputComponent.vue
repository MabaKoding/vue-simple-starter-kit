<template>
    <div>
        <p :class="labelClass">{{ labelText }}</p>
        <label class="relative block">
            <input :autocomplete="type == 'password' ? 'new-password' : 'nope'" :type="type" v-model="inputModel" :placeholder="placeholder" 
                @keypress="callbackPress($event)" @keyup="callbackUp($event)" @paste="callbackPaste($event)"
                :maxlength="maxlength" :readonly="readonly" :disabled="disabled"
                class="placeholder:text-gray-300 block w-full rounded-2xl py-4 pr-3 focus:border-2 focus:border-black dark:focus:border-white focus:button-shadow-gki sm:text-sm text-base read-only:opacity-75 disabled:opacity-75" :class="inputClass" />
        </label>
    </div>
</template>
<script>
export default {
    name: "input-component",
    props: {
        type: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        labelText: {
            type: String,
            default: ""
        },
        labelClass: {
            type: String,
            default: ""
        },
        maxlength: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        inputClass:{
            type:String,
            default:""
        },
        inputName:{
            type:String,
            default:""
        },
        disabled : {
            type:Boolean,
            default:false
        },
        readonly : {
            type:Boolean,
            default:false
        }
    },
    computed: {
        inputModel: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        callback: function (e) {
            this.$emit("click", e);
        },
        callbackPress: function (e) {
            this.$emit("keypress", e);
        },
        callbackPaste : function (e){
            this.$emit("paste", e)
        },
        callbackUp : function (e){
            this.$emit("keyup", e)
        }
    },
};
</script>