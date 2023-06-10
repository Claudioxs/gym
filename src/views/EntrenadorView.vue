<template>
  

  <div class="container shadow-lg">
    <div class="m-5 fs-1 fst-italic" id="titulo">
    <span>Bienvenido entrenador <br />{{ entrenador.nombre }}</span>
  </div>
    <div class="row">
      <div class="col border m-5">
        <div class="container d-flex justify-content-center align-items-center p-5">
          <div class="row text-center justify-content-md-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Dwight_Schrute.jpg/220px-Dwight_Schrute.jpg"
              id="img_adm"
            />
            <span class="fs-3 fst-italic">{{ entrenador.nombre }}</span> <br>
            <span>Alumnos: {{ entrenador.alumnos.length }}</span>
          </div>
        </div>
      </div>
      <div class="col border m-5">
        <table class="table table-sm">
          <thead>
            <th class="fs-4">Nombre</th>
            <th class="fs-4">Edad</th>
            <th class="fs-4">Acciones</th>
          </thead>
          <tbody>
            <tr v-for="(alumno, i) in entrenador.alumnos" :key="i">
              <td>{{ alumno.nombre }}</td>
              <td>{{ alumno.edad }}</td>
              <td>
                <router-link :to="{ name: 'alumno', params: { id: alumno.id } }" class="btn btn-primary">Ver alumno</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entrenador: {
        nombre: "Dwite Schure",
        alumnos: [
          {
            id: 1,
            nombre: "Jim halpert",
            edad: 30,
            peso: 80,
            altura: "2,0",
            enfermedades: [],
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
          {
            id: 1,
            nombre: "Kevin Malone",
            edad: 40,
            peso: 80,
            altura: "2,0",
            enfermedades: [],
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
        ],
      },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/gotham-black");

#titulo {
  font-family: "Gotham Black";
  color: #e6a600;
}

#img_adm {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
</style>