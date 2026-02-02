<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer bg-dark text-white">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h4 class="mb-4">LINK PH</h4>
          <p>"Connecting what matters to God"</p>
          <p class="mb-3 footer-tagline">God, First Disciples Made</p>
          <div class="social-links">
            <a href="#" class="me-3"><i class="bi bi-facebook"></i></a>
            <a href="#" class="me-3"><i class="bi bi-youtube"></i></a>
            <a href="#" class="me-3"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="mb-4">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><RouterLink to="/" class="footer-link">Home</RouterLink></li>
            <li class="mb-2"><RouterLink to="/about" class="footer-link">About</RouterLink></li>
            <li class="mb-2"><RouterLink to="/visit" class="footer-link">Visit</RouterLink></li>
            <li class="mb-2"><RouterLink to="/grow" class="footer-link">Discipleship</RouterLink></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 class="mb-4">Resources</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><RouterLink to="/ministries" class="footer-link">Ministries</RouterLink></li>
            <!-- <li class="mb-2"><RouterLink to="/resources" class="footer-link">Resources</RouterLink></li>
            <li class="mb-2"><RouterLink to="/give" class="footer-link">Give</RouterLink></li> -->
            <li class="mb-2"><RouterLink to="/contact" class="footer-link">Contact</RouterLink></li>
          </ul>
        </div>
        
        <div class="col-lg-4">
          <h5 class="mb-4">Contact Us</h5>
          <p>We would love to hear from you! Whether you have questions about our services, want to get involved, or simply want to learn more, feel free to reach out:</p>
          <p><i class="bi bi-envelope me-2"></i> thelinkphilippines@gmail.com</p>
          <p><i class="bi bi-telephone me-2"></i> 0939-6030-755</p>
          <p><i class="bi bi-geo-alt me-2"></i>Ayala Cinema 2, Bacolod City</p>
          <p>Thank you for visiting Link Church. We look forward to welcoming you into our community!</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">&copy; {{ new Date().getFullYear() }} LINK PH. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <ul class="list-inline mb-0">
              <li class="list-inline-item"><a href="#" class="text-white">Privacy Policy</a></li>
              <li class="list-inline-item"><span class="mx-2">|</span></li>
              <li class="list-inline-item"><a href="#" class="text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--primary-color) !important;
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  text-decoration: none;
}

.footer-bottom {
  background-color: rgba(0, 0, 0, 0.1);
}

.footer h4, .footer h5 {
  font-weight: 600;
  position: relative;
}

.footer h5:after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: #ffffff;
  margin-top: 12px;
}

.footer-link {
  color: #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
  padding-left: 5px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #ffffff;
  color: var(--primary-color);
  transform: translateY(-3px);
}

.footer-tagline {
  font-style: italic;
  color: #ffffff;
}
</style> 