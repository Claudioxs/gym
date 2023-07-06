<template>
    <div class="container p-4">
        <Perfil/>
    </div>
    <h1>{{ user }}</h1>
</template>

<script>
  
  import Perfil from '@/components/PerfilUsuario.vue'
  import { getUser } from '@/services/auth.services';
  import { ref } from 'vue';


  export default {
      components:{
          Perfil
      },
      mounted(){
       setTimeout(()=>{
        this.loadUser()
       }, 100)
      },
      setup(){
        const user = ref(null)

        return{
          user,

          async loadUser() {

            const response = await  getUser()
            this.user = response;
          }
        }
        
      },
      methods:{
        
      }
      
  }
  </script>
  
  <style>
  
  </style>