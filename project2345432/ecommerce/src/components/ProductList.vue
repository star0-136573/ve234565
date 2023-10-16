<template>
  <div
    class="grid grid-cols-8 bg-white shadow rounded-xl transition-all p-1 pl-2 pr-2 gap-3 m-3 mt-5 "
  >
    <div class='col-start-1 col-span-1'>

      <img
        :src="product.img"
        :alt="product.productName"
        class="rounded-t-xl w-28 object-cover"
      />
    
    </div>
    <div class="col-start-2 col-span-6 ">
      <span class="font-bold text-gray-500">{{ product.productName }}</span>
      <p class="mb-2 text-gray-500">
        {{ $filters.truncateWords(product.description, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <span class=' rounded font-semibold'>£{{product.price}}</span>
        <span class=' rounded font-semibold'>Qty: {{product.quantity}}</span>
        <!-- <span class=' rounded font-semibold'><button @click='deleteOrder' class='bg-gray-200 p-1 rounded text-md text-gray-500 hover:bg-gray-300'>Delete</button></span> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../store"

const { product } = defineProps({
  product: {
    required: true,
    type: Object
  }
})
const deleteOrder = () =>{
  
  store.dispatch('deleteItems',product.productId)
}
</script>
