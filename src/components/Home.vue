<template>
<div class="wrapper">
    <div class="container-fluid">
    <div class="bannerMain row">
        <div class="container text-center">
            <h1>Feel the power of Cloud with Support My Cloud</h1>
            <div class="awsMarketBannerBtn1">
                <div class="col-md-12 col-sm-12">
                    <div class="footer-partner">
                         <ul class="ulcloudproducts">
                            <li v-for="cloudProductCategory in CloudProductCategories" :key="cloudProductCategory.ProductCategoryId">
                                <a href="javascript:void(0)"
                                     @click="onProductCategoryClick(cloudProductCategory.ProductCategoryId)">
                                    <img :src="require(`@/assets/images/${cloudProductCategory.ProductCategoryImage}`)" alt="google"
                                        class="img-fluid" />
                                     
                                </a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="cloudApp text-center container-fluid">
    <div class="container">
        <h2>Cloud Services</h2>
        <h3>Cloud is an Electronic Democracy</h3>
        <p>&nbsp;</p>
        <p>Cloud services incorporates various methodologies such as on-demand practices via internet, migration
            handling (cloud, database etc.), computing power that can be accessed through cloud computing providers. We
            are Cloud Service Provider in USA
            and have great and highly skilled experts to offer the best in-class cloud services
        </p>
    </div>
</section>
<section class="wtWeDo text-center container-fluid">
    <div class="container">
        <h2>We believe in outcomes</h2>
        <p>We strive in offering the most agile and high quality cloud services and following are the significant
            services on cloud technology:</p>

        <div class="row">
            <div class="col-md-4">
                 <router-link to="/migration"><a href="javascript:void(0)" class="innBx">
                <!-- <a href="javascript:void(0)" routerLink="/marketplace/migration" class="innBx"> -->
                    <i class="iconServ">
                        <img src="../assets/images/migrateIcon.png" alt="Migration" /></i>                       
                    <h3>Migration</h3>
                    <p>Cloud Migration Services refer to moving from traditional server environments to private, public
                        or hybrid clouds of their preference.</p>
                 </a></router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/consulting" ><a href="javascript:void(0)" class="innBx">
                <!-- <a href="javascript:void(0)" routerLink="/marketplace/consulting" class="innBx"> -->
                    <i class="iconServ">
                        <img src="../assets/images/consult.png" alt="Consultation" /></i>
                    <h3>Consulting</h3>
                    <p>Cloud Consulting Services cater to the business needs to offer consultation in the implementation
                        of cloud computing.</p>
                </a></router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/deploy" ><a href="javascript:void(0)"  class="innBx">
               <!--  <a href="javascript:void(0)" routerLink="/marketplace/deployment" class="innBx"> -->
                    <i class="iconServ">
                        <img src="../assets/images/developIcon.png" alt="Deployment" /></i>
                    <h3>Deployment</h3>
                    <p>Deployment includes all the processes engaged in getting new software or hardware up and running
                        properly in its environment..</p>
                </a></router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/devops" ><a href="javascript:void(0)" class="innBx">
                <!-- <a href="javascript:void(0)" routerLink="/marketplace/devops" class="innBx"> -->
                    <i class="iconServ">
                        <img src="../assets/images/analysisIcon.png" alt="DevOps" /></i>
                    <h3>DevOps</h3>
                    <p>DevOps is the amalgamation of cultural philosophies, practices, and tools that enhances the
                        organization’s capability to deliver..</p>
                </a></router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/machine" ><a href="javascript:void(0)" class="innBx">
               <!--  <a href="javascript:void(0)" routerLink="/marketplace/machinelearning" class="innBx"> -->
                    <i class="iconServ">
                        <img src="../assets/images/disasRecoverIcon.png" alt="Machine Learning" /></i>
                    <h3>Machine Learning</h3>
                    <p>Machine Learning is the art of getting computers to act without being explicitly programmed.</p>
                </a></router-link>
            </div>

            <div class="col-md-4">
                <router-link to="/services" ><a href="javascript:void(0)">
               <!--  <a href="javascript:void(0)" routerLink="/marketplace/services" class="innBx"> -->
                    <!-- <a href="/services.aspx#moreSec" class="innBx"> -->
                    <i class="iconServ">
                        <img src="../assets/images/devOptIcon.png" alt="More" /></i>
                    <h3>More</h3>
                    <p>Some other services that are provided by us: Sharepoint, Data Lake, Mobile, etc.</p>
                </a></router-link>
            </div>
        </div>

    </div>
