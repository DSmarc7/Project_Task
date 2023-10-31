<template>
    <div class="main-page">
        <HeaderPage/>
        <slot></slot>
        <Footer/>

    </div>
  </template>
  
  <script>
  import HeaderPage from './HeaderPage.vue';
  import Footer from './Footer.vue';
 
  export default {
    name: 'MainPage',
    components: {
      HeaderPage,
      Footer,
    }
  };
  </script>
  
  <style scoped>
  .main-page {
    text-align: center;
    /* padding: 10px; */
    font-size: 1.5rem;
    color: #555;
  }
  </style>
  