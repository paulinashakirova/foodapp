<template>
  <div>
    <main class="content">
      <AppMenu />
      <Nuxt />
    </main>
    <!-- sticky footer goes here -->
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue'
import AppMenu from "../components/AppMenu.vue";

export default {
  components: {
    AppMenu,
    AppFooter
  }
};
</script>

<style>
html {
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: 300px;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: 600px;
}
</style>
