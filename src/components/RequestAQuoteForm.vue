<script setup>
import {ref} from "vue";
import moment from 'moment';
import emailjs from '@emailjs/browser';

moment.locale('en-GB');
let id = 0
let check_inputs_1 = ref([
  {
      id:id++,
      value: "IFO 380",
  },
  {
    id:id++,
    value: "IFO 180"
  },
  {
    id:id++,
    value: "MGO"
  },
])

let check_inputs_2 = ref([
  {
    id:id++,
    value: "Cargo Discharge at Port",
  },
  {
    id:id++,
    value: "Bunker Call only"
  }
])


let form_fields = ref({
    companyName: "",
    contactPerson: "",
    telephone: "",
    email: "",
    selectedValue1: "",
    selectedValue2: "",
    vesselName: "",
    port: "",
    berthLocation: "",
    estimatedDateOfArrival: new Date().toISOString().slice(0, 10),
    estimatedTimeOfArrival: "",
    estimatedDateOfDeparture: new Date().toISOString().slice(0, 10),
    estimatedTimeOfDeparture: "",
    agent: "",
    message: "",
    quantity: "",

})

let handleRadioChange= function(event){
  if (event.target.name === 'flexRadioDefault1'){
    form_fields.value.selectedValue1 = event.target.value
  }else {
    form_fields.value.selectedValue2 = event.target.value
  }
};

const loading = ref(false);
let errors = ref({})

let checkForm = function () {
  // loading.value = true
  let formVal = form_fields.value
  let templateParams = {
    ...formVal
  };
  let publicKey = 'U1b7BG5Kn3oepd0Fs';
  let templateId = 'template_7cex1sq';
  let serviceId = 'service_wnoyjak';
  emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        loading.value = false
      }, function(error) {
        console.log('FAILED...', error);
        loading.value = false
      });
}

</script>

<template>
  <!-- ======= Quote Section ======= -->
  <section id="quote" class="contact mt-8">
    <div class="container" data-aos="fade-down">
      <div class="section-title">
        <h2>Request a quote</h2>
        <p>Please submit the form below to request a quote.</p>
      </div>
      <div class="container">
        <div class="row">
          <form role="form" class="php-email-form">
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </p>
            <h1 class="mb-3"><strong>Company Info</strong></h1>
            <div class="row">
              <div class="form-group col-md-3">
                <label for="name"><small>Company Name</small></label>
                <input style="height: 50%"
                       type="text"
                       name="company_name"
                       class="form-control"
                       v-model="form_fields.companyName">
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Contact Person</small></label>
                <input type="text" style="height: 50%"
                       class="form-control"
                       name="contact"
                       v-model="form_fields.contactPerson">
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Telephone</small></label>
                <input type="text" name="telephone"
                       style="height: 50%"
                       class="form-control"
                       v-model="form_fields.telephone">
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Email</small></label>
                <input type="email" style="height: 50%"
                       class="form-control"
                       name="email"
                       v-model="form_fields.email">
              </div>
            </div>
            <h1 class="mb-2"><strong>Product</strong></h1>
            <div class="row">
              <div class="col-md-3">
                <div v-for="check_input in check_inputs_1" :key="check_input.id" class="form-check">
                  <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="flexRadioDefault1"
                      :value="check_input.value"
                      @change="handleRadioChange"
                  >
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>{{ check_input.value }}</small>
                  </label>
                </div>
              </div>
              <div class="col-md-3">
                <div v-for="check_input in check_inputs_2" :key="check_input.id" class="form-check">
                  <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault1"
                      :value="check_input.value"
                      @change="handleRadioChange"
                  >
                  <label class="form-check-label" for="flexRadioDefault1">
                    <small>{{ check_input.value }}</small>
                  </label>
                </div>
              </div>
              <div class="col-md-3">
                <label for="name"><small>Quantity</small></label>
                <input
                    type="number"
                    style="height: 35%"
                    class="form-control"
                    name="quantity"
                    v-model="form_fields.quantity"
                >
              </div>
            </div>
            <h1 class="mb-3"><strong>Part & Time Info</strong></h1>
            <div class="row">
              <div class="form-group col-md-3">
                <label for="name"><small>Vessel Name</small></label>
                <input
                    type="text"
                    name="vessel_name" style="height: 50%"
                    class="form-control"
                    v-model="form_fields.vesselName"
                >
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Port</small></label>
                <input
                    type="text"
                    class="form-control"
                    style="height: 50%"
                    name="port"
                    v-model="form_fields.port">
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Berth/Location</small></label>
                <input
                    type="text" name="name"
                    class="form-control" style="height: 50%"
                    v-model="form_fields.berthLocation"
                >
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Date of Arrival</small></label>
                <input
                    type="date"
                    class="form-control"
                    style="height: 50%"
                    name="eda"
                    v-model="form_fields.estimatedDateOfArrival"
                    >
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Time of Arrival</small></label>
                <input
                    type="time"
                    style="height: 50%"
                    name="eta"
                    class="form-control"
                    id="estimation_time_of_arrival"
                    v-model="form_fields.estimatedTimeOfArrival"
                >
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Date of Departure</small></label>
                <input
                    type="date" class="form-control"
                    style="height: 50%" name="estimation_time_of_departure"
                    v-model="form_fields.estimatedDateOfDeparture"
                >
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Estimated Time of Departure</small></label>
                <input
                    type="time"
                    name="name"
                    class="form-control"
                    style="height: 50%"
                    v-model="form_fields.estimatedTimeOfDeparture"
                    value="00:00">
              </div>
              <div class="form-group col-md-3">
                <label for="name"><small>Agent</small></label>
                <input type="text" class="form-control" style="height: 50%"
                       name="agent"
                       id="email"
                       v-model="form_fields.agent"
                >
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label for="name">Message*</label>
                <textarea v-model="form_fields.message" class="form-control" name="message" rows="1"></textarea>
              </div>
            </div>
<!--            <div class="text-center">-->
<!--              <button @click="checkForm" class="btn">Submit</button>-->
<!--              <h1 v-if="loading">Loading</h1>-->
<!--            </div>-->
          </form>
          <div class="text-center">
            <button @click="checkForm" class="btn">Submit</button>
          </div>
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
