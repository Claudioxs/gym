<template>
  
  <nav class="navbar navbar-expand-lg shadow" id="nav">
  <div class="container">
    <!-- Logo o imagen a la izquierda -->
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo-gym.png" alt="Logo">
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
      <router-link to=""> <a class="btn" id="btn-login" href="#">Iniciar sesión</a></router-link>
    </div>
  </div>
</nav>


</template>

<script>
</script>

<style scoped>
img{
  width: 100px;
  height: 90px;
}
#nav {
  background-color: #ffc107;
  height: 100px;
}

#btn-login{
  background-color: #ffc107;
}
</style>