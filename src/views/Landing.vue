<template>
  <div id="landing"> 
    <!-- <Slider class="slidder"/> -->
    <Slider2 class="slidder2"/>
    <winning-number />
    <welcome-note /> 
    <trending-games />
    <top-games />
    <navigation />
  </div>
</template>

<script> 
import WelcomeNote from "@/components/Landing/WelcomeNote.vue";
import TrendingGames from "@/components/Landing/TrendingGames.vue";
import TopGames from "@/components/Landing/TopGames.vue";
import Navigation from "@/components/Landing/Navigation.vue";
// import Slider from "@/components/Landing/Slider.vue";
import Slider2 from "@/components/Landing/slider2.vue";
import WinningNumber from "@/components/Landing/WinningNumber.vue"; 

export default {
  name: "components",
  components: { WelcomeNote, TrendingGames, TopGames, Navigation, Slider2, WinningNumber }
};
</script>

<style> 
</style>
