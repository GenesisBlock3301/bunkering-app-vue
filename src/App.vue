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
      <h1 class="logo me-auto"><a href="#"><img src=""></a></h1>
      <nav id="navbar" class="navbar" :class="{'navbar-mobile': mobileMenu}">
        <ul>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/' }" to="/">Home</router-link></li>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/bunker' }" to="/bunker">Bunkering</router-link></li>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/team' }" to="/team">Team</router-link></li>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/fleet' }" to="/fleet">Fleet</router-link></li>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/career' }" to="/career">Career</router-link></li>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/quote' }" to="/quote">Request A Quote</router-link></li>
          <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/contact' }" to="/contact">Contact</router-link></li>
          <li><router-link :class="getstarted" to="#about">Get Started</router-link></li>
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
