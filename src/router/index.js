import Vue from 'vue'
//import VueRouter from 'vue-router'
import Router from 'vue-router'
import Consulting from '@/components/Consulting'
import Deployment from '@/components/Deployment'
import Migration from '@/components/Migration'
import MachineLearning from '@/components/MachineLearning'
import DevOps from '@/components/DevOps'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CaseStudy from '@/components/CaseStudy'
import WhyUs from '@/components/WhyUs'
import Application from '@/components/Application'
import CloudProductDetail from  '@/components/CloudProductDetail'
Vue.use(Router)
//Vue.use(VueRouter)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/casestudy', component: CaseStudy },
        { path: '/whyus', component: WhyUs },
        { path: '/application', component: Application },
       { path: '/productdetails/:PageName',name:'CloudProductDetail', component: CloudProductDetail,props:true },
        //  { path: '/productdetails', component: CloudProductDetail },
  
       { path: '/consulting', component: Consulting },
        { path: '/deploy', component: Deployment },
        { path: '/migration', component: Migration },
        { path: '/machine', component: MachineLearning },
        { path: '/devops', component: DevOps },
        { path: '/header', component: Header },
        { path: '/footer', component: Footer },
        { path: '/contact', component: Contact }

    ] 
})
