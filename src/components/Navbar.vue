<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isNavCollapsed = ref(true)
const isScrolled = ref(false)
const isKnowledgeDropdownOpen = ref(false)
const isDiscipleshipDropdownOpen = ref(false)
const isLinkKidsDropdownOpen = ref(false)

const toggleNav = () => {
  isNavCollapsed.value = !isNavCollapsed.value
}

const toggleKnowledgeDropdown = () => {
  isKnowledgeDropdownOpen.value = !isKnowledgeDropdownOpen.value
}

const toggleDiscipleshipDropdown = () => {
  isDiscipleshipDropdownOpen.value = !isDiscipleshipDropdownOpen.value
}

const toggleLinkKidsDropdown = () => {
  isLinkKidsDropdownOpen.value = !isLinkKidsDropdownOpen.value
}

const closeDropdowns = () => {
  isKnowledgeDropdownOpen.value = false
  isDiscipleshipDropdownOpen.value = false
  isLinkKidsDropdownOpen.value = false
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
        <img src="@/assets/images/logo-navbar.png" alt="Link Church Logo" style="height: 40px; width: auto; margin-right: 5px;" />
        <strong>LINK <span class="brand-ph">PH</span></strong>

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
            <RouterLink
              class="nav-link"
              to="/"
              @click="
                isNavCollapsed = true;
                closeDropdowns()
              "
            >
              <i class="bi bi-house me-1"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" @click="isNavCollapsed = true; closeDropdowns()">
              <i class="bi bi-building me-1"></i> About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/visit" @click="isNavCollapsed = true; closeDropdowns()">
              <i class="bi bi-geo-alt me-1"></i> Visit
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button" 
              @click.prevent="toggleDiscipleshipDropdown"
              :class="{ 'show': isDiscipleshipDropdownOpen }"
              aria-expanded="false"
            >
              <i class="bi bi-flower1 me-1"></i> Discipleship
            </a>
            <ul class="dropdown-menu" :class="{ 'show': isDiscipleshipDropdownOpen }">
              <li>
                <RouterLink class="dropdown-item" to="/connect" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-link-45deg me-1"></i> Connect
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/grow" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-flower1 me-1"></i> Growing in Christ
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/link-group-guide" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-people-fill me-1"></i> Link Group Guide
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/gallery" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-images me-1"></i> Church Life Gallery
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/ministries" @click="isNavCollapsed = true; closeDropdowns()">
              <i class="bi bi-people me-1"></i> Ministries
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button" 
              @click.prevent="toggleLinkKidsDropdown"
              :class="{ 'show': isLinkKidsDropdownOpen }"
              aria-expanded="false"
            >
              <i class="bi bi-emoji-smile me-1"></i>Link Kids
            </a>
            <ul class="dropdown-menu" :class="{ 'show': isLinkKidsDropdownOpen }">
              <li>
                <RouterLink class="dropdown-item" to="/link-kids" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-house-heart me-1"></i> Link Kids Home
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/link-kids/book-of-acts" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-book-half me-1"></i> Lesson: Book of Acts
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a 
              class="nav-link dropdown-toggle" 
              href="#" 
              role="button" 
              @click.prevent="toggleKnowledgeDropdown"
              :class="{ 'show': isKnowledgeDropdownOpen }"
              aria-expanded="false"
            >
              <i class="bi bi-mortarboard me-1"></i> Blogs
            </a>
            <ul class="dropdown-menu" :class="{ 'show': isKnowledgeDropdownOpen }">
              <li>
                <RouterLink class="dropdown-item" to="/bibliology" @click="isNavCollapsed = true; closeDropdowns()">
                  <i class="bi bi-book me-1"></i> Bibliology
                </RouterLink>
              </li>
                <li>
                  <RouterLink class="dropdown-item" to="/one-on-one-guide" @click="isNavCollapsed = true; closeDropdowns()">
                    <i class="bi bi-compass me-1"></i> One on One Guide for Growing Believers
                  </RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/14-days-prayer" @click="isNavCollapsed = true; closeDropdowns()">
                    <i class="bi bi-praying-hands me-1"></i> 14 Days Prayer
                  </RouterLink>
                </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" @click="isNavCollapsed = true; closeDropdowns()">
              <i class="bi bi-envelope me-1"></i> Contact
            </RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link btn btn-accent ms-lg-3" to="/give" @click="isNavCollapsed = true; closeDropdowns()">
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

.dropdown-menu {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
}

.dropdown-item {
  padding: 0.6rem 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background-color: rgba(var(--primary-color-rgb), 0.1);
}

.navbar-light .dropdown-item {
  color: var(--primary-color);
}

.navbar-dark .dropdown-item {
  color: var(--primary-color);
}

.dropdown-toggle::after {
  margin-left: 0.5rem;
  vertical-align: middle;
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
  
  .dropdown-menu {
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding-left: 2rem;
  }
  
  .dropdown-item {
    color: inherit !important;
  }
  
  .navbar-dark .dropdown-item {
    color: white !important;
  }
  
  .navbar-light .dropdown-item {
    color: var(--primary-color) !important;
  }
}
</style> 