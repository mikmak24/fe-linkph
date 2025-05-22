<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import bibleVersesData from '@/assets/data/bible-verses.json'

// Import images directly
import slideA from '@/assets/images/slideshows/a.jpg'
import slideB from '@/assets/images/slideshows/b.jpg'
import slideC from '@/assets/images/slideshows/c.jpg'
import slideD from '@/assets/images/slideshows/d.jpg'

// Create a reactive reference for the selected verse
const randomVerse = ref({
  text: '',
  reference: ''
});

// Function to select a random verse
const selectRandomVerse = () => {
  // First fade out the current verse
  isVerseVisible.value = false;
  
  // After a short delay, change the verse and fade it back in
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * bibleVersesData.length);
    randomVerse.value = bibleVersesData[randomIndex];
    isVerseVisible.value = true;
  }, 300);
};

// Add a ref to control visibility for animation
const isVerseVisible = ref(false);

// Slideshow functionality using Bootstrap
const slides = [
  { id: 0, url: slideA },
  { id: 1, url: slideB },
  { id: 2, url: slideC },
  { id: 3, url: slideD }
];

// Initialize carousel and verse when component mounts
onMounted(() => {
  // Initialize random verse
  selectRandomVerse();
  
  // Initialize Bootstrap carousel with JavaScript
  // Using setTimeout to ensure DOM is fully rendered
  setTimeout(() => {
    try {
      if (typeof bootstrap !== 'undefined') {
        const carouselElement = document.getElementById('heroCarousel');
        if (carouselElement) {
          const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 8000, // Longer interval between slides (8 seconds)
            ride: 'carousel',
            wrap: true,
            pause: false, // Don't pause on hover
            touch: false // Disable swiping on touch devices for smoother transitions
          });
        } else {
          console.warn('Carousel element not found in DOM');
        }
      } else {
        console.warn('Bootstrap not available');
      }
    } catch (e) {
      console.error('Bootstrap carousel initialization error:', e);
    }
  }, 500);
});
</script>

