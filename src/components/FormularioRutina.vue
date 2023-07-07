<template>
  <div class="contenedor-form">
    <form  @submit.prevent="crearRutina">
      <label for="name">Nombre de la rutina:</label>
      <input type="text" id="name" v-model="routineName" required>
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
  <h1>{{ this.$route.query.parametro }}</h1>
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
      userId:"64a4ca60e34b55be94171c18",
      routineName:""
    };
  },
 
  methods: {
    crearRutina() {
      axios.post('http://localhost:3000/user/rutinas/crear_rutina',{userId: this.userId, routineName: this.routineName})
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
