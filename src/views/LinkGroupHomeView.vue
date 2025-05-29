<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="text-white">Connect with a Link Group</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
            <li class="breadcrumb-item active text-white" aria-current="page">Connect</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6">
            <div class="content-card p-4 bg-white rounded shadow-sm">
              <h2 class="section-title mb-4">Join a Link Group Today</h2>
              <p class="lead mb-4">
                At LINK PH, we believe that spiritual growth happens best in community. Our Link Groups provide a space where you can connect with others, grow in your faith, and experience authentic relationships centered around God's Word.
              </p>
              <p>
                Whether you're new to faith or have been walking with Christ for years, there's a place for you in our Link Groups. These small gatherings meet regularly to study the Bible, pray together, and build meaningful relationships.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-card rounded shadow-sm overflow-hidden">
              <img 
                src="@/assets/images/img-9.jpg" 
                alt="Link Group Ministry" 
                class="img-fluid w-100 h-100 object-fit-cover"
                style="min-height: 400px;"
              >
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="row g-4 mb-5">
          <div class="col-md-4">
            <div class="benefit-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="benefit-icon mb-3">
                <i class="bi bi-people-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Community</h3>
              <p>
                Experience genuine fellowship and build lasting relationships with others who share your faith journey.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="benefit-icon mb-3">
                <i class="bi bi-book-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Bible Study</h3>
              <p>
                Engage in meaningful discussions about God's Word and learn how to apply biblical principles to your life.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="benefit-icon mb-3">
                <i class="bi bi-heart-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Spiritual Growth</h3>
              <p>
                Grow in your faith through prayer, worship, and accountability with fellow believers.
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-form-card p-4 bg-white rounded shadow-sm">
              <h2 class="section-title text-center mb-4">Get Connected</h2>
              <p class="text-center mb-4">
                Fill out the form below to get connected with a Link Group that's right for you.
              </p>
              <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" required>
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                  </div>
                  <div class="col-md-6">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone">
                  </div>
                  <div class="col-md-6">
                    <label for="preferredDay" class="form-label">Preferred Meeting Day</label>
                    <select class="form-select" id="preferredDay">
                      <option value="">Select a day</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Additional Information</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                  </div>
                  <div class="col-12 text-center">
                    <button type="submit" class="btn btn-primary btn-lg px-5">Submit</button>
                  </div>
                </div>
              </form>
            </div>
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

.contact-form-card {
  transition: transform 0.3s ease;
}

.contact-form-card:hover {
  transform: translateY(-5px);
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

.image-card {
  height: 100%;
  min-height: 400px;
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: translateY(-5px);
}

.object-fit-cover {
  object-fit: cover;
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