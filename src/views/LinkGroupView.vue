<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="text-white">Link Groups</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
            <li class="breadcrumb-item active text-white" aria-current="page">Link Groups</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">Join a Link Group</h2>
            <p class="lead mb-4">Experience authentic community and grow in your faith journey together.</p>
            <p>Link Groups are small gatherings where we connect, study God's Word, and support one another in our walk with Christ. These groups provide a space for meaningful relationships, spiritual growth, and practical application of biblical principles in our daily lives.</p>
            <RouterLink to="/contact" class="btn btn-primary mt-3">Find a Group</RouterLink>
          </div>
          <div class="col-lg-6">
            <img src="@/assets/images/img-9.jpg" alt="Link Group Gathering" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title">Why Join a Link Group?</h2>
            <p class="lead">Discover the benefits of being part of our community</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="benefit-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="benefit-icon mb-3">
                <i class="bi bi-people-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Community</h3>
              <p>Build meaningful relationships with others who share your faith journey and support one another through life's ups and downs.</p>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="benefit-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="benefit-icon mb-3">
                <i class="bi bi-book-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Bible Study</h3>
              <p>Engage in deep discussions about God's Word and learn how to apply biblical principles to your daily life.</p>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="benefit-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="benefit-icon mb-3">
                <i class="bi bi-heart-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Spiritual Growth</h3>
              <p>Experience personal growth through prayer, worship, and accountability with fellow believers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-5 text-white">
      <div class="container py-4">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="mb-4">Ready to Join a Link Group?</h2>
            <p class="lead mb-4">
              Take the next step in your faith journey by connecting with others in a Link Group.
            </p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Get Started Today</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  padding: 80px 0 30px;
  margin-bottom: 50px;
}

.section-padding {
  padding: 60px 0;
}

.benefit-icon {
  font-size: 2rem;
  color: var(--primary-color);
}

.benefit-card {
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.cta-section {
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
}

.breadcrumb-item a {
  color: white;
  text-decoration: none;
}

.breadcrumb-item.active {
  color: rgba(255, 255, 255, 0.8);
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.section-title {
  color: var(--primary-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0 20px;
    margin-bottom: 30px;
  }

  .section-padding {
    padding: 40px 0;
  }
}
</style> 