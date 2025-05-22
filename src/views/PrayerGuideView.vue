<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import prayerDays from '../assets/data/prayerDays.json'

const selectedDay = ref(1)
const currentPrayer = ref(prayerDays[0])

function selectDay(day) {
  selectedDay.value = day
  currentPrayer.value = prayerDays.find((p) => p.day === day)
}

onMounted(() => {
  // Default to first day on load
  selectDay(1)
})
</script>

<template>
  <div class="prayer-guide-page">
    <!-- Page Header -->
    <section class="page-header bg-primary text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">14 Days of Prayer</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
                <li class="breadcrumb-item active text-white" aria-current="page">14 Days of Prayer</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">Link Together in Prayer</h2>
            <p class="lead mb-4">
              Join us on a 14-day prayer journey to deepen your relationship with God
            </p>
            <p>
              Prayer is the heartbeat of our relationship with God. Over these 14 days, we invite
              you to establish a consistent prayer habit as we connect with God together as a church
              family.
            </p>
            <p>
              Each day features a Scripture verse, a praise focus, and specific prayer points for
              your personal life, family, and our church community.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              src="@/assets/images/prayer-2.jpg"
              alt="Prayer"
              class="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Prayer Days Navigation -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h3 class="mb-4">Select a Day</h3>
            <div class="prayer-days-nav">
              <button
                v-for="day in 14"
                :key="day"
                @click="selectDay(day)"
                :class="['btn', 'btn-outline-primary', 'm-1', selectedDay === day ? 'active' : '']"
              >
                Day {{ day }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Prayer Content -->
    <section class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="prayer-card">
              <div class="prayer-day-header">
                <span class="day-label">Day</span>
                <span class="day-number">{{ currentPrayer.day }}</span>
              </div>
              
              <div class="prayer-content">
                <div class="scripture-section">
                  <h4 class="section-label">Scripture for Today</h4>
                  <p class="scripture-text">{{ currentPrayer.verse }}</p>
                </div>
                
                <div class="prayer-section praise-section">
                  <div class="section-icon">
                    <i class="bi bi-music-note-beamed"></i>
                  </div>
                  <div class="section-content">
                    <h4 class="section-title">Praise</h4>
                    <p>{{ currentPrayer.praise }}</p>
                  </div>
                </div>
                
                <div class="prayer-section personal-section">
                  <div class="section-icon">
                    <i class="bi bi-person-fill"></i>
                  </div>
                  <div class="section-content">
                    <h4 class="section-title">Personal Prayer</h4>
                    <p>{{ currentPrayer.personal }}</p>
                  </div>
                </div>
                
                <div class="prayer-section family-section">
                  <div class="section-icon">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <div class="section-content">
                    <h4 class="section-title">Family Prayer</h4>
                    <p>{{ currentPrayer.family }}</p>
                  </div>
                </div>
                
                <div class="prayer-section communal-section">
                  <div class="section-icon">
                    <i class="bi bi-building"></i>
                  </div>
                  <div class="section-content">
                    <h4 class="section-title">Communal Prayer</h4>
                    <p>{{ currentPrayer.communal }}</p>
                  </div>
                </div>
              </div>
              
              <div class="prayer-navigation">
                <button 
                  @click="selectDay(selectedDay > 1 ? selectedDay - 1 : 1)" 
                  class="nav-btn prev-btn" 
                  :disabled="selectedDay === 1">
                  <i class="bi bi-arrow-left"></i> Previous Day
                </button>
                <button 
                  @click="selectDay(selectedDay < 14 ? selectedDay + 1 : 14)" 
                  class="nav-btn next-btn"
                  :disabled="selectedDay === 14">
                  Next Day <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prayer Tips Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-4">
          <div class="col-lg-8 mx-auto text-center">
            <h3 class="section-title">Tips for a Meaningful Prayer Time</h3>
            <p class="lead">How to make the most of this prayer guide</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-4">
                <div class="text-center mb-3">
                  <i class="bi bi-clock fs-1 text-primary"></i>
                </div>
                <h4 class="card-title text-center">Set a Regular Time</h4>
                <p class="card-text">
                  Choose a consistent time each day when you can focus without distractions. Many
                  find early morning or before bedtime works well.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-4">
                <div class="text-center mb-3">
                  <i class="bi bi-journal-text fs-1 text-primary"></i>
                </div>
                <h4 class="card-title text-center">Keep a Prayer Journal</h4>
                <p class="card-text">
                  Write down your prayers, insights, and answers to prayer. This creates a beautiful
                  record of your journey with God.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-4">
                <div class="text-center mb-3">
                  <i class="bi bi-people fs-1 text-primary"></i>
                </div>
                <h4 class="card-title text-center">Pray with Others</h4>
                <p class="card-text">
                  Consider inviting family members or friends to join you on this prayer journey.
                  Praying together strengthens relationships and faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prayer Request Section -->
    <section class="section-padding prayer-request-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="prayer-request-card">
              <div class="prayer-request-icon">
                <i class="bi bi-envelope-heart"></i>
              </div>
              <h3 class="section-title">Need Prayer Support?</h3>
              <p class="mb-4">If you have questions about prayer or would like to submit a prayer request, our team is here to support you on your spiritual journey. We believe in the power of praying together.</p>
              <RouterLink to="/contact" class="contact-btn">
                <i class="bi bi-send me-2"></i> Send Us Your Prayer Request
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prayer-days-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Header styles to match site design */
.page-header {
  padding: 5rem 0 2rem;
  background-color: #0c5d56 !important;
  margin-bottom: 0;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.7);
}

