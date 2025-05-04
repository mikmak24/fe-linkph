<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

// Active section tracking for navigation
const activeSection = ref('identity')

// Set active section based on scroll position
const handleScroll = () => {
  const sections = document.querySelectorAll('.content-section')
  const scrollPosition = window.scrollY + 200

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = sectionId
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial position
  handleScroll()
})

// Scroll to section when clicking on sidebar nav
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: 'smooth'
    })
    activeSection.value = sectionId
  }
}
</script>

<template>
  <div>
    <!-- Page header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1>One on One Guide for Growing Believers</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">One on One Guide</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content section -->
    <section class="blog-section py-5">
      <div class="container">
        <div class="row">
          <!-- Sidebar navigation -->
          <div class="col-lg-3 mb-4 mb-lg-0">
            <div class="sidebar sticky-top" style="top: 100px;">
              <div class="sidebar-widget">
                <h4 class="mb-4">Table of Contents</h4>
                <ul class="sidebar-nav">
                  <li :class="{ active: activeSection === 'identity' }">
                    <a href="#identity" @click.prevent="scrollToSection('identity')">1. Identity</a>
                  </li>
                  <li :class="{ active: activeSection === 'purpose' }">
                    <a href="#purpose" @click.prevent="scrollToSection('purpose')">2. Purpose</a>
                  </li>
                  <li :class="{ active: activeSection === 'destiny' }">
                    <a href="#destiny" @click.prevent="scrollToSection('destiny')">3. Destiny</a>
                  </li>
                  <li :class="{ active: activeSection === 'lead' }">
                    <a href="#lead" @click.prevent="scrollToSection('lead')">4. Lead</a>
                  </li>
                  <li :class="{ active: activeSection === 'dreams' }">
                    <a href="#dreams" @click.prevent="scrollToSection('dreams')">5. Realizing Your Dreams</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Main content -->
          <div class="col-lg-9">
            <div class="blog-content bg-white rounded shadow p-4 p-lg-5">
              <h2 class="mb-4">Guidelines for Leading one to Christ</h2>
              
              <!-- Identity section -->
              <div id="identity" class="content-section mb-5">
                <h3 class="section-title">1. Identity</h3>
                <div class="section-divider mb-4"></div>
                <h4>"Who are you?"</h4>
                
                <blockquote class="blockquote my-4">
                  <p>"The greatest tragedy in life is not death but life without reason, it's dangerous to be alive and not know why you are given life."</p>
                  <footer class="blockquote-footer">Miles Monroe</footer>
                </blockquote>

                <p>Every time we are ask the question who are you? Our response may look like this; my name is ________. Sounds familiar? But the question goes beyond from what is our name but who we really are? Who are you?</p>

                <p>The deepest craving of the human spirit is to find a sense of identity and relevance. Conscious or unconscious, this motivates our internal passion is what motivates and drives every human being. It affects our decisions, behavior and our responses.</p>

                <p>Take time to notice this fact, every product from a store is labeled and its value differs depending on its brand; phones for example iPhone, Samsung, Sony etc. I experienced to work on a Semiconductor company and I learned an important principle in business; Label is the last thing that the manufacturer put in to the product. Before a phone is labeled iPhone, it's already finished on the manufacturer's end. It's passed quality control, product testing and even system boot. That means it worked perfectly before it reached the market! It reflects the name of the company that brings value and purpose. If it is defective before even reaching the market, it is recalled by the manufacturer to fix it. All of this product has manual on how it will work based on the preference of the manufacturer.</p>

                <div class="scripture-box my-4 p-4">
                  <p>"So God created mankind in his own image, in the image of God he created them; male and female he created them."</p>
                  <footer class="text-end">Genesis 1:27 (NIV)</footer>
                </div>

                <p>Identity is important, it displays distinction, value and purpose.</p>

                <p>It implies a biblical truth, before God creates mankind, he already made it valuable, and perfect according to his will. But because of sin we fall short and lose that identity that is why we seek to know who we really are. We tried to fix ourselves and soon recognize that we can't. That is why the manufacturer or the creator offer a solution and that is Jesus to give back the identity that we had lost and save us from sin. And give us this manual called the bible to understand who we really are in Christ.</p>

                <h4 class="mt-4">"Who are you?"</h4>
                <ul class="scripture-list">
                  <li>You are created fearfully and wonderfully – Psalm 139:4</li>
                  <li>You are a new creation in Christ – 2nd Corinthians 5:17</li>
                  <li>You are loved – Romans 5:8</li>
                </ul>

                <p class="mt-4">"When God looks at you, he sees things that everybody else ignores. Your identity is in Christ and you are special."</p>
              </div>

              <!-- Purpose section -->
              <div id="purpose" class="content-section mb-5">
                <h3 class="section-title">2. Purpose</h3>
                <div class="section-divider mb-4"></div>
                <h4>Why am I here?</h4>

                <p>Everything in life has a purpose. Everyone on this planet was born with and for a purpose. Purpose bring meaning to life. Without purpose, life is an experiment, or a game that results to frustration, failure and disappointments, without purpose life is trial and error, time and has no meaning, life itself seems useless. Therefore, it is important to grow in Christian life understanding your purpose to experience effective and rewarding life.</p>

                <p>Purpose is the original intent of the creator or in the previous chapter we name it manufacturer. Purpose explains the why and the reason why something was made to existence.</p>

                <p>Every product is produced by purpose for a purpose. Until purpose is discovered, existence has no meaning. Why do we have cars? It aids for transportation same way with cellular phones it addresses communication. After the purpose of the product has been determined it has to produce the function to fulfill the purpose. Before the car can run it has to function well and that I call identity, you have to know who you really are. After we discover our identity we now can move in our destined purpose.</p>

                <h4 class="mt-4">Your purpose is an Integral Part of you.</h4>
                <p>In essence, you were born for a purpose and with a purpose. You must strive to be who you were born to be. As you discover who you are, your identity, your uniqueness and your potential are interdependent. "Nothing is truly yours until you understand it.</p>

                <h4 class="mt-4">"Why am I here?"</h4>
                <p>To be yourself and to express yourself fully according to God's will on your life.</p>

                <div class="scripture-box my-4 p-4">
                  <p>"The purposes of a person's heart are deep waters, but one who has insight draws them out."</p>
                  <footer class="text-end">Proverbs 20:5 (NIV)</footer>
                </div>
              </div>

              <!-- Destiny section -->
              <div id="destiny" class="content-section mb-5">
                <h3 class="section-title">3. Destiny</h3>
                <div class="section-divider mb-4"></div>
                <h4>Where am I going?</h4>

                <blockquote class="blockquote my-4">
                  <p>"If you don't know where you are going, any road will get you there"</p>
                  <footer class="blockquote-footer">Lewis Carroll</footer>
                </blockquote>

                <p>You must realize that your fulfillment in life is dependent on your becoming and doing what you were born to be and do. Anything less makes life your enemy and death your friend. It is essential, vital, crucial and necessary that you understand this fundamental principle of purpose and pursue it with all your heart. For without purpose, life has no heart. Remember, those who don't know where they are going will probably end up someplace else.</p>

                <div class="scripture-box my-4 p-4">
                  <p>"Therefore I do not run like someone running aimlessly; I do not fight like a boxer beating the air."</p>
                  <footer class="text-end">1 Corinthians 9:26 (NIV)</footer>
                </div>

                <p>To have a clear destination is important in our maturation as believers in Jesus.</p>

                <p>I personally believe that all of us has a destiny and God wants us to fulfill but it's up to us on how we desire to get there. God destined you for greatness and success; like a father who sends his or her daughter to school. He has a clear vision and purpose that they will graduate but how they finish is definitely depending on his son.</p>

                <h4 class="mt-4">"Where am I going?"</h4>
                <p>Destiny is define as events that will necessarily happen to a particular person or thing in the future. But in our Christian life it's more than just a pursuit of a place but position in Christ.</p>

                <div class="scripture-box my-4 p-4">
                  <p>"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."</p>
                  <footer class="text-end">John 3:16 (NIV)</footer>
                </div>

                <p>God loved the world and he had set a destiny to gain what is his, thru His son Jesus.</p>
                <p>…..Jesus is destined to serve the world</p>
                <p>…..Jesus served</p>
                <p>….You are destined for greatness, you are destined to serve.</p>
              </div>

              <!-- Lead section -->
              <div id="lead" class="content-section mb-5">
                <h3 class="section-title">4. Lead</h3>
                <div class="section-divider mb-4"></div>
                <h4>How should I live?</h4>

                <p>I'm walking on my way home, I pass by a local pet shop, and I notice a little fish on a plastic bag. It was alive, yet on a limited source. The little fish spend its life on that limited, bounded, and uncomfortable environment. "Living limited is not a way of life, it was not intended nor planed", if that little fish was given the right of freedom, will it stay on that plastic bag or thrive on sea?</p>

                <blockquote class="blockquote my-4">
                  <p>"The success of a fish is staying on water, so success in life is staying with the one who made it."</p>
                </blockquote>

                <p>That little fish never practice swimming, yet swims. Birds fly because of its wings that was made before it was born. Your success was given before you even think of it! You are born to change the world, and make things happen. Make your life count, don't settle for less become your best!</p>

                <p>This principle begs the question, "Why, then, did the Creator create mankind?" The answer is found in his declaration of his purpose and original intent for humanity: "Let them rule ("have dominion") over all the earth." He created us out of himself because of his intent that we rule over the earth. Again, purpose is the reason for the creation of something. In essence, it is the reason why a thing exists.</p>

                <blockquote class="blockquote my-4">
                  <p>"The desire not to be anything is the desire not to be."</p>
                  <footer class="blockquote-footer">Ayn Rand</footer>
                </blockquote>

                <p>You are a leader. You were created to lead. You have leadership potential. First of All, Serve.</p>

                <h4 class="mt-4">"How should I live?"</h4>
                <p>A leader is a servant of the people. This is the teaching of Jesus Christ. How do you become a leader by serving? Simple, you have to serve something to the world. What do you serve? You serve your gift. When you find your gift and you serve it to the world, you become great. Jesus said greatness happens to you while you are serving your gift and because you are serving yourself to the world. Having others serve you does not make you great. Leadership has more to do with releasing yourself and deploying yourself, rather than employing people.</p>

                <div class="scripture-box my-4 p-4">
                  <p>"just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many."</p>
                  <footer class="text-end">Matthew 20:28 (NIV)</footer>
                </div>
              </div>

              <!-- Dreams section -->
              <div id="dreams" class="content-section mb-5">
                <h3 class="section-title">5. Realizing your dreams</h3>
                <div class="section-divider mb-4"></div>
                <h4>What's next?</h4>

                <div class="scripture-box my-4 p-4">
                  <p>"Your word is a lamp for my feet, a light on my path."</p>
                  <footer class="text-end">Psalm 119:105 (NIV)</footer>
                </div>

                <p>Maturation is a process in which all of us should undergo, it helps us to discover God and ourselves, it may come thru success, testing's or detours but likely we have to continue learning, living and passing our legacy to the next generation. It is important to discover our Identity, purpose, destiny, leadership and lastly vision of tomorrow. May you never stop learning and let the Lord work thru you in your life time.</p>

                <h4 class="mt-4">What's next?</h4>
                <h5>Take a Lesson From The Winners and Doers…</h5>
                <p>What is the difference between the dreamer who realizes his dream, and the dreamer whose dream becomes a nightmare of unfulfilled hopes?</p>

                <p>The dreamer who succeeds is someone who has a clear vision and acts on it. As long as a person can hold on to his vision, then there is always a chance for him to move out of his present circumstances and toward the fulfillment of his purpose.</p>

                <h5 class="mt-4">Living Your Life's Vision!</h5>
                <p>If you feel trapped, underemployed, or underutilized in your job; if you own your own business and want it to grow; if you want to know how to pursue your goals in life; if you are the leader of an organization or group; if your children are grown or in school now, and you are considering reviving old interests, or wherever you are in life right now, my desire is that you will be inspired, motivated, and challenged to get back in the race toward your dream, to get back the passion toward your goal.</p>

                <h5 class="mt-4">Achieve your greatest in God's purpose for your life.</h5>
                <p>You need to understand and put into practice principles that transcend current trends and even conventional wisdom. In this way, your success will not be dependent on the state of the economy, what careers are currently in demand, or what the job market is like. You will not be hindered by what people think you are capable of or your initial lack of resources.</p>

                <h5 class="mt-4">Take Your Life Out of Neutral!</h5>
                <p>You are the sum total of the choices and decisions you make every day. You can choose to stay where you are, or you can choose to pursue your dream. I challenge you to stop making excuses for why you can't accomplish what you were born to do. Take your life out of neutral. You possess the power and the responsibility to determine your future and destiny. Remember, you were created to accomplish something that no one else can accomplish. Never expect anything less than the highest thing you could go after. Don't let people tell you, "You shouldn't have high expectations." Dream big. No matter how challenging it gets, don't give up, because your vision is the key to fulfilling your life's purpose.</p>
              </div>

              <!-- Share section -->
              <div class="share-post mt-5">
                <h5>Share this guide:</h5>
                <div class="social-share">
                  <a href="#" class="btn btn-outline-primary me-2"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="btn btn-outline-primary me-2"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="btn btn-outline-primary me-2"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="btn btn-outline-primary"><i class="bi bi-envelope"></i></a>
                </div>
              </div>
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
            <h2 class="mb-4">Ready to Grow in Your Faith?</h2>
            <p class="lead mb-4">Join us on Sundays and connect with other believers who are on the same journey.</p>
            <RouterLink to="/visit" class="btn btn-light btn-lg me-3 mb-3 mb-md-0">Plan Your Visit</RouterLink>
            <RouterLink to="/contact" class="btn btn-outline-light btn-lg">Contact Us</RouterLink>
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
  color: white;
}

