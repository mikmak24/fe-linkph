<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
:root {
  --primary-color: #0c5d56;  /* Deep teal color from the image */
  --secondary-color: #033f3a; /* Darker teal shade */
  --accent-color: #0c5d56;   /* Same as primary color */
  --dark-color: #2d3748;
  --light-color: #f8f9fa;
  --text-color: #333333;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  flex: 1;
  width: 100%;
}

.btn-primary {
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
  color: white !important;
}

.btn-primary:hover {
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color) !important;
}

.btn-light {
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
  color: white !important;
}

.btn-light:hover {
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color) !important;
}

.btn-outline-primary {
  color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}

.btn-outline-primary:hover {
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
  color: white !important;
}

.section-title {
  position: relative;
  margin-bottom: 2rem;
  font-weight: 700;
}

.section-title:after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  margin-top: 15px;
}

.section-padding {
  padding: 5rem 0;
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}
</style>
