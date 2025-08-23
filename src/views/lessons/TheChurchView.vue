<template>
  <div class="link-group-guide">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white">Home</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/link-group-guide" class="text-white">Link Group Guide</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">Lesson 2: The Church</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Lesson 2: The Church</h1>
        <p class="lead mb-4">Basic Christian Teaching</p>
        <div class="guide-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-clock me-1"></i> 45-60 mins
          </span>
          <span class="badge bg-light text-primary">
            <i class="bi bi-people me-1"></i> Group Study
          </span>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="study-guide">
              <!-- Quick Navigation -->
              <div class="quick-nav mb-5">
                <h4 class="mb-3">Quick Navigation</h4>
                <div class="nav-buttons">
                  <a href="#opening-prayer" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-praying-hands me-1"></i> Opening Prayer
                  </a>
                  <a href="#ice-breaker" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-chat-dots me-1"></i> Ice Breaker
                  </a>
                  <a href="#main-content" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-book me-1"></i> Main Content
                  </a>
                  <a href="#discussion" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-question-circle me-1"></i> Discussion
                  </a>
                </div>
              </div>

              <!-- Opening Prayer -->
              <div id="opening-prayer" class="guide-section opening-prayer mb-5">
                <div class="section-header">
                  <i class="bi bi-praying-hands section-icon"></i>
                  <h3 class="section-title">Begin with a word of Prayer</h3>
                </div>
              </div>

              <!-- Ice Breaker -->
              <div id="ice-breaker" class="guide-section ice-breaker mb-5">
                <div class="section-header">
                  <i class="bi bi-chat-dots section-icon"></i>
                  <h3 class="section-title">Greet and Engage</h3>
                </div>
                <div class="section-content">
                  <div class="ice-breaker-card">
                    <p class="question">What's your favorite thing about going to church, and why?</p>
                  </div>
                </div>
              </div>

              <!-- Introduction -->
              <div class="guide-section introduction mb-5">
                <div class="section-header">
                  <i class="bi bi-book section-icon"></i>
                  <h3 class="section-title">Introduction</h3>
                </div>
                <div class="section-content">
                  <div class="intro-card">
                    <p>We Christians realize that the most important parts of our lives are those that make an <span class="highlight">impact for eternity</span>. The study of God and his relations to, purposes for, and work within the created universe- <span class="highlight">Matters!</span> Welcome to our Link Group where we focus on <span class="highlight">biblical small groups</span> grounded in the teachings of the bible. Our goal is to <span class="highlight">ground biblical believers</span> and to <span class="highlight">develop disciples that make disciplines!</span></p>
                  </div>
                </div>
              </div>

              <!-- Main Content -->
              <div id="main-content" class="guide-section main-content mb-5">
                <div class="section-header">
                  <i class="bi bi-journal-text section-icon"></i>
                  <h3 class="section-title">What is the meaning of the word Church?</h3>
                </div>
                <div class="section-content">
                  <div class="content-card">
                    <div class="key-points">
                      <div class="key-point">
                        <i class="bi bi-translate"></i>
                        <div>
                          <p>The word "Church" comes from the Greek word <span class="highlight">"Ecclesia"</span> meaning <span class="highlight">"to call out from."</span> Christians are called out from the world system to be <span class="highlight">"in Christ."</span> I Corinthians 1:2, "Unto the Church of God which is at Corinth… called to be saints."</p>
                        </div>
                      </div>
                      <div class="key-point">
                        <i class="bi bi-people"></i>
                        <div>
                          <p>The Church which is the <span class="highlight">body of Christ</span> consists of all <span class="highlight">regenerated souls</span>, each one <span class="highlight">redeemed by the Blood of Christ</span> and <span class="highlight">transformed by the Holy Spirit</span>.</p>
                        </div>
                      </div>
                      <div class="key-point">
                        <i class="bi bi-globe"></i>
                        <div>
                          <p>Only a small part of the Church is on earth for a great part have already gone to be with the Lord. The Church has <span class="highlight">no visible head on earth</span> but an <span class="highlight">unseen Head (Christ) in heaven</span>.</p>
                        </div>
                      </div>
                    </div>

                    <div class="distinctions mt-4">
                      <h4 class="distinctions-title">Distinctions:</h4>
                      <div class="distinction-grid">
                        <div class="distinction-item">
                          <h5><i class="bi bi-building me-2"></i>Local Church vs Universal Church</h5>
                          <ul>
                            <li><span class="highlight">Local church</span>: any local congregation in a given location</li>
                            <li><span class="highlight">Universal church</span>: includes all Churches everywhere</li>
                          </ul>
                        </div>
                        <div class="distinction-item">
                          <h5><i class="bi bi-person-check me-2"></i>Actual Church vs Ideal Church</h5>
                          <ul>
                            <li><span class="highlight">Actual Church</span>: includes those who are imperfect, yet striving after perfection through Christ</li>
                            <li><span class="highlight">Ideal Church</span>: made up of those who have already gone to heaven and are perfect now</li>
                          </ul>
                        </div>
                        <div class="distinction-item">
                          <h5><i class="bi bi-eye me-2"></i>Visible Church vs Invisible Church</h5>
                          <ul>
                            <li><span class="highlight">Visible Church</span>: those whose names are on local Church roles, all earthly denominations and sects</li>
                            <li><span class="highlight">Invisible Church</span>: made up of those names are written in the Lamb's Book of Life</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Who Founded the Church -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-person-badge section-icon"></i>
                  <h3 class="section-title">Who Founded the Church?</h3>
                </div>
                <div class="section-content">
                  <div class="founder-card">
                    <p>The Church was founded by <span class="highlight">Jesus Christ</span> on <span class="highlight">Peter's confession</span> that Jesus Christ. Matthew 16:16-18</p>
                  </div>
                </div>
              </div>

              <!-- How to be part of the Church -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-signpost-split section-icon"></i>
                  <h3 class="section-title">How to be part of the Church?</h3>
                </div>
                <div class="section-content">
                  <div class="steps-timeline">
                    <div class="step">
                      <div class="step-number">1</div>
                      <div class="step-content">
                        <h5><span class="highlight">Repentance</span></h5>
                        <p>Acts 2:38, "Then he said unto them, Repent." at Pentecost.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">2</div>
                      <div class="step-content">
                        <h5><span class="highlight">Faith in the Lord Jesus Christ</span></h5>
                        <p>As Savior, Lord and Son of God, Matthew 16:16-18.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">3</div>
                      <div class="step-content">
                        <h5><span class="highlight">Salvation, regeneration, the new birth</span></h5>
                        <p>Acts 2:47, the saved added to the Church. They are not added to the Church in order to be saved but added to the church because they were saved already.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">4</div>
                      <div class="step-content">
                        <h5><span class="highlight">Baptism into the Name</span></h5>
                        <p>Acts 2:38, "…repent and be baptized…" Matthew 28:19; Acts 10:47, 48; Acts 22:16.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">5</div>
                      <div class="step-content">
                        <h5><span class="highlight">Continuance in the Apostles' doctrine</span></h5>
                        <p>Acts 2:42, "And they continued steadfastly in the Apostles' doctrine." They lived according to the Scripture.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Purpose of the Church -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-bullseye section-icon"></i>
                  <h3 class="section-title">What's the purpose of the Church?</h3>
                </div>
                <div class="section-content">
                  <div class="purposes-grid">
                    <div class="purpose-card">
                      <div class="purpose-icon">
                        <i class="bi bi-heart"></i>
                      </div>
                      <h5><span class="highlight">To worship God and to glorify Him on the earth</span></h5>
                      <p>Ephesians 1:4-6, "…to the praise of the glory of His grace, wherein He hath made us accepted in the Beloved."</p>
                    </div>
                    <div class="purpose-card">
                      <div class="purpose-icon">
                        <i class="bi bi-megaphone"></i>
                      </div>
                      <h5><span class="highlight">To evangelize the world with the Gospel</span></h5>
                      <p>Matthew 28:19, 20. "Go ye therefore, and teach all nations." Mark 16:15. See also Ephesians 3:8.</p>
                    </div>
                    <div class="purpose-card">
                      <div class="purpose-icon">
                        <i class="bi bi-mortarboard"></i>
                      </div>
                      <h5><span class="highlight">To teach and instruct Christians</span></h5>
                      <p>Ephesians 4:11-15, "… for the perfecting of the saints…" I Thessalonians 5:11; I Corinthians 12:1-31.</p>
                    </div>
                    <div class="purpose-card">
                      <div class="purpose-icon">
                        <i class="bi bi-eye"></i>
                      </div>
                      <h5><span class="highlight">To witness constantly</span></h5>
                      <p>Acts 1:8, "… witnesses of Jerusalem… Judea… Samaria…"</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Ordinances -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-bookmark-check section-icon"></i>
                  <h3 class="section-title">What are Ordinances?</h3>
                </div>
                <div class="section-content">
                  <div class="ordinances-card">
                    <p class="ordinance-intro">An <span class="highlight">ordinance</span> is a Christian rite, associated with tangible elements (water; bread and wine), that is celebrated by the church of Jesus Christ. The term is closely associated with the word <span class="highlight">sacrament</span>, which is an outward and visible sign of an inward and invisible grace.</p>
                    <div class="ordinances-list">
                      <div class="ordinance-item">
                        <div class="ordinance-icon">
                          <i class="bi bi-droplet"></i>
                        </div>
                        <div class="ordinance-content">
                          <h5><span class="highlight">1. Baptism</span></h5>
                          <p>Matthew 28:19, 20; Mark 16:16; Acts 2:38-41; Acts 8:36-40; Acts 10:47, 48.</p>
                        </div>
                      </div>
                      <div class="ordinance-item">
                        <div class="ordinance-icon">
                          <i class="bi bi-cup-hot"></i>
                        </div>
                        <div class="ordinance-content">
                          <h5><span class="highlight">2. The Lord's Supper</span></h5>
                          <p>Acts 2:42-46; acts 20:7; I Corinthians 11:20-34.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Conclusion -->
              <div class="guide-section conclusion mb-5">
                <div class="section-header">
                  <i class="bi bi-check-circle section-icon"></i>
                  <h3 class="section-title">Conclusion</h3>
                </div>
                <div class="section-content">
                  <div class="conclusion-card">
                    <p>In summary, the church is not a building or a denomination. According to the Bible, the church is the <span class="highlight">body of Christ</span>—all those who have placed their faith in Jesus Christ for salvation. Learning more about the church helps us make a real difference in the world, not just temporally, but for <span class="highlight">all eternity</span>.</p>
                  </div>
                </div>
              </div>

              <!-- Discussion Questions -->
              <div id="discussion" class="guide-section discussion-questions">
                <div class="section-header">
                  <i class="bi bi-question-circle section-icon"></i>
                  <h3 class="section-title">Link Questions</h3>
                </div>
                <div class="section-content">
                  <div class="questions-card">
                    <div class="question-item">
                      <h5>What are some <span class="highlight">misconception</span> you have about the church?</h5>
                    </div>
                    <div class="question-item">
                      <h5>Are you <span class="highlight">part of the Church</span> or just <span class="highlight">attending the Church</span>?</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  color: white;
  position: relative;
  padding: 6rem 0;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(to bottom right, transparent 49%, white 51%);
}

