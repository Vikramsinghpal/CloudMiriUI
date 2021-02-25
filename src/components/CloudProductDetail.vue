<template>
<div class="wrapper">
    <div class="container-fluid detailMain" >
    <div class="container1">
        <div class="row">
            <div class="col-md-5 detailLeftBan">
                <div class="rightDetails">
                    <h1>
                        <span id="lblProductTitle" v-bind=" CloudProductDetail.ProductTitle">{{CloudProductDetail.ProductTitle}}</span>
                    </h1>
                    <div class="os_imgblock">
                        <div class="os_logo">
                            <!-- <img :src="require(path + CloudProductDetail.ProductLogo)"  id="imgProductLogo"
                                class="img-responsive" />  -->
                             <img v-bind:src="path + CloudProductDetail.ProductLogo" alt="" id="imgProductLogo" class="img-responsive"> 
                            
                        </div>
                        <div class="os_list">
                            <ul>
                                <li v-for=" keyword in keywords" :key="keyword">{{keyword}}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-7 detailRightBan">
                <div class="aws_market">
                    <div class="detailBanLogo">
                        <input type="hidden" name="hdnProductCategoryName" id="hdnProductCategoryName"
                            :value="CloudProductDetail.ProductCategoryName" />
                        <ul>
                            <li v-if='CloudProductDetail.ProductCategoryName ==="Salesforce AppExchange"'
                                id="SalesforceAppExchange" class="hide">
                                <img src="../assets/images/saleAppEx.png" alt="saleapp" />
                            </li>
                            <li v-if='CloudProductDetail.ProductCategoryName ==="AWS"' id="AWS" class="hide">
                                <img src="../assets/images/amazon-partnernet-miri.jpg" alt="" />
                            </li>
                            <li v-if='CloudProductDetail.ProductCategoryName ==="Google Cloud "' id="Google-Cloud"
                                class="hide">
                                <img src="../assets/images/googleCloudLogo.png" alt="" />
                            </li>
                            <li v-if='CloudProductDetail.ProductCategoryName === "Alibaba Cloud"' id="Alibaba-Cloud"
                                class="hide">
                                <img src="../assets/images/AlibabaCloudlogodetail.png" alt="" />
                            </li>
                            
                        </ul>
                    </div>
                    <div class="aws_btn_block">
                        <a :href="CloudProductDetail.LaunchNow"  target="_blank"
                            title="LAUNCH NOW" class="aws_btn">LAUNCH NOW</a>
                        <a v-bind:href="CloudProductDetail.WriteAReview" 
                            target="_blank" title="WRITE A REVIEW" class="aws_btn">WRITE A REVIEW</a>
                    </div>
                    <div class="aws_subhead">Please feel free to contact us</div>
                    <router-link to="/contact">
                    <div class="goMain"><a class="goBtn" href="javascript:void(0)" 
                            title="Contact Us">Go</a></div>
                    </router-link>
                </div> 
                <div class="os_social">

                    <ul>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/miritechnologies" title=""
                                class="facebook"></a>
                        </li>
                        <li>
                            <a target="_blank"
                                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fgroups%2F2035676"
                                title="" class="linkedin_aws"></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/miriinfotech" title="" class="twitter"></a>
                        </li>
                        <li>
                            <a target="_blank" href="mailto:contact@miritech.com" title="" class="mail"></a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</div>
