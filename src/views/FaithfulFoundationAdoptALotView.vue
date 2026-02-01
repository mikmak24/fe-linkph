<script setup>
import { RouterLink } from 'vue-router'
import adoptALotVideo from '@/assets/videos/faithfull_foundation_adopt_a_lot.mp4'
</script>

<template>
  <div class="faithful-foundation-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <span class="hero-badge">Church Project</span>
        <h1 class="hero-title">Faithful Foundation<br /><span class="hero-title-accent">Adopt a Lot</span></h1>
        <p class="hero-lead">
          This is the 2,000 square meter lot where Link Church PH will build. Partner with us by adopting square meters at ₱7,000 each—and help lay the foundation for our future home.
        </p>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">Adopt a Lot</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Video Section -->
    <section class="section section-video">
      <div class="container">
        <div class="video-wrapper">
          <div class="video-card">
            <video
              class="project-video"
              :src="adoptALotVideo"
              controls
              playsinline
              poster=""
            >
              Your browser does not support the video tag.
            </video>
            <p class="video-caption">Faithful Foundation — Adopt a Lot</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lot Details -->
    <section class="section section-details">
      <div class="container">
        <div class="details-card">
          <div class="row g-4 align-items-center">
            <div class="col-md-4 text-center">
              <div class="detail-stat">
                <span class="detail-value">2,000</span>
                <span class="detail-unit">sqm</span>
              </div>
              <p class="detail-label mb-0">Total lot area</p>
            </div>
            <div class="col-md-4 text-center">
              <div class="detail-stat">
                <span class="detail-value">₱7,000</span>
                <span class="detail-unit">/ sqm</span>
              </div>
              <p class="detail-label mb-0">Per square meter</p>
            </div>
            <div class="col-md-4 text-center">
              <div class="detail-stat">
                <span class="detail-value">₱14M</span>
              </div>
              <p class="detail-label mb-0">Total lot value</p>
            </div>
          </div>
          <div class="payment-terms">
            <i class="bi bi-calendar-check me-2"></i>
            <span>Payment terms: <strong>3</strong>, <strong>6</strong>, or <strong>12 months</strong> to pay</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About the Project -->
    <section class="section section-about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 mb-5 mb-lg-0">
            <span class="section-label">Our Vision</span>
            <h2 class="section-title">Where We Will Build</h2>
            <p class="text-muted mb-4">
              This 2,000 square meter lot is the future home of Link Church PH. Through Faithful Foundation Adopt a Lot, we are raising funds to acquire this land—one square meter at a time. Each square meter costs ₱7,000, and every adoption brings us closer to owning the ground where our church will stand.
            </p>
            <p class="mb-0">
              When you adopt a square meter (or more), you are helping secure the land where we will worship, disciple, and serve for generations. Your partnership lays a literal foundation for what God is building through Link Church PH.
            </p>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="impact-grid">
              <div class="impact-card">
                <div class="impact-icon">
                  <i class="bi bi-building"></i>
                </div>
                <h3>Our Future Home</h3>
                <p>This is the lot where Link Church PH will build—a permanent place for worship, ministry, and community.</p>
              </div>
              <div class="impact-card">
                <div class="impact-icon">
                  <i class="bi bi-currency-exchange"></i>
                </div>
                <h3>₱7,000 per Square Meter</h3>
                <p>Adopt one or more square meters at ₱7,000 each. Every square meter counts toward the total.</p>
              </div>
              <div class="impact-card">
                <div class="impact-icon">
                  <i class="bi bi-heart"></i>
                </div>
                <h3>Partner with Us</h3>
                <p>Your giving helps secure the 2,000 sqm lot and lays the foundation for generations to come.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section section-how bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-label">Get Involved</span>
          <h2 class="section-title">How It Works</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px;">
            Partner with us by adopting square meters at ₱7,000 each. Watch the video, then reach out to give or learn more.
          </p>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-3">
            <div class="step-card">
              <span class="step-num">1</span>
              <h4>Watch & Pray</h4>
              <p>Watch the project video and pray about how many square meters you or your group can adopt.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="step-card">
              <span class="step-num">2</span>
              <h4>Connect</h4>
              <p>Reach out to Link Church PH and tell us you want to adopt square meters for the church lot.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="step-card">
              <span class="step-num">3</span>
              <h4>Give</h4>
              <p>Give ₱7,000 per square meter (e.g. 1 sqm = ₱7,000, 10 sqm = ₱70,000). You can pay in <strong>3</strong>, <strong>6</strong>, or <strong>12 months</strong>. Every sqm counts.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="step-card">
              <span class="step-num">4</span>
              <h4>Build</h4>
              <p>Together we secure the 2,000 sqm lot—the future site where Link Church PH will build.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-cta">
      <div class="container">
        <div class="cta-card">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h2 class="cta-title">Ready to adopt square meters?</h2>
              <p class="cta-text mb-0">
                Contact us to give toward the lot (₱7,000 per square meter). Payment can be spread over <strong>3</strong>, <strong>6</strong>, or <strong>12 months</strong>. This is where Link Church PH will build.
              </p>
            </div>
            <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <RouterLink to="/contact" class="btn btn-cta btn-lg">
                <i class="bi bi-envelope me-2"></i>Contact Us
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 120px 0 60px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, #022a26 100%);
  color: #fff;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.6;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  margin-bottom: 1rem;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.hero-title-accent {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.hero-lead {
  font-size: 1.15rem;
  opacity: 0.95;
  max-width: 520px;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.hero .breadcrumb {
  background: transparent;
  padding: 0;
  margin: 0;
}

