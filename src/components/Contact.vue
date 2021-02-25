<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="innBannerMain row">
        <div class="container text-center">
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
    <div class="mainCont">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="leftPanel">
              <div class="servMain">
                <div class="contMain">
                  <legend>
                    <span class="fa fa-globe"></span> Our offices
                  </legend>
                  <div class="addPan" v-for="officeInfo in offices" :key="officeInfo.CountryId">
                    <div class="flagHead">
                      <!-- <input              
                        name="CountryID"
                        id="hdnCountryID"                    
                      />-->

                      <span class="addTitle">{{officeInfo.CountryName}}</span>&nbsp;
                      <span class="addflag">
                        <img v-bind:src="path + officeInfo.CountryFlagImage" alt />
                      </span>
                    </div>

                    <div
                      class="col-md-6"
                      v-for=" locations in officesAddress"
                      :key="locations.LocationId"
                    >
                      <span v-if="officeInfo.CountryId == locations.Country">
                        <span class="cityName">{{locations.City}}, {{locations.State}}</span>
                        <p>
                          {{locations.Address1}}
                          <br />
                          {{locations.Address2}}
                          <br />
                          Phone:
                          {{locations.Phone}}
                          <br />
                          Fax: {{locations.Fax}}
                        </p>
                      </span>
                    </div>
                  </div>
                  <div class="conTag">
                    For any further query you can email us at
                    <a
                      href="mailto:contact@supportmycloud.com"
                    >contact@supportmycloud.com</a>
                  </div>
                  <p>&nbsp;</p>
                  <font color="red">*</font>
                  Our Delhi Office (Head Office) ISO certified.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="subFormSupport">
              <template>
                <div>
                  <submit-request></submit-request>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<script>
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import moment from "moment";
import SubmitRequest from "@/components/SubmitRequest.vue";

Vue.use(VueAxios, axios);

var RecaptchaOptions = {
  theme: "custom",
  custom_theme_widget: "recaptcha_widget"
};

export default {
  name: "contact",
  components: {
    "submit-request": SubmitRequest
  },
  data() {
    return {
      offices: [],
      officesAddress: [],
      path: "http://192.168.1.42:5672/"
    };
  },
  mounted: function() {
    Vue.axios
      .get("http://192.168.1.42:5672/api/ContactUs/GetAllCountries")
      .then(countries => {
        this.offices = countries.data.response;
        console.log(countries.data.response);
      });
    Vue.axios
      .get("http://192.168.1.42:5672/api/ContactUs/GetAllLocations")
      .then(location => {
        this.officesAddress = location.data.response;
        console.log(location.data.response);
      });
  }
};
</script>