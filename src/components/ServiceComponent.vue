<script setup>
const ourSectors = [
    {
      name: "Physical Bunker Supply",
      detail: "Physical bunker supply is the core of our operations, ensuring vessels are efficiently fueled for their journeys. With our robust network and strategic partnerships, we guarantee timely delivery and top-quality fuel, providing peace of mind to maritime operators worldwide.",
      icon: `<i class="bx bx-gas-pump"></i>`
    },
  {
    name: "Lubricant Supply",
    detail: "Our Lubricant Supply service ensures that your machinery and equipment run smoothly and efficiently. With a focus on quality products and timely delivery, we provide the lubricants you need to maintain optimal performance and minimize downtime",
    icon: `<i class="bx bx-cog"></i>`
  },
  {
    name: "Exporter & Importer",
    detail: "Our Exporter & Importer service facilitates seamless international trade, connecting businesses with global markets. With expertise in logistics, customs regulations, and market trends, we streamline the import and export process, ensuring efficient and reliable transportation of goods worldwide.",
    icon: `<i class="bx bx-transfer-alt"></i>`
  },
  {
    name: "Ship Chandelling",
    detail: "Ship Chandelling involves the provision of essential supplies and services to ships during their stay in port. From supplying provisions and spare parts to offering repair and maintenance services, Ship Chandelling ensures smooth operations for vessels, catering to their needs efficiently while they're docked",
    icon: `<i class="bx bx-import"></i>`
  },
  {
    name: "Provision & Repair",
    detail: "Provision & Repair services offered by our company encompass meticulous attention to detail and swift, effective solutions. With a focus on reliability and efficiency, we ensure that your vessels are equipped and maintained to the highest standards, minimizing downtime and optimizing performance on the seas. Trust us to handle your provisioning and repair needs with expertise and dedication, keeping your operations smooth sailing at all times",
    icon: `<i class="bx bx-wrench"></i>`
  },
  {
    name: "Oil Carrying",
    detail: "Our Oil Carrying services are executed with utmost precision and adherence to industry regulations. From transportation logistics to safe handling procedures, we ensure the secure and efficient delivery of oil products, providing peace of mind to our clients while meeting their distribution needs seamlessly.",
    icon: `<i class="bx bxs-truck"></i>`
  },
  {
    name: "Real estate",
    detail: "In the realm of real estate, our company stands as a beacon of integrity and innovation. With a steadfast commitment to excellence, we offer tailored solutions and unparalleled expertise to guide you through every step of your property journey, ensuring your investments yield optimal returns and lasting satisfaction.",
    icon: `<i class="bx bx-home"></i>`
  },
  {
    name: "Bricks Manufacturing",
    detail: "Our Bricks Manufacturing division prides itself on producing high-quality bricks tailored to meet various construction needs. With a blend of innovative technology and traditional craftsmanship, we strive to deliver durable and sustainable building materials, contributing to the success of construction projects while prioritizing environmental responsibility.",
    icon: `<i class="bx bx-building-house"></i>`
  }
]
</script>
<template>
  <!-- ======= Services Section ======= -->
  <section id="services" class="services section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Services</h2>
        <p>Our company offers a diverse range of services to meet the varied needs of our clients. From physical bunker supply to real estate development, we strive to deliver excellence in every aspect of our operations. Whether you require lubricant supply, ship chandelling, provision and repair services, or are involved in oil carrying or bricks manufacturing, we have the expertise and resources to cater to your requirements effectively. With a commitment to quality, reliability, and customer satisfaction, we aim to exceed expectations and build lasting partnerships with our valued clients.</p>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-8" v-for="(sector, index) in ourSectors"  data-aos="zoom-in" data-aos-delay="100" :key="index">
          <div class="icon-box" >
            <div class="icon" v-html="sector.icon"></div>
            <h4><a href="">{{ sector.name }}</a></h4>
            <p>{{ sector.detail }}</p>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Services Section -->
</template>
