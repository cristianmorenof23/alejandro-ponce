

<template>

  <!-- Top Menu -->
  <TopMenu/>


  
  <!-- RouterView -->
  <router-view/>


  <!-- Footer -->
<CustomFooter/>
  
</template>


<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>