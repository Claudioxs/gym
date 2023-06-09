<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <Carousel />
      </div>
      <div class="col-lg-4">
        <Formulario />
      </div>
    </div>
  </div>
 </template>
   
   <script>
 
 import Formulario from '@/components/FormularioRegistro.vue'
 import Carousel from '@/components/CarouselImg.vue'
   
   export default {
     components: {
       Formulario,
       Carousel
     }
   }
   </script>
   
   <style scoped>
  
   </style>
   