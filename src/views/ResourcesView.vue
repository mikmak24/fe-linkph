<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="resources-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Resources</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Resources</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">Grow Your Faith</h2>
            <p class="lead mb-4">Resources to help you grow in your relationship with God</p>
            <p>We've curated a collection of resources to help you dive deeper into God's Word, strengthen your prayer life, and grow in your understanding of Christian doctrine and living.</p>
            <p>Whether you're new to faith or have been following Jesus for years, you'll find something here to encourage and challenge you in your spiritual journey.</p>
          </div>
          <div class="col-lg-6">
            <img src="https://source.unsplash.com/random/700x500/?bible,study" alt="Bible Study Resources" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Sermons Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8">
            <h2 class="section-title">Sermon Archives</h2>
            <p class="lead">Watch or listen to our recent messages</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="#" class="btn btn-outline-primary">View All Sermons</a>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="sermon-card h-100 rounded shadow-sm overflow-hidden">
              <div class="sermon-img position-relative">
                <img src="https://source.unsplash.com/random/600x400/?church,preaching" alt="Sermon" class="img-fluid w-100">
                <a href="#" class="sermon-play">
                  <i class="bi bi-play-circle"></i>
                </a>
              </div>
              <div class="sermon-content p-4 bg-white">
                <span class="sermon-date d-block text-muted mb-2">May 21, 2023</span>
                <h4>Finding Peace in the Storm</h4>
                <p>How to experience God's peace even in the midst of life's challenges and difficulties.</p>
                <div class="sermon-details">
                  <span class="me-3"><i class="bi bi-person me-1"></i> Pastor John Doe</span>
                  <span><i class="bi bi-book me-1"></i> Matthew 8:23-27</span>
                </div>
                <div class="sermon-actions mt-3">
                  <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-headphones me-1"></i> Listen</a>
                  <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-download me-1"></i> Download</a>
                  <a href="#" class="btn btn-sm btn-outline-primary"><i class="bi bi-file-text me-1"></i> Notes</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="sermon-card h-100 rounded shadow-sm overflow-hidden">
              <div class="sermon-img position-relative">
                <img src="https://source.unsplash.com/random/600x400/?bible,teaching" alt="Sermon" class="img-fluid w-100">
                <a href="#" class="sermon-play">
                  <i class="bi bi-play-circle"></i>
                </a>
              </div>
              <div class="sermon-content p-4 bg-white">
                <span class="sermon-date d-block text-muted mb-2">May 14, 2023</span>
                <h4>The Power of Prayer</h4>
                <p>Understanding the transformative power of prayer in our daily walk with God.</p>
                <div class="sermon-details">
                  <span class="me-3"><i class="bi bi-person me-1"></i> Pastor John Doe</span>
                  <span><i class="bi bi-book me-1"></i> James 5:13-18</span>
                </div>
                <div class="sermon-actions mt-3">
                  <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-headphones me-1"></i> Listen</a>
                  <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-download me-1"></i> Download</a>
                  <a href="#" class="btn btn-sm btn-outline-primary"><i class="bi bi-file-text me-1"></i> Notes</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="sermon-card h-100 rounded shadow-sm overflow-hidden">
              <div class="sermon-img position-relative">
                <img src="https://source.unsplash.com/random/600x400/?preaching" alt="Sermon" class="img-fluid w-100">
                <a href="#" class="sermon-play">
                  <i class="bi bi-play-circle"></i>
                </a>
              </div>
              <div class="sermon-content p-4 bg-white">
                <span class="sermon-date d-block text-muted mb-2">May 7, 2023</span>
                <h4>Living with Purpose</h4>
                <p>Discovering God's unique purpose for your life and how to fulfill it.</p>
                <div class="sermon-details">
                  <span class="me-3"><i class="bi bi-person me-1"></i> Pastor John Doe</span>
                  <span><i class="bi bi-book me-1"></i> Ephesians 2:8-10</span>
                </div>
                <div class="sermon-actions mt-3">
                  <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-headphones me-1"></i> Listen</a>
                  <a href="#" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-download me-1"></i> Download</a>
                  <a href="#" class="btn btn-sm btn-outline-primary"><i class="bi bi-file-text me-1"></i> Notes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Devotionals Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8">
            <h2 class="section-title">Daily Devotionals</h2>
            <p class="lead">Start your day with God's Word</p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a href="#" class="btn btn-outline-primary">Subscribe to Daily Devotionals</a>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="devotional-card p-4 bg-white rounded shadow-sm h-100">
              <div class="devotional-date mb-3">
                <span class="badge bg-primary">May 22, 2023</span>
              </div>
              <h4>Walking in Faith</h4>
              <p class="devotional-verse fw-bold">"For we walk by faith, not by sight." - 2 Corinthians 5:7</p>
              <p>Faith means trusting God even when the path isn't clear. Today, consider an area where God is asking you to trust Him without seeing the full picture.</p>
              <a href="#" class="btn btn-sm btn-outline-primary mt-2">Read More</a>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="devotional-card p-4 bg-white rounded shadow-sm h-100">
              <div class="devotional-date mb-3">
                <span class="badge bg-primary">May 21, 2023</span>
              </div>
              <h4>God's Unfailing Love</h4>
              <p class="devotional-verse fw-bold">"Because of the LORD's great love we are not consumed, for his compassions never fail." - Lamentations 3:22</p>
              <p>God's love never runs out. No matter what you're facing today, His compassion for you is new every morning.</p>
              <a href="#" class="btn btn-sm btn-outline-primary mt-2">Read More</a>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="devotional-card p-4 bg-white rounded shadow-sm h-100">
              <div class="devotional-date mb-3">
                <span class="badge bg-primary">May 20, 2023</span>
              </div>
              <h4>Strength in Weakness</h4>
              <p class="devotional-verse fw-bold">"My grace is sufficient for you, for my power is made perfect in weakness." - 2 Corinthians 12:9</p>
              <p>When we acknowledge our weakness, we open ourselves to experience God's strength working through us in powerful ways.</p>
              <a href="#" class="btn btn-sm btn-outline-primary mt-2">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bible Study Resources Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Bible Study Resources</h2>
            <p class="lead">Tools to help you dig deeper into God's Word</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="resource-card d-flex bg-white rounded shadow-sm p-4 h-100">
              <div class="resource-icon me-4">
                <i class="bi bi-journal-text fa-3x text-primary"></i>
              </div>
              <div class="resource-content">
                <h4>Basic Christian Doctrine</h4>
                <p>An expanded guide to understanding the fundamental teachings of the Christian faith. Perfect for new believers and those wanting to strengthen their theological foundation.</p>
                <a href="#" class="btn btn-outline-primary">Download PDF</a>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="resource-card d-flex bg-white rounded shadow-sm p-4 h-100">
              <div class="resource-icon me-4">
                <i class="bi bi-praying-hands fa-3x text-primary"></i>
              </div>
              <div class="resource-content">
                <h4>Prayer Guide</h4>
                <p>Learn how to develop a meaningful prayer life with this comprehensive guide covering different types of prayer, overcoming obstacles, and establishing a consistent prayer routine.</p>
                <a href="#" class="btn btn-outline-primary">Download PDF</a>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="resource-card d-flex bg-white rounded shadow-sm p-4 h-100">
              <div class="resource-icon me-4">
                <i class="bi bi-people fa-3x text-primary"></i>
              </div>
              <div class="resource-content">
                <h4>Small Group Studies</h4>
                <p>Access our library of small group Bible studies covering various books of the Bible and topical studies designed for group discussion and application.</p>
                <a href="#" class="btn btn-outline-primary">Browse Studies</a>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="resource-card d-flex bg-white rounded shadow-sm p-4 h-100">
              <div class="resource-icon me-4">
                <i class="bi bi-heart fa-3x text-primary"></i>
              </div>
              <div class="resource-content">
                <h4>Discipleship Materials</h4>
                <p>Resources for one-on-one discipleship, including guides for mentors and those being discipled. Learn how to grow in your faith and help others do the same.</p>
                <a href="#" class="btn btn-outline-primary">Access Materials</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Calendar Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Upcoming Events</h2>
            <p class="lead">Mark your calendar and join us</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="calendar-events">
              <div class="event-item d-flex align-items-center bg-white rounded shadow-sm p-3 mb-3">
                <div class="event-date text-center me-4">
                  <span class="date-day d-block">28</span>
                  <span class="date-month d-block">May</span>
                </div>
                <div class="event-details flex-grow-1">
                  <h5 class="mb-1">Family Sunday Service</h5>
                  <p class="mb-0 text-muted"><i class="far fa-clock me-2"></i>10:00 AM - 12:00 PM</p>
                  <p class="mb-0 text-muted"><i class="fas fa-map-marker-alt me-2"></i>Main Sanctuary</p>
                </div>
                <div class="event-action">
                  <a href="#" class="btn btn-outline-primary">Details</a>
                </div>
              </div>
              
              <div class="event-item d-flex align-items-center bg-white rounded shadow-sm p-3 mb-3">
                <div class="event-date text-center me-4">
                  <span class="date-day d-block">01</span>
                  <span class="date-month d-block">Jun</span>
                </div>
                <div class="event-details flex-grow-1">
                  <h5 class="mb-1">Prayer Summit</h5>
                  <p class="mb-0 text-muted"><i class="far fa-clock me-2"></i>7:00 PM - 9:00 PM</p>
                  <p class="mb-0 text-muted"><i class="fas fa-map-marker-alt me-2"></i>Prayer Room</p>
                </div>
                <div class="event-action">
                  <a href="#" class="btn btn-outline-primary">Details</a>
                </div>
              </div>
              
              <div class="event-item d-flex align-items-center bg-white rounded shadow-sm p-3 mb-3">
                <div class="event-date text-center me-4">
                  <span class="date-day d-block">04</span>
                  <span class="date-month d-block">Jun</span>
                </div>
                <div class="event-details flex-grow-1">
                  <h5 class="mb-1">Youth Night</h5>
                  <p class="mb-0 text-muted"><i class="far fa-clock me-2"></i>6:30 PM - 8:30 PM</p>
                  <p class="mb-0 text-muted"><i class="fas fa-map-marker-alt me-2"></i>Youth Center</p>
                </div>
                <div class="event-action">
                  <a href="#" class="btn btn-outline-primary">Details</a>
                </div>
              </div>
              
              <div class="event-item d-flex align-items-center bg-white rounded shadow-sm p-3 mb-3">
                <div class="event-date text-center me-4">
                  <span class="date-day d-block">10</span>
                  <span class="date-month d-block">Jun</span>
                </div>
                <div class="event-details flex-grow-1">
                  <h5 class="mb-1">Community Outreach</h5>
                  <p class="mb-0 text-muted"><i class="far fa-clock me-2"></i>9:00 AM - 1:00 PM</p>
                  <p class="mb-0 text-muted"><i class="fas fa-map-marker-alt me-2"></i>Downtown Park</p>
                </div>
                <div class="event-action">
                  <a href="#" class="btn btn-outline-primary">Details</a>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-4">
              <a href="#" class="btn btn-primary">View Full Calendar</a>
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
            <h2 class="mb-4">Need Personal Support?</h2>
            <p class="lead mb-4">Our pastoral team is available to provide prayer, counseling, and spiritual guidance.</p>
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

.sermon-card {
  transition: all 0.3s ease;
}

.sermon-card:hover {
  transform: translateY(-10px);
}

.sermon-img {
  height: 200px;
  overflow: hidden;
}

.sermon-img img {
  transition: transform 0.5s ease;
  height: 100%;
  object-fit: cover;
}

.sermon-card:hover .sermon-img img {
  transform: scale(1.05);
}

.sermon-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.sermon-play:hover {
  background-color: var(--primary-color);
  color: white;
}

.sermon-details {
  font-size: 0.85rem;
  color: var(--text-color);
}

.devotional-card {
  transition: all 0.3s ease;
}

.devotional-card:hover {
  transform: translateY(-10px);
}

.devotional-verse {
  font-style: italic;
}

.resource-card {
  transition: all 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-5px);
}

.event-date {
  width: 70px;
  height: 70px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.date-day {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.date-month {
  font-size: 0.9rem;
  text-transform: uppercase;
}

.event-item {
  transition: all 0.3s ease;
}

.event-item:hover {
  transform: translateX(5px);
}
</style> 