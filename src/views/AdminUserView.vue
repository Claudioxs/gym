<template>
    <h1>{{ this.$route.query.parametro }}</h1>
  <div class="d-flex justify-content-center p-5 vh-100">
    <section class="w-100 d-flex justify-content-center">
      <div class="d-flex flex-column mb-3">
        <div class="p-2">
          <div class="input-group">
            <span class="input-group-text"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              placeholder="Busca al usuario por su nombre"
              v-model="searchTerm"
            />
          </div>
        </div>
        <div class="p-2">
          <div
            class="infinite-scroll"
            data-mdb-infinite-direction="y"
            data-mdb-infinite-container="infinite-scroll-basic"
            style="width: 400px"
          >
            <ul
              class="container list-group infinite-scroll infinite-scroll-basic"
              id="basic-example"
              style="max-height: 400px; overflow-y: scroll"
            >
              <li
                v-for="user in filteredUsers"
                :key="user._id"
                class="list-group-item d-flex align-items-center"
              >
                <div class="d-flex align-items-center">
                  <div>
                    <span>{{ user.name }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <router-link to="/test/usuario"
                      ><button class="button-32">
                        <i class="bi bi-bar-chart"></i
                        ><span class="text-center">Ver</span>
                      </button></router-link
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {




};
</script>

<style scope>
:root {
  --color-primario: #fff000; /* Color principal */
  --color-secundario: #007bff; /* Color secundario */
  --color-fondo: #f8f9fa; /* Color de fondo */
  --color-texto: #333; /* Color de texto */
}

/* Estilos personalizados */
body {
  background-color: var(--color-fondo);
  color: var(--color-texto);
}
</style>