<template>
<nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #ffff">
 
    <a class="navbar-brand" href="#">
    
      <img width="96" height="36" src="https://storage.googleapis.com/interseguro-shared.appspot.com/02-logo-apis.png" alt="..." class="img-thumbnail">
      
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">

       <router-link tag="li" class="nav-item" :to="{name: 'home'}">
          <a class="nav-link">Inicio</a>
        </router-link>

        <router-link tag="li" class="nav-item" :to="{name: 'documentation'}">
          <a class="nav-link">Documentación</a>
        </router-link>

         <router-link tag="li" class="nav-item" :to="{name: 'contact'}">
          <a class="nav-link">Contáctanos</a>
        </router-link>
    </ul>
     
    
  </div>

</nav>
  
</template>

<script>


  import { mapState } from 'vuex'


  export default {
    name: 'eheader',
     computed: {
       ...mapState(['productsInCart'])
     },
  }
</script>

<style>

.navbar-brand .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 0px solid #dee2e6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
    max-width: 100%;
    height: auto;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: green;
}


</style>