.breadcrumb, .breadcrumb-item, .breadcrumb-item a {
  color: #fff !important;
}

.breadcrumb-item.active {
  color: #f0f0f0 !important;
}

.breadcrumb-item a {
  text-decoration: none;
}

.breadcrumb-item+.breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.7);
}

.blog-content {
  font-size: 1.05rem;
  line-height: 1.8;
}

.section-title {
  position: relative;
  color: var(--primary-color);
  font-weight: 600;
}

.section-divider {
  width: 70px;
  height: 3px;
  background-color: var(--primary-color);
}

.scripture-box {
  background-color: #f7f7f7;
  border-left: 4px solid var(--primary-color);
  font-style: italic;
}

.scripture-list {
  list-style-type: none;
  padding-left: 0;
}

.scripture-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
}

.scripture-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.blockquote {
  font-size: 1.1rem;
  font-style: italic;
  border-left: 4px solid var(--primary-color);
  padding-left: 20px;
}

.blockquote-footer {
  font-weight: 500;
  color: #6c757d;
}

.sidebar-widget {
  background-color: white;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
}

.sidebar-nav {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav li {
  padding: 8px 0;
  border-bottom: 1px solid #f1f1f1;
  transition: all 0.3s ease;
}

.sidebar-nav li:last-child {
  border-bottom: none;
}

.sidebar-nav li a {
  color: #555;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
}

.sidebar-nav li a:hover,
.sidebar-nav li.active a {
  color: var(--primary-color);
  padding-left: 5px;
}

.social-share a {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-share a:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-3px);
}

.cta-section {
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
}

@media (max-width: 991.98px) {
  .sidebar {
    position: relative !important;
    top: 0 !important;
    margin-bottom: 30px;
  }
}
</style> 