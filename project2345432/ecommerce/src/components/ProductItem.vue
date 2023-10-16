<template>
  <div
    class="bg-white shadow rounded-xl hover:opacity-80 transition-all"
  >
    <router-link :to="{ name: 'productDetails', params: { id: product.productId } }">
      <img
        :src="product.img"
        :alt="product.productName"
        class="rounded-t-xl w-96 h-40 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ product.productName }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(product.description, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <button class='bg-blue-200 p-2 rounded'>Detail</button>
   
        <span class='p-2 rounded font-semibold'>£{{product.price}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>


const { product } = defineProps({
  product: {
    required: true,
    type: Object
  }
})

</script>
