<script setup>
const bunkerFuels = [
  {
    name: "LSMGO 0.1%",
    description: "Low Sulphur Marine Gas Oil with sulphur level max 0.1%"
  },
  {
    name: "LSMGO – 0.5 %",
    description: "Low Sulphur Marine Gas Oil with sulphur level max 0.5%"
  },
  {
    name: "VLSFO – 0.5 %",
    description: "Low Sulphur Fuel Oil with sulphur level max 0.5%"
  },
  {
    name: "HSD",
    description: "High Speed Diesel for local barges and vessels"
  },
]
</script>

<template>
  <!-- ======= Bunker Section ======= -->
  <section id="bunker" class="team section-bg mt-8">
    <div class="container" data-aos="fade-down">
      <div class="section-title">
        <h2>Bunkering</h2>
        <p>High-Quality Marine Fuels for Efficient Operations: LSMGO (0.1% & 0.5%), VLSFO (0.5%), and HSD Offerings</p>
      </div>
      <div class="row">
        <div v-for="fuel in bunkerFuels" :key="fuel.name" class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="100">
          <div class="member d-flex align-items-start">
            <div class="member-info">
              <h4>{{ fuel.name }}</h4>
              <p>{{ fuel.description }}</p>
            </div>
          </div>
        </div>

<!--        <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">-->
<!--          <div class="member d-flex align-items-start">-->
<!--            <div class="pic"><img src="/assets/img/team/team-3.jpg" class="img-fluid" alt=""></div>-->
<!--            <div class="member-info">-->
<!--              <h4>William Anderson</h4>-->
<!--              <span>CTO</span>-->
<!--              <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>-->
<!--              <div class="social">-->
<!--                <a href=""><i class="ri-twitter-fill"></i></a>-->
<!--                <a href=""><i class="ri-facebook-fill"></i></a>-->
<!--                <a href=""><i class="ri-instagram-fill"></i></a>-->
<!--                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">-->
<!--          <div class="member d-flex align-items-start">-->
<!--            <div class="pic"><img src="/assets/img/team/team-4.jpg" class="img-fluid" alt=""></div>-->
<!--            <div class="member-info">-->
<!--              <h4>Amanda Jepson</h4>-->
<!--              <span>Accountant</span>-->
<!--              <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>-->
<!--              <div class="social">-->
<!--                <a href=""><i class="ri-twitter-fill"></i></a>-->
<!--                <a href=""><i class="ri-facebook-fill"></i></a>-->
<!--                <a href=""><i class="ri-instagram-fill"></i></a>-->
<!--                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </section>
  <!-- End Team Section -->
</template>

<style scoped>

</style>