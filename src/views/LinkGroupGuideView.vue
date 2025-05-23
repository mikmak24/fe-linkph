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
                <h2 class="mb-4 text-center" style="font-weight:700; font-size:2rem;">Welcome to Link Groups</h2>
                <p class="lead text-center mb-5" style="font-size:1.2rem;">At the heart of Link Church PH, Link Groups are where real friendships are formed, faith is strengthened, and lives are transformed. Here, you'll find a place to belong, grow, and journey together in Christ.</p>
                <div class="what-are-link-groups-section p-4 rounded-3 bg-light">
                  <h3 class="mb-4 text-center" style="font-weight:600;">What are Link Groups?</h3>
                  <p class="text-center mb-4">Link Groups are small, vibrant gatherings where people meet regularly to explore God's Word, pray, and build meaningful relationships. Every group is a safe space to be real, ask questions, and encourage one another.</p>
                  <div class="row g-4 justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3 text-center">
                      <div class="benefit-highlight p-3 h-100">
                        <i class="bi bi-journal-text display-5 text-primary mb-2"></i>
                        <h6 class="fw-bold mb-1">Biblical Discussion</h6>
                        <p class="mb-0 small">Dive into Scripture and discover truth together.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 text-center">
                      <div class="benefit-highlight p-3 h-100">
                        <i class="bi bi-heart display-5 text-success mb-2"></i>
                        <h6 class="fw-bold mb-1">Prayer & Support</h6>
                        <p class="mb-0 small">Pray for one another and find encouragement in every season.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 text-center">
                      <div class="benefit-highlight p-3 h-100">
                        <i class="bi bi-people-fill display-5 text-warning mb-2"></i>
                        <h6 class="fw-bold mb-1">Community Building</h6>
                        <p class="mb-0 small">Build lasting friendships and a sense of belonging.</p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 text-center">
                      <div class="benefit-highlight p-3 h-100">
                        <i class="bi bi-bar-chart-steps display-5 text-danger mb-2"></i>
                        <h6 class="fw-bold mb-1">Spiritual Growth</h6>
                        <p class="mb-0 small">Grow in faith and become more like Christ together.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Guide Images Section -->
            <div class="guide-carousel mt-5">
              <h2 class="text-center mb-5">Link Group Guide Materials</h2>
              <p class="text-center mb-4">Scroll through the guides below. Click to view full size or download.</p>
              <div class="carousel-wrapper mx-auto position-relative" style="max-width: 600px;">
                <button class="carousel-arrow left" @click="prevGuide" :disabled="currentGuideIndex === 0">
                  <i class="bi bi-chevron-left"></i>
                </button>
                <div class="carousel-image-container">
                  <img
                    :src="getImageUrl(currentGuide)"
                    :alt="`Link Group Guide ${currentGuide}`"
                    class="carousel-image"
                    @click="showFullImage(currentGuide)"
                  />
                  <div class="carousel-overlay">
                    <button class="btn btn-light btn-sm me-2" @click="showFullImage(currentGuide)">
                      <i class="bi bi-zoom-in me-1"></i>View
                    </button>
                    <a
                      :href="getImageUrl(currentGuide)"
                      :download="`Link_Group_Guide_${currentGuide}.png`"
                      class="btn btn-primary btn-sm"
                    >
                      <i class="bi bi-download me-1"></i>Download
                    </a>
                  </div>
                </div>
                <button class="carousel-arrow right" @click="nextGuide" :disabled="currentGuideIndex === guides.length - 1">
                  <i class="bi bi-chevron-right"></i>
                </button>
                <div class="carousel-dots mt-3 text-center">
                  <span
                    v-for="(guide, idx) in guides"
                    :key="guide"
                    class="carousel-dot"
                    :class="{ active: idx === currentGuideIndex }"
                    @click="goToGuide(idx)"
                  ></span>
                </div>
                <div class="text-center mt-4">
                  <button class="btn btn-lg btn-outline-success px-5 py-2 fw-bold" @click="downloadAllAsPDF" :disabled="isDownloadingAll">
                    <span v-if="isDownloadingAll"><i class="bi bi-arrow-repeat me-2"></i>Preparing PDF...</span>
                    <span v-else><i class="bi bi-file-earmark-pdf me-2"></i>Download All as PDF</span>
                  </button>
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
        <button class="dialog-arrow left" @click.stop="prevDialogGuide" :disabled="dialogGuideIndex === 0">
          <i class="bi bi-chevron-left"></i>
        </button>
        <img 
          :src="getImageUrl(dialogGuide)" 
          class="full-size-image" 
          :alt="'Full size guide image'"
          @click.stop 
        />
        <button class="dialog-arrow right" @click.stop="nextDialogGuide" :disabled="dialogGuideIndex === guides.length - 1">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import jsPDF from 'jspdf'

