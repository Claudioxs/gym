<template>

  <div id="hero-carousel" class="carousel slide carousel-container" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="@/assets/imagen1.png" class="d-block w-100 c-img" alt="Slide 1">
        <div class="carousel-caption top-0 mt-4">
          <h3>Fitness Empieza ahora</h3>
          <p class="transparent-p">¡Bienvenido al mejor gimnasio de la ciudad! Nuestro objetivo es ayudarte a alcanzar tus metas de fitness y transformar tu vida. Únete a nuestra comunidad hoy mismo y descubre una experiencia de entrenamiento excepcional.</p>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="@/assets/imagen2.jpg" class="d-block w-100 c-img" alt="Slide 2">
        <div class="carousel-caption top-0 mt-4">
          <h3>Fitness Empieza ahora</h3>
          <p class="transparent-p">En nuestro gimnasio, te ofrecemos un ambiente energético y motivador para que logres tus objetivos.ersonalizados y equipos de última generación, te brindamos todas las herramientas necesarias para que te pongas en forma y te sientas saludable.</p>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="@/assets/imagen3.avif" class="d-block w-100 c-img" alt="Slide 3">
        <div class="carousel-caption top-0 mt-4">
          <h3>Fitness Empieza ahora</h3>
          <p class="transparent-p">¿Listo para un cambio positivo? Nuestro gimnasio es el lugar perfecto para comenzar tu viaje hacia un estilo de vida activo y equilibrado.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.carousel-inner{
  width: 100%;
  height: 100%;
}

.c-item {
  height: 100%;
}

.c-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.carousel-container {
  width: 100%;
}

.transparent-p {
  opacity: 0.7; /* Valor de transparencia entre 0 y 1 */
}

</style>