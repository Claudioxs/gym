<template>
  <div class="container">
    <div class="row">


      <div class="col-md-4">
        <div class="card shadow-sm animate__animated animate__fadeIn">
          <div class="user-image"><img src="@/assets/imagenperfil.jpeg" alt=""></div>
          <div class="card-body">
            <h5 class="card-title">{{ alumno.nombre }}</h5>
            <p class="card-text">{{ alumno.correo }}</p>
            <a href="#" class="btn btn-primary">Editar Perfil</a>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="row">
          <div class="col-md-12">
            <div class="card shadow-sm animate__animated animate__fadeIn">
              <ObjetivosVue/>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <div class="card shadow-sm animate__animated animate__fadeIn">
              <div class="card-body">
                <h5 class="card-title">Rutinas Inscritas</h5>
                <ul>
                  <li v-for="(rutina, dia) in alumno.rutinas" :key="dia">
                    <strong>{{ capitalizeFirstLetter(dia) }}:</strong>
                    <ul>
                      <li v-for="ejercicio in rutina" :key="ejercicio.nombre">
                        {{ ejercicio.nombre }} - {{ ejercicio.series }} series, {{ ejercicio.rep }} repeticiones
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <router-link :to="{ path: '/agregarRutinaUser', query: { parametro: 'valor' } }"><button class="btn btn-primary">Agregar rutina </button></router-link>
      </div>

      <div class="col-12 mt-3">
        <div class="bg-gray" style="height: 400px; width: 100%;">
          <h5 class="titulo">Estadisticas Semanales:</h5>
          <div class="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ObjetivosVue from './ObjetivosComponent.vue'
export default {
  components:{
    ObjetivosVue
  },
  data() {
    return {
      alumno: {
        id: 1,
        nombre: "Jim halpert",
        //edad: 30,
        //peso: 80,
        correo: "c.saez15@ufromail.cl",
        //altura: "2,0",
        //enfermedades: [],
        //descripcion: "Me gusta mucho el deporte y jugar a la pelota",
        rutinas: {
          lunes: [
            { nombre: "Press de banca", series: 4, rep: 10 },
            { nombre: "Sentadillas", series: 4, rep: 10 },
          ],
          martes: [
            { nombre: "Press de banca", series: 4, rep: 10 },
            { nombre: "Sentadillas", series: 4, rep: 10 },
          ],
        },
      },
    };
  },

  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },

};

</script>
<style scoped>
img{
  width: 100%;
  height: 200px;
}
.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(49, 49, 49, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.user-image {
  background-color: #f2f2f2;
  width: 100%;
  height: 200px;
  border-radius: 10px;
}

.card-body {
  margin-top: 10px;
  margin-left: 10px;
}

.bg-gray {
  background-color: #f2f2f2;
  padding: 10px;
}

.titulo {
  margin-top: 10px;
}

.card {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0069d9;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 10px;
}

ul li ul {
  margin-top: 10px;
  padding-left: 20px;
}

ul li ul li {
  margin-bottom: 5px;
}
</style>
  