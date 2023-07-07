<template>
  <div class="card-body">
    <h5 class="card-title">Objetivos y Motivaciones</h5>
    <p class="card-text" v-if="!editing">{{ newText }}</p>
    <textarea v-model="newText" v-if="editing"></textarea>
    <button class="btn btn-primary" @click="toggleEditing()">
      {{ editing ? 'Cancelar' : 'Editar' }}
    </button>
    <button v-if="editing" class="btn btn-primary" @click="saveText()">Guardar</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      editing: false,
      newText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit eos'
    };
  },
  methods: {
    toggleEditing() {
      if (this.editing) {
        // Si se cancela la edición, restaura el texto original
        this.newText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reprehenderit eos';
      }
      this.editing = !this.editing;
    },
    saveText() {
      // Realiza una solicitud HTTP para guardar
      const url = 'http://localhost:3000/user/updateProfileText';
      const data = { newText: this.newText };

      axios.put(url, data)
        .then(response => {
          console.log(response);
          this.editing = false;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.btn{
 margin: 10px;
}
textarea {
  width: 100%;
  min-height: 100px;
}
</style>
