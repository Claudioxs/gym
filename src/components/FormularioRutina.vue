<template>
  <div class="contenedor-form">
    <form  @submit.prevent="crearRutina">
      <label for="name">Nombre de la rutina:</label>
      <input type="text" id="name" v-model="routine.name" required>
       <br>
       <FormularioEjercicio/>
       <br>
      <button class="btn btn-secondary" type="submit">Guardar rutina</button>
    </form>
  </div>
<br>
<br>
  <div>
    <router-link to="/perfil"><button class="btn btn-success">Volver a mi perfil</button></router-link>
  </div>
</template>

<script>
import FormularioEjercicio from './FormularioEjercicio.vue';
import axios from 'axios';
export default {
  components:{
    FormularioEjercicio
  },
  data() {
    return {
      routine: {
        name: ""
      }
    };
  },
  methods: {
    crearRutina() {
      axios.post('http://localhost:3000/user/rutinas/crear_rutina', this.routine)
        .then(response => {
          console.log(response.data);
          alert("La rutina se creó correctamente");
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
#name{
  margin: 5px;
}
.boton{
  display: flex;
  align-items: center;
}
.contenedor-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
</style>
