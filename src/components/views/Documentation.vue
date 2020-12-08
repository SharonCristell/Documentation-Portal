<template>
    <div class="container-fluid">
        <div class="row">
            <slide-x-left-transition :duration='800' v-show="show">
            <div class="col-12">
             <redoc-wrapper
              :spec-or-spec-url="'https://test.interseguro.pe/openapi/openapi_general.yaml'"
              ></redoc-wrapper>
            </div>
            </slide-x-left-transition>
           
        </div>
    </div>

</template>

<script>
import { mapState, mapMutations } from "vuex";
import RedocWrapper from "@hnluu8/vue-redoc-wrapper";

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
    RedocWrapper,
  },
  computed: {
    ...mapState(["productsInCart", "price"]),
  },
  data() {
    return { show: true, random: 0 };
  },
  methods: {
    ...mapMutations(["removeFromCart", "changeQuantity"]),
    getPrice() {
      var price = 0;
      this.productsInCart.map((x) => {
        return (price += x.price * x.wanted);
      });
      this.$store.commit("updatePrice", [price, this.random]);
      return price;
    },
    getShipping() {
      this.random = Math.floor(Math.random() * (100 - 1)) + 1;
    },
  },
  created() {
    this.getShipping();
  },
};
</script>

<style>
.col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
}
</style>