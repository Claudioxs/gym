<template>
  <div class="container-fluid d-flex flex-column vh-100">
  <div class="row flex-grow">
    
    <div class="col-1 bg-secondary">
    <div class="row vh-100 flex-grow align-items-center">
        <div class="col">
          <router-link to="/inicio"><button class="button-32">HOME</button></router-link>
        </div>
        <div class="col">
          <router-link to="/inicio"><button class="button-32"><i class="bi bi-bar-chart"></i><span>Estadistica</span></button></router-link>
        </div>
    </div> 
    </div>

    <div class="col bg-primary">
      <div class="row vh-100">
        <div class="col">
        </div>
        <div class="col d-flex align-items-center">
            <BuscadorCompVue :users="users"></BuscadorCompVue>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import BuscadorCompVue from '@/components/BuscadorComp.vue';
import {getUsers} from '../services/admin.services.js';
import { ref } from 'vue';

export default {
    components:{
        BuscadorCompVue
    },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
  mounted(){
       setTimeout(()=>{
        this.loadUsers()
       }, 100)
      },
      setup(){
        const users = ref(null)

        return{
          users,

          async loadUsers() {

            const response = await  getUsers()
            this.users = response;
          }
        }
        
      },
};
</script>

<style >

/* CSS */
.button-32 {
  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-32:not(:disabled):hover,
.button-32:not(:disabled):focus {
  outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

.button-32:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}
</style>