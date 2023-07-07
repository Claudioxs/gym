<template>

  <div class="container vh-100">
    <div class="row">
     
      {{ user }}
      
      <router-link :to="{ path: '/perfil/crearRutina', query: { id: b} }"><button>Crear rutina</button></router-link>
    </div>
    <div class="row">
      
    </div>
  </div>

    <h1>{{ this.routines }}</h1>
    
    <!-- <section class="w-100  d-flex justify-content-center">
			<div class="d-flex flex-column mb-3">
				<div class="p-2">
					<div class="input-group ">
            <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
            </span>
              <input type="text" aria-label="First name" class="form-control" placeholder="Busca al usuario por su nombre" v-model="searchTerm" >
          </div> 
				</div>
				<div class="p-2">
					<div class="infinite-scroll" data-mdb-infinite-direction="y" data-mdb-infinite-container="infinite-scroll-basic" style="width: 400px;">
          <ul class="container list-group infinite-scroll infinite-scroll-basic" id="basic-example" style="max-height: 400px; overflow-y: scroll">
            <li v-for="user in this.routines" :key="user" class="list-group-item d-flex align-items-center">
              <div class="d-flex align-items-center ">
                <div><span>{{ user }}</span></div>
              </div>
            </li>
          </ul>
          
       </div>
				</div>
			</div>
    </section> 		 -->
    
</template>

<script>
  

  import { getUser} from '@/services/auth.services';
  import { ref } from 'vue';



  export default {
      components:{
          
      },
      data(){
        return{
          
        }
      },
      mounted(){
       setTimeout(()=>{
        this.loadUser()
       }, 100)



      
      },
      setup(){
        const user = ref(null)
        const b = ref(null)
        const routines = ref(null)
        return{
          user,
          b,
          routines,

          async loadUser() {

            const response = await getUser();
            this.user = response;
            this.b = this.user._id;
            
        
          },
         
        }
        
      },
      methods:{
        
      }
      
  }
  </script>
  
  <style>
  
  </style>