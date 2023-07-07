<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
  <div class="d-flex flex-column">
    <div class="d-flex fs-1 p-5">
    <span id="titulo">Agrega una nueva rutina</span>
  </div>
    <form @submit.prevent="saveRoutine">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre Rutina:</label>
        <input type="text" class="form-control" v-model="nombre" required>
      </div>
      
      <div class=" text-center">
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { saveRoutine } from '@/services/auth.services';

export default {
  data() {
    return {
      nombre: '',
      id: '',
    };
  },
  mounted(){
    
  },
  methods:{
    async saveRoutine(){
      
      const response = await saveRoutine({routineName:this.nombre,userId: this.$route.query.id})
      alert(response);
      this.$router.push('/perfil');
    }
  }
 
};
</script>

<style>
  ul{
    list-style: none;
  }
</style>
