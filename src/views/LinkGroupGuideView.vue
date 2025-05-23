<template>
  <div class="link-group-guide">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold mb-4">Link Group Guide</h1>
        <p class="lead mb-4">A comprehensive guide for leading and participating in Link Groups</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card shadow-sm mb-4">
              <div class="card-body">
                <h2 class="mb-4">Welcome to Link Groups</h2>
                <p class="lead">
                  Link Groups are the heart of our church community, where believers come together to grow, 
                  share, and support one another in their faith journey.
                </p>
                
                <div class="mt-4">
                  <h3>What are Link Groups?</h3>
                  <p>
                    Link Groups are small gatherings of believers who meet regularly to study God's Word,
                    pray together, and build meaningful relationships. These groups provide a space for:
                  </p>
                  <ul class="list-unstyled">
                    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Biblical discussion and study</li>
                    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Prayer and support</li>
                    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Community building</li>
                    <li><i class="bi bi-check-circle-fill text-success me-2"></i>Spiritual growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Guide Images Section -->
            <div class="guide-images mt-5">
              <h2 class="text-center mb-5">Link Group Guide Materials</h2>
              <p class="text-center mb-4">Click on any image to view in full size or use the download button to save the materials.</p>
              
              <div class="row g-4">
                <div v-for="guide in guides" :key="guide" class="col-md-4">
                  <div class="card shadow-sm guide-card h-100">
                    <div class="card-body p-3">
                        
                        <!-- Image Container -->
                        <div class="image-container position-relative mb-3">
                          <img 
                            :src="getImageUrl(guide)" 
                            :alt="`Link Group Guide ${guide}`"
                            class="img-fluid guide-image"
                            @click="showFullImage(guide)"
                          />
                          <div class="image-overlay">
                            <button class="btn btn-light btn-sm" @click="showFullImage(guide)">
                              <i class="bi bi-zoom-in me-1"></i>View
                            </button>
                          </div>
                        </div>

                        <!-- Download Button -->
                        <div class="text-center">
                          <a 
                            :href="getImageUrl(guide)" 
                            :download="`Link_Group_Guide_${guide}.png`"
                            class="btn btn-primary btn-sm w-100"
                          >
                            <i class="bi bi-download me-1"></i>Download
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Size Image Dialog -->
    <dialog 
      ref="imageDialog" 
      class="image-dialog" 
      @click="handleDialogClick"
    >
      <div class="dialog-content">
        <button class="close-button" @click="closeDialog" title="Close">×</button>
        <img 
          :src="currentImage" 
          class="full-size-image" 
          :alt="'Full size guide image'"
          @click.stop 
        />
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// This will automatically detect how many guide images are available
const guides = ref([1, 2, 3, 4, 5]) // You can add more numbers as you add more guides

const imageDialog = ref(null)
const currentImage = ref('')
const isDialogOpen = ref(false)

// Function to get image URL using Vite's asset handling
const getImageUrl = (guide) => {
  return new URL(`../assets/images/link-group-guide/${guide}.png`, import.meta.url).href
}

const showFullImage = (guide) => {
  currentImage.value = getImageUrl(guide)
  isDialogOpen.value = true
  // Need to use nextTick to ensure the src is updated before showing the dialog
  nextTick(() => {
    if (imageDialog.value) {
      imageDialog.value.showModal()
    }
  })
}

const closeDialog = () => {
  if (imageDialog.value) {
    imageDialog.value.close()
    isDialogOpen.value = false
  }
}

// Close dialog when clicking outside
const handleDialogClick = (event) => {
  const rect = event.target.getBoundingClientRect()
  const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX && event.clientX <= rect.left + rect.width)
  if (!isInDialog) {
    closeDialog()
  }
}

// Close dialog when pressing Escape key
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDialogOpen.value) {
      closeDialog()
    }
  })
})
</script>

<style scoped>
.hero-section {
  background-color: var(--primary-color);
  color: white;
  position: relative;
  padding: 6rem 0;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(to bottom right, transparent 49%, white 51%);
}

.content-section {
  background-color: #f8f9fa;
}

.guide-card {
  transition: transform 0.3s ease;
  border-radius: 10px;
}

.guide-card:hover {
  transform: translateY(-5px);
}

.image-container {
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4/3;
  background-color: #f8f9fa;
}

.guide-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.image-container:hover .guide-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.card-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

/* Updated Dialog Styles */
.image-dialog {
  padding: 0;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  margin: 0;
}

.image-dialog::backdrop {
  background: rgba(0, 0, 0, 0.9);
}

.dialog-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.close-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: all 0.3s ease;
  z-index: 1000;
}

.close-button:hover {
  background: #f8f9fa;
  transform: scale(1.1);
}

.full-size-image {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  margin: auto;
}

@media (max-width: 768px) {
  .dialog-content {
    padding: 10px;
  }

  .close-button {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style> 