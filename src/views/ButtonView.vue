<template>
    <div class="container mx-3">
      <p class="font-semibold text-3xl mb-2 ">List Button Component</p>
      <div class="flex gap-2">
        <small>
          This is example button with reusable component. 
        </small>
        <small class="font-bold text-red-500">
          You can check the code in path src/components/ButtonComponent.vue
        </small>
      </div>
      <hr class="my-2" />
      <div class="my-5 max-w-xl flex flex-col gap-5">
        <ButtonComponent :buttonClass="'py-4 bg-blue-500 border border-blue-500 hover:bg-blue-800 focus:bg-blue-800 text-white w-full'" :buttonText="'Button Blue'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-white border border-blue-500 hover:bg-blue-800 focus:bg-blue-800 text-blue-500 hover:text-white w-full'" :buttonText="'Button Outline Blue'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-red-500 border border-red-500 hover:bg-red-800 focus:bg-red-800 text-white w-full'" :buttonText="'Button Red'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-white border border-red-500 hover:bg-red-800 focus:bg-red-800 text-red-500 hover:text-white w-full'" :buttonText="'Button Outline Red'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-yellow-300 border border-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 text-white w-full'" :buttonText="'Button Yellow'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-white border border-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 text-yellow-500 hover:text-white w-full'" :buttonText="'Button Outline Yellow'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-green-500 border border-green-500 hover:bg-green-800 focus:bg-green-800 text-white w-full'" :buttonText="'Button Green'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
        <ButtonComponent :buttonClass="'py-4 bg-white border border-green-500 hover:bg-green-800 focus:bg-green-800 text-green-500 hover:text-white w-full'" :buttonText="'Button Outline Green'" :loadingText="`Please Wait...`"  :disabled="false" :loading="false" :classButtonText="'text-base '"></ButtonComponent>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonComponent from '../components/ButtonComponent.vue'
  import { onMounted, onUnmounted, reactive } from 'vue'
  
  export default {
    components: {
      ButtonComponent,
    },
    setup() {
      const data = reactive({});
      onMounted(() => {});
      onUnmounted(() => {});
      return {
        data
      }
    }
  }
  </script>
  