<template>
  <div>
    <!-- Hero Section with Bootstrap Carousel -->
    <section class="hero-section">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div 
            v-for="(slide, index) in slides" 
            :key="`slide-${slide.id}`"
            class="carousel-item"
            :class="{ 'active': index === 0 }"
          >
            <div 
              class="carousel-background w-100 h-100"
              :style="{
                backgroundImage: `linear-gradient(rgba(12, 93, 86, 0.8), rgba(3, 63, 58, 0.9)), url(${slide.url})`
              }"
            ></div>
          </div>
        </div>
        
        <!-- Indicator dots -->
        <div class="carousel-indicators">
          <button 
            v-for="(slide, index) in slides" 
            :key="`indicator-${slide.id}`"
            type="button"
            data-bs-target="#heroCarousel"
            :data-bs-slide-to="index"
            :class="{ 'active': index === 0 }"
            :aria-current="index === 0 ? 'true' : 'false'"
            :aria-label="`Slide ${index + 1}`"
          ></button>
        </div>
      </div>
      
      <div class="container-fluid h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-8 text-white hero-content">
            <h1 class="display-1 fw-bold mb-4">Welcome to Link Church</h1>
            <p class="lead tagline">God First, Disciples Made</p>
            <p class="lead tagline mb-5">"Connecting what matters to God"</p>
            <div class="hero-buttons mb-5">
              <router-link to="/visit" class="btn btn-light btn-lg me-3">Plan Your Visit</router-link>
              <router-link to="/about" class="btn btn-outline-light btn-lg">Learn More</router-link>
            </div>
            <div class="contact-info">
              <p class="mb-1"><i class="bi bi-telephone me-2"></i>0939-6030-755</p>
              <p class="mb-1"><i class="bi bi-envelope me-2"></i>thelinkphilippines@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Series Section -->
    <section class="series-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">We're excited to launch our May series:</h2>
            <h3 class="series-title">"ACTS: Taking the Next Step"</h3>
            <div class="series-description mt-4">
              <p class="lead">
                <i class="bi bi-book-half me-2"></i> Let's explore the bold faith and unstoppable movement of the early church—and discover what "next step" God is calling you to take.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="series-image-container">
              <img src="@/assets/images/series/may-series-2025.jpg" alt="ACTS Series" class="img-fluid rounded shadow-lg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Verse of the Day Section -->
    <section class="verse-section py-5 bg-light">
      <div class="container text-center">
        <div class="decorative-line mb-4">
          <i class="bi bi-book me-3"></i>
          <span></span>
          <h2 class="h4 mx-3 my-0">Daily Bible Verse</h2>
          <span></span>
          <i class="bi bi-book ms-3"></i>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="verse-container" :class="{ 'verse-visible': isVerseVisible }">
              <i class="bi bi-quote verse-quote-icon"></i>
              <blockquote class="blockquote">
                <p>"{{ randomVerse.text }}"</p>
                <footer class="blockquote-footer">{{ randomVerse.reference }}</footer>
              </blockquote>
            </div>
            <button @click="selectRandomVerse" class="btn btn-outline-primary mt-4">
              <i class="bi bi-shuffle me-2"></i> Get Another Verse
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Message Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <img src="@/assets/images/img-5.jpg" alt="Church Community" class="img-fluid rounded shadow-lg">
          </div>
          <div class="col-lg-6">
            <h2 class="section-title">We love to journey with people</h2>
            <p class="lead">We believe that the church is far more than just the Sunday sermon; it's about building spiritual connections with God and each other.</p>
            <p>We are a Bible-believing, Christ-centered, grace-driven church dedicated to reaching the Spheres of Influence and making disciples who follow Jesus.</p>
            <RouterLink to="/about" class="btn btn-primary mt-3">About Our Church</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services and Ministries Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="section-title text-center">Connect With Us</h2>
            <p class="lead">Find your place in our church community</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                
                <h4 class="card-title">Sunday Services</h4>
                <p class="card-text">Join us for worship every Sunday as we gather to praise God and grow in our faith together.</p>
                <RouterLink to="/visit" class="btn btn-outline-primary mt-3">Join Us</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
              
                <h4 class="card-title">Missional Community</h4>
                <p class="card-text">Connect with other believers in a smaller setting to build relationships and grow spiritually.</p>
                <RouterLink to="/grow" class="btn btn-outline-primary mt-3">Get Connected</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
               
                <h4 class="card-title">Ministry Teams</h4>
                <p class="card-text">Use your God-given talents and skills to help further God's Kingdom for His glory.</p>
                <RouterLink to="/ministries" class="btn btn-outline-primary mt-3">Serve Now</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section py-5 text-white">
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4">Become Part of Our Community</h2>
            <p class="lead mb-4">We'd love to have you join us this Sunday and experience the love and grace of God through worship and fellowship.</p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8">
            <h2 class="section-title">Upcoming Events</h2>
          </div>
          <div class="col-lg-4 text-lg-end">
            <RouterLink to="/resources" class="btn btn-outline-primary">View All Events</RouterLink>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-img-top position-relative">
                <img src="@/assets/images/img-2.jpg"  alt="Sunday Worship" class="img-fluid">
               
              </div>
              <div class="card-body">
                <h5 class="card-title">Sunday Worship Service</h5>
                <p class="card-text">Join us for praise and worship, followed by a message from God's Word.</p>
                <p class="text-muted"><i class="bi bi-clock me-2"></i>10:00 AM</p>
                <p class="text-muted"><i class="bi bi-geo-alt me-2"></i>Lopues East 3rd Floor, Blue Hall</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-img-top position-relative">
                <img src="@/assets/images/img-3.jpg" alt="Bible Study" class="img-fluid">
              
              </div>
              <div class="card-body">
                <h5 class="card-title">Weekly Link Group,</h5>
                <p class="card-text">A deeper dive into God's Word to strengthen your faith and understanding.</p>
                <p class="text-muted"><i class="bi bi-clock me-2"></i>Flexible Time</p>
                <p class="text-muted"><i class="bi bi-geo-alt me-2"></i>To be announced</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-img-top position-relative">
                <img src="@/assets/images/img-4.jpg" alt="Youth Group" class="img-fluid">
              
              </div>
              <div class="card-body">
                <h5 class="card-title">Volunteer Day Out</h5>
                <p class="card-text">A day of fun, fellowship, and spiritual growth for the members of Link Church.</p>
                <p class="text-muted"><i class="bi bi-clock me-2"></i>To be announced</p>
                <p class="text-muted"><i class="bi bi-geo-alt me-2"></i>To be announced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

