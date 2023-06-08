<template>
 <div class="container">
  <div class="row">
    <div class="col-lg-8">
      <Formulario />
    </div>
    <div class="col-lg-4">
      <Carousel />
    </div>
  </div>
</div>

</template>
  
  <script>
  
  import Formulario from '@/components/CarouselImg.vue'
  import Carousel from '@/components/FormularioInicio.vue'
  
  export default {
    components: {
      Formulario,
      Carousel
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  