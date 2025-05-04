<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isNavCollapsed = ref(true)
const isScrolled = ref(false)

const toggleNav = () => {
  isNavCollapsed.value = !isNavCollapsed.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  const navbar = document.querySelector('.navbar')
  if (isScrolled.value) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top" :class="{ 'navbar-dark': isScrolled, 'navbar-light': !isScrolled }">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/images/logo-navbar.png" alt="Link Church Logo" style="height: 40px; width: auto;" />
      </RouterLink>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="toggleNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" :class="{ 'show': !isNavCollapsed }" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="isNavCollapsed = true">
              <i class="bi bi-house me-1"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" @click="isNavCollapsed = true">
              <i class="bi bi-building me-1"></i> About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/visit" @click="isNavCollapsed = true">
              <i class="bi bi-geo-alt me-1"></i> Visit
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/grow" @click="isNavCollapsed = true">
              <i class="bi bi-flower1 me-1"></i> Grow
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/ministries" @click="isNavCollapsed = true">
              <i class="bi bi-people me-1"></i> Ministries
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/gallery" @click="isNavCollapsed = true">
              <i class="bi bi-images me-1"></i> Gallery
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/bibliology" @click="isNavCollapsed = true">
              <i class="bi bi-book me-1"></i> Bibliology
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link" to="/resources" @click="isNavCollapsed = true">
              <i class="bi bi-book me-1"></i> Resources
            </RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" @click="isNavCollapsed = true">
              <i class="bi bi-envelope me-1"></i> Contact
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link btn btn-accent ms-lg-3" to="/give" @click="isNavCollapsed = true">
              <i class="bi bi-heart me-1"></i> Give
            </RouterLink>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: var(--primary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.brand-ph {
  color: var(--primary-color);
  position: relative;
}

.navbar-light .brand-ph {
  color: var(--primary-color);
}

.navbar-dark .brand-ph {
  color: white;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-link i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.nav-link:hover i {
  transform: translateY(-2px);
}

.navbar-light .nav-link {
  color: var(--primary-color) !important;
}

.navbar-dark .nav-link {
  color: white !important;
}

.btn-accent {
  border-radius: 30px;
  padding: 0.5rem 1.25rem !important;
  transition: all 0.3s ease;
}

.navbar-light .btn-accent {
  background-color: var(--primary-color);
  color: white !important;
}

.navbar-dark .btn-accent {
  background-color: white;
  color: var(--primary-color) !important;
}

.btn-accent:hover {
  transform: translateY(-2px);
}

@media (max-width: 991.98px) {
  .nav-link.btn {
    display: inline-block;
    margin-top: 0.5rem;
  }
}
</style> 