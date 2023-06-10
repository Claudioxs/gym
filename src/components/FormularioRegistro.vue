<template>
  <div>
    <!--nav-->
    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="tab-login" data-mdb-toggle="pill" href="#login" role="tab"
          aria-controls="pills-login" aria-selected="false">Login</a>
      </li>
      <li class="nav-item active" role="presentation">
        <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#register" role="tab"
          aria-controls="pills-register" aria-selected="true">Register</a>
      </li>
    </ul>

    <div class="contenedor-form">
      <form action="" class="form">
          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">Nombre</label>
          </div>

          <div class="inputContainer">
            <input type="text" class="input" placeholder="." />
            <label for="" class="label">Email</label>
          </div>

          <div class="inputContainer">
            <input type="password" class="input" placeholder="." />
            <label for="" class="label">Contraseña</label>
          </div>

          <div class="inputContainer">
            <input type="checkbox" id="terms" />
            <label for="terms" class="label-checkbox">Acepto los términos y condiciones</label>
          </div>

          <input type="submit" class="submitBtn" value="Crear Grupo" />
        </form>
      </div>

       
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contenedor-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 18px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.contenedor-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 18px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
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

.submitBtn {
  display: block;
  width: 100%; 
  margin-top: 30px;
  padding: 15px 30px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.submitBtn:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}
.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: purple;
}

.input:not(:placeholder-shown) + .label {
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