<section class="aws_tabing" v-if="CloudProductDetail">
    <div class="aws_tabing_block">
        <div class="tabing_section aside stickem">
            <div class="tabing_block">
                <div>
                <b-tabs content-class="mt-10" >
                   <b-tab title="About" ><i class="ic_about"><span class="title"></span></i>
                     <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6 mobile_none"></div>
                                    <div class="col-sm-6">
                                        <h1 class="page_title">About</h1>
                                    </div>
                                </div>
                                <div class="aboutRight">
                                    <div class="aws_about_left">
                                        <img src="../assets/images/aboutImgLeft.png" alt="" class="img-fluid" />
                                        <p class="mobile_none"></p>
                                    </div>
                                    <span id="lblAboutProduct" v-html="CloudProductDetail.About"></span>
                                </div>
                            </div>
                        </div>
                </b-tab>
          <i class="ic_tools"></i><span class="title"></span> <b-tab title="How It Works" >
                 <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="introTextHowItWorks">
                                            <p id="ContentPlaceHolder1_lblHowItWorksIntro">
                                                {{CloudProductDetail.HowItWorksIntro}}</p>
                                        </div>
                                        <div v-if="CloudProductDetail.VideoLink  && CloudProductDetail.VideoLink != '#'" id="ContentPlaceHolder1_divHowItWorksVideoLink"
                                            class="videoTextHowItWorks">
                                             <iframe id="ContentPlaceHolder1_lnkHowItWorksVideoLink" width="560"
                                                height="315" frameborder="0" allowfullscreen=""
                                                src="CloudProductDetail.VideoLink"></iframe> 
                                        </div>
                                        <div id="divHowItWorks" v-html="CloudProductDetail.HowItWorks"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </b-tab>
                <i class="ic_application"></i><span class="title"></span> <b-tab title="Deployment" >
                   <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div v-html="CloudProductDetail.DeploymentInstructions"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </b-tab>
              <i class="ic_support"></i><span class="title"></span> <b-tab title="Support" >
                <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                       <!--  <div id="dvSupportLinks" v-html="CloudProductDetail.SupportLinks"></div> -->
                                        <div _ngcontent-serverapp-c54="" id="dvSupportLinks"><div>
                                            All your queries are important to us. Please feel free to connect.</div>
                                        <div>
                                            &nbsp;</div>
                                        <div>
                                            24X7 support provided for all the customers.&nbsp;</div>
                                        <div>
                                            We are happy to help you.</div>
                                        <div>
                                            &nbsp;</div>
                                        <!-- <div>
                                            Submit your Query:&nbsp;<a href="unsafe:javascript:void(0)">http://www.miritech.com/ContactUs.aspx</a></div> -->
                                        <!-- <div>
                                            &nbsp;</div> -->
                                        <div>
                                            Contact Numbers:</div>
                                        <ul>
                                            <li>
                                                (510) 298-5936</li>
                                            <li>
                                                (510) 870-8668</li>
                                        </ul>
                                        <div>
                                            Contact E-mail:</div>
                                        <ul>
                                            <li>
                                                <a href="mailto:contact@supportmycloud.com">contact@supportmycloud.com</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4 subFormSupport">
                                        <div v-if="isSubmitRequest" class="rightPanel">
                                            <template>
                                                <div>
                                                   <submitrequest></submitrequest>
                                               </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </b-tab>
             <i class="ic_faq"></i><span class="title"></span> <b-tab title="FAQs" >
                 <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <vsa-list v-for="(faq , index) in FaqQuestionsAnswres" :key="index"
                                                class="accordion-item" fill>
                                      <vsa-item>
                                        <vsa-heading>
                                         <span class="leftNum">{{index +1}}</span>
                                          <div class="rightTxt">{{faq.question}}</div>
                                             </vsa-heading>
                                            <vsa-content>
                                            <div id="divAnswers" v-html=faq.answer></div>
                                      </vsa-content>
                                  </vsa-item>
                             </vsa-list>
                                       <!--  <accordion class="accordian">
                                            <accordion-group v-for="faq in FaqQuestionsAnswres" :key ="faq"
                                                class="accordion-item">
                                                <button class="btn btn-block clearfix" accordion-heading type="button">
                                                    <h3 class="title">
                                                        <span class="leftNum">{{i+1}}</span>
                                                        <div class="rightTxt">{{faq.question}}</div>
                                                        <span class="fa fa-plus"></span>
                                                    </h3>
                                                </button>
                                                <div class="acrdDetail">
                                                    <div id="divAnswers" v-html="faq.answer"></div>
                                                </div>
                                            </accordion-group>
                                        </accordion> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                  </b-tab>
             </b-tabs>
