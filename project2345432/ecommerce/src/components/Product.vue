<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <ProductItem v-for="product of products" :key="product.productId" :product="product" />
  </div>
  <div v-if="!products.length" class="flex justify-center text-gray-600 p-8">
    There are no products
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue';

const { products } = defineProps({
  products: {
    required: true,
    type: Array,
  }
})

</script>
