<template>
    
  <section class="grid grid-cols-8 bg-blue-100 p-10">

  


    <div class="col-start-3 col-span-4 p-3">
         
        <button @click='reload' class="w-full h-full rounded bg-teal-300">Back to Home</button>
         
    </div>
    <div class="col-start-2 col-span-6  p-20 bg-gray-100 ">
               <div class='grid grid-cols-9'>

                 <div class='col-start-5 col-span-3'>

                   <h1 class="text-2xl leading-snug text-slate-500 font-semibold mb-2">Summary</h1>
                 </div>
               </div>
               
                 <div class='grid grid-cols-8'>
               
                      <div class="bg-sky-100 pb-20 text-center mb-6 col-start-2 col-span-6">
                       
                      
                        <!-- <h2>{{summary}}</h2> -->
                      
                         <ul class="gap-5 px-8 ">
                            <ProductList v-for="product of products" :key="product.productId" :product="product" />
                         </ul>
                       </div>

                 <div class='col-start-4 col-span-3 p-20  '>
                    <StripePay  />
                    </div> 

 
                 </div>      
                 </div>      
             


              
            
</section>


</template>

<script>
import axios from 'axios'
import StripePay from './Stripe.vue'
import store from '../store'
import ProductList from '../components/ProductList.vue'


export default{
      components: { StripePay,ProductList},
 
  data(){
      return {
        summary: store.state.basket,
        products:store.state.basket,
       
      }

  },
  methods:{
    async reload(){
        console.log('reload');
       await this.$router.push({ name: 'home' })
        window.location.reload();
    },
    submitForm(){
         console.log('card: '+this.card.cardNumber)
         this.card.cardNumber = ''
         axios
         .get("https://localhost:7269/api/Category/test1", )
        .then(function (response) {
           console.log(response.data);
         });
    },
  validateInput(){

  }
  }


}
</script>