</div>
               <!--  <tabset >
                     <tab>
                        <ng-template tabHeading>
                            <i class="ic_about"></i><span class="title">About</span>
                        </ng-template>
                        <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6 mobile_none"></div>
                                    <div class="col-sm-6">
                                        <h2 class="page_title">About</h2>
                                    </div>
                                </div>
                                <div class="aboutRight">
                                    <div class="aws_about_left">
                                        <img src="../assets/images/aboutImgLeft.png" alt="" class="img-fluid" />
                                        <p class="mobile_none"></p>
                                    </div>
                                    <span id="lblAboutProduct" v-html="CloudProductDetail.About"></span>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab>
                        <ng-template tabHeading>
                            <i class="ic_tools"></i><span class="title">How It Works</span>
                        </ng-template>
                        <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="introTextHowItWorks">
                                            <p id="ContentPlaceHolder1_lblHowItWorksIntro">
                                                {{CloudProductDetail.HowItWorksIntro}}</p>
                                        </div>
                                        <div v-if="CloudProductDetail.VideoLink  && CloudProductDetail.VideoLink != '#'" id="ContentPlaceHolder1_divHowItWorksVideoLink"
                                            class="videoTextHowItWorks">
                                            <iframe id="ContentPlaceHolder1_lnkHowItWorksVideoLink" width="560"
                                                height="315" frameborder="0" allowfullscreen=""
                                                :src="CloudProductDetail.VideoLink"></iframe>
                                        </div>
                                        <div id="divHowItWorks" v-if='CloudProductDetail.HowItWorks'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab>
                        <ng-template tabHeading>
                            <i class="ic_application"></i><span class="title">Deployment</span>
                        </ng-template>
                        <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div v-html="CloudProductDetail.DeploymentInstructions"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab>
                        <ng-template tabHeading>
                            <i class="ic_support"  @click="onClickSupport()"></i><span class="title">Support</span> 
                        </ng-template>
                        <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div id="dvSupportLinks" v-html="CloudProductDetail.SupportLinks"></div>
                                        <div _ngcontent-serverapp-c54="" id="dvSupportLinks"><div>
                                            All your queries are important to us. Please feel free to connect.</div>
                                        <div>
                                            &nbsp;</div>
                                        <div>
                                            24X7 support provided for all the customers.&nbsp;</div>
                                        <div>
                                            We are happy to help you.</div>
                                        <div>
                                            &nbsp;</div>
                                       
                                        <div>
                                            Contact Numbers:</div>
                                        <ul>
                                            <li>
                                                (510) 298-5936</li>
                                            <li>
                                                (510) 870-8668</li>
                                        </ul>
                                        <div>
                                            Contact E-mail:</div>
                                        <ul>
                                            <li>
                                                <a href="mailto:contact@supportmycloud.com">contact@supportmycloud.com</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4 subFormSupport">
                                        <div v-if="isSubmitRequest" class="rightPanel">
                                            <h3 class="titleHead"><span class="headTxtLight">Submit Your</span> Request
                                            </h3>
                                         <contact></contact>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tab>
                    <tab>
                        <ng-template tabHeading>
                            <i class="ic_faq"></i><span class="title">FAQs</span>
                        </ng-template>
                        <div class="comman_tabing">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <accordion   class="accordian">
                                            <accordion-group v-for="faq in FaqQuestionsAnswres" :key="faq">
                                                class="accordion-item">
                                                <button class="btn btn-block clearfix" accordion-heading type="button">
                                                    <h3 class="title">
                                                        <span class="leftNum">{{i+1}}</span>
                                                        <div class="rightTxt">{{faq.question}}</div>
                                                        <span class="fa fa-plus"></span>
                                                    </h3>
                                                </button>
                                                <div class="acrdDetail">
                                                    <div id="divAnswers" v-html="toHTML(faq.answer)"></div>
                                                </div>
                                            </accordion-group>
                                        </accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tab>
                </tabset> -->
            </div>
        </div>
    </div>
