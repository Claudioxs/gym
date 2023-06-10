<template>
  <div class="container shadow-lg">
    <div class="m-3 fs-1 fst-italic" id="titulo">
      <span>Perfil alumno</span>
    </div>
    <div class="m-3 fs-5">Acciones:
        <button class="btn btn-primary">Estadistica</button>
    </div>
    <div class="row">
      <div class="col border m-5">
        <div class="container d-flex justify-content-center align-items-center p-5">
          <div class="row text-start justify-content-md-center">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/U6R0WkCzIwEN52z4wIPo5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk2MA--/https://media.zenfs.com/en-US/homerun/entertainment_weekly_785/c6eaec6ab16e11a22faf964018aa6daa"
              id="user_img"
            />
            <span class="fs-2 fw-bolder">Nombre: {{ alumno.nombre }}</span>
            <span class="fs-2 fw-bolder">Edad: {{ alumno.edad }}</span>
            <span class="fs-2 fw-bolder">Peso: {{ alumno.peso }} kg</span>
            <div>
              <span class="fs-2 fw-bolder">Enfermedades: </span>
              <span class="fs-2 fw-bolder" v-if="alumno.enfermedades"
                >Ninguna</span
              >
              <span v-else>
                <ul>
                  <li v-for="(enfermedades, i) in alumno.enfermedades" :key="i">
                    {{ enfermedades }}
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col border m-5 text-center">
        <div class=""><span class="fs-1">Rutinas</span></div>
        <button class="btn btn-primary"><router-link :to="{ name: 'agregarRutina' }" class="btn btn-primary">Agregar rutina</router-link></button>

        <div class="accordion p-2">
          <div v-for="(ejercicio, i) in alumno.rutinas" :key="i" class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                {{ i }}
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <table class="table-sm">
                    <thead>
                        <tr>
                            <th>Ejercicio</th>
                            <th> Series</th>
                            <th>Reticiones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(rutina, j) in ejercicio" :key="j">
                            <td>{{ rutina.nombre }}</td>
                            <th>{{ rutina.series }}</th>
                            <th>{{ rutina.rep }}</th>
                        </tr>
                    </tbody>
                </table>
              </div>
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
      alumno: {
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
    };
  },
};
</script>

<style>
#user_img {
  height: 200px;
  width: 200px;
  border-radius: 100px;
}
</style>