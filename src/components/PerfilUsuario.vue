<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow-sm animate__animated animate__fadeIn">
                    <img src="#" class="user-image" alt="Imagen Usuario">
                    <div class="card-body">
                        <h5 class="card-title">Nombre</h5>
                        <p class="card-text">Edad</p>
                        <p class="card-text" > {{ alumno.correo }}</p>
                        <p class="card-text">Descripción</p>
                        <a href="#" class="btn btn-primary">Editar Perfil</a>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card shadow-sm animate__animated animate__fadeIn">
                            <div class="card-body">
                                <h5 class="card-title">Objetivos y Notificaciones</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                                    reprehenderit eos </p>
                                <a href="#" class="btn btn-primary">Editar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <div class="card shadow-sm animate__animated animate__fadeIn">
                            <div class="card-body">
                                <h5 class="card-title">Rutinas Inscritas</h5>
                                <ul>
                                    <li>
                                        Descripción de la Rutina
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3">
                <div class="bg-gray" style="height: 400px; width: 100%;">
                    <h5 class="titulo">Estadisticas Semanales:</h5>
                    <div class="container">
                        
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
        correo: "c.saez15@ufromail.cl",
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

}

.titulo {
    padding: 10px;
}
</style>
  