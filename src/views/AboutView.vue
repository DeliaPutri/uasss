<script setup>
import NavView from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavView />
  <div class="about">
    <h1>Hello everyone</h1>
    <h2>this is Liri kami akan membantu anda dalam menjalankan pahala jariyah anda</h2>
  </div>
  <Footer />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
