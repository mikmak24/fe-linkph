<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

// Number images 1-19
const numberImages = ref([])
// Letter images a-o
const letterImages = ref([])
// Current image for modal
const currentImage = ref(null)
// Modal visibility
const showModal = ref(false)

// Open image in modal
const openModal = (image) => {
  currentImage.value = image
  showModal.value = true
}

// Close modal
const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    currentImage.value = null
  }, 300)
}

onMounted(() => {
  // Populate number images
  for (let i = 1; i <= 22; i++) {
    numberImages.value.push({
      id: i,
      src: new URL(`../assets/images/gallery/${i}.jpg`, import.meta.url).href,
      alt: ``
    })
  }
  
  // Populate letter images
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l', 'n', 'o']
  letters.forEach(letter => {
    letterImages.value.push({
      id: letter,
      src: new URL(`../assets/images/gallery/${letter}.jpg`, import.meta.url).href,
      alt: ``
    })
  })
})
</script>

<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Church Life Gallery</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Gallery</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Number Images Gallery Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Our Church Events</h2>
            <p class="lead">Capturing the joy, fellowship, and worship at Link Church PH</p>
          </div>
        </div>
        
        <div class="gallery-container">
          <div class="row g-4">
            <div v-for="image in numberImages" :key="image.id" class="col-6 col-md-4 col-lg-3">
              <div class="gallery-item">
                <img :src="image.src" :alt="image.alt" class="img-fluid rounded">
                <div class="gallery-overlay">
                  <div class="gallery-info">
                    <h5>{{ image.alt }}</h5>
                    <button class="btn-view" @click="openModal(image)">
                      <i class="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Letter Images Gallery Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Ministry Activities</h2>
            <p class="lead">Sharing God's love through various ministries and outreach</p>
          </div>
        </div>
        
        <div class="gallery-container">
          <div class="row g-4">
            <div v-for="image in letterImages" :key="image.id" class="col-6 col-md-4 col-lg-3">
              <div class="gallery-item">
                <img :src="image.src" :alt="image.alt" class="img-fluid rounded">
                <div class="gallery-overlay">
                  <div class="gallery-info">
                    <h5>{{ image.alt }}</h5>
                    <button class="btn-view" @click="openModal(image)">
                      <i class="fas fa-search-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div class="image-modal" v-if="currentImage" :class="{ 'show': showModal }">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <div class="modal-body">
          <img :src="currentImage?.src" :alt="currentImage?.alt" class="img-fluid">
        </div>
        <div class="modal-footer">
          <h4>{{ currentImage?.alt }}</h4>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <section class="cta-section py-5 text-white">
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4">Join Us and Be Part of the Story</h2>
            <p class="lead mb-4">We'd love for you to be part of our next gathering and create memories with us!</p>
            <RouterLink to="/visit" class="btn btn-light btn-lg me-3 mb-3 mb-md-0">Plan Your Visit</RouterLink>
            <RouterLink to="/contact" class="btn btn-outline-light btn-lg">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background-color: var(--light-color);
  padding: 80px 0 30px;
  margin-bottom: 50px;
}

.breadcrumb-item a {
  color: var(--primary-color);
  text-decoration: none;
}

.gallery-container {
  margin-bottom: 2rem;
}

.gallery-item {
  position: relative;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 240px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 164, 157, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-info {
  text-align: center;
  color: white;
  padding: 20px;
}

.gallery-info h5 {
  margin-bottom: 15px;
  font-weight: 600;
}

.btn-view {
  background-color: white;
  color: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-view:hover {
  background-color: var(--secondary-color);
  color: white;
  transform: scale(1.1);
}

/* Modal styles */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.image-modal.show {
  opacity: 1;
  visibility: visible;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  z-index: 2001;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.image-modal.show .modal-content {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: white;
  color: var(--primary-color);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2002;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background-color: var(--primary-color);
  color: white;
}

.modal-body {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body img {
  max-height: 70vh;
  max-width: 100%;
  border-radius: 5px;
}

.modal-footer {
  padding: 15px 20px;
  text-align: center;
  border-top: 1px solid #eee;
}

.modal-footer h4 {
  margin: 0;
  color: var(--primary-color);
  font-weight: 600;
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .gallery-item {
    height: 180px;
  }
  
  .modal-body img {
    max-height: 60vh;
  }
}
</style> 