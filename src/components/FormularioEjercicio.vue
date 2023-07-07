<template>
    <form @submit.prevent=" addEjercicio">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre ejercicio:</label>
        <input type="text" class="form-control" v-model="ejercicio" required>
      </div>
      <div class="mb-3">
        <label for="series" class="form-label">Series:</label>
        <input type="number" class="form-control" v-model="series" required>
      </div>
      <div class="mb-3">
        <label for="repeticiones" class="form-label">Repeticiones:</label>
        <input type="number" class="form-control" v-model="repeticiones" required>
      </div>
      <div class=" text-center">
        <button type="submit" class="btn btn-primary">Agregar</button>
      </div>
    </form>
   
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        rutinaId: "64a7abab2281eac17d278674",
        ejercicio:"",  
        series:"",
        repeticiones: ""
        
    };
  },
  methods: {
    addEjercicio() {
      axios.post('http://localhost:3000/user/rutinas/agregar_ejercicio', {rutinaId: this.rutinaId,ejercicio: this.ejercicio, series: this.series , repeticiones: this.repeticiones})
        .then(response => {
          console.log(response.data);
          alert("Se agrego correctamente el ejercicio");
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
};
</script>

<style>
  ul{
    list-style: none;
  }
</style>
