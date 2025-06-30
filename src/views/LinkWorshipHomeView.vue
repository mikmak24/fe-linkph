<template>
  <div class="link-worship-home">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white">Home</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">Link Worship</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Link Worship</h1>
        <p class="lead mb-4">Worshiping God in Spirit and Truth</p>
        <div class="hero-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-music-note-beamed me-1"></i> Worship Resources
          </span>
          <span class="badge bg-light text-primary">
            <i class="bi bi-heart me-1"></i> Praise & Worship
          </span>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="worship-content">
              <div class="welcome-section mb-5">
                <h2 class="text-center mb-4">Welcome to Link Worship</h2>
                <p class="text-center lead">
                  "But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, 
                  for the Father is seeking such people to worship him." - John 4:23
                </p>
              </div>

              <!-- Featured Resource -->
              <div class="featured-resource mb-5">
                <div class="featured-card">
                  <div class="featured-header">
                    <h3><i class="bi bi-book me-2"></i>Here I Am to Worship</h3>
                    <span class="featured-badge">Featured Resource</span>
                  </div>
                  <p class="featured-description">
                    A comprehensive guide to worship ministry based on Tim Hughes' teachings. Explore 10 chapters covering everything from heart preparation to practical worship leading.
                  </p>
                  <RouterLink to="/link-worship/here-i-am-to-worship" class="btn btn-primary">
                    <i class="bi bi-arrow-right me-1"></i>Explore Chapters
                  </RouterLink>
                </div>
              </div>

              <div class="worship-resources">
                <h3 class="text-center mb-4">Worship Resources</h3>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <RouterLink to="/link-worship/here-i-am-to-worship" class="resource-card">
                      <div class="resource-icon">
                        <i class="bi bi-book"></i>
                      </div>
                      <h4>Worship Ministry Guide</h4>
                      <p>Comprehensive chapters on worship leading, heart preparation, and practical ministry skills.</p>
                    </RouterLink>
                  </div>
                  <div class="col-md-6 mb-4">
                    <RouterLink to="/link-worship/songs" class="resource-card">
                      <div class="resource-icon">
                        <i class="bi bi-music-note"></i>
                      </div>
                      <h4>Worship Songs</h4>
                      <p>Explore our collection of worship songs and hymns to help you connect with God through music.</p>
                    </RouterLink>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="resource-card coming-soon">
                      <div class="resource-icon">
                        <i class="bi bi-play-circle"></i>
                      </div>
                      <h4>Worship Videos</h4>
                      <p>Watch and participate in worship sessions and devotionals. Coming soon!</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="resource-card coming-soon">
                      <div class="resource-icon">
                        <i class="bi bi-people"></i>
                      </div>
                      <h4>Worship Team</h4>
                      <p>Learn about our worship ministry and how to get involved. Coming soon!</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Access to Chapters -->
              <div class="chapters-preview mt-5">
                <h3 class="text-center mb-4">Worship Ministry Chapters</h3>
                <div class="chapters-grid">
                  <div class="chapter-card">
                    <div class="chapter-number">1</div>
                    <h4>One Thing</h4>
                    <p>Simplifying our focus in worship—loving and adoring Jesus above all else.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">2</div>
                    <h4>Shape of My Heart</h4>
                    <p>God is more interested in the condition and shape of our hearts than our musical abilities.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">3</div>
                    <h4>Never Lose the Wonder</h4>
                    <p>Keeping the sense of awe, reverence, and mystery alive in worship.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">4</div>
                    <h4>Leading Worship</h4>
                    <p>Leading worship is more than singing songs—it's about inviting others into God's presence.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">5</div>
                    <h4>Leading a Band</h4>
                    <p>Leading a worship band isn't just about coordinating music—it's about cultivating unity.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">6</div>
                    <h4>Choosing a Song List</h4>
                    <p>Choosing songs for worship is both a spiritual and strategic responsibility.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">7</div>
                    <h4>Musical Dynamics</h4>
                    <p>Worship is not just about what we sing, but how we express it—through dynamics.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">8</div>
                    <h4>Practical Tips</h4>
                    <p>Worship ministry is both spiritual and practical—excellence honors God.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">9</div>
                    <h4>Small Group Worship</h4>
                    <p>Worship isn't just for the big stage—it's just as meaningful in small, intimate settings.</p>
                  </div>
                  <div class="chapter-card">
                    <div class="chapter-number">10</div>
                    <h4>The Art of Crafting</h4>
                    <p>Worship is both spiritually inspired and carefully crafted—a blend of heart and creativity.</p>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <RouterLink to="/link-worship/here-i-am-to-worship" class="btn btn-outline-primary btn-lg">
                    <i class="bi bi-book me-2"></i>Read All Chapters
                  </RouterLink>
                </div>
              </div>

              <div class="worship-quote mt-5">
                <div class="quote-card">
                  <blockquote class="blockquote">
                    <p class="mb-0">
                      "Worship is not just singing songs. It's a lifestyle of giving God the glory He deserves in everything we do."
                    </p>
                  </blockquote>
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

.hero-meta {
  margin-top: 2rem;
}

.content-section {
  background-color: #f8f9fa;
}

.worship-content {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem;
}

.welcome-section {
  text-align: center;
  padding: 2rem 0;
}

.welcome-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.welcome-section .lead {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.7;
}

.featured-resource {
  text-align: center;
}

.featured-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.featured-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.featured-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.featured-description {
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

.worship-resources h3 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.resource-card {
  display: block;
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  height: 100%;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--primary-color);
  color: inherit;
}

.resource-card.coming-soon {
  opacity: 0.7;
  cursor: not-allowed;
}

.resource-card.coming-soon:hover {
  transform: none;
  box-shadow: none;
  border-color: transparent;
}

.resource-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.resource-icon i {
  font-size: 1.5rem;
  color: white;
}

.resource-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
}

.resource-card p {
  color: #4a5568;
  text-align: center;
  margin: 0;
}

.chapters-preview h3 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.chapters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chapter-card {
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}

.chapter-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--primary-color);
}

.chapter-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
  font-size: 1.1rem;
}

.chapter-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.chapter-card p {
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.worship-quote {
  text-align: center;
}

.quote-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.blockquote {
  margin: 0;
  font-style: italic;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .worship-content {
    padding: 1.5rem;
  }
  
  .resource-card {
    padding: 1.5rem;
  }
  
  .chapters-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-header {
    flex-direction: column;
    gap: 1rem;
  }
}
</style> 