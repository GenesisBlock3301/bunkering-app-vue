<script setup>

</script>

<template>
  <!-- ======= Quote Section ======= -->
  <section id="contact" class="contact mt-8">
    <div class="container" data-aos="fade-down">
      <div class="section-title">
        <h2>Request a quote</h2>
        <p>Please submit the form below to request a quote.</p>
      </div>
      <div class="container">
        <div class="row">
          <form action="" method="post" role="form" class="php-email-form">
            <h1 class="mb-3"><strong>Company Info</strong></h1>
            <div class="row">
              <div class="form-group col-md-3">
                <label for="name"><small>Company Name</small></label>
                <input style="height: 50%" type="text" name="name" class="form-control" id="name" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Contact Person</small></label>
                <input type="email" style="height: 50%" class="form-control" name="email" id="email" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Telephone</small></label>
                <input type="text" name="name" style="height: 50%" class="form-control" id="name" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Email</small></label>
                <input type="email" style="height: 50%" class="form-control" name="email" id="email" required>
              </div>
            </div>
            <h1 class="mb-2"><strong>Product</strong></h1>
            <div class="row">
              <div class="col-md-3">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>IFO 380</small>
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>IFO 180</small>
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>MGO</small>
                  </label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>Cargo Discharge at Port</small>
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>Bunker Call only</small>
                  </label>
                </div>
              </div>
              <div class="col-md-3">
                <label for="name"><small>Telephone</small></label>
                <input type="email" style="height: 35%" class="form-control" name="email" id="email" required>
              </div>
            </div>
            <h1 class="mb-3"><strong>Part & Time Info</strong></h1>
            <div class="row">
              <div class="form-group col-md-3">
                <label for="name"><small>Vessel Name</small></label>
                <input type="text" name="name" style="height: 50%" class="form-control" id="name" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Port</small></label>
                <input type="email" class="form-control" style="height: 50%" name="email" id="email" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Berth/Location</small></label>
                <input type="text" name="name" class="form-control" style="height: 50%" id="name" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Date of Arrival</small></label>
                <input type="email" class="form-control" style="height: 50%" name="email" id="email" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Time of Arrival</small></label>
                <input type="text" style="height: 50%" name="name" class="form-control" id="name" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Date of Departure</small></label>
                <input type="email" class="form-control" style="height: 50%" name="email" id="email" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Time of Departure</small></label>
                <input type="text" name="name" class="form-control" style="height: 50%" id="name" required>
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Agent</small></label>
                <input type="email" class="form-control" style="height: 50%" name="email" id="email" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="1" required></textarea>
              </div>
            </div>
<!--            <div class="my-3">-->
<!--              <div class="loading">Loading</div>-->
<!--              <div class="error-message"></div>-->
<!--              <div class="sent-message">Your message has been sent. Thank you!</div>-->
<!--            </div>-->
            <div class="text-center">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Section -->

</template>

<style scoped>
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 15px;
  height: 15px;
  //border: 1px solid #333;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}

/* Styling when radio button is checked */
input[type="radio"]:checked {
  background-color: #375173;
}

/* Label styling */
.form-check-label {
  margin-left: 8px;
  cursor: pointer;
}
</style>
