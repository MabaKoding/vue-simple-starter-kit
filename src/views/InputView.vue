<template>
  <div class="container mx-3">
    <p class="font-semibold text-3xl mb-2 ">List Input Component</p>
    <div class="flex gap-2">
      <small>
        This is example input with reusable component. 
      </small>
      <small class="font-bold text-red-500">
        You can check the code in path src/components/InputComponent.vue
      </small>
    </div>
    <hr class="my-2" />
    <div class="my-5 max-w-xl">
      <InputComponent :gradientClass="false" :labelClass="'font-semibold mb-2 text-lg'" :labelText="'Input Text'" :inputName="'input text'" :placeholder="'Input Text'" type="text" v-model="data.form.text" :totalIcon="1" :firstIcon="''" :secondIcon="''" class="my-2"/>
      <InputComponent :gradientClass="false" :labelClass="'font-semibold mb-2 text-lg'" :labelText="'Input Number'" :inputName="'input number'" :placeholder="'Input Number'" type="number" v-model="data.form.number" :totalIcon="1" :firstIcon="''" :secondIcon="''" class="my-2"/>
      <InputComponent :gradientClass="false" :labelClass="'font-semibold mb-2 text-lg'" :labelText="'Input Password'" :inputName="'input password'" :placeholder="'Input Password'" type="password" v-model="data.form.password" :totalIcon="1" :firstIcon="''" :secondIcon="''" class="my-2"/>
      <InputComponent :gradientClass="false" :labelClass="'font-semibold mb-2 text-lg'" :labelText="'Input Date'" :inputName="'input date'" :placeholder="'Input Date'" type="date" v-model="data.form.date" :totalIcon="1" :firstIcon="''" :secondIcon="''" class="my-2"/>
      <InputComponent :gradientClass="false" :labelClass="'font-semibold mb-2 text-lg'" :labelText="'Input Email'" :inputName="'input email'" :placeholder="'Input Email'" type="email" v-model="data.form.email" :totalIcon="1" :firstIcon="''" :secondIcon="''" class="my-2"/>
    </div>
  </div>
</template>

<script>
import InputComponent from '../components/InputComponent.vue'
import { onMounted, onUnmounted, reactive } from 'vue'

export default {
  components: {
    InputComponent,
  },
  setup() {
    const data = reactive({
      form: {
        text : "",
        number: "",
        password: "",
        date: "",
        email: ""
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
