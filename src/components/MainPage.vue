<template>
    <div class="main-page">
        <Header/>
        <TaskM/>
        <Footer/>
    </div>
  </template>
  
  <script>
  import TaskM from './TaskM.vue';
  import Footer from './Footer.vue';
  import Header from './Header.vue'
  export default {
    name: 'MainPage',
    components: {
      TaskM,
        Footer,
        Header
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
  