</section>


<section class="believeMain container-fluid">
    <div class="row">
        <div class="col-md-6 believeLeftImg">
            <img src="../assets/images/image_monitor.png" alt="" />
        </div>
        <div class="col-md-6 belRight">
            <h4>We keep our customers in focus and increase their competitive advantage by aligning strategy with people
                and culture. </h4>
            <p>You can take a deep-dive into the cases that we solved and provided the best solution on cloud platform.
            </p>
            <ul class="believeLogo">
                <li>
                    <router-link to="/casestudy" >
                    <a href="javascript:void(0)" >
                        <img src="../assets/images/GossRV.png" alt="GossRV Case Study" /></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/casestudy" >
                    <a href="javascript:void(0)" routerLink="/marketplace/casestudies">
                        <img src="../assets/images/CombaLogo.png" alt="Comba Case Study" /></a>
                         </router-link>
                </li>
                <li>
                    <router-link to="/casestudy" >
                    <a href="javascript:void(0)" routerLink="/marketplace/casestudies">
                        <img src="../assets/images/wympLogo.png" alt="Wymp Case Study" /></a>
                         </router-link>

                </li>
            </ul>
        </div>
    </div>
</section>

<!--<section class="cloudApp text-center container-fluid">
    <div class="container">
        <h2>Enterprise Cloud Solutions</h2>
        <p>We enable enterprises to boost up their agility by leveraging greater accessibility, improved mobility, increased collaboration, enhanced scalability, reduced cost, deeper data insights, and more. Fuel your business growth by leveraging end-to-end cloud computing solutions of Support My Cloud. We deliver highly scalable, flexible, and secure cloud applications to enable our clients to outperform competitors.</p>

        <p>Support My Cloudtech defines a customized cloud consulting approach driven by your business goals. We build technology-driven and result-oriented applications using mature processes and proven technologies.</p>
    </div>
</section>-->

<section class="letsconnect row">
    <div class="container-fluid">
        <div class="container">
            <div class="conecttext">
                <div class="row">
                    <div class="col-md-9">
                        <h2>Looking for Cloud Experts?
                            <br /> We would be glad to serve you.
                        </h2>
                    </div>
                    <div class="col-md-3">
                        <p>
                            <router-link to="/contact">
                            <button type="button" 
                                class="btn btn-primary btnconect">LET'S
                                CONNECT</button></router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="cloud-awsbox">
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                </div>
                <div class="col-md-12">
                    <div class="cloud-aws-box-info">
                        <ul>
                            <li>
                                <i class="cloudAwsIcon">
                                    <img src="../assets/images/cloudFormationIcon.png" alt="" /></i>

                                <span>Certified Experts</span>
                            </li>
                            <li><i class="cloudAwsIcon">
                                    <img src="../assets/images/subscriptIcon.png" alt="" /></i>

                                <span>15+ years of Experience</span>
                            </li>
                            <li><i class="cloudAwsIcon">
                                    <img src="../assets/images/instanceIcon.png" alt="" /></i>

                                <span>1000+ Subscribers</span>
                            </li>
                            <li><i class="cloudAwsIcon">
                                    <img src="../assets/images/totalAmiIcon.png" alt="" /></i>

                                <span>Customer Oriented</span>
                            </li>
                            <li><i class="cloudAwsIcon">
                                    <img src="../assets/images/countyIcon.png" alt="" /></i>

                                <span>Industry-wide Experience</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
    name:"Home",
    data(){
        return { CloudProductCategories:[],
        
        }
    },
    methods:{
          onProductCategoryClick(ProductCategoryId){
              sessionStorage.setItem("ProductCategoryId",ProductCategoryId);
             if(this.$router.use == "/application")
      {
       // this.cloudService.latestProductCatgoryId.next(ProductCategoryId);
       
      }
     else{
      this.$router.push({path: '/application'})
     }
  
          }
    },
  
    mounted: function(){
        /* getCloudProductCategories(){ */
            Vue.axios.get('http://192.168.1.42:5672/api/Application/GetAllProductCategories')
            .then((products) =>{
                console.log(products.data.response)
                this.CloudProductCategories=products.data.response;
            });
        }
}

</script>