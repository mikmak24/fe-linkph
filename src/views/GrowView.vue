<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="grow-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Grow</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Grow</li>
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
            <h2 class="section-title">Grow in Faith</h2>
            <p class="lead mb-4">Deepening your relationship with Christ</p>
            <p>At LINK PH, we're committed to helping you grow in your spiritual journey, whether you're taking your first steps in faith or have been walking with Christ for decades.</p>
            <p>God desires all of us to grow in our relationship with Him and become more like Jesus. We offer various opportunities for you to deepen your faith, connect with others, and develop spiritual disciplines that will help you thrive.</p>
            <div class="scripture-box p-4 bg-light rounded mt-4">
              <p class="mb-0 fst-italic">"But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen."</p>
              <p class="mb-0 text-end">- 2 Peter 3:18</p>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="@/assets/images/img-7.jpg" alt="Spiritual Growth" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Discipleship Pathway Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Our Discipleship Pathway</h2>
            <p class="lead">Four key stages to help you grow in your faith journey</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="path-card p-4 bg-white rounded shadow-sm h-100 text-center position-relative">
              <div class="path-number position-absolute">1</div>
              <div class="path-icon mb-3">
                <i class="fas fa-heart fa-3x"></i>
              </div>
              <h4 class="mb-3">Connect</h4>
              <p>Begin your journey by connecting with God and others through Sunday worship and building meaningful relationships.</p>
              <RouterLink to="/visit" class="btn btn-outline-primary mt-3">Visit Us</RouterLink>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="path-card p-4 bg-white rounded shadow-sm h-100 text-center position-relative">
              <div class="path-number position-absolute">2</div>
              <div class="path-icon mb-3">
                <i class="fas fa-seedling fa-3x"></i>
              </div>
              <h4 class="mb-3">Grow</h4>
              <p>Deepen your faith through small groups, Bible studies, and developing spiritual disciplines.</p>
              <a href="#small-groups" class="btn btn-outline-primary mt-3">Join a Group</a>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="path-card p-4 bg-white rounded shadow-sm h-100 text-center position-relative">
              <div class="path-number position-absolute">3</div>
              <div class="path-icon mb-3">
                <i class="fas fa-hands-helping fa-3x"></i>
              </div>
              <h4 class="mb-3">Serve</h4>
              <p>Discover your gifts and use them to serve in the church and community to make an impact.</p>
              <RouterLink to="/ministries" class="btn btn-outline-primary mt-3">Find Your Place</RouterLink>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="path-card p-4 bg-white rounded shadow-sm h-100 text-center position-relative">
              <div class="path-number position-absolute">4</div>
              <div class="path-icon mb-3">
                <i class="fas fa-share-alt fa-3x"></i>
              </div>
              <h4 class="mb-3">Share</h4>
              <p>Share your faith journey with others and invite them to experience God's love in their lives.</p>
              <a href="#share-faith" class="btn btn-outline-primary mt-3">Learn How</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Small Groups Section -->
    <section id="small-groups" class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Link Groups</h2>
            <p class="lead">Connect with others in authentic community</p>
          </div>
        </div>
        
        <div class="row align-items-center mb-5">
          <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <img src="@/assets/images/img-8.jpg"  alt="Small Group" class="img-fluid rounded shadow-lg">
          </div>
          <div class="col-lg-6 order-lg-1">
            <h3>Why Join a Link Group?</h3>
            <p>Link Groups are the heart of our church community, where we gather in smaller settings to build relationships, study God's Word, pray together, and support one another through life's ups and downs.</p>
            <p>In a Link Group, you'll experience:</p>
            <ul class="check-list">
              <li>Authentic community and lasting friendships</li>
              <li>Practical Bible study and spiritual conversations</li>
              <li>Prayer, encouragement, and accountability</li>
              <li>Opportunities to serve together</li>
              <li>A place to belong and grow in your faith</li>
            </ul>
            <a href="#find-group" class="btn btn-primary mt-3">Find a Group</a>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-md-4 mb-4">
            <div class="group-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="border-bottom pb-2 mb-3">Young Adults</h4>
              <p>For singles and couples in their 20s and 30s looking to connect with peers navigating similar life stages.</p>
              <p><strong>When:</strong> Flexible</p>
              <p><strong>Where:</strong> To be announced</p>
              <button class="btn btn-outline-primary">Learn More</button>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="group-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="border-bottom pb-2 mb-3">Family Groups</h4>
              <p>For parents with children of all ages to grow together and build supportive community with other families.</p>
              <p><strong>When:</strong> Flexible</p>
              <p><strong>Where:</strong> To be announced</p>
              <button class="btn btn-outline-primary">Learn More</button>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="group-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="border-bottom pb-2 mb-3">Women's Groups</h4>
              <p>For women seeking to grow in faith and build meaningful friendships with other women.</p>
              <p><strong>When:</strong> Flexible</p>
              <p><strong>Where:</strong> To be announced</p>
              <button class="btn btn-outline-primary">Learn More</button>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>

    <!-- Spiritual Disciplines Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Spiritual Disciplines</h2>
            <p class="lead">Practices that help you grow in your relationship with God</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="discipline-card p-4 bg-white rounded shadow-sm h-100">
              <div class="discipline-icon mb-3 text-center">
                <i class="fas fa-book-open fa-3x"></i>
              </div>
              <h4 class="text-center mb-3">Bible Reading</h4>
              <p>Regular Bible reading is essential for spiritual growth. God speaks to us through His Word, guiding us and transforming our minds.</p>
              <div class="tips mt-3">
                <h5 class="small-title">Getting Started:</h5>
                <ul>
                  <li>Set aside a specific time each day</li>
                  <li>Start with 10-15 minutes</li>
                  <li>Try reading one chapter of John</li>
                  <li>Use a Bible reading plan</li>
                </ul>
              </div>
              <div class="text-center mt-3">
                <a href="#" class="btn btn-sm btn-outline-primary">Bible Reading Plans</a>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="discipline-card p-4 bg-white rounded shadow-sm h-100">
              <div class="discipline-icon mb-3 text-center">
                <i class="fas fa-praying-hands fa-3x"></i>
              </div>
              <h4 class="text-center mb-3">Prayer</h4>
              <p>Prayer is how we communicate with God. Through prayer, we express our gratitude, confess our sins, and bring our requests to Him.</p>
              <div class="tips mt-3">
                <h5 class="small-title">Getting Started:</h5>
                <ul>
                  <li>Use the ACTS model (Adoration, Confession, Thanksgiving, Supplication)</li>
                  <li>Keep a prayer journal</li>
                  <li>Try praying Scripture</li>
                  <li>Set reminders throughout the day</li>
                </ul>
              </div>
              <div class="text-center mt-3">
                <a href="#" class="btn btn-sm btn-outline-primary">Prayer Resources</a>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="discipline-card p-4 bg-white rounded shadow-sm h-100">
              <div class="discipline-icon mb-3 text-center">
                <i class="fas fa-church fa-3x"></i>
              </div>
              <h4 class="text-center mb-3">Worship</h4>
              <p>Worship is our response to God's greatness. It's about giving God the honor and praise He deserves, both individually and in community.</p>
              <div class="tips mt-3">
                <h5 class="small-title">Getting Started:</h5>
                <ul>
                  <li>Make Sunday worship a priority</li>
                  <li>Create a worship playlist</li>
                  <li>Practice gratitude daily</li>
                  <li>Find ways to worship beyond music</li>
                </ul>
              </div>
              <div class="text-center mt-3">
                <a href="#" class="btn btn-sm btn-outline-primary">Worship Resources</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <!-- <section id="share-faith" class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Next Steps</h2>
            <p class="lead">Ready to take your next step in spiritual growth?</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="next-step-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="mb-3">Growth Track</h4>
              <p>Our four-week Growth Track course is designed to help you discover more about our church, your unique purpose, and how you can make a difference with your life.</p>
              <p><strong>When:</strong> First Sunday of every month, 12:30 PM</p>
              <p><strong>Where:</strong> Church Campus, Room 201</p>
              <button class="btn btn-primary mt-3">Register Now</button>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="next-step-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="mb-3">Baptism</h4>
              <p>Baptism is an important step of obedience for every person who has accepted Christ. If you're ready to make this public declaration of your faith, we'd love to celebrate with you!</p>
              <p><strong>Next Baptism:</strong> Last Sunday of the month</p>
              <p><strong>Preparation Class:</strong> Sunday prior to baptism, 9:30 AM</p>
              <button class="btn btn-primary mt-3">Sign Up for Baptism</button>
            </div>
          </div>
        </div>
        
        <div class="row mt-4">
          <div class="col-md-6 mb-4">
            <div class="next-step-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="mb-3">Mentorship Program</h4>
              <p>Connect with a mature believer who can guide you in your spiritual journey, answer questions, and provide accountability and encouragement.</p>
              <p>Our mentorship program pairs you with someone who can help you grow in specific areas of your faith journey.</p>
              <button class="btn btn-primary mt-3">Request a Mentor</button>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="next-step-card p-4 bg-white rounded shadow-sm h-100">
              <h4 class="mb-3">Leadership Development</h4>
              <p>If you're ready to take your faith to the next level and develop as a leader, our Leadership Pipeline provides training, resources, and practical experience.</p>
              <p><strong>Requirements:</strong> Active church member, completed Growth Track</p>
              <button class="btn btn-primary mt-3">Apply for Leadership</button>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Call to Action -->
    <section class="cta-section py-5 text-white">
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4">Ready to Take Your Next Step?</h2>
            <p class="lead mb-4">Wherever you are in your spiritual journey, we're here to help you take your next step in growing closer to God.</p>
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

.breadcrumb-item a {
  color: var(--primary-color);
  text-decoration: none;
}

.scripture-box {
  border-left: 4px solid var(--accent-color);
}

.path-card, .group-card, .discipline-card, .next-step-card {
  transition: all 0.3s ease;
}

.path-card:hover, .group-card:hover, .discipline-card:hover, .next-step-card:hover {
  transform: translateY(-10px);
}

.path-icon, .discipline-icon {
  color: var(--primary-color);
}

.path-number {
  width: 30px;
  height: 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.check-list {
  list-style: none;
  padding-left: 0;
}

.check-list li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
}

.check-list li:before {
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.small-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.tips ul {
  padding-left: 20px;
}

.tips ul li {
  margin-bottom: 5px;
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--accent-color));
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
</style> 