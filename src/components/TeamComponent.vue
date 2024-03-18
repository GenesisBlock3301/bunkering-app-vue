<script setup>
let teamMembers = [
    {name: "Mohammed Rafiqul Islam", designation: "<b>Chairman</b>", img: "/src/assets/img/team/boss.jpeg",bio: `<b>Mohammed Rafiqul Islam</b> started his journey as a broker in Khatungonj, Chittagong. Later on he joined Abul Khair Group and gathered many knowledges about Industry handling, Import – Export, Trading and many more. He started his own Import – Export firm named as RR Trading Corporation in 1980. After that he saw many problems in the bunkering Industry of Bangladesh then he saw the opportunity to bring a better solution to the Industry then Sea marine fuel suppliers & Co was established in 1990. Later He established Bricks manufacturing company in 2008 and Real estate company named RR RAINBOW BD HOLDINGS LTD in 2021.`},
  {name: "Mohammed Amanur Rashid", designation: "<b>Managing partner</b>", img: "/src/assets/img/team/amanur.jpeg", bio: "<b>Md. Amanur Rashid</b> is a Marine Engineer by profession, before joining with us he served in American Bureau of Shipping (ABS), Singapore as Marine Surveyor. He was assigned in new building construction and successfully delivered three container ships and two offshore supply vessels as new construction surveyor. His career at a glance: After passing out from Marine Academy, Chittagong, Bangladesh in 1991 he joined Neptune Ship management services, Singapore as Assistant Engineer. He joined Anglo Eastern Ship management UK as a Second Engineer in 1998 and was promoted to the rank of Chief Engineer in 2003. He has enormous experience in Chemical Tanker, Crude Oil Tanker, Product Tanker and Bulk Carrier.Joined in Ocean Tankers Pte Ltd, Singapore, as Technical Superintendent in 2004. He also served DNV Petroleum Services Singapore, as Technical Advisor\n"},
  {name: "Mohammed Rezaul Islam ", designation: "<b>Managing director</b>", img: "/src/assets/img/team/rezaul.jpeg", bio: "<b>Mohammed Rezaul Islam</b> is a managing director of RR RAINBOW BD HOLDINGS LTD. He completed his High School from the BAF SHAHEEN COLLEGE CHATTOGRAM in 2018. He later went on to complete his undergraduate from the Independent University Bangladesh, in Bachelor of Business Administration (Hons) with a major in Accounting and Finance. He is a big believer in technological innovation-led development to increase efficiency within the work environment and the fostering of overall organizational growth."},
]
</script>

<template>
  <!-- ======= Team Section ======= -->
  <section id="team" class="team section-bg mt-8">
    <div class="container" data-aos="fade-down">
      <div class="section-title">
        <h2>Team</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">
        <div class="col-lg-6 mt-8" v-for="member in teamMembers" :key="member.name" data-aos="zoom-in" data-aos-delay="1000">
          <div class="member d-flex align-items-start">
            <div class="pic" style="display: block"><img :src="member.img" class="img-fluid" alt=""></div>
            <div class="member-info">
              <h4>{{ member.name }}</h4>
              <span v-html="member.designation"></span>
              <p style="display: block" v-html="member.bio"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Team Section -->
</template>

<style scoped>
.pic {
  flex: 0 0 auto; /* Allow the div to grow but not shrink */
}
</style>
