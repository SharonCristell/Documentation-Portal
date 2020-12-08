<template>
  <div id="app">
    <eheader> </eheader>

    <zoom-center-transition>
    <router-view></router-view>
    </zoom-center-transition>

    <efooter></efooter>
  </div>
</template>

<script>

  import Eheader from '@/components/layout/Eheader.vue'
  import Efooter from '@/components/layout/Efooter.vue'

 
  import { SlideXRightTransition,ZoomCenterTransition } from 'vue2-transitions'
  import 'bootstrap';


  export default {
    name: 'app',
    components: {
      Eheader,
      Efooter,
      SlideXRightTransition,
      ZoomCenterTransition,
    },
    data() {
      return {
        loading: false,
      }
    },
  }
</script>

<style lang="scss">
  @import './assets/styles/custom-boostrap.scss';
  @import 'bootstrap/scss/bootstrap.scss';
  @import './assets/styles/styles.scss';
</style>