.hero .breadcrumb-item,
.hero .breadcrumb-item a {
  color: rgba(255, 255, 255, 0.85) !important;
}

.hero .breadcrumb-item.active {
  color: rgba(255, 255, 255, 0.7) !important;
}

.hero .breadcrumb-item a:hover {
  color: #fff !important;
}

/* Sections */
.section {
  padding: 80px 0;
}

/* Lot details */
.section-details {
  padding-top: 40px;
  padding-bottom: 40px;
}

.details-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem 2rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.detail-stat {
  margin-bottom: 0.5rem;
}

.detail-value {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: var(--primary-color);
  line-height: 1.2;
}

.detail-unit {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  opacity: 0.9;
}

.detail-label {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.85;
}

.payment-terms {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  text-align: center;
  font-size: 0.95rem;
  color: var(--color-text);
}

.payment-terms strong {
  color: var(--primary-color);
}

.section-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: var(--color-heading, #1a1a1a);
  margin-bottom: 1rem;
}

/* Video */
.section-video {
  padding-top: 60px;
  padding-bottom: 60px;
}

.video-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.video-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.project-video {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  background: #0a0a0a;
}

.video-caption {
  padding: 1rem 1.5rem;
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.85;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

/* About */
.section-about .section-title {
  margin-bottom: 1.25rem;
}

.impact-grid {
  display: grid;
  gap: 1.25rem;
}

.impact-card {
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.impact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(12, 93, 86, 0.12);
}

.impact-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  border-radius: 12px;
  font-size: 1.35rem;
  margin-bottom: 1rem;
}

.impact-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.35rem;
}

.impact-card p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text);
  opacity: 0.9;
  line-height: 1.5;
}

/* Steps */
.step-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.75rem;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.step-card:hover {
  border-color: rgba(12, 93, 86, 0.2);
  box-shadow: 0 8px 30px rgba(12, 93, 86, 0.08);
}

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.step-card h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.step-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.88;
  line-height: 1.55;
}

/* CTA */
.section-cta {
  padding: 60px 0 80px;
}

.cta-card {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  padding: 2.5rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(12, 93, 86, 0.25);
}

.cta-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.cta-text {
  opacity: 0.95;
  font-size: 1rem;
  line-height: 1.6;
}

.btn-cta {
  background: #fff;
  color: var(--primary-color);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-cta:hover {
  background: #f8f8f8;
  color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

@media (max-width: 991.98px) {
  .hero {
    padding: 100px 0 50px;
  }

  .section {
    padding: 60px 0;
  }

  .impact-grid {
    margin-top: 0;
  }
}
</style>
