<template>
  <div class="connect-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">connect</h1>
        <p class="hero-subtitle">The Christian life is not meant to be lived alone. Grow together.</p>
        <router-link
          to="/contact"
          class="hero-btn"
        >
          CLICK HERE TO JOIN A LINK GROUP
        </router-link>
      </div>
    </section>

    <!-- Link Group Info Section -->
    <section class="dgroup-info-section">
      <div class="dgroup-what">
        <h2>what is a Link Group?</h2>
        <p>
          A Link Group is a small, intentional community within Link Church PH where people gather regularly to build authentic relationships, grow in their understanding of God's Word, and encourage one another to live out their faith. Rooted in our mission to connect what matters to God, Link Groups are designed to help each person discover their purpose and make a difference in their spheres of influence.
        </p>
      </div>
      <div class="dgroup-columns">
        <div class="dgroup-left">
          <h3>why should you join a Link Group?</h3>
          <div class="dgroup-list">
            <div class="dgroup-item">
              <span class="dgroup-key">COMMUNITY</span>
              <span class="dgroup-desc">— Experience genuine connection and belonging as you journey with others who are passionate about following Jesus. Link Groups are a safe space to share life, celebrate victories, and support each other through challenges.</span>
            </div>
            <div class="dgroup-item">
              <span class="dgroup-key">GROWTH</span>
              <span class="dgroup-desc">— Deepen your faith and understanding of the Bible through meaningful conversations and shared learning. We believe in rightly dividing the Word of Truth and helping each other apply it in everyday life.</span>
            </div>
            <div class="dgroup-item">
              <span class="dgroup-key">PURPOSE</span>
              <span class="dgroup-desc">— Discover and develop your God-given gifts as you serve alongside others. Link Groups empower you to influence your family, friends, and community for Christ.</span>
            </div>
            <div class="dgroup-item">
              <span class="dgroup-key">SUPPORT</span>
              <span class="dgroup-desc">— Receive encouragement, prayer, and accountability from people who care about your spiritual journey. We are intentional in helping each other grow and live out our calling.</span>
            </div>
          </div>
        </div>
        <div class="dgroup-right">
          <h3>who can join a Link Group?</h3>
          <p>
            Anyone who desires to know God more, build meaningful relationships, and grow as a disciple of Jesus is welcome. Whether you are new to faith or have been walking with Christ for years, there is a place for you in a Link Group at Link Church PH.
          </p>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script>
export default {
  name: 'ConnectView',
  metaInfo: {
    title: 'Connect - LinkPH',
    meta: [
      {
        name: 'description',
        content: 'Connect with our community through Link Groups and One-on-One Discipleship. Grow in your faith journey with meaningful relationships.'
      }
    ]
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;400&display=swap');

.connect-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/src/assets/images/group/men.jpeg') center center/cover no-repeat;
  z-index: 1;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 2;
}
.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  width: 100%;
  max-width: 700px;
  padding: 0 5vw 0 0;
  margin-left: auto;
}
.hero-title,
.hero-subtitle,
.hero-btn {
  align-self: flex-start;
}
.hero-title {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 800;
  font-size: 6vw;
  color: #fff;
  letter-spacing: -0.06em;
  line-height: 1;
  text-transform: lowercase;
  margin-bottom: 0.2em;
}
@media (min-width: 900px) {
  .hero-title {
    font-size: 6rem;
  }
}
.hero-subtitle {
  color: #fff;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 420px;
  text-align: left;
}
.hero-btn {
  display: inline-block;
  border: 2px solid #fff;
  color: #fff;
  background: transparent;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 0.2rem;
  letter-spacing: 0.04em;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  text-decoration: none;
}
.hero-btn:hover {
  background: #fff;
  color: #222;
}
@media (max-width: 767px) {
  .hero-content {
    align-items: center;
    text-align: center;
    padding: 0 1.5rem;
    margin-left: 0;
  }
  .hero-title,
  .hero-subtitle,
  .hero-btn {
    align-self: center;
    text-align: center;
  }
}
.dgroup-info-section {
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
}
.dgroup-what {
  background: #e5e5e5;
  text-align: center;
  padding: 2.5rem 1rem 2rem 1rem;
}
.dgroup-what h2 {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
}
.dgroup-what p {
  font-size: 1.15rem;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}
.dgroup-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem 2.5rem 1rem;
  gap: 2rem;
}
.dgroup-left, .dgroup-right {
  flex: 1 1 350px;
  min-width: 300px;
}
.dgroup-left h3, .dgroup-right h3 {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  color: #222;
  text-align: left;
}
.dgroup-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.dgroup-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}
.dgroup-key {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
  color: #222;
  min-width: 120px;
  text-align: right;
}
.dgroup-desc {
  font-size: 1rem;
  color: #222;
  line-height: 1.5;
}
.dgroup-right p {
  font-size: 1.08rem;
  color: #222;
  line-height: 1.6;
  margin-top: 0.5rem;
}
@media (max-width: 900px) {
  .dgroup-columns {
    flex-direction: column;
    gap: 2.5rem;
    padding: 2.5rem 1rem 2rem 1rem;
  }
  .dgroup-left, .dgroup-right {
    min-width: 0;
  }
  .dgroup-left h3, .dgroup-right h3 {
    text-align: center;
  }
  .dgroup-key {
    text-align: left;
  }
}
</style> 