</section>
<section class="highlight_block" v-if="CloudProductDetail">
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="page_title">Highlights</h2>
                    <div class="highlight_left">
                        <div id="ContentPlaceHolder1_dvHighlights" v-html="CloudProductDetail.Highlights">

                        </div>

                    </div>
                </div>
                <div class="col-sm-12 col-sm-12 col-md-6">
                    <h2 class="application_title">Application Installed</h2>
                    <div class="application_logo">
                        <div class="row">
                            <div class="col-sm-3" v-for="ApplicationIcons in ApplicationIconInstalled" :key="ApplicationIcons">
                                <div class="app-platform">
                                    <div class="img_logo">
                                        <span>
                                            <img :src="path + ApplicationIcons" alt="" class="img-fluid">
                                        </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                    {{ApplicationInstalledHeading[i]}}
                                </div>
                            </div>
                        </div>
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
import SubmitRequest from "@/components/SubmitRequest.vue";
//import router from '../router'
Vue.use(VueAxios,axios)
export default {
  name: "productdetails",
  components: {
      'submitrequest':SubmitRequest,
  },
  data(){
        return {
        CloudProductDetail:[] ,
        keywords:[],
         searchQuery: null,
        isSubmitRequest:'false',
        path : 'http://192.168.1.42:5672/',
        CloudProducts:[],
        FaqQuestionsAnswres:[],
        ApplicationIconInstalled:[], 
        ApplicationInstalledHeading:[],      
        ProductCategoryId:null,
        PageName:'',
        //  PageNames:this.$route.params.PageName,
        //  Pgename:this.$route.path.PageName
        // PageNames:this.this.$route.query.PageName  ,
         // urlParams : new URLSearchParams(window.location.search),
         // myParam : urlParams.get('PageName'), 
        }
    },
    /*  created() {
            this.PageName = this.$route.params.PageName;
            console.log(this.PageName)
        }, */
    // created:function(){
    //          let Pgename=this.$route.params.PageName;
    //          console.log(this.Pgename)
    // },
 
    
   /*  beforeRouteEnter(to, from, next) {
      if(Object.keys(to.query).length !== 0) { //if the url has query (?query)
        next(vm => {
         vm.PageName = to.query.PageName
         console.log("vm.PageName")
       })
    }
    next()
  },   */

  
   mounted :function() {
       {
          // alert('pagename'+ this.PageName)
          this.isSubmitRequest=true;
       }
      
       this.PageName = this.$route.params.PageName;
      console.log(this.PageName)
       //console.log('hiii')
    // console.log(this.$route.query.PageName)
        //  console.log(this.$route.productdetails.params.PageName)
            Vue.axios.get('http://192.168.1.42:5672/api/Detail/GetProductDetailByPageName', {
                params: {
                    'PageName' : this.PageName
                }
            }).then((productsdetail) => {
                console.log(productsdetail.data.response) 
                this.CloudProductDetail=productsdetail.data.response;                
                console.log(this.CloudProductDetail.ProductLogo)
                this.keywords = this.CloudProductDetail.Keyword.split(',');
                let obj = this.CloudProductDetail.ApplicationIconInstalled.split(',');
                let obj1 = this.CloudProductDetail.faqsWithAnswer.split('~');
                obj1.forEach(x => {
                let data = x.split('!@#');
                this.FaqQuestionsAnswres.push({ "question": data[0], "answer": data[1] });
               });
                  obj.forEach(x => {
                    let index = x.indexOf('/');
                    let head = x.substr(0, index - 1);
                    let icon = x.substr(index + 1);
                    this.ApplicationInstalledHeading.push(head);
                    this.ApplicationIconInstalled.push(icon);
                 });
            })
        
   }
}       
    

</script>