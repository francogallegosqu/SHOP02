<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <Navegacion />
    <!-- <b-button :to="{ name: 'Navegacion' }"
          >Navegacion 2</b-button>
    <router-link to="/about">About </router-link> -->
  <fade-transition :duration="200" origin="center top" mode="out-in">
    <router-view></router-view>
       </fade-transition> 

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navegacion from '@/components/Navegacion.vue'
import Footer from '@/components/Footer.vue'
  import { FadeTransition } from 'vue2-transitions';
export default {
  name: 'Home',
  components: {
    Footer,
    Navegacion,
    FadeTransition
  }
}
</script>
