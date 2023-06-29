<template>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="a in alumno.ejercicios" :key="a.id">
      <div class="carousel__item m-5">
        <span></span>
        <ul v-for="ejer in a" :key="ejer">
          <li>{{ ejer.ejercicio }} {{ ejer.repeticiones }}</li>
        </ul>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation />
    </template>
    ...
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  props:["alumno"]
})
</script>

<style scoped>

.carousel__item{
  height: 400px;
  width: 100%;
  background-color: red;
}

.carousel__slide {
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>