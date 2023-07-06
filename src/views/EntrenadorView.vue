<template>
  <div>
    <div class="container p-5 w-100 h-100">
      <div class="row border fondo">
        <span class="fs-1" id="titulo">Panel entrenador</span>
      </div>
      <div class="row border">
        <div class="col-3 prueba">
          <div class="row">
            <div class="row">
              <div class="col d-flex align-items-center justify-content-center">
                <img id="img-perfil" src="https://img.nbc.com/sites/nbcunbc/files/scet/photos/22/9215/0210_NUP_146728_0054.jpg" alt="">
              </div>
            </div>
            <div class="row text-center">
              <span class="fs-3 fw-lighter text-body-tertiary">Entrenador</span>
              <span class="fs-2">Dwite Shrute</span>
              <div class="border-top mb-1">
                Hola
              </div>
            </div>
          </div>
        </div>
        <div class="col border">
          <BuscadorComp></BuscadorComp>
        </div>
        <h1>{{ users }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import BuscadorComp from '@/components/BuscadorComp.vue';
import { ref } from 'vue';
import { getUsers } from '@/services/admin.services';

export default {
  components:{
    BuscadorComp
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
      async loadUsers(){
        const response = await getUsers();
        this.users = response;
        alert(response)
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/gotham-black");



#titulo {
  font-family: "Gotham Black";
  color: rgb(86, 11, 11);
}

#img-perfil{
  height: 300px !important;
  width: 300px !important;
  border-radius: 50%;
  padding: 10px;
}

.fondo{
  background-color: #f5f5f5;
}

.prueba{
  background-image: linear-gradient(120deg, #fdffff 0, #fbffff 8.33%, #faffff 16.67%, #faffff 25%, #f9ffff 33.33%, #f7ffff 41.67%, #f5f5f5 50%, #f2eaed 58.33%, #eee0e6 66.67%, #ead7e2 75%, #e4cfdf 83.33%, #dec8dd 91.67%, #d7c3dc 100%);
}

</style>