<template>
  <div class="container p-3">
    <div class="row">
      <div class="col-md-8">
        <Carousel />
      </div>
      <div class="col-md-4">
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
