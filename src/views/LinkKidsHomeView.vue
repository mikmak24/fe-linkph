<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize Bootstrap accordion if needed
  if (typeof bootstrap !== 'undefined') {
    const accordionElement = document.getElementById('faqAccordion')
    if (accordionElement) {
      const bsCollapse = new bootstrap.Collapse(accordionElement, {
        toggle: false
      })
    }
  }
})
</script>

<template>
  <div class="link-kids-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Link Kids</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Link Kids</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="welcome-section section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="content-card p-4 bg-white rounded shadow-sm">
              <h2 class="section-title mb-4">Nurturing Young Hearts in Christ</h2>
              <div class="welcome-content">
                <p class="lead mb-4" style="color: var(--primary-color);">
                  "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these." - Matthew 19:14
                </p>
                <p>
                  At Link Kids, we believe that children are not just the future of the church - they are an integral part of our present church family. Our ministry is dedicated to helping children develop a personal and meaningful relationship with Jesus Christ while fostering their spiritual growth within our church community.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-card rounded shadow-sm overflow-hidden">
              <img 
                src="@/assets/images/kids/link-kids.jpg" 
                alt="Link Kids Ministry" 
                class="img-fluid w-100 h-100 object-fit-cover"
                style="min-height: 400px;"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="core-values-section section-padding bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Our Approach to Children's Ministry</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="value-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="value-icon mb-3">
                <i class="bi bi-heart-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Christ-Centered Teaching</h3>
              <p>
                We place Jesus at the center of all our teachings, helping children understand God's love through age-appropriate lessons, activities, and biblical stories.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="value-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="value-icon mb-3">
                <i class="bi bi-people-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Community Building</h3>
              <p>
                We create a nurturing environment where children can build meaningful friendships, learn to support one another, and grow together in their faith journey.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="value-card h-100 p-4 bg-white rounded shadow-sm">
              <div class="value-icon mb-3">
                <i class="bi bi-star-fill text-primary"></i>
              </div>
              <h3 class="h4 mb-3">Character Development</h3>
              <p>
                We focus on developing Christ-like character through biblical principles, helping children understand and apply God's Word in their daily lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="programs-section section-padding">
      <div class="container">
        <h2 class="section-title text-center mb-5">Our Programs</h2>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="program-card h-100 p-4 bg-white rounded shadow-sm">
              <h3 class="h4 mb-3">Sunday School</h3>
              <p>
                Our dynamic Sunday School program offers age-appropriate biblical lessons, interactive activities, and creative projects that help children understand and remember God's Word.
              </p>
              <ul class="program-features">
                <li><i class="bi bi-check-circle me-2"></i>Bible stories and lessons</li>
                <li><i class="bi bi-check-circle me-2"></i>Worship and praise</li>
                <li><i class="bi bi-check-circle me-2"></i>Arts and crafts</li>
                <li><i class="bi bi-check-circle me-2"></i>Memory verse activities</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="program-card h-100 p-4 bg-white rounded shadow-sm">
              <h3 class="h4 mb-3">Special Events</h3>
              <p>
                Throughout the year, we organize special events and activities that create memorable experiences while reinforcing biblical teachings and Christian values.
              </p>
              <ul class="program-features">
                <li><i class="bi bi-check-circle me-2"></i>Vacation Bible School</li>
                <li><i class="bi bi-check-circle me-2"></i>Holiday celebrations</li>
                <li><i class="bi bi-check-circle me-2"></i>Family fellowship events</li>
                <li><i class="bi bi-check-circle me-2"></i>Community outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section section-padding bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">Common Questions About Link Kids</h2>
        
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="accordion" id="faqAccordion">
              <!-- Question 1 -->
              <div class="accordion-item border-0 mb-3 rounded shadow-sm">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    What ages are welcome in Link Kids?
                  </button>
                </h3>
                <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Link Kids welcomes children from ages 3-12 years old. We have different age-appropriate classes and activities to ensure each child receives teaching that matches their developmental stage and understanding.
                  </div>
                </div>
              </div>

              <!-- Question 2 -->
              <div class="accordion-item border-0 mb-3 rounded shadow-sm">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    What happens during a typical Link Kids session?
                  </button>
                </h3>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Our sessions include worship songs, Bible lessons, interactive activities, crafts, and games - all designed to help children learn about Jesus in an engaging way. We ensure a good balance of fun and learning while maintaining a safe, nurturing environment.
                  </div>
                </div>
              </div>

              <!-- Question 3 -->
              <div class="accordion-item border-0 mb-3 rounded shadow-sm">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    How do you ensure children's safety?
                  </button>
                </h3>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    We take safety seriously! All our volunteers undergo background checks, we maintain strict check-in/check-out procedures, and we always maintain appropriate adult-to-child ratios. Our facilities are secure, and we have clear emergency procedures in place.
                  </div>
                </div>
              </div>

              <!-- Question 4 -->
              <div class="accordion-item border-0 mb-3 rounded shadow-sm">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    What should my child bring?
                  </button>
                </h3>
                <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Your child only needs to bring their enthusiasm! We provide all necessary materials for activities and lessons. For longer events, we'll provide specific information about any additional items needed.
                  </div>
                </div>
              </div>

              <!-- Question 5 -->
              <div class="accordion-item border-0 mb-3 rounded shadow-sm">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    How can parents get involved?
                  </button>
                </h3>
                <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    We welcome parent involvement! You can volunteer in various capacities, from teaching to helping with activities. We also provide resources for continuing spiritual discussions at home and regularly communicate about what your children are learning.
                  </div>
                </div>
              </div>
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
            <h2 class="mb-4">Join Our Kids Ministry!</h2>
            <p class="lead mb-4">
              We welcome all children to be part of our vibrant community where they can learn, grow, and experience God's love.
            </p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Contact Us Today</RouterLink>
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
  color: white;
}

.section-padding {
  padding: 60px 0;
}

.value-icon {
  font-size: 2rem;
  color: var(--primary-color);
}

.program-features {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.program-features li {
  margin-bottom: 0.5rem;
  color: #666;
}

.program-features i {
  color: var(--primary-color);
}

.cta-section {
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
}

.value-card, .program-card {
  transition: transform 0.3s ease;
}

.value-card:hover, .program-card:hover {
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

.accordion-button {
  font-weight: 500;
  padding: 1.25rem;
  color: var(--primary-color);
}

.accordion-button:not(.collapsed) {
  background-color: rgba(var(--primary-color-rgb), 0.1);
  color: var(--primary-color);
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(var(--primary-color-rgb), 0.1);
}

.accordion-button::after {
  background-size: 1.25rem;
  transition: all 0.3s ease;
}

.accordion-body {
  padding: 1.25rem;
  color: #666;
}

.accordion-item {
  background-color: white;
  transition: transform 0.3s ease;
}

.accordion-item:hover {
  transform: translateY(-2px);
}
</style> 