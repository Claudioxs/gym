<template>
  <div class="container-p-5">
    <div class="row">
      <div class="col-md-8">
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
.container-p-5 {
 border-radius: 20px;
}

.container-p-5 .row {
  justify-content: center;
}

.col-lg-4 {
  border-radius: 10px;
}


</style>
