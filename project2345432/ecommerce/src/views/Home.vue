<template>
 <section>


  <!-- <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchProducts"
    />
  </div> -->
  <div class="p-8 pb-0">
   <h1 class='text-center text-4xl p-5 pb-10 text-bold text-rose-500'>Welcome</h1>
  <Products :products="products" />
  </div>
  
 </section>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Products from '../components/Product.vue'


const route = useRoute();
const keyword = ref("");
const products = computed(() => store.state.searchedProducts);

const searchProducts=()=> {
  if (keyword.value) {
    store.dispatch("searchProducts", keyword.value);
  } else {
    // store.commit("setsearchedProducts", []);
    store.dispatch("searchProducts", "cake");
  }
  
}

onMounted(() => {
  keyword.value = route.params.name
  searchProducts()
})
</script>
