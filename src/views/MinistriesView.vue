<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="ministries-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Ministries</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Ministries</li>
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
            <h2 class="section-title">Serve With Us</h2>
            <p class="lead mb-4">Use your God-given talents and skills to help further God's Kingdom for His glory.</p>
            <p>At LINK PH, we believe every believer has been gifted by God to serve others and advance His kingdom. Our ministry teams provide opportunities for you to use your unique gifts and passions to make a difference.</p>
            <p>Whether you're interested in working with children, leading worship, greeting visitors, or serving behind the scenes, there's a place for you to contribute to our church family and community.</p>
            <RouterLink to="/contact" class="btn btn-primary mt-3">Get Involved Today</RouterLink>
          </div>
          <div class="col-lg-6">
            <img src="@/assets/images/img-9.jpg" alt="Serving Together" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Ministry Areas Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Ministry Areas</h2>
            <p class="lead">Discover where you can serve and make a difference</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="ministry-card h-100 rounded shadow-sm overflow-hidden">
              <!-- <img src="https://source.unsplash.com/random/600x400/?worship" alt="Worship Ministry" class="img-fluid w-100"> -->
              <div class="ministry-content p-4 bg-white">
                <h4>Worship Ministry</h4>
                <p>Our worship team leads the congregation in praise and worship during our services, creating an atmosphere where people can encounter God.</p>
                <ul class="ministry-list">
                  <li>Musicians</li>
                  <li>Vocalists</li>
                  <li>Audio/Visual Team</li>
                  <li>Production Team</li>
                </ul>
                <!-- <RouterLink to="/contact" class="btn btn-outline-primary">Join Team</RouterLink> -->
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="ministry-card h-100 rounded shadow-sm overflow-hidden">
              <!-- <img src="https://source.unsplash.com/random/600x400/?children" alt="Children's Ministry" class="img-fluid w-100"> -->
              <div class="ministry-content p-4 bg-white">
                <h4>Children's Ministry</h4>
                <p>Our children's ministry creates a fun, safe environment where kids can learn about Jesus and grow in their faith.</p>
                <ul class="ministry-list">
                  <li>Teachers</li>
                  <li>Assistants</li>
                  <li>Check-in Team</li>
                  <li>Special Events Team</li>
                </ul>
                <!-- <RouterLink to="/contact" class="btn btn-outline-primary">Join Team</RouterLink> -->
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="ministry-card h-100 rounded shadow-sm overflow-hidden">
              <!-- <img src="https://source.unsplash.com/random/600x400/?welcome" alt="Welcome Team" class="img-fluid w-100"> -->
              <div class="ministry-content p-4 bg-white">
                <h4>Welcome Team</h4>
                <p>Our welcome team ensures that every visitor feels welcomed and connected from the moment they arrive at our church.</p>
                <ul class="ministry-list">
                  <li>Greeters</li>
                  <li>Ushers</li>
                  <li>Information Desk</li>
                  <li>Coffee & Refreshments</li>
                </ul>
                <!-- <RouterLink to="/contact" class="btn btn-outline-primary">Join Team</RouterLink> -->
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="ministry-card h-100 rounded shadow-sm overflow-hidden">
              <!-- <img src="https://source.unsplash.com/random/600x400/?prayer" alt="Prayer Ministry" class="img-fluid w-100"> -->
              <div class="ministry-content p-4 bg-white">
                <h4>Prayer Ministry</h4>
                <p>Our prayer ministry team intercedes for the needs of our church, community, and world, believing that prayer is foundational to all we do.</p>
                <ul class="ministry-list">
                  <li>Prayer Team</li>
                  <li>Prayer Chain</li>
                  <li>Prayer Service Leaders</li>
                  <li>Altar Ministry</li>
                </ul>
                <!-- <RouterLink to="/contact" class="btn btn-outline-primary">Join Team</RouterLink> -->
              </div>
            </div>
          </div>
          
          <!-- <div class="col-md-6 col-lg-4 mb-4">
            <div class="ministry-card h-100 rounded shadow-sm overflow-hidden">
              <img src="https://source.unsplash.com/random/600x400/?outreach" alt="Outreach Ministry" class="img-fluid w-100">
              <div class="ministry-content p-4 bg-white">
                <h4>Outreach Ministry</h4>
                <p>Our outreach ministry extends God's love beyond our church walls to serve our community and share the gospel.</p>
                <ul class="ministry-list">
                  <li>Community Service Team</li>
                  <li>Food Pantry Volunteers</li>
                  <li>Evangelism Team</li>
                  <li>Mission Trip Participants</li>
                </ul>
                <RouterLink to="/contact" class="btn btn-outline-primary">Join Team</RouterLink>
              </div>
            </div>
          </div> -->
          
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="ministry-card h-100 rounded shadow-sm overflow-hidden">
              <!-- <img src="https://source.unsplash.com/random/600x400/?media" alt="Media & Communications" class="img-fluid w-100"> -->
              <div class="ministry-content p-4 bg-white">
                <h4>Media & Communications</h4>
                <p>Our media team uses technology and creativity to enhance our worship experience and spread our message beyond our walls.</p>
                <ul class="ministry-list">
                  <li>Social Media Team</li>
                  <li>Graphic Design</li>
                  <li>Website Maintenance</li>
                  <li>Photography/Videography</li>
                </ul>
                <!-- <RouterLink to="/contact" class="btn btn-outline-primary">Join Team</RouterLink> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ministry Leaders Section -->
    <!-- <section class="section-padding">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Ministry Leaders</h2>
            <p class="lead">Meet the dedicated people who lead our ministries</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?worship,leader" alt="Worship Leader" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">James Wilson</h5>
                <p class="text-muted">Worship Director</p>
                <p class="small">Leading our worship ministry since 2018, James has a passion for creating worship experiences that draw people closer to God.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?children,minister" alt="Children's Minister" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Lisa Rodriguez</h5>
                <p class="text-muted">Children's Director</p>
                <p class="small">With a background in education, Lisa brings creativity and passion to helping children grow in their faith journey.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?outreach" alt="Outreach Coordinator" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Michael Chen</h5>
                <p class="text-muted">Outreach Coordinator</p>
                <p class="small">Michael's heart for the community drives our efforts to serve and share God's love with those around us.</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="team-member">
              <div class="member-img">
                <img src="https://source.unsplash.com/random/400x400/?prayer" alt="Prayer Coordinator" class="img-fluid rounded">
              </div>
              <div class="member-info text-center mt-3">
                <h5 class="mb-1">Grace Sullivan</h5>
                <p class="text-muted">Prayer Ministry Leader</p>
                <p class="small">Grace coordinates our prayer initiatives, believing that prayer is the foundation for everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Testimonials Section -->
    <!-- <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Volunteer Stories</h2>
            <p class="lead">Hear from people who serve in our ministries</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm h-100">
              <div class="testimonial-content mb-3">
                <p class="font-italic">"Serving on the worship team has deepened my faith and given me a spiritual family. I look forward to rehearsals and Sunday services every week!"</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <img src="https://source.unsplash.com/random/80x80/?guitarist" alt="Testimonial Author" class="rounded-circle me-3" width="60">
                <div>
                  <h5 class="mb-1">Robert Cruz</h5>
                  <p class="mb-0 text-muted">Worship Team - 3 years</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm h-100">
              <div class="testimonial-content mb-3">
                <p class="font-italic">"Being part of the welcome team allows me to help others feel at home. There's nothing better than seeing a first-time visitor become part of our church family."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center">
                <img src="https://source.unsplash.com/random/80x80/?woman,smiling" alt="Testimonial Author" class="rounded-circle me-3" width="60">
                <div>
                  <h5 class="mb-1">Anna Martinez</h5>
                  <p class="mb-0 text-muted">Welcome Team - 2 years</p>
                </div>
              </div>
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
            <h2 class="mb-4">Ready to Start Serving?</h2>
            <p class="lead mb-4">Discover how your unique gifts and passions can make a difference in our church and community.</p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Get Started</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background-color: var(--light-color);
  padding: 80px 0 30px;
  margin-bottom: 50px;
}

.breadcrumb-item a {
  color: var(--primary-color);
  text-decoration: none;
}

.ministry-card {
  transition: all 0.3s ease;
}

.ministry-card:hover {
  transform: translateY(-10px);
}

.ministry-card img {
  transition: transform 0.5s ease;
  height: 200px;
  object-fit: cover;
}

.ministry-card:hover img {
  transform: scale(1.05);
}

.ministry-list {
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
}

.ministry-list li {
  margin-bottom: 0.5rem;
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
  height: 300px;
  object-fit: cover;
}

.team-member:hover .member-img img {
  transform: scale(1.05);
}

.testimonial-content {
  position: relative;
  padding: 20px;
  background-color: rgba(58, 90, 151, 0.05);
  border-radius: 10px;
}

.testimonial-content:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 20px;
  border-width: 10px 10px 0;
  border-style: solid;
  border-color: rgba(58, 90, 151, 0.05) transparent transparent;
}

.testimonial-content p {
  margin-bottom: 0;
  font-style: italic;
}
</style> 