/* Bootstrap Carousel Styling */
#heroCarousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.carousel-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.carousel-item {
  height: 100vh;
}

/* Smoother fade transition */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-duration: 2s; /* Slightly shorter but still smooth */
  transition-property: opacity;
  transition-timing-function: ease-in-out; /* Smoother easing */
  z-index: 0; /* Ensure layering works properly */
}

.carousel-fade .carousel-item.active {
  opacity: 1;
  z-index: 1;
}

/* Create a cross-fade effect for the background images */
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  opacity: 1;
}

.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

/* Ensure the transition container has proper stacking context */
.carousel-inner {
  background-color: rgba(12, 93, 86, 0.9); /* Match the overlay color */
}

/* Make the carousel indicators more subtle */
.carousel-indicators {
  bottom: 25px; /* Position a bit higher */
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  opacity: 0.6;
}

.carousel-indicators button.active {
  background-color: white;
  transform: scale(1.2);
  opacity: 0.8;
}

.hero-content {
  padding-left: 10%;
  z-index: 10;
}

.hero-section h1 {
  font-weight: 700;
  line-height: 1;
}

.ph-text {
  color: var(--primary-color);
  display: inline-block;
  font-weight: 900;
}

.tagline {
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.contact-info {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-top: 2rem;
}

.contact-info i {
  color: var(--accent-color);
}

.hero-buttons {
  display: flex;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-content {
    padding: 0 15px;
    text-align: center;
  }
  
  .hero-section h1.display-1 {
    font-size: 3rem;
  }
  
  .hero-section h1.display-2 {
    font-size: 2.5rem;
    margin-top: -10px;
  }
  
  .tagline {
    font-size: 1.4rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-buttons .btn-lg {
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 0 !important;
  }
  
  .btn-outline-light {
    margin-left: 0 !important;
  }
}

.verse-section {
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
}

.decorative-line {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.decorative-line span {
  height: 1px;
  background-color: var(--primary-color);
  opacity: 0.3;
  flex-grow: 1;
  max-width: 100px;
}

.decorative-line i {
  font-size: 1.2rem;
  color: var(--primary-color);
}

.verse-container {
  transition: all 0.5s ease;
  padding: 2.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary-color);
  opacity: 0;
  transform: translateY(10px);
  position: relative;
}

.verse-quote-icon {
  position: absolute;
  top: -15px;
  left: 20px;
  font-size: 2rem;
  color: var(--primary-color);
  opacity: 0.2;
  transform: rotate(180deg);
}

.verse-visible {
  opacity: 1;
  transform: translateY(0);
}

.blockquote {
  font-size: 1.25rem;
  font-style: italic;
  position: relative;
  z-index: 2;
}

.blockquote-footer {
  font-weight: 600;
  color: var(--primary-color);
  margin-top: 1rem;
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

/* Series Section Styles */
.series-section {
  background-color: white;
  position: relative;
  padding: 5rem 0;
}

.series-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.series-description {
  border-left: 4px solid var(--primary-color);
  padding-left: 1rem;
}

.series-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.series-image-container img {
  transition: transform 0.5s ease;
}

.series-image-container:hover img {
  transform: scale(1.05);
}

/* Other styles */
.feature-icon {
  color: var(--primary-color);
}

.event-date {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--accent-color);
  color: var(--dark-color);
  text-align: center;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.event-date .day {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.event-date .month {
  font-size: 0.9rem;
  text-transform: uppercase;
}

.card {
  transition: all 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  transition: transform 0.5s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.btn-light, .btn-outline-light {
  border-radius: 30px;
  padding: 0.75rem 1.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-light {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.btn-light:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
}

.btn-outline-light:hover {
  transform: translateY(-2px);
}
</style>
