<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "report",
  components: {
    Navbar,
    Footer
  }
};
</script>


<style>
#app {
  font-family: "Roboto", sans-serif;
  color: #2c3e50;
  margin: 0;
  top: 0;
  min-height: 100vh;
}

html {
  height: 100%;
  scroll-behavior: smooth;
  background-color: hsl(0, 0%, 84%);
}

body {
  min-height: 100vh;
  margin: 0;
  background-color: transparent !important;
  position: static;
}

.content {
  min-height: 100vh;
  /* margin-top: 4em; */
  /* margin-left: 5em;
  margin-right: 5em; */
}
</style>
