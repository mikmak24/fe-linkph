<template>
  <div class="link-group-guide">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold mb-4">Link Group Guide</h1>
        <p class="lead mb-4">Basic Christian Teaching</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="study-guide">
              <h2 class="text-center mb-5">Available Guides</h2>
              
              <div class="lessons-list">
                <RouterLink to="/link-group-guide/the-church" class="lesson-card">
                  <div class="lesson-content">
                    <h3>Lesson 1: The Church</h3>
                    <p>Understanding the meaning, purpose, and importance of the Church in Christian life.</p>
                    <div class="lesson-meta">
                      <span class="badge bg-primary">Basic Christian Teaching</span>
                    </div>
                  </div>
                  <div class="lesson-arrow">
                    <i class="bi bi-chevron-right"></i>
                  </div>
                </RouterLink>

                <RouterLink to="/link-group-guide/who-are-you-christian" class="lesson-card">
                  <div class="lesson-content">
                    <h3>Lesson 2: Who Are You, Christian?</h3>
                    <p>Discovering your new identity in Christ and understanding what it means to be a Christian.</p>
                    <div class="lesson-meta">
                      <span class="badge bg-primary">Basic Christian Teaching</span>
                    </div>
                  </div>
                  <div class="lesson-arrow">
                    <i class="bi bi-chevron-right"></i>
                  </div>
                </RouterLink>

                <RouterLink to="/link-group-guide/the-bible" class="lesson-card">
                  <div class="lesson-content">
                    <h3>Lesson 3: The Bible</h3>
                    <p>Understanding the Word of God, its authority, and its role in the Christian life.</p>
                    <div class="lesson-meta">
                      <span class="badge bg-primary">Basic Christian Teaching</span>
                    </div>
                  </div>
                  <div class="lesson-arrow">
                    <i class="bi bi-chevron-right"></i>
                  </div>
                </RouterLink>

                <RouterLink to="/link-group-guide/the-person-of-god" class="lesson-card">
                  <div class="lesson-content">
                    <h3>Lesson 4: The Person of God</h3>
                    <p>Exploring the nature, attributes, and personality of God as revealed in Scripture.</p>
                    <div class="lesson-meta">
                      <span class="badge bg-primary">Basic Christian Teaching</span>
                    </div>
                  </div>
                  <div class="lesson-arrow">
                    <i class="bi bi-chevron-right"></i>
                  </div>
                </RouterLink>

                <!-- Add more guides here as they become available -->
                <div class="lesson-card coming-soon">
                  <div class="lesson-content">
                    <h3>More Guides Coming Soon</h3>
                    <p>Stay tuned for more guides in the Basic Christian Teaching series.</p>
                    <div class="lesson-meta">
                      <span class="badge bg-secondary">Coming Soon</span>
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
  background-color: var(--primary-color);
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

.content-section {
  background-color: #f8f9fa;
}

.study-guide {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem;
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.lesson-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.lesson-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--primary-color);
  color: inherit;
}

.lesson-card.coming-soon {
  opacity: 0.7;
  cursor: not-allowed;
}

.lesson-card.coming-soon:hover {
  transform: none;
  box-shadow: none;
  border-color: transparent;
}

.lesson-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.lesson-icon i {
  font-size: 1.5rem;
  color: white;
}

.lesson-content {
  flex-grow: 1;
}

.lesson-content h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.lesson-content p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.lesson-meta {
  margin-top: 0.5rem;
}

.lesson-arrow {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .study-guide {
    padding: 1.5rem;
  }
  
  .lesson-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .lesson-icon {
    margin: 0 auto 1rem;
  }
  
  .lesson-arrow {
    display: none;
  }
}
</style>