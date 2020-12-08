<template>
<div>
  <section id="intro">
  <div class="container-fluid">
    <div class="row">
      <slide-x-left-transition :duration="800" v-show="show">
        <div
          class="col-md-3 col-sm-12 text-center p-5 checkout-inner checkout-left"
          style="background-color: #0855c4"
        >
          <div>
            <img
              width="100%"
              height="346"
              src="https://storage.googleapis.com/interseguro-shared.appspot.com/diagrams/apidocs-personaje.svg"
              alt="..."
            />
          </div>
        </div>
      </slide-x-left-transition>

      <slide-x-right-transition :duration="800" v-show="show">
        <div
          class="col-md-9 cart col-sm-12 text-center text-white text-shadow p-5 checkout-inner checkout-right"
          style="background-color: #ffff"
        >
          <div class="container">
            <h1>Contáctanos</h1>
            <br/>
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img
                  width="196"
                  height="106"
                  src="https://storage.googleapis.com/interseguro-shared.appspot.com/diagrams/apidocs-phone.svg"
                  alt="..."
                />
              </div>
             
              <div
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
               
              >
                <div class="short-div">Llámanos al</div>
                <div class="short-div">(01) 500-0000</div>
              </div>
            </div>
              <br />
                <br />
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img
                  width="196"
                  height="106"
                  src="https://storage.googleapis.com/interseguro-shared.appspot.com/diagrams/apidocs-mensaje.svg"
                  alt="..."
                />
              </div>
              <div
                class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
              
              >
                <div class="short-div">Escríbenos a</div>
                <div class="short-div">servicios@interseguro.com.pe</div>
              </div>
            </div>
               <br/>
          </div>
        </div>
      </slide-x-right-transition>
    </div>
  </div>
   </section>

    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import {
  SlideXRightTransition,
  SlideXLeftTransition,
  SlideYUpTransition,
} from "vue2-transitions";

export default {
  components: {
    SlideXRightTransition,
    SlideXLeftTransition,
    SlideYUpTransition,
  },
  computed: {
    ...mapState(["productsInCart", "price", "shipping"]),
  },
  data() {
    return { show: true, card: 0 };
  },
  methods: {
    ...mapMutations(["purchase"]),
  },
};
</script>

<style>
.container h1 {
  color:#0855c4;
  text-align: left;
}

.container .short-div {
  color:#454A6C;
  text-align: left;;
  padding-top: 20px;
  padding-left: 20px;
}
#intro {
  width: 100%;
  height: 50vh;
}
.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    height: 28vh;
}
</style>