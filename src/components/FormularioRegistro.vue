<template>
  <div>
    <!-- Pills navs -->
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


    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form>

          <div class="form-outline mb-4">
            <input type="text" id="registerName" class="form-control" />
            <label class="form-label" for="registerName">Nombre</label>
          </div>


          <div class="form-outline mb-4">
            <input type="email" id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>


          <div class="form-outline mb-4">
            <input type="password" id="registerPassword" class="form-control" />
            <label class="form-label" for="registerPassword">Password</label>
          </div>


          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
              aria-describedby="registerCheckHelpText" />
            <label class="form-check-label" for="registerCheck">
              Acepta los <a href="#">terminos y condiciones</a>
            </label>
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary btn-block mb-3">
              Crear Cuenta
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
