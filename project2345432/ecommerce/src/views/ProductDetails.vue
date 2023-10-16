<template>
  <div class="grid grid-cols-10 max-w-[1000px] mx-auto p-8">
    <div class='col-start-1 col-span-4'>

    <h1 class="text-xl font-bold mb-5 text-slate-500">{{ product.productName }}</h1>
    <img :src="product.img" :alt="product.productName" class="max-w-[80%] rounded">
    </div>
    <div class="col-start-5 col-span-6 sm:grid-cols-3  py-2 pt-12">
      
        <strong class="font-bold ">Price:</strong> £{{ product.price }}
      
        <strong class="font-bold pl-3">Category:</strong> {{ product.category }}
     
        <strong class="font-bold pl-3">Area:</strong> {{ product.Area }}
      
      <div class="my-3 text-gray-500">
        <h1 class='text-xl font-bold  pb-5'>Description</h1>

      {{ product.description }}
    </div>
    </div>

   


      <div class="mt-4 col-start-1 col-span-7">
           <div class='grid grid-cols-7 '>

           <div class='col-start-1'>

           <button @click='addItems' class='p-2 rounded border-2 text-white border-teal-600 bg-teal-500 hover:bg-teal-600 transition-colors'>Add Item</button>
           </div>
           <div class='pl-2 col-start-2'>

    <router-link :to="{ name: 'payment'}">
    
      <button class='p-2 pl-2 pr-3 rounded border-2 text-white border-teal-600 bg-teal-500 hover:bg-teal-600 transition-colors'>pay</button>

    </router-link>
           </div>
      
           </div>
    
      </div>
    </div>


 
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';


import products from '../../data'
const route = useRoute();
const product = ref({})
import store from '../store'

const addItems = () =>{
          console.log(route.params.id)
          let current = store.state.items+1
          store.dispatch("addItems", [route.params.id,current]);
          console.log(store.state.basket)
       
}

onMounted(() => {  
      product.value = products.filter(d => d.productId === route.params.id)[0] || {}
})



</script>