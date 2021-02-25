<template>
<div class="wrapper">
  <div class="container-fluid">
    <div class="innBannerMain row">
      <div class="container text-center">
        <h1>Our custom offerings on Cloud</h1>
      </div>
    </div>
  </div> 
  <section class="cloudApp text-center container-fluid" v-if="ProductCategoryId==2">
      <div class="container">
      <h2 class="cloud-title">AWS</h2>
      <p class="cloud-subheading">
        Support My Cloud is a leading AWS service provider and comes among top 5 AWS marketplace vendors & provides a varied range of services including cloud consulting, management, and support solutions. In addition to this, we help businesses to grow
        with faster pace with AWS migration, configuration, deployment, implementation, and monitoring to ensure a smooth and seamless cloud transition. Support My Cloud’s team has the inclusion of expert AWS consultants and developers who have the
        potential of optimizing and leveraging AWS Cloud to augment productivity and efficacy of the client’s business. We understand the AWS marketplace along with requirements of the clients and excel in providing the most optimized solutions for
        them.
      </p>
    </div>
     
  </section>
  <section class="cloudApp text-center container-fluid" v-if="ProductCategoryId==4">
    <div class="container">
      <h2 class="cloud-title">Alibaba Cloud</h2>
      <p class="cloud-subheading">
        Support My Cloud is contemplated as one of the most significant Alibaba cloud service partners which help you to attain faster results and ensures highly stable applications and reliable data storage. Our team consists of experts to provide you
        the best service in the entire Alibaba cloud marketplace.
      </p>
    </div>
  </section>
  <section class="cloudApp text-center container-fluid" v-if="ProductCategoryId==1">
    <div class="container">
      <h2 class="cloud-title">Salesforce AppExchange</h2>
      <p
        class="cloud-subheading"
      >AppExchange is the fast and easy way to extend Salesforce. With thousands of solutions that install in just a few clicks, there's something for every business challenge.</p>
    </div>
  </section> 
   <section class="cloudApp text-center container-fluid" v-if="ProductCategoryId==5">
    <div class="container">
      <h2 class="cloud-title">Google Cloud</h2>
      <p class="cloud-subheading">
        Let’s build Google Cloud Solutions that work for you as Support My Cloud is committed to help you to resolve all kind of business challenges with an ease through google cloud. We have extensive experience in eliminating the requirement for costly
        server installation in google cloud marketplace. Additionally, we provide end-to-end services and solutions to help you to transform your business with full suite of cloud-based services through Google cloud
      </p>
    </div>
  </section> 
   <section class="cloudApp text-center container-fluid" v-if="ProductCategoryId==7">
    <div class="container">
      <h2 class="cloud-title">Azure</h2>
      <p class="cloud-subheading">
        Support My Cloud is known for offering end-to-end services and products for businesses building complex business solutions that aim to leverage the power of Microsoft Azure along with cloud-native capabilities. Support My Cloud is your one-stop
        shop for operations and development expertise in the azure marketplace. We offer consistency across clouds with familiar tools and resources and help you define your cloud strategy; then help you execute it. We offer great azure solutions
        to help you to scale your IT resources up and down as per your business needs.
      </p>
    </div>
  </section> 
  <div class="container-fluid">
    <div class="container filter-container" id="test1">
      <div class="btn-wrapper">
        <span class="backBtn switch" @click="removeActive(ProductCategoryId)" id="test2">
                <span class="arrow"></span>
        </span>
      </div>
      <ul id="filters" class="clearfix">     
        <li v-for="cloudProductCategory in CloudProductCategories" :key="cloudProductCategory.ProductCategoryId" :class="cloudProductCategory.ProductCategoryId==selectedCategoryId && showArrow ? 'active': !showArrow ? '':'expanded' ">
                  <a href="javascript:void(0)"
                      @click="GetProductByCategories(cloudProductCategory.ProductCategoryId)">
                      <span :class="cloudProductCategory.ProductCategoryId==selectedCategoryId?'active':'' "> <img :src="require(`@/assets/images/${cloudProductCategory.ProductCategoryImage}`)" alt="google"
                           class="img-fluid" /></span>
                                     
                     </a>
                </li>
      </ul>
    </div>
    <div id="searchprod">
    <div class="searchInn" v-if="ProductCategoryId==7">
      <div class="form-group">
         <input v-model="searchQuery"  class="form-control" placeholder="Search Here" style="width:80%;" >
        <!-- <input type="text" class="textSearch" placeholder="Search Here" [(ngModel)]="term" /> -->
      <a class="clear-search" href="javascript:void(0)">
        <i class="fa fa-times"></i>
      </a>
      </div>
    </div>
    
    <div class="row mb-5">
      <div v-if="ProductCategoryId==2" class="comeSoonMain portfolio 5">
        <div class="comSBx">
          <h2>Coming Soon</h2>
          <p>Give your mind a rest and stick tight as we are going to launch our commodious range of managed applications on Aws Cloud soon.</p>
        </div>
      </div>
      <div v-if="ProductCategoryId==4" class="comeSoonMain portfolio 7">
        <div class="comSBx">
          <h2>Coming Soon</h2>
          <p>Give your mind a rest and stick tight as we are going to launch our commodious range of managed applications on Alibaba Cloud soon.</p>
        </div>
      </div>
      <div v-if="ProductCategoryId==1" class="comeSoonMain portfolio 7">
        <div class="comSBx">
          <h2>Coming Soon</h2>
          <p>Give your mind a rest and stick tight as we are going to launch our commodious range of managed applications on Salesforce soon.</p>
        </div>
      </div>
      <div v-if="ProductCategoryId==5" class="comeSoonMain portfolio 7">
        <div class="comSBx">
          <h2>Coming Soon</h2>
          <p>Give your mind a rest and stick tight as we are going to launch our commodious range of managed applications on Google Cloud soon.</p>
        </div>
      </div>
       
       <div v-if="ProductCategoryId==7" class="col-sm-12" id="portfoliolist">
        <div
          class="portfolio 2"
          data-cat="2"
          v-for="cloudProduct in filterProducts" :key="cloudProduct.PID"
        >
          <div class="portfolio-wrapper">
            <div class="portfolio-img-wrapper">
        <img :src="path + cloudProduct.ProductLogo"  alt="" />
         <!--   <img :src="require(`@assets${cloudProduct.ProductLogo}`)"  > -->
            </div>   
             <div class="bottom-content"> 
              <div class="text-title">{{cloudProduct.ProductTitle}}</div>
              <div class="pl-3 pr-3">
                <div class="row">
                  <div
                    id="ContentPlaceHolder1_rptAllCloudProducts_dvProductRating_0"
                    class="col-sm-4 text-left"
                  >
                    {{cloudProduct.ProductRating1}} 
                    <div class="star"></div>
                  </div>
                  <div class="col-sm-8 text-right">
                    <small>
                      <strong>{{cloudProduct.ProductSubCategoryName}}</strong>
                    </small>
                  </div>
                </div>
              </div>
            </div> 
            <div class="portfolio-label">
              <span class="label-text">
               
                <span class="tags">
                  <ul v-for=" keyword in cloudProduct.ProductAliasArray" :key="keyword">
                    <li>{{keyword}}</li>
                  </ul>
                  <span class="clearfix">&nbsp;</span>
                  <span class="col-sm-12">
                    <span class="portfolio-btn">
                       <!-- <router-link :to="'/productdetails' +cloudProduct.PageName"> -->
                        <router-link :to="{ name: 'CloudProductDetail', params: { PageName: cloudProduct.PageName } }">
                       <a class="portfolio-link"
                      >View Details</a> </router-link>
                    </span>
                  </span>
                </span>
              </span>
            </div>

          </div>
        </div>
      </div> 
      
    </div>
     </div> 
    <div class="row">
      <section class="letsconnect col-sm-12">
        <div class="container-fluid">
          <div class="container">
            <div class="conecttext">
              <div class="row">
                <div class="col-md-9">
                  <h2>
                    Looking for Cloud Experts?
                    <br />We would be glad to serve you.
                  </h2>
                </div>
                <div class="col-md-3">
                  <p>
                    <router-link to="/contact">
                    <button
                      type="button"               
                      class="btn btn-primary btnconect"
                    >LET'S CONNECT</button></router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="row">
      <section class="cloud-awsbox miriOnAWSMain col-sm-12">
        <div class="container-fluid">
          <div class="container">
            <div class="col-md-12">
              <div class="cloud-aws-box-head">
                <p>
                  <img src="../assets/images/AmazonLogo.png" alt />
                </p>
              </div>
            </div>
            <div class="col-md-12 text-center miriOnAWS">
              <p>
                Cloud has been the crux of our services and one of our core competencies. Being a valued AWS Cloud Consulting Partner, we have deployed more than 50 cloud projects on Amazon cloud. We now bring our expert engineering skills to
                bring effortless configurations to your server needs; through our AMI’s exclusively available on AWS Marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div> 
  </div> 