.breadcrumb {
  background: transparent;
}

.breadcrumb-item a {
  text-decoration: none;
}

.guide-meta {
  margin-top: 2rem;
}

.content-section {
  background-color: #f8f9fa;
}

.study-guide {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem;
}

.quick-nav {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
}

.section-title {
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
}

.section-content {
  color: #4a5568;
  line-height: 1.7;
}

.prayer-card, .ice-breaker-card, .intro-card, .content-card, .founder-card, .conclusion-card, .questions-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.prayer-text {
  font-style: italic;
  color: #2c3e50;
}

.question-title {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.tips {
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.tips h6 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.tips ul {
  margin: 0;
  padding-left: 1.5rem;
}

.key-points {
  display: grid;
  gap: 1.5rem;
}

.key-point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.key-point i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.distinctions-title {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.distinction-grid {
  display: grid;
  gap: 1.5rem;
}

.distinction-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.distinction-item h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.distinction-item ul {
  margin: 0;
  padding-left: 1.5rem;
}

.steps-timeline {
  position: relative;
  padding-left: 2rem;
}

.steps-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-color);
}

.step {
  position: relative;
  margin-bottom: 2rem;
}

.step:last-child {
  margin-bottom: 0;
}

.step-number {
  position: absolute;
  left: -2.5rem;
  width: 2rem;
  height: 2rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.step-content h5 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.purposes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.purpose-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align: center;
}

.purpose-icon {
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
}

.purpose-card h5 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.ordinances-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.ordinance-intro {
  margin-bottom: 1.5rem;
}

.ordinances-list {
  display: grid;
  gap: 1.5rem;
}

.ordinance-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.ordinance-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.ordinance-content h5 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.question-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.question-item:last-child {
  margin-bottom: 0;
}

.question-item h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.question-tips {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
}

.question-tips h6 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.question-tips ul {
  margin: 0;
  padding-left: 1.5rem;
}

@media (max-width: 768px) {
  .study-guide {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
  
  .purposes-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-buttons {
    flex-direction: column;
  }
  
  .nav-buttons .btn {
    width: 100%;
  }
}

.highlight {
  background: linear-gradient(120deg, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0.2) 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  padding: 0 0.2em;
}

.highlight:hover {
  background-size: 100% 100%;
}
</style> 