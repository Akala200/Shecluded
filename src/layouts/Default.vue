<template>
  <div class="main">
      <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/AppHeader";
import Footer from "@/components/AppFooter";

export default {
  name: "components",
  components: {
    Header,
    Footer 
  }
};
</script>
