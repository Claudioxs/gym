<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col">
                <div class="row">
                    <span class="fs-5">Buscador</span>
                </div>
                <div class="row ">
                    <div class="input-group ">
                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                        <input type="text" aria-label="First name" class="form-control" placeholder="Busca al usuario por su nombre" v-model="searchTerm" @input="filterUsers">
                    </div> 
                </div> 
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="row m-3 border" v-for="usuario in filteredUsers" :key="usuario.id">
                    <div class="col">
                        <img :src="usuario.link" class="img-fluid">
                    </div>
                    <div class="col p-5">
                        <div class="row pb-3">
                            <span class="text-center">{{ usuario.age }}</span>
                        </div>
                        <div class="row">
                            <button class="button-50" role="button"> Ver perfil
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
        users: [
          { id: 1, name: 'Juan', age: 20 ,link:"https://openpsychometrics.org/tests/characters/test-resources/pics/TO/9.jpg"},
          { id: 2, name: 'María', age: 25 },
          { id: 3, name: 'Pedro', age: 30 },
          { id: 3, name: 'PePe', age: 30 },
          { id: 3, name: 'PePe', age: 30 },
          { id: 3, name: 'PePe', age: 30 },
          { id: 3, name: 'PePe', age: 30 },
          { id: 3, name: 'PePe', age: 30 },
          { id: 3, name: 'PePe', age: 30 }
        ]
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user => {
          // Filtrar por nombre del usuario
          return user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      }
    },
    methods: {
      filterUsers() {
        // No es necesario hacer nada aquí, ya que la lógica de filtrado está en la propiedad computada
      }
    }
  };
  </script>
  
<style scoped>
img{
    width: 200px;
    height: 200px;
}


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