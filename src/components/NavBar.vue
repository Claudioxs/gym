<template>
  
  <nav class="navbar navbar-expand-lg" id="nav">
  <div class="container">
    <!-- Logo o imagen a la izquierda -->
    <a class="navbar-brand" href="#">
      <img src="ruta-de-la-imagen" alt="Logo">
    </a>

    <!-- Enlaces de navegación centrados -->
    <div class="collapse navbar-collapse justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace 3</a>
        </li>
      </ul>
    </div>

    <!-- Inicio de sesión a la derecha -->
    <div class="text-end">
      <a class="btn btn-primary" href="#">Iniciar sesión</a>
    </div>
  </div>
</nav>


</template>

<script>
</script>

<style scoped>
#nav {
  background-color: #ffc107;
  height: 100px;
}
</style>