<template>
  <div id="home">
    <section id="intro">
      <div class="intro-content">
        <h2>Bienvenido a Interseguro API Docs</h2>
        <h3>
          Ahora con nuestras APIs lograrás integraciones más sencillas, rápidas
          y 100% confiables.
        </h3>
        <div>
          <router-link class="nav-item" :to="{ name: 'checkout' }">
            <a class="btn-get-started">Ver documentación</a>
          </router-link>
        </div>
      </div>
    </section>
    <section id="medium">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <a class="btn-benefit">
            <img class="img-thumbnail" width="296" src="https://storage.googleapis.com/interseguro-shared.appspot.com/diagrams/apidocs-logo.svg" alt="...">
          </a>
           <h4>Rápido</h4>
        </div>
        <div class="col-sm">
          <a class="btn-benefit">
            <img class="img-thumbnail" width="296" src="https://storage.googleapis.com/interseguro-shared.appspot.com/diagrams/apidocs-logo.svg" alt="...">
          </a>
           <h4>Sencillo</h4>
        </div>
        <div class="col-sm">
           <a class="btn-benefit">
            <img class="img-thumbnail" width="296" src="https://storage.googleapis.com/interseguro-shared.appspot.com/diagrams/apidocs-logo.svg" alt="...">
          </a>
           <h4>Confiable</h4>
          </div>
      </div>
    </div>
     </section>
  </div>
</template>

<script>
import Eheader from "@/components/layout/Eheader.vue";
import Efooter from "@/components/layout/Efooter.vue";


import { SlideXRightTransition, ScaleTransition } from "vue2-transitions";
import { mapMutations } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "home",
  components: {
    Eheader,
    Efooter,
    SlideXRightTransition,
    ScaleTransition,
   
  },
  data() {
    return {
      data: {
        cat: null,
      },
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["saveToCart"]),
  },
  created() {
    this.$store.state.filterCat = null;
    this.$route.name == "store" ? (this.store = true) : "";
  },
  mounted() {},
};
</script>
<style>

.col-sm {
    padding: 20px;
    text-align: center;
}

h4{
    
    margin-top: 10px;
    text-align: center;
}
.btn-benefit  {
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0855c4;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  margin: 0 auto;
}
.btn-benefit:hover {
  background: #ea09d0;
  border: 2px solid #ea09d0;
  color: #ea09d0;
}

.btn-benefit  .img-thumbnail{
 padding: 0.25rem;
    background-color: #fff;
    border: 0px solid #dee2e6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
    max-width: 100%;
    height: 50px;
}
.btn-benefit  .h4{
    padding: 0.25rem;
    margin-top: 20px;   
    text-align: center;
    align-items: center;
}
#medium {
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: white;
  background-size: cover;
  margin-top: 50px;
  align-content: center;
  align-items: center;
}

#intro {
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: #0855c4;
  background-size: cover;
}

#intro .intro-image {
  overflow: hidden;
}

#intro .intro-content img {
  margin-left: 15px;
  max-width: 80%;
}

#intro .intro-content {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
}

#intro .intro-content h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
}

#intro .intro-content h3 {
  color: #fff;
  font-size: 16px;
}

#intro .intro-content h2 span {
  color: #50d8af;
  text-decoration: underline;
}

.line-divider {
  width: 100px;
  border: 2px solid #3897c3;
  border-radius: 20px;
}

.btn-get-started,
.btn-register {
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 32px;
  border-radius: 5px;
  transition: 0.5s;
  margin: 10px;
  color: #fff;
}
ul {
  list-style: none;
}

.btn-get-started {
  background: #ea09d0;
  border: 2px solid #ea09d0;
  color: #fff;
}

.btn-get-started:hover {
  background: #dcdcdc;
  border: 2px solid #dcdcdc;
  color: #ee7521;
}

.btn-register {
  background: transparent;
  border: 1px solid #fff;
}

.btn-register:hover {
  background: #ea09d0;
  border: 2px solid #ea09d0;
}

#intro .intro-content a.btn-register {
  color: white;
}
#intro .intro-content a.btn-get-started {
  color: white;
}
</style>

