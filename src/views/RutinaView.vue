<template>
  
  <div class="d-flex justify-content-center align-items-center vh-100">
  <div class="d-flex flex-column">
    <div class="d-flex fs-1 p-5">
    <span id="titulo">Agrega un nuevo ejercicio a tu alumno</span>
  </div>
    <form @submit.prevent="guardarEjercicio">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre ejercicio:</label>
        <input type="text" class="form-control" v-model="ejercicio.nombre" required>
      </div>
      <div class="mb-3">
        <label for="series" class="form-label">Series:</label>
        <input type="number" class="form-control" v-model="ejercicio.series" required>
      </div>
      <div class="mb-3">
        <label for="repeticiones" class="form-label">Repeticiones:</label>
        <input type="number" class="form-control" v-model="ejercicio.repeticiones" required>
      </div>
      <div class=" text-center">
        <button type="submit" class="btn btn-primary" v-if="editarElemento === null">Agregar</button>
        <button type="submit" class="btn btn-primary" v-else>Guardar</button>
      </div>
    </form>
    <div class="m-5 mt-3 text-center">
      <ul class="m-5">
      <li v-for="(ejercicio, index) in ejercicios" :key="index">
        <strong>{{ ejercicio.nombre }}</strong> - {{ ejercicio.series }} - {{ ejercicio.repeticiones }}
        <button class="btn btn-primary" @click="editarElemento = elemento">Editar</button>
      </li>
    </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      ejercicio: {
        nombre: '',
        series: '',
        repeticiones: ''
      },
      ejercicios: [],
      editarElemento: null
    };
  },
  methods: {
    guardarEjercicio() {
      if (this.editarElemento === null) {
        this.ejercicios.push({ ...this.ejercicio });
      } else {
        
        Object.assign(this.editarElemento, this.ejercicio);
        this.editarElemento = null; 
      }

      this.ejercicio.nombre = '';
      this.ejercicio.series= '';
      this.ejercicio.repeticiones= '';
    }
  }
};
</script>

<style>
  ul{
    list-style: none;
  }
</style>
