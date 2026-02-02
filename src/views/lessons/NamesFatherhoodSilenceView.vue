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
            <li class="breadcrumb-item active text-white" aria-current="page">Lesson 22: God the Father</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Lesson 22: God the Father</h1>
        <p class="lead mb-4">Names, Fatherhood and Silence of God — Basic Christian Teaching</p>
        <div class="guide-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-clock me-1"></i> 45-60 mins
          </span>
          <span class="badge bg-light text-primary">
            <i class="bi bi-people me-1"></i> Group Study
          </span>
        </div>
        <div class="mt-4">
          <a
            :href="lessonPdfUrl"
            download="Lesson_22_God_the_Father.pdf"
            class="btn btn-download-pdf"
          >
            <i class="bi bi-file-earmark-pdf me-2"></i> Download PDF
          </a>
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
                  <a href="#introduction" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-book me-1"></i> Introduction
                  </a>
                  <a href="#main-content" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-list-check me-1"></i> Main Content
                  </a>
                  <a href="#conclusion" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-bookmark-check me-1"></i> Conclusion
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
              </div>

              <!-- Introduction -->
              <div id="introduction" class="guide-section introduction mb-5">
                <div class="section-header">
                  <i class="bi bi-book section-icon"></i>
                  <h3 class="section-title">Introduction</h3>
                </div>
                <div class="section-content">
                  <div class="intro-card">
                    <p>We have learned about the existence of God and about His nature and unity.</p>
                    <p>In Bible lands names had and have a deep significance, and meanings of names in "the Middle East" have a deeper impact than in many Western cultures.</p>
                    <p>In a study of His Names we learn many things about God.</p>
                  </div>
                </div>
              </div>

              <!-- Main Content -->
              <div id="main-content" class="guide-section main-content mb-5">
                <div class="section-header">
                  <i class="bi bi-list-check section-icon"></i>
                  <h3 class="section-title">Main Content</h3>
                </div>
                <div class="section-content">

                  <!-- I The Names of God -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">I The Names of God</h4>
                    <p class="mb-3">The Names of God are found in three forms:</p>
                    <p class="mb-2"><strong>1. Primary</strong> — One word only: El, Elah, Elohim, Jehovah, Adon, Adonai, God, Lord.</p>
                    <p class="mb-2"><strong>2. Compound with El</strong> — Almighty God; Most High God; Everlasting God.</p>
                    <p class="mb-3"><strong>3. Compound with Jehovah</strong> — Lord God; Jehovah, the Everlasting God, etc.</p>
                    <div class="table-responsive">
                      <table class="table table-bordered attributes-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Reference</th>
                            <th>Meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>Elohim</td><td>Genesis 2:4</td><td>The One Who is Mighty; The Lord Who Creates</td></tr>
                          <tr><td>El Elyon</td><td>Genesis 14:22</td><td>The One Who is Supreme; The Lord Who Owns</td></tr>
                          <tr><td>Adonai</td><td>Genesis 15:2</td><td>The One Who is Ruling; The Lord Our Master</td></tr>
                          <tr><td>El Olam</td><td>Genesis 21:33</td><td>The One Who is Mysterious; The Lord Who Reveals</td></tr>
                          <tr><td>Jireh</td><td>Genesis 22:14</td><td>The One Who Redeems; The Lord Who Provides</td></tr>
                          <tr><td>Rophi</td><td>Exodus 15:26</td><td>The One Who Heals; The Lord Who Heals</td></tr>
                          <tr><td>Nissi</td><td>Exodus 17:15</td><td>The One Who Fights for us; The Lord Our Banner</td></tr>
                          <tr><td>Yekaddia</td><td>Exodus 31:13</td><td>The One Who is Sanctification; The Lord Who Sanctified</td></tr>
                          <tr><td>Shalom</td><td>Judges 6:24</td><td>The One Who Gives Peace</td></tr>
                          <tr><td>Sabaoth</td><td>1 Samuel 1:3</td><td>The One Who is Possessing; The Lord of Hosts</td></tr>
                          <tr><td>Zidkenu</td><td>Jeremiah 23:6</td><td>The One Who is Justifying; The Lord Our Righteousness</td></tr>
                          <tr><td>Shammah</td><td>Ezekiel 48:35</td><td>The One Who is Present; The Lord at Hand</td></tr>
                          <tr><td>Elyon</td><td>Psalm 7:17</td><td>The One Who is Blessing; The Lord Who Blesses</td></tr>
                          <tr><td>Roi</td><td>Psalm 23:1</td><td>The One Who is Caring; The Lord Our Shepherd</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- II The Fatherhood of God -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">II The Fatherhood of God</h4>
                    <p class="mb-3">"Our Father which art in heaven," <strong>Matthew 6:9</strong> — This is our happiest conception of God.</p>
                    <p class="mb-3">Pagan religions know nothing of a God who is a "loving heavenly Father."</p>
                    <p class="mb-3">Pagan religions portray God as immense, terrible, cruel, and One to be dreaded.</p>
                    <p class="mb-3">The Bible pictures God as loving, friendly, companionable, approachable and desirable.</p>
                    <p class="mb-3">It was the Savior who taught us to pray "Our Father" — a new revelation of God.</p>
                    <p class="mb-2">God is revealed as Father in two ways:</p>
                    <ol class="mb-3 ms-3">
                      <li>As the Father of our Lord Jesus Christ, <strong>John 5:17</strong>; <strong>John 1:14</strong>.</li>
                      <li>As the Father of those who believe on the Lord Jesus. <strong>John 1:12</strong>, "But as many as received Him, to them gave He power to become the sons of God."</li>
                    </ol>
                    <p class="mb-2">The Jews thought of God as their Father in a national or poetical sense:</p>
                    <ol class="mb-3 ms-3">
                      <li><strong>Poetical</strong> — <strong>Psalm 68:5</strong> "A Father of the fatherless, and a Judge of the widows, is God in His holy habitation."</li>
                      <li><strong>National</strong> — <strong>Exodus 4:22</strong> "And thou shalt say unto Pharaoh, Thus saith the Lord, Israel is My son, even My firstborn."</li>
                    </ol>
                    <p class="mb-3">Israel did not have a personal consciousness of sonship, as "God is my Father."</p>
                    <p class="mb-3">"Modernism" reasons, "God is my Father and my Father will not harm me, so I will take my ease, eat, drink, and be merry and He will be merciful to me to the end."</p>
                    <p class="mb-3"><strong>John 8:44</strong>, Jesus speaking to the Jews said, "Ye are of your father the devil, and the lusts of your father ye will do."</p>
                    <p class="mb-3">God is the Creator of all, but only the Father of those that are in the family.</p>
                    <p class="mb-3"><strong>2 Corinthians 6:17, 18</strong> "Wherefore come out from among them, and be ye separate, saith the Lord, and touch not the unclean thing; and I will receive you, and will be a Father unto you and ye shall be My sons and daughters, saith the Lord Almighty."</p>
                    <p class="mb-3">A new birth.</p>
                    <p class="mb-3">As a Father God gives life to His children; there is no sonship without God.</p>
                    <p class="mb-3">As a Father God bestows love on His children — to those in the family.</p>
                    <p class="mb-0">This relationship, Father and son, gives a true ideal for work (it is not master and slave). It is as a Father that He hears and answers our prayers, sifting the requests as a true Father.</p>
                  </div>

                  <!-- III The Silence of God -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">III The Silence of God</h4>
                    <p class="mb-3">In times of difficulty men reason, "If there is a loving Father God, why is He silent?" "Why did He allow this to happen?" "Why didn't He prevent this?"</p>
                    <p class="mb-3">Why does He not prevent disastrous explosions, accidents, typhoons, floods and wars?</p>
                    <p class="mb-3">An infidel having no faith in the existence of God argues from the silence of God — the greatest problem of our times.</p>
                    <p class="mb-3"><strong>Job 23:3, 4</strong> "Oh that I knew where I might find Him! that I might come even to His seat! I would order my cause before Him and fill my mouth with arguments."</p>
                    <p class="mb-3"><strong>Psalm 28:1</strong> "Unto Thee will I cry, O Lord my Rock; be not silent to me: lest, if Thou be silent to me, I become like them that go down into the pit."</p>
                    <p class="mb-2">Men have devised several answers to this age-old problem:</p>
                    <ol class="mb-3 ms-3">
                      <li><strong>Deism</strong> — saying that God is a good God but He has no time to look after the details of life. God is only a spectator of the affairs of this life.</li>
                      <li><strong>Atheism</strong> — saying that silence proves that God is a myth. A living God would speak.</li>
                      <li><strong>Materialism</strong> — saying that the world is governed by law, without a personal God, and that we are at the mercy of blind chance.</li>
                    </ol>
                    <p class="mb-3">To reject God and the Bible only plunges mankind into greater darkness.</p>
                    <p class="mb-2">Why, then, is God silent? Is it that God is —</p>
                    <ol class="mb-3 ms-3">
                      <li><strong>Indifferent?</strong> No! Christ suffering on the cross cries, "My God, My God." God cared so much for our souls that He continued His wrath upon the Son.</li>
                      <li><strong>Unobservant?</strong> No! This is contrary to the omniscient understanding of God.</li>
                      <li><strong>Unloving?</strong> No! The parent that truly loves a child will punish him, <strong>Hebrews 12:7, 8</strong>.</li>
                      <li><strong>Unwilling?</strong> No! He sees the end from the beginning and plans our whole lives.</li>
                    </ol>
                    <p class="mb-3">If these negative answers are wrong, what, then, is the correct answer?</p>
                    <p class="mb-2"><strong>1. Common sense view</strong> — Many difficulties are a result of deliberate sin due entirely to man's carelessness, neglect and folly, such as accidents. <strong>Galatians 6:7</strong> "For whatsoever a man soweth, that shall he also reap."</p>
                    <p class="mb-2"><strong>2. Reverent view</strong> — Is it right that my puny mind should question the workings of the Almighty God? (<strong>Isaiah 55:8, 9</strong>). Doubtless God's master plan for my life will include sorrow, suffering and pain.</p>
                    <p class="mb-2"><strong>3. The philosophical view</strong> — Human free will involves the consequences of those actions. Human freedom means moral responsibility — adultery leads to syphilis or AIDS.</p>
                    <p class="mb-2"><strong>4. Lover's view</strong> — God is a jealous lover. <strong>Exodus 20:5</strong> "I, the Lord thy God, am a jealous God." He seeks to divorce us from everything and cause us to cling closely to Him.</p>
                    <p class="mb-2"><strong>5. Dispensational view</strong> — This is the day of man, the day of sin, the day of grace, when God beckons, "Come Home," but a day of judgment is coming and the silence of God will be broken with audible condemnation. God will yet reckon accounts with men and their relationships with God and society.</p>
                    <p class="mb-2"><strong>6. Faith view</strong> — <strong>John 13:7</strong> "Jesus answered and said unto him, What I do thou knowest not now; but thou shalt know hereafter." Lord teach me to wait patiently.</p>
                    <p class="mb-2"><strong>7. The testing of my faith</strong> — <strong>1 Peter 1:7</strong> "That the genuineness of your faith, being much more precious than gold that perishes, though it is tested by fire, may be found to praise, honor, and glory at the revelation of Jesus Christ."</p>
                    <p class="mb-2"><strong>8. The mysterious works of God</strong> — <strong>John 9:3</strong> "Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him." This is the story of the man that was born blind. Perhaps I may suffer, not for my sin but to be made a blessing to someone else. Those who have passed through suffering and sorrow are uniquely able to comfort others.</p>
                    <p class="mb-3">Live according to the knowledge that we have. <strong>Caution:</strong> <strong>Romans 1:21</strong>, "Because that, when they knew God, they glorified Him not as God ..." then read verses 24-32.</p>
                    <p class="mb-3"><strong>Matthew 11:27</strong> teaches that it is the work of the Son to reveal the Father.</p>
                    <p class="mb-3">The Quiet Hour is our opportunity to deepen our acquaintance with the Lord God.</p>
                    <p class="mb-0"><strong>Psalm 46:10</strong> "Be still and know that I am God."</p>
                  </div>
                </div>
              </div>

              <!-- Conclusion -->
              <div id="conclusion" class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-bookmark-check section-icon"></i>
                  <h3 class="section-title">Conclusion</h3>
                </div>
                <div class="section-content">
                  <div class="content-card">
                    <p>Live in a conscious sense of His presence even though He seems to be silent.</p>
                    <p>Learn to think positively. I know God — I spoke to Him today. He spoke to me through His own precious Word. He spoke through answered prayers.</p>
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
import lessonPdfUrl from '@/assets/lessons/Lesson_22_God_the_Father.pdf'
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

.btn-download-pdf {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  background-color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-download-pdf:hover {
  color: #1a1a2e;
  background-color: #f0f0f0;
  border-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  transform: translateY(-2px);
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
  border-radius: 1rem;
  border: 1px solid #e9ecef;
}

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.guide-section {
  scroll-margin-top: 100px;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--primary-color);
}

.section-icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-right: 1rem;
}

.section-title {
  margin: 0;
  color: var(--primary-color);
  font-weight: 600;
}

.intro-card, .content-card, .questions-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid var(--primary-color);
}

.attributes-table {
  font-size: 0.95rem;
}

.attributes-table th {
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
}

.attributes-table td {
  vertical-align: middle;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }

  .study-guide {
    padding: 1.5rem;
  }

  .nav-buttons {
    justify-content: center;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
  }

  .section-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .attributes-table {
    font-size: 0.85rem;
  }
}
</style>
