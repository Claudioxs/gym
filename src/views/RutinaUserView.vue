<template>
  <br>
  <br>
  <div class="contenedor-principal d-flex flex-column align-items-center justify-content-center">
    <h1>Crear Nueva Rutina</h1>
    <FormularioRutina/>
  </div>
</template>

<script>
import FormularioRutina from '../components/FormularioRutina.vue'

export default {
  components: {
    FormularioRutina
  }
}
</script>

<style scoped>
.contenedor-principal {
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

</style>
