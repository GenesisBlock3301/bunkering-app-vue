<script setup>
const ourSectors = ["Physical Bunker Supply", "Lubricant Supply", "Exporter & Importer", "Ship Chandelling",  "Provision & Repair",
    "Oil Carrying", "Real estate", "Bricks Manufacturing",
]
const menuItems = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/bunker",
    name: "Bunkering"
  },
  {
    path: "/team",
    name: "Team"
  },
  {
    path: "/fleet",
    name: "Fleet"
  },
  {
    path: "/career",
    name: "Career"
  },
  {
    path: "/quote",
    name: "Request A Quote"
  },
  {
    path: "/contact",
    name: "Contact"
  },
  {
    path: "/terms",
    name: "Terms & Conditions"
  }
]

function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page with smooth animation
}
</script>

<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">
<!--    <div class="container footer-bottom clearfix">-->

<!--    </div>-->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Arsha</h3>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
<!--              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>-->
<!--              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>-->
<!--              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>-->
<!--              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>-->
<!--              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>-->
              <li v-for="(item, index) in menuItems" :key="index">
                <router-link
                    :class="{ 'nav-link': true, 'active': $route.path === item.path }"
                    :to="item.path"
                    @click="scrollToTop"
                >
                  <i class="bx bx-chevron-right"></i>{{ item.name }}
                </router-link>
              </li>

              <!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/bunker' }" to="/bunker">Bunkering</router-link></li>-->
<!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/team' }" to="/team">Team</router-link></li>-->
<!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/fleet' }" to="/fleet">Fleet</router-link></li>-->
<!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/career' }" to="/career">Career</router-link></li>-->
<!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/quote' }" to="/quote">Request A Quote</router-link></li>-->
<!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/contact' }" to="/contact">Contact</router-link></li>-->
<!--              <li><router-link :class="{ 'nav-link': true, 'active': $route.path === '/terms' }" to="/terms">Terms & Condition</router-link></li>-->
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li v-for="service in ourSectors"><i class="bx bx-chevron-right"></i> <a href="#">{{ service }}</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->

<!--  <div id="preloader"></div>-->
<!--  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>-->
</template>

<style scoped>

</style>