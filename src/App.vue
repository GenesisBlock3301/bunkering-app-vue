<script setup>
import {ref} from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {onMounted} from "vue";

let mobileMenu = ref(false);

onMounted(()=>{
  console.log(`the component is now mounted.`)
})

function mobileViewToggle() {
  mobileMenu.value = !mobileMenu.value;
  return mobileMenu.value;
}
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top overflow-hidden" style="background-color: #375173">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="#">Bunkering</a></h1>
      <nav id="navbar" class="navbar" :class="{'navbar-mobile': mobileMenu}">
        <ul>
          <li><router-link class="nav-link" to="/">Home</router-link></li>
          <li><router-link class="nav-link" to="/bunker">Bunkering</router-link></li>
          <li><router-link class="nav-link" to="/team">Team</router-link></li>
          <li><router-link class="nav-link" to="/fleet">Fleet</router-link></li>
          <li><router-link class="nav-link" to="/career">Career</router-link></li>
          <li><router-link class="nav-link " to="/quote">Request A Quote</router-link></li>
          <li><router-link class="nav-link " to="/contact">Contact</router-link></li>
          <li><router-link class="getstarted" to="#about">Get Started</router-link></li>
        </ul>
        <i v-if="!mobileMenu" class="bi bi-list mobile-nav-toggle" @click="mobileViewToggle"></i>
        <i v-if="mobileMenu" class="bi mobile-nav-toggle bi-x" @click="mobileViewToggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <router-view/>
  <FooterComponent/>
  <!-- End Header -->
</template>

<style scoped>

</style>
