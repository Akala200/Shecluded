<template>
<div id="dashboard-layout">
  <div id="main">
      <!-- Sidebar -->
    <user-side-nav class="sidenav"/>

      <div id="content">
        <div class="page">
          <router-view></router-view>     
        </div>
          <!-- <Footer/> -->
      </div>

  </div>
  <div class="foot">
    <Footer/>
  </div>
   
</div>
</template>

<script>
import Header from "@/components/AppHeader";
import Footer from "@/components/AppFooter";
import  UserSideNav from "@/components/sidenavs/UserSideNav";
export default {
  name: "components",
  components: {
    Header,
    Footer,
    UserSideNav
  }
};
</script>
<style scoped>
#dashboard-layout{
 background: #E5E5E5;
}
#dashboard-layout #main{
  display:flex;
}
#dashboard-layout #main .header{
  background: #fff;
}
#dashboard-layout #main .page-title{
  background: transparent;
}
#dashboard-layout #main .page{
  background: #fff;
  width: 100%;
  overflow-y: scroll;
}
#dashboard-layout .foot{
  margin-top: 2rem;
  padding-top: 3rem !important;
}
/* @media screen and (max-width:840px) {
.sidenav {
  display:none!important;
}
} */
</style>
