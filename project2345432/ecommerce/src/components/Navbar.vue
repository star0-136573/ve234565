<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-lime-500 font-bold"
    >
      Home
    </router-link>
    <!-- search -->
  
    <div class="flex items-center gap-3 px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded-2xl border-2 bg-white border-gray-200  h-10 focus:ring-blue-500 "
      placeholder="Search for Products"
     
    />
        <div @click="searchProducts">

      <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-lime-500 font-bold"
    >
    Search
     </router-link>
    </div>
  </div>
 
    <div class="flex items-center gap-1">
      <!-- <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-lime-500 hover:text-white"
      >
        Search Meals
      </router-link> -->
      <router-link
        :to="{ name: 'payment' }"
        class="inline-flex pr-20 items-center px-2 h-full transition-colors hover:bg-lime-500 hover:text-white"
      >
        <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
  <a href="#" role="button" class="relative flex">
    <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24" >
      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
      </svg>
      <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
        {{store.state.items}}
    </span>
  </a>
</li>
   </router-link>


   
    </div>
  </header>
</template>


<script setup>

import { onMounted, ref } from "vue";

import store from "../store";

import { useRoute } from "vue-router";
const keyword = ref("");
const router = useRoute();
const numOfItems = ref(store.state.items);


function searchProducts() {
  console.log(keyword.value)
  if (keyword.value) {
    store.dispatch("searchProducts", keyword.value);
  } else {
    // store.commit("setSearchedMeals", []);
    store.dispatch("searchProducts", "cake");
  }
  
}

</script>