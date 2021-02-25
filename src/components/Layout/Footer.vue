<template>
  <footer id="footer" style="margin: 0">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-md-push-1">
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
        <div class="cl"></div>
        <br />
        <br />
        <div class="col-md-12 copyright">
          <p class data-position="left">
            &copy;&nbsp;&nbsp;{{new Date().getFullYear()}}
            <a href="javascript:void(0)" title="Support My Cloud">
              Cloud Division of
              Support My Cloud.
            </a> &nbsp;
            <a href="javascript:void(0)" title="Privacy Policy" class="foocopylinks">Privacy</a> |
            <a href="sitemap.xmljavascript:void(0)" title="Sitemap" class="foocopylinks">Sitemap</a>
            <br />
            <span class="copyrighttext">
              All trademarks, images and logos are the property of their
              respective owners.
            </span>
            <br />
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!-- <div class="scroll-to-top" [ngClass]="{'show-scrollTop': windowScrolled}">
    <button (click)="scrollToTop()">
        <i class="fa fa-chevron-up"></i>
    </button>
  </div>-->
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
  name: "Footer",
  data(){
        return { CloudProductCategories:[] }
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
                // console.log(products.data.response)
                this.CloudProductCategories=products.data.response;
            });
        }
}

</script>