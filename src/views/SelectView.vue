<template>
    <div class="container mx-3">
      <p class="font-semibold text-3xl mb-2 ">List Select Component</p>
      <div class="flex gap-2">
        <small>
          This is example select with reusable component. 
        </small>
        <small class="font-bold text-red-500">
          You can check the code in path src/components/SelectComponent.vue
        </small>
      </div>
      <hr class="my-2" />
      <div class="my-5 max-w-xl">
        <SelectComponent :dataOptions="data.optionList" :selectClass="`col-span-2 dark:focus:ring-[#2B2C49] appearance-none pr-[26px] pl-[20px] py-[19px] rounded-[10px]`"  v-model="data.form.select" :defaultTextValue="'Select Once'" :hiddenDefaultText="true" :labelText="'Numbered List'" :labelClass="'mb-2 font-semibold'"/>
      </div>
    </div>
  </template>
  
  <script>
  import SelectComponent from '../components/SelectComponent.vue'
  import { onMounted, onUnmounted, reactive } from 'vue'
  
  export default {
    components: {
      SelectComponent,
    },
    setup() {
      const data = reactive({
        optionList   : [
                {                    
                    'value' : '1',
                    'text'  : 'One',
                },
                {                    
                    'value' : '2',
                    'text'  : 'Two',
                },
                {                    
                    'value' : '3',
                    'text'  : 'Three',
                },
                {                    
                    'value' : '4',
                    'text'  : 'Four',
                },
                {                    
                    'value' : '5',
                    'text'  : 'Five',
                }
            ],
        form : {
          select : ""
        }
      });
      onMounted(() => {});
      onUnmounted(() => {});
      return {
        data
      }
    }
  }
  </script>
  