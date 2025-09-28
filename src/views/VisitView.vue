<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="visit-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Visit Us</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Visit</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

  

    <!-- What to Expect Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">What to Expect</h2>
            <p class="lead">Here's what you can expect when you visit LINK PH</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="expect-card text-center p-4 bg-white rounded shadow-sm h-100">
              <div class="expect-icon mb-3">
                <i class="bi bi-music-note-beamed fa-2x"></i>
              </div>
              <h4>Worship</h4>
              <p>Contemporary worship music that helps us connect with God through praise and adoration.</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="expect-card text-center p-4 bg-white rounded shadow-sm h-100">
              <div class="expect-icon mb-3">
                <i class="bi bi-book fa-2x"></i>
              </div>
              <h4>Bible Teaching</h4>
              <p>Practical, relevant teaching from God's Word that applies to your everyday life.</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="expect-card text-center p-4 bg-white rounded shadow-sm h-100">
              <div class="expect-icon mb-3">
                <i class="bi bi-person fa-2x"></i>
              </div>
              <h4>Kids Ministry</h4>
              <p>Age-appropriate activities and Bible lessons for children in a safe, fun environment.</p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="expect-card text-center p-4 bg-white rounded shadow-sm h-100">
              <div class="expect-icon mb-3">
                <i class="bi bi-cup-hot fa-2x"></i>
              </div>
              <h4>Fellowship</h4>
              <p>Friendly people and opportunities to connect with others before and after services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location and Directions -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <h2 class="section-title">Location & Directions</h2>
            <p class="lead mb-4">We're easy to find and looking forward to meeting you</p>
            
            <div class="location-info mb-4">
              <div class="d-flex mb-3">
                <div class="location-icon me-3">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h5>Church Address</h5>
                  <p>East View Hotel 6th Floor, Bacolod City, Negros Occidental 6100</p>
                </div>
              </div>
              
              <div class="d-flex mb-3">
                <div class="location-icon me-3">
                  <i class="bi bi-p-square"></i>
                </div>
                <div>
                  <h5>Parking</h5>
                  <p>Free parking is available in our area.</p>
                </div>
              </div>
              
              <div class="d-flex">
                <div class="location-icon me-3">
                  <i class="bi bi-info-circle"></i>
                </div>
                <div>
                  <h5>Need Help?</h5>
                  <p>Look for our friendly greeters wearing name tags who can assist you.</p>
                </div>
              </div>
            </div>
            
            <a href="https://maps.app.goo.gl/MZEHWhdahThX5Ua8A" target="_blank" class="btn btn-primary">Get Directions</a>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="map-container rounded shadow-lg">
              <!-- Replace with actual Google Maps embed -->
              <img src="@/assets/images/new-location.jpg" alt="Church Location" class="img-fluid rounded">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Frequently Asked Questions</h2>
            <p class="lead">Common questions about visiting LINK PH</p>
          </div>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="accordion" id="visitFAQ">
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What should I wear?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#visitFAQ">
                  <div class="accordion-body">
                    Come as you are! You'll find people dressed in everything from casual to business casual. We're more concerned with meeting you than with what you wear.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What about my kids?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#visitFAQ">
                  <div class="accordion-body">
                    We have a fantastic children's program during our Sunday services. Children are checked in at our secure kids' area, where they'll experience age-appropriate teaching, fun activities, and make new friends.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How long is the service?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#visitFAQ">
                  <div class="accordion-body">
                    Our services typically last about 90 minutes. This includes worship, announcements, and the sermon.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item mb-3 border-0 shadow-sm">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Will I be asked to give money?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#visitFAQ">
                  <div class="accordion-body">
                    As a guest, you are not expected to give. We do provide an opportunity for regular attendees to give during the service, but this is completely voluntary.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item border-0 shadow-sm">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How do I get connected?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#visitFAQ">
                  <div class="accordion-body">
                    We encourage visitors to fill out a connection card, which helps us get to know you better. You can also visit our welcome desk after the service, where someone will be happy to provide information about our small groups and other ways to get involved.
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
            <h2 class="mb-4">We Can't Wait to Meet You!</h2>
            <p class="lead mb-4">If you have any questions before your visit, please don't hesitate to reach out to us.</p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  padding: 80px 0 30px;
  margin-bottom: 50px;
}

.page-header, .page-header h1, .page-header nav, .page-header .breadcrumb, .page-header .breadcrumb-item, .page-header .breadcrumb-item a {
  color: #fff !important;
}
.page-header .breadcrumb-item.active {
  color: #f0f0f0 !important;
}
.page-header .breadcrumb-item a {
  text-decoration: underline;
}

.service-icon, .location-icon {
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

.expect-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(58, 90, 151, 0.1);
  color: var(--primary-color);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.expect-card {
  transition: all 0.3s ease;
}

.expect-card:hover {
  transform: translateY(-10px);
}

.expect-card:hover .expect-icon {
  background-color: var(--primary-color);
  color: white;
}

.map-container {
  overflow: hidden;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(58, 90, 151, 0.1);
  color: var(--primary-color);
  font-weight: 600;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(58, 90, 151, 0.1);
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%233a5a97'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style> 