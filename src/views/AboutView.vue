<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="section-title">Welcome to Link Church PH</h2>
            <p class="lead mb-4">Connecting what matters to God.</p>
            
            <h5 class="mt-4 mb-3">What are we?</h5>
            <ul class="about-list">
              <li>We are a Missional Church; dedicated to reach the Spheres of Influence.</li>
              <li>We are a Bible believing Church; devoted to rightly divide the Word of Truth.</li>
              <li>We are Generational; celebrating diversity of Spiritual Gifts through Link Groups of Men and Women.</li>
              <li>We are Intentional Church; in winning and discipling the people of God.</li>
              <li>We are Innovative; We don't fear change.</li>
            </ul>
            
            <div class="mt-4">
              <div class="mission-values">
                <div class="d-flex mb-3">
                  <div>
                    <h5>Our Vision</h5>
                    <p><strong>God First, Disciples Made</strong></p>
                    <p class="tagline">Connecting what Matters to God</p>
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div>
                    <h5>Our Mission</h5>
                    <p>
                      At Link Church, our mission is to obey the great commission by pursuing the call to connect the lost through the gospel. 
                      We are dedicated to reach the 1% of the country population by the help of God through the link.
                    </p>
                    <ul class="link-values">
                      <li><strong>L</strong> - Life Changing Services</li>
                      <li><strong>I</strong> - Influencing Spheres</li>
                      <li><strong>N</strong> - Network Groups</li>
                      <li><strong>K</strong> - Knowledge of the Word of God</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="@/assets/images/img-2.jpg" alt="About LINK PH" class="img-fluid rounded shadow-lg">
            <div class="church-verse mt-4 p-4 bg-light rounded">
              <h5 class="mb-3">Our Church Verse</h5>
              <blockquote class="blockquote">
                <p>"For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all, which is the testimony given at the proper time."</p>
                <footer class="blockquote-footer">1 Timothy 2:5-6 ESV</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <!-- <section class="section-padding bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="section-title text-center">Our Leadership Team</h2>
            <p class="lead">Meet the dedicated people who lead our church</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?pastor" alt="Pastor" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Pastor John Doe</h5>
                <p class="text-muted">Lead Pastor</p>
                <div class="social-links mt-2">
                  <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?woman" alt="Worship Leader" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Jane Smith</h5>
                <p class="text-muted">Worship Leader</p>
                <div class="social-links mt-2">
                  <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?man" alt="Youth Pastor" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Mark Johnson</h5>
                <p class="text-muted">Youth Pastor</p>
                <div class="social-links mt-2">
                  <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?woman,teacher" alt="Children's Minister" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Sarah Wilson</h5>
                <p class="text-muted">Children's Minister</p>
                <div class="social-links mt-2">
                  <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Beliefs Section / Our Values -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Our Values</h2>
            <p class="lead">Core principles that guide our church community</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">1</span>
              </div>
              <div>
                <h5>1. The Word of God</h5>
                <p>We desire to rightly divide the word of God, allowing believers to grow in sound doctrine.</p>
                <p class="small text-muted">"Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth." - 2 Timothy 2:15</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">2</span>
              </div>
              <div>
                <h5>2. The Lordship of Jesus Christ</h5>
                <p>Jesus Christ is the one mediator between God and humanity.</p>
                <p class="small text-muted">"For there is one God, and there is one mediator between God and men, the man Christ Jesus, who gave himself as a ransom for all." - 1 Timothy 2:5-6</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">3</span>
              </div>
              <div>
                <h5>3. The Annointing of the Holy Spirit</h5>
                <p>We believe in the power and presence of the Holy Spirit in the life of believers.</p>
                <p class="small text-muted">"Then Peter and John placed their hands on them, and they received the Holy Spirit." - Acts 8:17</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">4</span>
              </div>
              <div>
                <h5>4. Connection</h5>
                <p>We focus on building strong relationships within our community and beyond.</p>
                <p class="small text-muted">"And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together." - Hebrews 10:24-25</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">5</span>
              </div>
              <div>
                <h5>5. Spiritual Growth</h5>
                <p>We aim to support individuals and families to grow in Discipleship.</p>
                <p class="small text-muted">"Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." - Matthew 28:19</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">6</span>
              </div>
              <div>
                <h5>6. Service</h5>
                <p>We are committed to serving our community and making a positive impact in the world.</p>
                <p class="small text-muted">"In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." - Matthew 5:16</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">7</span>
              </div>
              <div>
                <h5>7. Innovation</h5>
                <p>We dream big and not limited to tradition.</p>
                <p class="small text-muted">"Open my eyes that I may see wonderful things in your law." - Psalm 119:18</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">8</span>
              </div>
              <div>
                <h5>8. Priesthood of all Believers</h5>
                <p>Every believer has a role and purpose in God's kingdom work.</p>
                <p class="small text-muted">"But you are a chosen people, a royal priesthood, a holy nation, God's special possession." - 1 Peter 2:9</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">9</span>
              </div>
              <div>
                <h5>9. Giving our Best</h5>
                <p>We offer our best Time, Gifts and resources for expanding the Kingdom Work.</p>
                <p class="small text-muted">"It is more blessed to give than to receive." - Acts 20:35</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">10</span>
              </div>
              <div>
                <h5>10. Unity in the Body of Christ</h5>
                <p>We promote love and unity by choosing to be a blessing in words and in deeds with other Churches.</p>
                <p class="small text-muted">"Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ." - 1 Corinthians 12:12</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="belief-item d-flex">
              <div class="belief-icon me-3">
                <span class="number">11</span>
              </div>
              <div>
                <h5>11. The Now and The Next Generation</h5>
                <p>We believe the family is the basic unit of society and we are committed to build stronger homes and families as they lead their children to the Lord.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What to Expect Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">What to Expect When You Visit</h2>
            <p class="lead">You can expect a friendly and welcoming atmosphere</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="feature-icon">
                  <i class="fas fa-church"></i>
                </div>
                <h4 class="card-title">Sunday Worship Services</h4>
                <p class="card-text">Join us every Sunday for a time of worship, teaching, and community.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="feature-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h4 class="card-title">Small Group Gatherings</h4>
                <p class="card-text">Connect with others in a more intimate setting for support and discussion.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="feature-icon">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <h4 class="card-title">Community Events</h4>
                <p class="card-text">Participate in various events designed to foster connection and service within our community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Get Involved</h2>
            <p class="lead">There are many ways to get involved at Link Church</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="feature-icon">
                  <i class="fas fa-hands-helping"></i>
                </div>
                <h4 class="card-title">Volunteer Opportunities</h4>
                <p class="card-text">Share your talents and time in various ministries and outreach programs.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="feature-icon">
                  <i class="fas fa-user-friends"></i>
                </div>
                <h4 class="card-title">Join a Group</h4>
                <p class="card-text">Find a small group that fits your interests and schedule.</p>
                <a href="https://forms.gle/HHZcr9Z6kcv1KnRm7" target="_blank" class="btn btn-primary mt-3">Join a Link Group</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="feature-icon">
                  <i class="fas fa-calendar-check"></i>
                </div>
                <h4 class="card-title">Attend Events</h4>
                <p class="card-text">Participate in our community events to meet new people and deepen your connections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action / Contact Info -->
    <section class="cta-section py-5 text-white">
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="mb-4">Contact Us</h2>
            <p class="lead mb-4">We would love to hear from you! Whether you have questions about our services, want to get involved, or simply want to learn more, feel free to reach out.</p>
            <div class="contact-details mb-4">
              <p><i class="fas fa-envelope me-2"></i> thelinkphilippines@gmail.com</p>
              <p><i class="fas fa-phone me-2"></i> 0939-6030-755</p>
              <p><i class="fas fa-map-marker-alt me-2"></i> Bacolod City, Negros Occidental 6100</p>
            </div>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Contact Us</RouterLink>
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

.about-list {
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.about-list li {
  margin-bottom: 0.75rem;
  position: relative;
}

.link-values {
  list-style-type: none;
  padding-left: 0;
}

.link-values li {
  margin-bottom: 0.5rem;
}

.tagline {
  font-style: italic;
  color: var(--primary-color);
}

.church-verse {
  border-left: 4px solid var(--primary-color);
}

.icon-box {
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

.icon-box .letter {
  font-weight: 700;
  font-size: 1.6rem;
}

.team-member {
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-img {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

.member-img img {
  transition: transform 0.5s ease;
}

.team-member:hover .member-img img {
  transform: scale(1.05);
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--light-color);
  border-radius: 50%;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--primary-color);
  color: white;
}

.belief-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.belief-icon .number {
  font-weight: 700;
  font-size: 1.4rem;
}

.belief-item {
  transition: all 0.3s ease;
}

.belief-item:hover {
  transform: translateX(10px);
}

.belief-item:hover .belief-icon {
  background-color: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.small.text-muted {
  font-size: 0.85rem;
}

.feature-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  font-size: 1.8rem;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;
}

.card:hover .feature-icon {
  transform: scale(1.1);
}

.contact-details {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.contact-details p {
  margin-bottom: 0.5rem;
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}
</style>
