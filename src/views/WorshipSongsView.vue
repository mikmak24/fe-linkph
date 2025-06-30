<template>
  <div class="worship-songs">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white">Home</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/link-worship" class="text-white">Link Worship</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">Worship Songs</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Worship Songs</h1>
        <p class="lead mb-4">Songs of Praise and Worship</p>
        <div class="hero-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-music-note me-1"></i> Songs Collection
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
            <div class="songs-content">
              <div class="welcome-section mb-5">
                <h2 class="text-center mb-4">Worship Songs Collection</h2>
                <p class="text-center lead">
                  "Sing to the LORD a new song; sing to the LORD, all the earth. Sing to the LORD, praise his name; 
                  proclaim his salvation day after day." - Psalm 96:1-2
                </p>
              </div>

              <div class="songs-grid">
                <div class="song-card">
                  <div class="song-header">
                    <h3>Amazing Grace</h3>
                    <span class="song-category">Traditional Hymn</span>
                  </div>
                  <div class="song-content">
                    <p class="song-lyrics">
                      Amazing grace! How sweet the sound<br>
                      That saved a wretch like me!<br>
                      I once was lost, but now am found;<br>
                      Was blind, but now I see.
                    </p>
                    <div class="song-meta">
                      <span class="song-author">John Newton</span>
                      <span class="song-year">1779</span>
                    </div>
                  </div>
                </div>

                <div class="song-card">
                  <div class="song-header">
                    <h3>How Great Thou Art</h3>
                    <span class="song-category">Traditional Hymn</span>
                  </div>
                  <div class="song-content">
                    <p class="song-lyrics">
                      O Lord my God, when I in awesome wonder<br>
                      Consider all the worlds Thy hands have made<br>
                      I see the stars, I hear the rolling thunder<br>
                      Thy power throughout the universe displayed
                    </p>
                    <div class="song-meta">
                      <span class="song-author">Carl Boberg</span>
                      <span class="song-year">1885</span>
                    </div>
                  </div>
                </div>

                <div class="song-card">
                  <div class="song-header">
                    <h3>Great Is Thy Faithfulness</h3>
                    <span class="song-category">Traditional Hymn</span>
                  </div>
                  <div class="song-content">
                    <p class="song-lyrics">
                      Great is Thy faithfulness, O God my Father<br>
                      There is no shadow of turning with Thee<br>
                      Thou changest not, Thy compassions, they fail not<br>
                      As Thou hast been, Thou forever will be
                    </p>
                    <div class="song-meta">
                      <span class="song-author">Thomas Chisholm</span>
                      <span class="song-year">1923</span>
                    </div>
                  </div>
                </div>

                <div class="song-card">
                  <div class="song-header">
                    <h3>It Is Well With My Soul</h3>
                    <span class="song-category">Traditional Hymn</span>
                  </div>
                  <div class="song-content">
                    <p class="song-lyrics">
                      When peace like a river attendeth my way<br>
                      When sorrows like sea billows roll<br>
                      Whatever my lot, Thou hast taught me to say<br>
                      It is well, it is well with my soul
                    </p>
                    <div class="song-meta">
                      <span class="song-author">Horatio Spafford</span>
                      <span class="song-year">1873</span>
                    </div>
                  </div>
                </div>

                <div class="song-card">
                  <div class="song-header">
                    <h3>What A Friend We Have In Jesus</h3>
                    <span class="song-category">Traditional Hymn</span>
                  </div>
                  <div class="song-content">
                    <p class="song-lyrics">
                      What a friend we have in Jesus<br>
                      All our sins and griefs to bear<br>
                      What a privilege to carry<br>
                      Everything to God in prayer
                    </p>
                    <div class="song-meta">
                      <span class="song-author">Joseph M. Scriven</span>
                      <span class="song-year">1855</span>
                    </div>
                  </div>
                </div>

                <div class="song-card">
                  <div class="song-header">
                    <h3>Be Thou My Vision</h3>
                    <span class="song-category">Traditional Hymn</span>
                  </div>
                  <div class="song-content">
                    <p class="song-lyrics">
                      Be Thou my Vision, O Lord of my heart<br>
                      Naught be all else to me, save that Thou art<br>
                      Thou my best Thought, by day or by night<br>
                      Waking or sleeping, Thy presence my light
                    </p>
                    <div class="song-meta">
                      <span class="song-author">Dallan Forgaill</span>
                      <span class="song-year">8th Century</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="coming-soon-section mt-5">
                <div class="coming-soon-card">
                  <h3>More Songs Coming Soon!</h3>
                  <p>We're working on adding more contemporary worship songs and modern hymns to our collection. Stay tuned for updates!</p>
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

.songs-content {
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

.songs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.song-card {
  background: #f8f9fa;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.song-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--primary-color);
}

.song-header {
  margin-bottom: 1rem;
}

.song-header h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.song-category {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.song-content {
  color: #4a5568;
}

.song-lyrics {
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #2d3748;
}

.song-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #718096;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
}

.song-author {
  font-weight: 500;
}

.song-year {
  font-style: italic;
}

.coming-soon-section {
  text-align: center;
}

.coming-soon-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.coming-soon-card h3 {
  margin-bottom: 1rem;
}

.coming-soon-card p {
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .songs-content {
    padding: 1.5rem;
  }
  
  .songs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .song-card {
    padding: 1.25rem;
  }
}
</style> 