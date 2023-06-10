<template>
  <NavBar></NavBar>
  <div class="m-4">
    <div><span class="h5">Nuestras instalaciones</span></div>
    <div><span class="h3" id="titulo">Temuco</span></div>
  </div>
  <CarruselComp></CarruselComp>

  <div class="container-fluid m-5">
    <div class="row">
      <div class="col text-center">
        <span class="fs-1 fst-italic" id="titulo"
          >¿Cuando y donde <br />
          entrenar?</span
        >
      </div>
      <div class="col">
        <div class="container">
          <div class="row">
            <span id="blod">Horario</span>
            <p>Sáb a Dom y Feriados 8h - 16h<br />Lun a Vie 6h - 22:30h</p>
          </div>
          <div class="row">
            <span>Direccion</span>
            <p>Av. Alemania 0999 - Temuco</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CarruselComp from "@/components/CarruselComp.vue";


export default {
  components: {
    NavBar,
    CarruselComp,
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/gotham-black");

#titulo {
  font-family: "Gotham Black";
}
</style>