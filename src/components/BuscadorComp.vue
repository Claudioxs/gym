<template>
   

		<section class="w-100  d-flex justify-content-center">
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
            <li v-for="user in filteredUsers" :key="user._id" class="list-group-item d-flex align-items-center">
              <div class="d-flex align-items-center ">
                <div><span>{{ user.name }}</span></div>
                <div class="d-flex justify-content-between"><router-link :to="{ path: '/test/usuario', query: { parametro: user.routines } }"><button class="button-32"><i class="bi bi-bar-chart"></i><span class="text-center">Ver</span></button></router-link></div>
              </div>
            </li>
          </ul>
          
       </div>
				</div>
			</div>
    </section> 		
        
  </template>
  
  <script > 
  export default {

		props:['users'],

    data(){ 
      return{
        searchTerm: '',
      }
    },
    
    computed: {
      filteredUsers() {
        if(this.users != null){
          return this.users.filter(user => {
          return user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
        }
        return []
      },
    }
  };
  </script>
  
<style scoped>



/* CSS */
.button-50 {
  appearance: button;
  background-color: #f5f5f5  ;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}

    
</style>