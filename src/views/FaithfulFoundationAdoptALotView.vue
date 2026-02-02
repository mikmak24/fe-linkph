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
        <h1 class="hero-title">Faithful Foundations<br /><span class="hero-title-accent">Adopt a Lot</span></h1>
        <p class="hero-tagline">“Building on Christ, securing our future.”</p>
        <p class="hero-lead">
          An Adopt a Lot Project. This is the 2,000 sqm lot where Link Church PH will build. Partner with us by adopting square meters at ₱7,000 each.
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
          <p class="video-caption">Faithful Foundations — Adopt a Lot</p>
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
            <span>Lot price per sqm is payable for <strong>7–12 months</strong>. Payable up to <strong>15 months</strong> for minimum income earners.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- What Faithful Foundations Mean -->
    <section class="section section-about">
      <div class="container">
        <span class="section-label">The Name</span>
        <h2 class="section-title text-center mb-5">What “Faithful Foundations” Mean</h2>

        <div class="row mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="meaning-card">
              <h3 class="meaning-title">Faithful</h3>
              <p class="mb-0">Shows that God will always provide and that our church is committed to taking care of the vision He’s given us.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="meaning-card">
              <h3 class="meaning-title">Foundations</h3>
              <p class="mb-0">Reminds us that anything that lasts needs a strong start; built on faith, prayer, unity, and God’s Word.</p>
            </div>
          </div>
        </div>

        <div class="verse-block">
          <p class="mb-3">In the Bible, a “foundation” isn’t just about a building—it’s about the truth, strength, and faith that everything in God’s work stands on.</p>
          <blockquote class="scripture">
            <p>“The only true foundation is Jesus Christ.”</p>
            <footer>— 1 Corinthians 3:11</footer>
          </blockquote>
          <p class="mb-0 mt-3">So, “Faithful Foundations” means we’re building our church on Jesus, who is solid and unshakable. Just like a building needs a strong base to stand, this project is about setting a strong start by getting the land and bringing the church together in faith and unity to make our dream happen.</p>
        </div>
      </div>
    </section>

    <!-- Foundation Project Lot -->
    <section class="section section-lot-label bg-light">
      <div class="container text-center">
        <span class="section-label">Foundation Project</span>
        <h2 class="section-title mb-0">LOT: 2,000 sqm</h2>
      </div>
    </section>

    <!-- How to Adopt-a-Lot -->
    <section class="section section-how">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-label">Get Involved</span>
          <h2 class="section-title">How to Adopt-a-Lot?</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="step-card">
              <span class="step-num">01</span>
              <h4>Price per sqm</h4>
              <p class="mb-0">Each 1 sqm lot will be priced at a minimum of ₱7,000 per sqm.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="step-card">
              <span class="step-num">02</span>
              <h4>Choose your lot</h4>
              <p class="mb-0">Choose a 1 sqm lot from 1–2000.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="step-card">
              <span class="step-num">03</span>
              <h4>Minimum adoption</h4>
              <p class="mb-0">Minimum lot to be adopted: 1 or more.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="step-card">
              <span class="step-num">04</span>
              <h4>Payment terms</h4>
              <p class="mb-0">Lot price per sqm is payable for <strong>7–12 months</strong>. Payable up to <strong>15 months</strong> for minimum income earners.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="step-card">
              <span class="step-num">05</span>
              <h4>No limit</h4>
              <p class="mb-0">There’s no limitation on adopting a lot as long as it does not feel like a burden.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="step-card step-card-accent">
              <span class="step-num">06</span>
              <h4>Plant a seed</h4>
              <p class="mb-0">Adopting a lot means planting a seed and watching it grow. It’s easier for everyone to help.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Adopt a Lot -->
    <section class="section section-why bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-label">The Why</span>
          <h2 class="section-title">Why Adopt a Lot?</h2>
          <p class="lead text-muted mx-auto" style="max-width: 640px;">
            Adopting a lot for a future church is good because:
          </p>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="why-card">
              <div class="why-icon"><i class="bi bi-piggy-bank"></i></div>
              <p class="mb-0">Instead of raising all the money at once, people can give for small parts of the lot. Everyone feels part of it.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="why-card">
              <div class="why-icon"><i class="bi bi-house-heart"></i></div>
              <p class="mb-0">You’re not just giving money. You’re helping build God’s house.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="why-card">
              <div class="why-icon"><i class="bi bi-people"></i></div>
              <p class="mb-0">It brings the church family closer. When we work together, we grow together.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="why-card">
              <div class="why-icon"><i class="bi bi-award"></i></div>
              <p class="mb-0">It leaves a lasting legacy. One day, you can say, “I helped make this church possible.”</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="why-card">
              <div class="why-icon"><i class="bi bi-heart"></i></div>
              <p class="mb-0">It grows our faith. We trust God to bless and multiply what we give.</p>
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
                Contact us to give toward the lot (₱7,000 per sqm). Payable in <strong>7–12 months</strong>, or up to <strong>15 months</strong> for minimum income earners. This is where Link Church PH will build.
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

.hero-tagline {
  font-size: 1.25rem;
  font-style: italic;
  opacity: 0.95;
  margin-bottom: 0.5rem;
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

/* Video - full width */
.section-video {
  padding-top: 0;
  padding-bottom: 60px;
}

.video-wrapper {
  width: 100%;
  max-width: 100%;
}

.video-card {
  background: #0a0a0a;
  overflow: hidden;
  border-radius: 0;
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
  background: #fff;
  text-align: center;
}

/* What Faithful Foundations Mean */
.meaning-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  height: 100%;
}

.meaning-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
}

.meaning-card p {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.95rem;
}

.verse-block {
  background: rgba(12, 93, 86, 0.06);
  border-radius: 12px;
  padding: 1.75rem 2rem;
  border-left: 4px solid var(--primary-color);
}

.verse-block p {
  color: var(--color-text);
  line-height: 1.6;
}

.scripture {
  margin: 1rem 0;
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: 8px;
  border: none;
}

.scripture p {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.scripture footer {
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.85;
}

.section-lot-label {
  padding: 50px 0 !important;
}

.section-lot-label .section-title {
  margin-bottom: 0;
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

.step-card-accent {
  border-color: rgba(12, 93, 86, 0.2);
  background: rgba(12, 93, 86, 0.04);
}

/* Why Adopt a Lot */
.why-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: 100%;
  transition: box-shadow 0.25s ease;
}

.why-card:hover {
  box-shadow: 0 8px 30px rgba(12, 93, 86, 0.08);
}

.why-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  border-radius: 10px;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.why-card p {
  color: var(--color-text);
  line-height: 1.6;
  font-size: 0.95rem;
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
