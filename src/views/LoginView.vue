<template>
 
 <div class="container p-5">
    <div class="row">
      <div class="col-8">
        <Carousel />
      </div>
      <div class="col-4">
        <Formulario />
      </div>
    </div>
  </div>


</template>
  
  <script>

import Formulario from '@/components/FormularioLogin.vue'
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
  