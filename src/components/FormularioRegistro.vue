<template>
  <div class="contenedor-principal d-flex flex-column align-items-center justify-content-center">


    <div class="contenerdo-titulos d-flex flex-column align-items-center">
      <h3>¡Bienvenido a Fitness!</h3>
      <p>Estás lista para iniciar tu cambio físico</p>
    </div>

    <div class="contenerdor-links">
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <div class="nav-bar"></div> <!-- Barra de navegación activa -->
        <li class="nav-item" role="presentation">
          <router-link to="/login" class="nav-link" id="tab-login" role="tab" aria-controls="pills-login"
            aria-selected="false">Login</router-link>
        </li>
        <li class="nav-item active" role="presentation">
          <router-link to="/register" class="nav-link active" id="tab-register" role="tab" aria-controls="pills-register"
            aria-selected="true">Register</router-link>
        </li>
      </ul>
    </div>



    <div class="contenedor-form">
      <form @submit.prevent="submitForm" class="form">
        <div class="inputContainer">
          <input v-model="usuario.nombre" type="text" class="input" placeholder="a" />
          <label for="" class="label">Nombre</label>
        </div>

        <div class="inputContainer">
          <input v-model="usuario.correo" type="text" class="input" placeholder="a" />
          <label for="" class="label">Email</label>
        </div>

        <div class="inputContainer">
          <input v-model="usuario.password" type="password" class="input" placeholder="a" />
          <label for="" class="label">Contraseña</label>
        </div>

        <div class="inputContainer">
          <input type="checkbox" id="terms" />
          <label for="terms" class="label-checkbox">Acepto los <a href="">términos y condiciones</a></label>
        </div>

        <input type="submit" class="submitBtn" value="Crear Cuenta" />
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      usuario: {
        nombre: "Claudio",
        correo: "c.saez15@ufromail.cl",
        password: "12345678",
      },
    };
  },
  methods: {
    submitForm() {
      //  lógica de autenticación de los datos del usuario
      console.log(this.usuario);
    },
  },
};
</script>

<style scoped>
/**NAV-BAR */
.nav-bar {
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: -2px;
  transition: transform 0.3s ease-in-out;
}

.nav-link {
  margin: 1px 20px;
}

.nav-item.active .nav-link {
  color: black;
}

.nav-item.active .nav-bar {
  transform: translateX(100px);
}

.nav-link {
  margin: 1px 20px;
}

/*CONTENEDORES PRINCIPALES*/
.contenedor-principal {
  width: 400px;
  border: 1px solid purple;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.contenedor-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

/*FORMULARIO*/
.form {
  width: 100%;
}

.form {
  background-color: white;
  border-radius: 8px;
  padding: 20px 18px;
}



.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}

.input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #dadce0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}

::placeholder {
  color: transparent;
}

.label-checkbox {
  margin-top: 10px;
  margin-left: 8px;
}

.submitBtn {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 15px 10px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submitBtn:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}

.input:focus+.label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: purple;
}

.input:not(:placeholder-shown)+.label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
}

.input:focus {
  border: 2px solid purple;
}
</style>
