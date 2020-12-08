<template>
  <footer class="footer">
    <div class="container">
     
          <p>
            <a style="color: #ffff" href="https://coreui.io" target="_blank">Copyright  </a>
            <span class="ml-1"
              >&copy; {{ new Date().getFullYear() }} Interseguro. Todos los
              derechos reservados. </span
            >
            <br/>
          </p>
          <br/>       
      
    </div>
    
  </footer>
</template>

<script>
export default {
  name: "efooter",
};
</script>

<style>
ul {
  list-style: none;
}


.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 9vh;
  background-color: gray ;
  color: white;
  text-align: center;
}
.footer p{
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
}
</style>

