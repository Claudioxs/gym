<template>
  <Carousel class="mx-2">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Carousel Image" class="img-carousel" />
    </slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
  
  <script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        "https://s3.amazonaws.com/smartsystem/pictures/7260/big/Smartfit_Pajaritos5.jpg?1577376831",
        "https://i0.wp.com/blog.smartfit.com.mx/wp-content/uploads/2021/08/Ginasios-cerca-de-ti-en-el-estado-de-mexico-1.jpg?fit=1200%2C675&ssl=1",
        "https://pictures.smartfit.com.br/10631/big/GoL_140305_SmartFit_ESKALA_0048.jpg?1664239132"
      ],
    };
  },
});
</script>
  
<style>
.carousel__item {
  width: 100%;
}

.img-carousel {
  width: 100%; /* Ajusta el ancho de la imagen */
  height: 500px; /* Ajusta la altura de la imagen */
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>
  