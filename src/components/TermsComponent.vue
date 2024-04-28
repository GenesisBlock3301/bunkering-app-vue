<script setup>
// import {pdf} from 'vue-pdf'
</script>

<template>
  <!-- ======= Term Section ======= -->
  <section id="team" class="team section-bg mt-8">
    <div class="container" data-aos="fade-down">
      <div class="section-title">
        <h2>Terms & Conditions</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div style="padding-left: 150px" class="text-center">
        <embed id="pdf-viewer" src="term_&_condition.pdf" type="application/pdf" />
      </div>
    </div>
  </section>
  <!-- End Team Section -->
</template>

<style scoped>
.pic {
  flex: 0 0 auto; /* Allow the div to grow but not shrink */
}
#pdf-viewer {
  width: 80%;
  height: 80vh;
}
</style>
