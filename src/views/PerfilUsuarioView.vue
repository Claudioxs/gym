<template>
    
  <BuscadorComp></BuscadorComp>
    
</template>

<script>
  

  import { getUser } from '@/services/auth.services';
  import BuscadorComp from '@/components/BuscadorComp.vue';
  import { ref } from 'vue';


  export default {
      components:{
          BuscadorComp
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