.breadcrumb {
  margin-bottom: 0;
}

/* New Prayer Card Design */
.prayer-card {
  position: relative;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.prayer-day-header {
  background: linear-gradient(135deg, #1a1a1a, #292929);
  padding: 1.5rem 2rem;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
}

.day-label {
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 0.5rem;
}

.day-number {
  font-size: 2.5rem;
  font-weight: 700;
}

.prayer-content {
  padding: 2rem;
}

.scripture-section {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border-left: 5px solid #2196f3;
  position: relative;
}

.section-label {
  color: #2196f3;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.scripture-text {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.6;
}

.prayer-section {
  display: flex;
  margin-bottom: 1.5rem;
  padding: 0 0 1.5rem;
  border-bottom: 1px dashed #eee;
}

.prayer-section:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.section-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
  color: white;
}

.section-content {
  flex: 1;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.praise-section .section-icon {
  background: linear-gradient(135deg, #9c27b0, #7b1fa2);
}

.praise-section .section-title {
  color: #9c27b0;
}

.personal-section .section-icon {
  background: linear-gradient(135deg, #2196f3, #1976d2);
}

.personal-section .section-title {
  color: #2196f3;
}

.family-section .section-icon {
  background: linear-gradient(135deg, #4caf50, #388e3c);
}

.family-section .section-title {
  color: #4caf50;
}

.communal-section .section-icon {
  background: linear-gradient(135deg, #ff9800, #f57c00);
}

.communal-section .section-title {
  color: #ff9800;
}

.prayer-navigation {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-top: 1px solid #eee;
  background-color: #f8f9fa;
}

.nav-btn {
  padding: 0.6rem 1.25rem;
  border-radius: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  background: none;
  border: 2px solid #0c5d56;
  color: #0c5d56;
  cursor: pointer;
}

.nav-btn:hover:not(:disabled) {
  background-color: #0c5d56;
  color: white;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.prev-btn i {
  margin-right: 0.5rem;
}

.next-btn i {
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .prayer-day-header {
    padding: 1.25rem;
  }
  
  .prayer-content {
    padding: 1.25rem;
  }
  
  .section-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
  }
  
  .prayer-navigation {
    padding: 1.25rem;
  }
}

/* Prayer Request Section */
.prayer-request-section {
  background-color: #f8f9fa;
}

.prayer-request-card {
  background: white;
  border-radius: 15px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
}

.prayer-request-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #0c5d56, #0a4a45);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prayer-request-icon i {
  font-size: 2rem;
  color: white;
}

.prayer-request-card h3 {
  margin-bottom: 1rem;
  color: #0c5d56;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  background-color: #0c5d56;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: #094842;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(12, 93, 86, 0.2);
}

@media (max-width: 768px) {
  .prayer-request-card {
    padding: 2rem 1.25rem;
  }
}
</style>
