<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <SliderComp></SliderComp>
    
    <div class="center">
      <RouterView></RouterView>
      <!--<LastArticles></LastArticles>-->
      <SidebarComp></SidebarComp>
    </div>
    <FooterComp></FooterComp>
  </div>


</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import SliderComp from './components/SliderComp.vue'
import SidebarComp from "./components/SidebarComp.vue";
//import LastArticles from './components/LastArticlesComp.vue'
import FooterComp from './components/FooterComp.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    SliderComp,
    SidebarComp,
    //LastArticles,
    FooterComp,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import './assets/css/styles.css';
</style>