</template>
 <script>
import axios from 'axios'
/* axios.defaults.baseURL = process.env.VUE_APP_BASEURL */
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Vue2Filters from 'vue2-filters'


Vue.use(Vue2Filters)
Vue.use(VueAxios,axios)
export default {
   name:"Application",
   mixins: [Vue2Filters.mixin],
    el: '#searchprod',
  data() {
    return {
        searchQuery: null,
         CloudProductCategories:[] ,
         path : 'http://192.168.1.42:5672/',
         CloudProducts:[],
         search: '',
         ProductTitle:'',
         $loading:false,
         showArrow : false,
         ProductCategoryId:null,
         selectedCategoryId:null,
    };
  },
  computed: {
   filterProducts(){
      if(this.searchQuery){
      return this.CloudProducts.filter((item)=>{
          // return item.ProductTitle.match(this.searchQuery) 
        //  return item.ProductTitle.startsWith(this.searchQuery);
         return this.searchQuery.toLowerCase().split(' ').every(v => item.ProductTitle.toLowerCase().includes(v) ||  item.ProductSubCategoryName.toLowerCase().includes(v) || item.Keyword.toLowerCase().includes(v))
      })
      }else{
        return this.CloudProducts;
      }
    }
  },
 
   methods: {
    GetProductByCategories(ProductCategoryId) {
      // alert('ProductCategoryId ' +ProductCategoryId)
      this.$loading(true)
      this.selectedCategoryId = ProductCategoryId;
      this.ProductCategoryId=ProductCategoryId;
      this.$loading(true)
      document.getElementById("test1").setAttribute('class', 'container filter-container filter-wrapper');
      document.getElementById("test2").setAttribute('class', 'backBtn switch expanded');
     if(this.ProductCategoryId==7){
            // this.filteredList(){
              Vue.axios('http://192.168.1.42:5672/api/Application/GetProductByCategories?ProductCategory=' + this.ProductCategoryId)
              .then((azurepro) =>{
                   this.CloudProducts=azurepro.data.response; 
                     this.$loading(false)                 
                   console.log(this.CloudProducts)                   
                   for (var i = 0; i < this.CloudProducts.length; i++) {
                      if (this.CloudProducts[i].ProductAlias != null) {
                             this.CloudProducts[i].ProductAliasArray = this.CloudProducts[i].ProductAlias.split(',');
                             
                        }
                            else {
                              this.CloudProducts[i].ProductAliasArray = [];
                          }
                      }
                   });
                   
              }
    else{
     this.$loading(false)
    }

  },
  removeActive(ProductCategoryId) {         
     this.selectedCategoryId = ProductCategoryId;
     this.$loading(false)
     document.getElementById("test1").setAttribute('class', 'container filter-container');
     document.getElementById("test2").setAttribute('class', 'backBtn switch');
     document.getElementById("filters").getElementsByTagName('li')[0].setAttribute('class', '');
  }
 },
  mounted () {
        if (sessionStorage.getItem("ProductCategoryId") && sessionStorage.getItem("ProductCategoryId") != "0") {
            this.ProductCategoryId = sessionStorage.getItem("ProductCategoryId");
         
    }
              Vue.axios.get('http://192.168.1.42:5672/api/Application/GetAllProductCategories')
            .then((products) =>{
                console.log(products.data.response)
                this.CloudProductCategories=products.data.response;
            });

           if(this.ProductCategoryId==7){
            // this.filteredList(){
              Vue.axios('http://192.168.1.42:5672/api/Application/GetProductByCategories?ProductCategory=' + this.ProductCategoryId)
              .then((azurepro) =>{
                   this.CloudProducts=azurepro.data.response;                  
                   console.log(this.CloudProducts)                   
                   for (var i = 0; i < this.CloudProducts.length; i++) {
                      if (this.CloudProducts[i].ProductAlias != null) {
                             this.CloudProducts[i].ProductAliasArray = this.CloudProducts[i].ProductAlias.split(',');
                             
                        }
                            else {
                              this.CloudProducts[i].ProductAliasArray = [];
                          }
                      }
                   });
        
              }
          // }
    }
  

}
</script>