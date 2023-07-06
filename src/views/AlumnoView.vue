<template>
  <div class="container text-center bg-warning text-dark">
    <div class="row border">
      <div class="col">
        <img :src="alumno.foto" id="user-img">
        <div class="d-flex flex-column">
          <div class="mt-2">
            <span class="fs-3 fw-lighter text-body-tertiary">Alumno</span>
          </div>
          <div>
            <span class="fs-2 fw-lighter">{{ alumno.nombre }}</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex flex-column text-start">
          <div class="mt-5">
            <span>Datos personales</span>
          </div>
          <div class="mt-3">
            <span>Nombre completo:</span>
          </div>
          <div class="mt-3">
            <span>edad:</span>
          </div>
          <div class="mt-3">
            <span>Peso:</span>
          </div>
          <div class="mt-3">
            <span>Estatura:</span>
          </div>
          <div class="mt-3">
            <span>Correo electronico</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <CarruselComp :alumno="alumno"></CarruselComp>
      </div>
    </div>
    <div class="row">
      <div class="col">
        1
      </div>
      <div class="col">
        1
      </div>
    </div>
  </div>

  
</template>

<script>
import CarruselComp from '@/components/CarruselComp.vue';
export default {


  components: {
    CarruselComp
  },

  data() {
    return {
      alumno: {
              nombre: "Kevin",
              id: 1,
              edad: 40,
              estatura: 1.70,
              foto: 'https://img.nbc.com/sites/nbcunbc/files/metaverse_assets/1/0/6/3/3/6/kevin-500x500.jpg',
              ejercicios: {
                lunes: [
                  { ejercicio: "Ejercicio A", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio B", series: 2, repeticiones: 12 },
                ],
                martes: [
                  { ejercicio: "Ejercicio D", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio E", series: 2, repeticiones: 12 },
                  { ejercicio: "Ejercicio F", series: 4, repeticiones: 8 },
                ],
                miércoles: [
                  { ejercicio: "Ejercicio G", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio H", series: 2, repeticiones: 12 },
                  { ejercicio: "Ejercicio I", series: 4, repeticiones: 8 },
                ],
                jueves: [
                  { ejercicio: "Ejercicio J", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio K", series: 2, repeticiones: 12 },
                  { ejercicio: "Ejercicio L", series: 4, repeticiones: 8 },
                ],
                viernes: [
                  { ejercicio: "Ejercicio M", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio N", series: 2, repeticiones: 12 },
                  { ejercicio: "Ejercicio O", series: 4, repeticiones: 8 },
                ],
                sábado: [
                  { ejercicio: "Ejercicio P", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio Q", series: 2, repeticiones: 12 },
                  { ejercicio: "Ejercicio R", series: 4, repeticiones: 8 },
                ],
                domingo: [
                  { ejercicio: "Ejercicio S", series: 3, repeticiones: 10 },
                  { ejercicio: "Ejercicio T", series: 2, repeticiones: 12 },
                  { ejercicio: "Ejercicio U", series: 4, repeticiones: 8 },
                ],
              },
              historial: [
                {
                  fecha: "2023-06-01",
                  ejercicios: [
                    { ejercicio: "Ejercicio A", series: 3, repeticiones: 10 },
                    { ejercicio: "Ejercicio B", series: 2, repeticiones: 12 },
                  ],
                },
                {
                  fecha: "2023-06-03",
                  ejercicios: [
                    { ejercicio: "Ejercicio D", series: 3, repeticiones: 10 },
                    { ejercicio: "Ejercicio E", series: 2, repeticiones: 12 },
                    { ejercicio: "Ejercicio F", series: 4, repeticiones: 8 },
                  ],
                },
                {
                  fecha: "2023-06-05",
                  ejercicios: [
                    { ejercicio: "Ejercicio J", series: 3, repeticiones: 10 },
                    { ejercicio: "Ejercicio K", series: 2, repeticiones: 12 },
                    { ejercicio: "Ejercicio L", series: 4, repeticiones: 8 },
                  ],
                },
              ],
            },
    };
  },
};
</script>

<style>
#user-img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>