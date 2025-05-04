<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">Contact Us</h2>
            <p class="lead mb-4">We would love to hear from you! Whether you have questions about our services, want to get involved, or simply want to learn more, feel free to reach out:</p>
            
            <div class="contact-info mb-5">
              <div class="contact-item d-flex mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 class="mb-1">Church Address</h5>
                  <p class="mb-0">Bacolod City, Negros Occidental 6100</p>
                </div>
              </div>
              
              <div class="contact-item d-flex mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h5 class="mb-1">Phone</h5>
                  <p class="mb-0">0930-6030-755</p>
                </div>
              </div>
              
              <div class="contact-item d-flex mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 class="mb-1">Email</h5>
                  <p class="mb-0">thelinkphilippines@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h5 class="mb-3">Connect With Us</h5>
              <a href="https://www.facebook.com/LinkPHL" target="_blank" class="social-link me-2" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-link me-2" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link me-2" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="get-involved-card bg-white rounded shadow-sm p-4 p-md-5">
              <h3 class="mb-4">Get Involved</h3>
              <p>There are many ways to get involved at Link Church:</p>
              
              <div class="involvement-options">
                <div class="involvement-item d-flex mb-4">
                  <div class="involvement-icon me-3">
                    <i class="fas fa-hands-helping"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Volunteer Opportunities</h5>
                    <p class="mb-0">Share your talents and time in various ministries and outreach programs.</p>
                  </div>
                </div>
                
                <div class="involvement-item d-flex mb-4">
                  <div class="involvement-icon me-3">
                    <i class="fas fa-users"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Join a Group</h5>
                    <p class="mb-0">Find a small group that fits your interests and schedule.</p>
                    <a href="https://forms.gle/HHZcr9Z6kcv1KnRm7" target="_blank" class="btn btn-primary mt-3">
                      <i class="fas fa-external-link-alt me-2"></i>Join a Link Group
                    </a>
                  </div>
                </div>
                
                <div class="involvement-item d-flex">
                  <div class="involvement-icon me-3">
                    <i class="fas fa-calendar-check"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">Attend Events</h5>
                    <p class="mb-0">Participate in our community events to meet new people and deepen your connections.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Find Us</h2>
            <p class="lead">We're located in Bacolod City</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="map-container rounded shadow-lg overflow-hidden">
              <!-- Replace with actual Google Maps embed of Bacolod City -->
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125412.93332427266!2d122.91313583880088!3d10.67142275855809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed6ced0f6ec7d%3A0x90f258f2783761ce!2sBacolod%2C%20Negros%20Occidental!5e0!3m2!1sen!2sph!4v1673524532012!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Frequently Asked Questions</h2>
            <p class="lead">Find answers to common questions</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="accordion" id="contactFAQ">
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How can I join a Link Group?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFAQ">
                  <div class="accordion-body">
                    You can join a Link Group by filling out our online form at <a href="https://forms.gle/HHZcr9Z6kcv1KnRm7" target="_blank">this link</a>. Our team will then connect you with a group that fits your schedule and interests.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How do I request prayer from the church?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFAQ">
                  <div class="accordion-body">
                    Prayer requests can be submitted by contacting us via email at thelinkphilippines@gmail.com, by calling 0930-6030-755, or by filling out a prayer card during Sunday service. Our prayer team commits to praying for each request received.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How can I volunteer at the church?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFAQ">
                  <div class="accordion-body">
                    We have many opportunities for service within our church community. You can contact us directly via email or phone to express your interest in volunteering. Our team will follow up with information about areas where you can serve based on your gifts and availability.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    When and where are your Sunday services?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#contactFAQ">
                  <div class="accordion-body">
                    Please check our Visit page for up-to-date information on our service times and locations. You can also contact us directly for the most current information about our weekly gatherings.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How can I stay updated with church news and events?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#contactFAQ">
                  <div class="accordion-body">
                    Follow us on our Facebook page at <a href="https://www.facebook.com/LinkPHL" target="_blank">facebook.com/LinkPHL</a> where we regularly post updates, event information, and inspirational content. You can also contact us directly via email for our newsletter or announcement updates.
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
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4">We'd Love to Meet You!</h2>
            <p class="lead mb-4">Thank you for visiting Link Church. We look forward to welcoming you into our community!</p>
            <div>
              <RouterLink to="/visit" class="btn btn-light btn-lg me-3 mb-3 mb-md-0">Plan Your Visit</RouterLink>
              <a href="https://www.facebook.com/LinkPHL" target="_blank" class="btn btn-outline-light btn-lg">
                <i class="fab fa-facebook-f me-2"></i>Follow Us on Facebook
              </a>
            </div>
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

.contact-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
}

.involvement-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 164, 157, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  font-size: 1.2rem;
}

.involvement-item {
  transition: all 0.3s ease;
}

.involvement-item:hover {
  transform: translateX(5px);
}

.involvement-item:hover .involvement-icon {
  background-color: var(--primary-color);
  color: white;
}

.get-involved-card {
  transition: all 0.3s ease;
  height: 100%;
}

.form-control {
  padding: 0.75rem 1.25rem;
  border-color: #e9ecef;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgba(0, 164, 157, 0.25);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
}

.map-container {
  height: 450px;
  overflow: hidden;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(0, 164, 157, 0.1);
  color: var(--primary-color);
  font-weight: 600;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0, 164, 157, 0.1);
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2300a49d'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}
</style> 