<template>
<div class="wrapper">
  <div class="header" id="stickyMenu">
    <nav class="navbar navbar-light navbar-default navbar-expand-md">
      <div class="container">
        <div class="navbar-header">
          <button type="button" data-toggle="collapse" class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>
         <!--  <a href="javascript:void(0)" routerLink="/marketplace/home" class="navbar-brand logoMain"> -->
          <router-link to="/home"  class="navbar-brand logoMain"><a href="javascript:void(0)">
             <img src="@/assets/images/logoWhite.png" alt="support my cloud" />
          </a></router-link>
        </div>
        <div class="collapse justify-content-end navbar-collapse">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item">
             <!--  <a href="javascript:void(0)" class="nav-link" routerLink="applications">Applications</a> -->
              <router-link to="/application" tag="li" active-class="active" exact><a href="javascript:void(0)" class="nav-link">Applications</a></router-link>
            </li>
            <b-dropdown text="Services" variant="primary">
            <router-link class="dropdown-item" to="/migration">Migration</router-link>
            <router-link class="dropdown-item" to="/consulting">Consulting</router-link>
            <router-link class="dropdown-item" to="/deploy">Deployment</router-link>
            <router-link class="dropdown-item" to="/machine">Machine Learning</router-link>            
            <router-link class="dropdown-item" to="/devops">DevOps</router-link> 
            </b-dropdown> 
            <!-- <li class="nav-item dropdown" dropdown>
                        <a href="javascript:void(0)" dropdownToggle class="dropdown-toggle nav-link"
                            aria-expanded="false" aria-haspopup="true" role="button">Services <b class="caret"></b></a>
                        <ul id="dropdown-animated"  class="dropdown-menu" role="menu"
                            aria-labelledby="button-animated">
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" routerLink="migration">Migration</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" routerLink="consulting">Consulting</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" routerLink="deployment">Deployment</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" routerLink="machinelearning">Machine
                                    Learning</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link" routerLink="devops">DevOps</a>
                            </li>
                        </ul>
            </li-->
            
            <li class="nav-item">
             <!--  <a href="javascript:void(0)" class="nav-link" routerLink="whyus">WHY Support My Cloud</a> -->
               <router-link to="/whyus" tag="li" active-class="active" exact><a href="javascript:void(0)" class="nav-link">WHY Support My Clouds</a></router-link>

            </li>
            <li class="nav-item">
             <!--  <a href="javascript:void(0)" class="nav-link" routerLink="casestudies">Case Studies</a> -->
               <router-link to="/casestudy" tag="li" active-class="active" exact><a href="javascript:void(0)" class="nav-link">Case Studies</a></router-link>
            </li>
            <li class="nav-item">
             <!--  <a href="javascript:void(0)" class="nav-link" routerLink="about">About</a> -->
             <router-link to="/about" tag="li" active-class="active" exact><a href="javascript:void(0)" class="nav-link">About</a></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
                      



