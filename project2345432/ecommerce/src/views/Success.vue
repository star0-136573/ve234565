<template>
    
     <section class="grid grid-cols-8 bg-blue-100 m-10 p-10 pb-48">

  


    <div class="col-start-3 col-span-4 ">
             <router-link
      :to="{ name: 'home' }"
     
    >
        <button  class="w-full h-full rounded bg-teal-300">Back to Home</button>
      
    </router-link>
         
    </div>
    <div class="col-start-4 col-span-2 p-20 bg-white mt-40 ">
   <h1 class='text-2xl font-bold text-blue-300' >Payment Success!</h1>
   <h1 class='text-2xl font-bold text-teal-300'>Thank You 😃</h1>
   </div>

     </section>

</template>