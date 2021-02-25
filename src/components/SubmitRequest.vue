<template>
  <div class="wrapper">
   <!--  <div class="mainCont">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="subFormSupport"> -->
              <legend>&nbsp;</legend>
              <div class="rightPanel addPan">
                <!--  <div v-if="isSubmitRequest"> -->
                <h3 class="titleHead">
                  <span class="headTxtLight">Submit Your</span> Request
                </h3>
                 <form ref="contact" @submit.prevent="handleSubmit">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white">Name:</label>
                      <input type="text" class="form-control" v-model="user.FirstName" v-validate="'required'" id="FirstName" 
                      name="FirstName"  :class="{ 'is-invalid': submitted && errors.has('FirstName') }"/>
                         <div v-if="submitted && errors.has('FirstName')" class="invalid-feedback">{{ errors.first('FirstName') }}</div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white">Company/Organisation:</label>
                     <input type="text" class="form-control" v-model="user.Company" v-validate="'required'" id="Company" 
                      name="Company"  :class="{ 'is-invalid': submitted && errors.has('Company') }"/>
                         <div v-if="submitted && errors.has('Company')" class="invalid-feedback">{{ errors.first('Company') }}</div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white">Email Address:</label>
                       <input type="email" v-model="user.EmailId" v-validate="'required|email'" id="EmailId" name="EmailId" class="form-control" :class="{ 'is-invalid': submitted && errors.has('EmailId') }" />
                        <div v-if="submitted && errors.has('EmailId')" class="invalid-feedback">{{ errors.first('EmailId') }}</div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white">Phone Number:</label>
                      <input type="number" class="form-control" v-model="user.PhoneNo" v-validate="'required'" id="PhoneNo" 
                      name="PhoneNo"  :class="{ 'is-invalid': submitted && errors.has('PhoneNo') }"/>
                         <div v-if="submitted && errors.has('PhoneNo')" class="invalid-feedback">{{ errors.first('PhoneNo') }}</div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white">Message:</label>
                      <textarea class="form-control" v-model="user.Message" v-validate="'required'" id="Message" 
                      name="Message"  :class="{ 'is-invalid': submitted && errors.has('Message') }"></textarea>
                         <div v-if="submitted && errors.has('Message')" class="invalid-feedback">{{ errors.first('Message') }}</div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white">Enter Security Code:</label>
                      <input type="text" class="form-control" :value="captcha" readonly="readonly" />
                      <span class="input-group-append">
                        <button class="btn btn-info" type="button" @click="RefreshImgCaptchaKey()">
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                        </button>
                    </span>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="control-label text-white"></label>
                      <input type="text" class="form-control" v-model="user.Captcha" placeholder="Enter Security Key" v-validate="'required'" id="Captcha" 
                      name="Captcha"  :class="{ 'is-invalid': submitted && errors.has('Captcha') }"/>
                         <div v-if="submitted && errors.has('Captcha')" class="invalid-feedback">{{ errors.first('Captcha') }}</div>
                  </div>
                   <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
                  
                  </div>
                </form>
              <!-- </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div> 

</template>
<script>
export default {
  
}
</script>
<script>
//import { required, email } from "vuelidate/lib/validators";
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import moment from "moment";
Vue.use(VueAxios,axios)
 var RecaptchaOptions = {
        theme: 'custom',
        custom_theme_widget: 'recaptcha_widget'
    };
export default {
   name: 'submitrequest',
    data () {
        return {
            user: {
                FirstName: '',
                Company: '',
                EmailId: '',
                PhoneNo: '',
                Message:'',
                CreatedDate:'',
            },
             alpha:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'],
            submitted: false,
            captcha:'',
            Captcha:'',
            showCaptchaError:false,
            offices:[],
            officesAddress:[],
             path : 'http://192.168.1.42:5672/',
        }
    },
     created:function(){
       this. RefreshImgCaptchaKey();
         Vue.axios.get('http://192.168.1.42:5672/api/ContactUs/GetAllCountries')
                  .then((countries) =>{
                  this.offices=countries.data.response;
                  console.log(countries.data.response)
                     });
                     Vue.axios.get('http://192.168.1.42:5672/api/ContactUs/GetAllLocations')
                  .then((location) =>{
                  this.officesAddress=location.data.response;
                  console.log(location.data.response)
                     });
     },
    methods: {
         RefreshImgCaptchaKey(){
            //alert('hiiiii')
             alpha:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
           for (let i=0;i<5;i++){
           let a = this.alpha[Math.floor(Math.random() * this.alpha.length)];
           var b = this.alpha[Math.floor(Math.random() * this.alpha.length)];
           var c = this.alpha[Math.floor(Math.random() * this.alpha.length)];
           var d = this.alpha[Math.floor(Math.random() * this.alpha.length)];
           var e = this.alpha[Math.floor(Math.random() * this.alpha.length)];
           let code=a+b+c+d+e;
           this.captcha=code;
          
   }
  }, 
  
        // handleSubmit() {
        //    this.RefreshImgCaptchaKey();
        //     this.RecaptchaOptions=null;
        //     this.submitted = true;
        //      this.user=this.$refs.contact.value;
        //       this.$validator.validate().then(valid => {
        //         if (valid) {
        //            if (this.Captcha != "") {
        //            if (this.captcha == this.Captcha) {
        //              let currentDate= new Date().getFullYear();
        //              this.user.datecal=currentDate;
        //               let uri = 'http://192.168.1.42:5672/api/ContactUs/InsertLeadInquiry';
        //               this.axios.post(uri, this.user).then((data) => {
        //                if(data.StatusCode === 200)
        //                {
        //                  alert("Submitted" + JSON.stringify(this.user))
        //                   this.$refs.contact.reset();
        //                }
        //                else{
        //                  if(data.StatusCode===204){
        //                    alert("Failed to submit");
        //                  }
        //                }
        //              });  
                    
        //            }
        //           else {
        //              this.showCaptchaError = true;
        //           return;
        //           }
        //        }
                 
        //           }
                  
        //     });
        // }
      
        handleSubmit() {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                   let currentDate=  moment(new Date()).format('MM-DD-YYYY')
                   this.user.CreatedDate=currentDate;
                  let uri = 'http://192.168.1.42:5672/api/ContactUs/InsertLeadInquiry';
                   this.axios.post(uri,this.user).then((data) => {
                    if(data.StatusCode === 200){
                        this.$alert("Your enquiry has been submitted successfully. We will contact you soon.");
                        this.$refs.contact.reset();
                   }
                     else if(data.StatusCode === 204){
                         this.$alert("Your enquiry could not submitted! Please try again.")
                     }
                  })
                }
             });
        }
    
    }
};
</script>