<template>
    <div>
        <p :class="labelClass">{{ labelText }}{{ isRequired ? ' *' : '' }}</p>
        <label class="relative block">
            <span :class="isIconFirst ? (editOrder ? 'absolute inset-y-0 left-0 flex items-center pl-[20px] py-[20px]' : 'absolute inset-y-0 left-0 flex items-center pl-[40px] py-[20px]') : classFirstIcon" v-if="totalIcon >= 1 && rtl == false">
                <slot>
                    <span v-html="firstIcon"></span>
                </slot>
            </span>
            <input :autocomplete="type == 'password' ? 'new-password' : 'nope'" :type="type" v-model="inputModel" :placeholder="placeholder" 
                @keypress="callbackPress($event)" @keyup="callbackUp($event)" @paste="callbackPaste($event)"
                :maxlength="maxlength" :readonly="readonly" :disabled="disabled"
                class="placeholder:text-gray-300 block w-full rounded-2xl py-4 pr-3 focus:border-2 focus:border-black dark:focus:border-white focus:button-shadow-gki sm:text-sm text-base read-only:opacity-75 disabled:opacity-75" :class="inputClass" />
            <span :class="(rtl == false ? 'absolute inset-y-0 right-0 flex items-center pr-[40px] py-[20px]' : 'absolute inset-y-0 right-0 flex items-center pr-[20px] py-[20px]')" v-if="totalIcon == 2"> 
                <slot>
                    <span v-html="secondIcon" @click="callback($event)" class="cursor-pointer"></span>
                </slot>
            </span>
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
        rtl: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ""
        },
        v: {
            type: Object,
            required: true
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
        firstIcon: {
            type: String,
            default: ""
        },
        secondIcon: {
            type: String,
            default: ""
        },
        totalIcon: {
            type: Number,
            default: 1
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
        },
        isIconFirst : {
            type:Boolean,
            default:true
        },
        classFirstIcon:{
            type:String,
            default:""
        },
        isRequired : {
            type:Boolean,
            default:false
        },
        gradientClass : {
            type:Boolean,
            default:false
        },
        editOrder : {
            type: Boolean,
            default : false
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