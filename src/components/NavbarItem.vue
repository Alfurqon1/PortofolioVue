<script></script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white p-5">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto justify-content-center mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><RouterLink to="/">Home</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink :to="{ path: 'contact' }">Contact</RouterLink></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><RouterLink to="/details">Details</RouterLink></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: white;
  margin-bottom: 50px;
  border-bottom: 1px solid black;
  margin: auto;
}
li a {
  color: black;
  font-size: 18px;
  text-decoration: none;
}
</style>
