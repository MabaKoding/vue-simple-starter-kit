<template>
    <div @click="detectOpen" class="relative">
      <p :class="labelClass">{{ labelText }}</p>
      <select 
        v-model="selectedOption" 
        :readonly="readonly"
        :disabled="disabled"
        class="text-sm block w-full p-2.5 rounded-[20px] !appearance-none read-only:opacity-75 disabled:opacity-75 dark:focus:ring-[#2B2C49]"
        @input="callback($event)" 
        :class="selectClass">
          <option :value="''" :hidden="hiddenDefaultText">{{ defaultTextValue }}</option>
          <option v-for="(data, index) in dataOptions" :key="index" :value="data.value" class="">{{ data.text }}</option>
      </select>
    </div>
  </template>
  <script>
  export default {
    name: 'select-component',
    props: {
      hiddenDefaultText:{
        type:Boolean,
        default:false
      },  
      value: {
        type: [Number, String],
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
      selectClass: {
        type: String,
        default: ''
      },
      defaultTextValue: {
        type: String,
        default: true
      },
      dataOptions: {
        type: Array,
        default: ''
      },
      disabled : {
        type:Boolean,
        default:false
      },
      readonly : {
        type:Boolean,
        default:false
      },
      isRequired : {
        type:Boolean,
        default:false
      },
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      selectedOption: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit("input", value)
        }
      }
    },
    methods: {
      detectOpen() {
        this.isOpen = !this.isOpen
      },
      callback: function (e) {
        this.$emit("change", e)
      },
    }
  }
  </script>