// This will automatically detect how many guide images are available
const guides = ref([1, 2, 3, 4, 5]) // You can add more numbers as you add more guides

const currentGuideIndex = ref(0)
const currentGuide = computed(() => guides.value[currentGuideIndex.value])

const imageDialog = ref(null)
const currentImage = ref('')
const isDialogOpen = ref(false)

const dialogGuideIndex = ref(0)
const dialogGuide = computed(() => guides.value[dialogGuideIndex.value])

const isDownloadingAll = ref(false)

// Function to get image URL using Vite's asset handling
const getImageUrl = (guide) => {
  return new URL(`../assets/images/link-group-guide/${guide}.png`, import.meta.url).href
}

const showFullImage = (guide) => {
  dialogGuideIndex.value = guides.value.indexOf(guide)
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

const prevGuide = () => {
  if (currentGuideIndex.value > 0) currentGuideIndex.value--
}
const nextGuide = () => {
  if (currentGuideIndex.value < guides.value.length - 1) currentGuideIndex.value++
}
const goToGuide = (idx) => {
  currentGuideIndex.value = idx
}

const prevDialogGuide = () => {
  if (dialogGuideIndex.value > 0) {
    dialogGuideIndex.value--
  }
}
const nextDialogGuide = () => {
  if (dialogGuideIndex.value < guides.value.length - 1) {
    dialogGuideIndex.value++
  }
}

const downloadAllAsPDF = async () => {
  isDownloadingAll.value = true
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  for (let i = 0; i < guides.value.length; i++) {
    const imgUrl = getImageUrl(guides.value[i])
    // Fetch image as data URL and get its dimensions
    const { dataUrl, width, height } = await toDataURLWithSize(imgUrl)
    // Calculate aspect ratio fit
    let drawWidth = pageWidth - 40
    let drawHeight = (height / width) * drawWidth
    if (drawHeight > pageHeight - 40) {
      drawHeight = pageHeight - 40
      drawWidth = (width / height) * drawHeight
    }
    const x = (pageWidth - drawWidth) / 2
    const y = (pageHeight - drawHeight) / 2
    if (i > 0) pdf.addPage()
    pdf.addImage(dataUrl, 'PNG', x, y, drawWidth, drawHeight, undefined, 'FAST')
  }
  pdf.save('Link_Group_Guide_All.pdf')
  isDownloadingAll.value = false
}

// Helper to convert image URL to data URL and get its size
function toDataURLWithSize(url) {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.crossOrigin = 'Anonymous'
    img.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      resolve({ dataUrl: canvas.toDataURL('image/png'), width: img.width, height: img.height })
    }
    img.onerror = reject
    img.src = url
  })
}
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

.guide-carousel {
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 0;
}

.carousel-wrapper {
  position: relative;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 2px 24px rgba(0,0,0,0.10);
  padding: 2rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 1200px;
  min-height: 60vh;
  justify-content: center;
}

.carousel-image-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  background: #f8f9fa;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

.carousel-image {
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 70vh;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s;
}

.carousel-image-container:hover .carousel-image {
  transform: scale(1.04);
}

.carousel-overlay {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  opacity: 0.95;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
  color: #0c5d56;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background 0.2s;
}

.carousel-arrow.left {
  left: -22px;
}

.carousel-arrow.right {
  right: -22px;
}

.carousel-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel-dots {
  margin-top: 1rem;
}

.carousel-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d1d5db;
  margin: 0 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.carousel-dot.active {
  background: #0c5d56;
}

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

@media (max-width: 900px) {
  .carousel-wrapper {
    max-width: 98vw;
    min-height: 40vh;
    padding: 1rem 0.2rem 1rem 0.2rem;
  }
  .carousel-image-container {
    max-width: 98vw;
    min-height: 30vh;
    aspect-ratio: 16/10;
  }
  .carousel-image {
    max-height: 40vh;
  }
}

@media (max-width: 600px) {
  .guide-carousel {
    min-height: 60vh;
  }
  .carousel-wrapper {
    min-height: 30vh;
    padding: 0.5rem 0.1rem 0.5rem 0.1rem;
  }
  .carousel-image-container {
    min-height: 20vh;
    aspect-ratio: 16/12;
  }
  .carousel-image {
    max-height: 25vh;
  }
}

.benefit-highlight {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}
.benefit-highlight:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}

.dialog-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.5rem;
  color: #0c5d56;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;
  opacity: 0.85;
}

.dialog-arrow.left {
  left: 10px;
}

.dialog-arrow.right {
  right: 10px;
}

.dialog-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style> 