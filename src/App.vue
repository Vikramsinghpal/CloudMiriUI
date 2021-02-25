<template>
  <div id="app">
    <div class="wrapper">
      <app-header></app-header>
      <router-view>
        <home></home>
        <!-- <go-top></go-top> -->
           <cloudproductdetail></cloudproductdetail>
        <application></application>
        <migration></migration>
        <submitrequest></submitrequest>
        <contact></contact> 
        <consulting></consulting>
        <deploy></deploy>
        <machine></machine>
        <devops></devops>
        <about></about>
        <casestudy></casestudy>
        <whyus></whyus>
      </router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Migration from "./components/Migration.vue";
import Consulting from "./components/Consulting.vue";
import Home from "./components/Home.vue";
import Deployment from "./components/Deployment.vue";
import Application from "./components/Application.vue";
import MachineLearning from "./components/MachineLearning.vue";
import About from "./components/About.vue";
import CaseStudy from "./components/CaseStudy.vue";
import Contact from "./components/Contact.vue";
import WhyUs from "./components/WhyUs.vue";
import DevOps from "./components/DevOps.vue";
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import CloudProductDetail from "./components/CloudProductDetail.vue";
import SubmitRequest from "./components/SubmitRequest.vue";
// import GoTop from '@inotom/vue-go-top';
export default {
  name: "App",
  components: {
    home: Home,
    migration: Migration,
    consulting: Consulting,
    deploy: Deployment,
    cloudproductdetail:CloudProductDetail,
    machine: MachineLearning,
    devops: DevOps,
    about: About,
    contact:Contact,
    application: Application,
    whyus: WhyUs,
    submitrequest:SubmitRequest,
    casestudy: CaseStudy,
    // GoTop,
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
@import "./assets/css/style.css";
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;800&family=Roboto:wght@300;400;500;900&display=swap");
</style>
