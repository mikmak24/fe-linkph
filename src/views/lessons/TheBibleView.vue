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
            <li class="breadcrumb-item active text-white" aria-current="page">Lesson 1: The Bible</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Lesson 1: The Bible</h1>
        <p class="lead mb-4">Basic Christian Teaching</p>
        <div class="guide-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-clock me-1"></i> 45-60 mins
          </span>
          <span class="badge bg-light text-primary">
            <i class="bi bi-people me-1"></i> Group Study
          </span>
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
                  <a href="#main-content" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-book me-1"></i> Main Content
                  </a>
                  <a href="#discussion" class="btn btn-outline-primary me-2 mb-2">
                    <i class="bi bi-question-circle me-1"></i> Discussion
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
                <div class="section-content">
                  <div class="ice-breaker-card">
                    <p class="question">What's your favorite Bible verse and why?</p>
                  </div>
                </div>
              </div>

              <!-- Introduction -->
              <div class="guide-section introduction mb-5">
                <div class="section-header">
                  <i class="bi bi-book section-icon"></i>
                  <h3 class="section-title">Introduction</h3>
                </div>
                <div class="section-content">
                  <div class="intro-card">
                    <p>We Christians realize that the most important parts of our lives are those that make an impact for eternity. The study of God and his relations to, purposes for, and work within the created universe - Matters!</p>
                    <p>Welcome to our Link Group where we focus on biblical small groups grounded in the teachings of the bible. Our goal is to ground biblical believers and to develop disciples that make disciplines!</p>
                  </div>
                </div>
              </div>

              <!-- Main Content -->
              <div id="main-content" class="guide-section main-content mb-5">
                <div class="section-header">
                  <i class="bi bi-journal-text section-icon"></i>
                  <h3 class="section-title">What is the Bible?</h3>
                </div>
                <div class="section-content">
                  <div class="content-card">
                    <p>The word "Bible" comes from the Latin and Greek words meaning "book." The Bible is the oldest book in existence. It required 16 centuries to write it; the first writer died 1450 years before the last writer was born. The Bible lends itself to translation and has been translated in whole or in part in more than 1000 languages and dialects. The Bible was written by approximately 40 different authors over a period of about 1,500 years.</p>
                  </div>
                </div>
              </div>

              <!-- Wonders of the Bible -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-stars section-icon"></i>
                  <h3 class="section-title">The Wonders of the Bible</h3>
                </div>
                <div class="section-content">
                  <div class="wonders-card">
                    <div class="wonder-points">
                      <div class="wonder-point">
                        <i class="bi bi-1-circle"></i>
                        <div>
                          <h5><span class="highlight">Formation</span></h5>
                          <p>One book written in one place in one language, another book written in another country centuries later in another language.</p>
                        </div>
                      </div>
                      <div class="wonder-point">
                        <i class="bi bi-2-circle"></i>
                        <div>
                          <h5><span class="highlight">Unification</span></h5>
                          <p>It is a library of 66 books, yet only one book, for it has but one author, the Holy Spirit. There are no contradictions.</p>
                        </div>
                      </div>
                      <div class="wonder-point">
                        <i class="bi bi-3-circle"></i>
                        <div>
                          <h5><span class="highlight">Age</span></h5>
                          <p>It is the most ancient of all books.</p>
                        </div>
                      </div>
                      <div class="wonder-point">
                        <i class="bi bi-4-circle"></i>
                        <div>
                          <h5><span class="highlight">Sales</span></h5>
                          <p>It is the bestseller of all time.</p>
                        </div>
                      </div>
                      <div class="wonder-point">
                        <i class="bi bi-5-circle"></i>
                        <div>
                          <h5><span class="highlight">Interest</span></h5>
                          <p>It is the only book that is read by all classes and ages of mankind. It is read by sages and children; read by all nations.</p>
                        </div>
                      </div>
                      <div class="wonder-point">
                        <i class="bi bi-6-circle"></i>
                        <div>
                          <h5><span class="highlight">Language</span></h5>
                          <p>It was written largely by uneducated men, yet it is considered a literary masterpiece.</p>
                        </div>
                      </div>
                      <div class="wonder-point">
                        <i class="bi bi-7-circle"></i>
                        <div>
                          <h5><span class="highlight">Preservation</span></h5>
                          <p>It has been the most hated of all books. Time and again kings and governments have sought to burn and abolish it. Yet God has preserved it for us today and it can be found in almost every home.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Symbols of the Word -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-symbols section-icon"></i>
                  <h3 class="section-title">Symbols of the Word of God</h3>
                </div>
                <div class="section-content">
                  <div class="symbols-card">
                    <div class="symbol-points">
                      <div class="symbol-point">
                        <i class="bi bi-sword"></i>
                        <div>
                          <h5><span class="highlight">A Sword</span></h5>
                          <p>The Bible is a pointed Word that convicts the hearer. Hebrews 4:12, "For the Word of God is quick, and powerful, and sharper than any two-edged sword, piercing even to the dividing asunder of soul and spirit."</p>
                        </div>
                      </div>
                      <div class="symbol-point">
                        <i class="bi bi-hammer"></i>
                        <div>
                          <h5><span class="highlight">A Hammer</span></h5>
                          <p>The Bible is powerful and breaks the resistance of the hearer. Jeremiah 23:29, "Is not My Word… saith the Lord… like a hammer that breaketh the rock in pieces?"</p>
                        </div>
                      </div>
                      <div class="symbol-point">
                        <i class="bi bi-seed"></i>
                        <div>
                          <h5><span class="highlight">A Seed</span></h5>
                          <p>The Bible is a living Word regenerating the hearer. I Peter 1:23, "Being born again, not of corruptible seed, but of incorruptible (seed), by the Word of God, which liveth and abideth forever."</p>
                        </div>
                      </div>
                      <div class="symbol-point">
                        <i class="bi bi-mirror"></i>
                        <div>
                          <h5><span class="highlight">A Mirror</span></h5>
                          <p>The Bible is a faithful Word, revealing the individual to himself. James 1:23-25 likens the Bible to a mirror, in which the sinner (or saint) looks and sees a true reflection of himself as portrayed by the Lord Himself.</p>
                        </div>
                      </div>
                      <div class="symbol-point">
                        <i class="bi bi-fire"></i>
                        <div>
                          <h5><span class="highlight">A Fire</span></h5>
                          <p>The Bible is a burning Word, consuming the dross in the hearer. Jeremiah 23:29, "Is not My Word like as a fire? saith the Lord." Jeremiah 20:9, "But His Word was in mine heart as a burning fire shut up in my bones."</p>
                        </div>
                      </div>
                      <div class="symbol-point">
                        <i class="bi bi-lamp"></i>
                        <div>
                          <h5><span class="highlight">A Lamp</span></h5>
                          <p>The Bible is an illuminating Word guiding the believer day by day. Psalm 119:105, "Thy Word is a lamp unto my feet, and a light unto my path."</p>
                        </div>
                      </div>
                      <div class="symbol-point">
                        <i class="bi bi-cup-hot"></i>
                        <div>
                          <h5><span class="highlight">Food</span></h5>
                          <p>The Bible is nourishing food, feeding the soul (providing meat and drink). I Peter 2:2, "As newborn babes, desire the sincere milk of the Word, that ye may grow thereby." See also Hebrews 5:12-14. I Corinthians 3:2, "I have fed you with milk, and not with meat." Romans 10:17, "So then faith cometh by hearing, and hearing by the Word of God."</p>
                        </div>
                      </div>
                    </div>
                    <p class="mt-4">The Word of God convicts, breaks, regenerates, reveals, consumes, illuminates and nourishes the individual.</p>
                  </div>
                </div>
              </div>

              <!-- Why We Need to Preach God's Word -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-megaphone section-icon"></i>
                  <h3 class="section-title">Why We Need to Preach God's Word</h3>
                </div>
                <div class="section-content">
                  <div class="preach-card">
                    <p>In Mark 2:2, Jesus faced the multitude and made a tremendous decision; it was to preach the Word of God. We are sent to preach not a new Church but Christ as He is revealed in the Bible. We insist on preaching the Bible because it endures for time and eternity.</p>
                    <p>Isaiah 40:8, "The grass withereth, the flower fadeth: but the Word of our God shall stand for ever."</p>
                    <div class="benefits-list">
                      <div class="benefit-item">
                        <h5><span class="highlight">Conviction of Sin</span></h5>
                        <p>Comes through the preaching of the Word of God, Acts 2:14-37. In Peter's Pentecost sermon nine verses out of 23 are quotations from the Old Testament.</p>
                      </div>
                      <div class="benefit-item">
                        <h5><span class="highlight">Faith</span></h5>
                        <p>Comes by hearing the Word of God. Romans 10:17, "So then faith cometh by hearing, and hearing by the Word of God."</p>
                      </div>
                      <div class="benefit-item">
                        <h5><span class="highlight">Cleansing</span></h5>
                        <p>Comes from the Word of God. II Corinthians 7:1, "Having therefore these promises, dearly beloved, let us cleanse ourselves from all filthiness of the flesh and spirit, perfecting holiness in the fear of God." The promises are the words of God.</p>
                      </div>
                      <div class="benefit-item">
                        <h5><span class="highlight">Assurance</span></h5>
                        <p>Comes from the Word of God. I John 5:13, "These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life."</p>
                      </div>
                      <div class="benefit-item">
                        <h5><span class="highlight">Comfort</span></h5>
                        <p>Comes from the Word of God. I Thessalonians 4:18, "Wherefore comfort one another with these words." (These words are the words recorded in the Bible)</p>
                      </div>
                      <div class="benefit-item">
                        <h5><span class="highlight">Truth</span></h5>
                        <p>Comes from the Word of God, Acts 17:11, "These were more noble than those in Thessalonica, in that they received the Word with all readiness of mind, and searched the Scriptures daily whether those things were so."</p>
                      </div>
                      <div class="benefit-item">
                        <h5><span class="highlight">New Birth</span></h5>
                        <p>Comes from the Word of God. I Peter 1:23, "Being born again, not of corruptible seed, but of incorruptible, by the Word of God."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Why We Don't Read God's Word -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-question-circle section-icon"></i>
                  <h3 class="section-title">Why We Don't Read God's Word</h3>
                </div>
                <div class="section-content">
                  <div class="reasons-card">
                    <p>Jeremiah 15:16</p>
                    <div class="reasons-list">
                      <div class="reason-item">
                        <h5><span class="highlight">Ignorance</span></h5>
                        <p>Ignorant of its truths; ignorant of its formation and the information available.</p>
                      </div>
                      <div class="reason-item">
                        <h5><span class="highlight">Already Eaten</span></h5>
                        <p>Feeding on ashes, Isaiah 44:20; feeding on politics, comics, etc.</p>
                      </div>
                      <div class="reason-item">
                        <h5><span class="highlight">Sickness</span></h5>
                        <p>A sin-sick soul has no appetite for the Word of God.</p>
                      </div>
                      <div class="reason-item">
                        <h5><span class="highlight">Lunching Between Meals</span></h5>
                        <p>Living in the light, frivolous non-essentials of life.</p>
                      </div>
                      <div class="reason-item">
                        <h5><span class="highlight">Lacks Flavor</span></h5>
                        <p>Business, sports, education have taken prime interest.</p>
                      </div>
                      <div class="reason-item">
                        <h5><span class="highlight">Too Sweet</span></h5>
                        <p>Revelation 10:8-10; the Book was sweet as honey in the mouth. Some think the Bible is only for the sick, aged and the dying; too sweet and sentimental for practical, healthy people.</p>
                      </div>
                      <div class="reason-item">
                        <h5><span class="highlight">Too Bitter</span></h5>
                        <p>Revelation 10:8-10; as soon as he had eaten the Book it became bitter in his belly. The truths of judgment, hell and sin are too bitter and some are afraid to read the book.</p>
                      </div>
                    </div>
                    <p class="mt-4">Let us say with Jeremiah in 15:16, "Thy words were found, and I did eat them; and Thy Word was unto me the joy and rejoicing of mine heart."</p>
                  </div>
                </div>
              </div>

              <!-- How to Read the Bible -->
              <div class="guide-section mb-5">
                <div class="section-header">
                  <i class="bi bi-book section-icon"></i>
                  <h3 class="section-title">Things to Remember When Reading the Bible</h3>
                </div>
                <div class="section-content">
                  <div class="reading-tips-card">
                    <div class="reading-tips-list">
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Lovingly</span></h5>
                        <p>The Bible is the Word of my Savior to me, Psalm 119:11.</p>
                      </div>
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Reverently</span></h5>
                        <p>The Bible is the Word of God, the Almighty Savior and Judge.</p>
                      </div>
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Prayerfully</span></h5>
                        <p>The Bible is God's message to me, to my own heart and life.</p>
                      </div>
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Meditatively</span></h5>
                        <p>Be like Isaac of old and meditate on the Word of God.</p>
                      </div>
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Systematically</span></h5>
                        <p>Read right through the Bible, not just selected portions.</p>
                      </div>
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Resolutely</span></h5>
                        <p>I will obey that which my Father teaches me from His book.</p>
                      </div>
                      <div class="reading-tip">
                        <h5><span class="highlight">Read it Daily</span></h5>
                        <p>Not just on Sundays but every day of your life. Read a portion.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Conclusion -->
              <div class="guide-section conclusion mb-5">
                <div class="section-header">
                  <i class="bi bi-bookmark-check section-icon"></i>
                  <h3 class="section-title">Conclusion</h3>
                </div>
                <div class="section-content">
                  <div class="conclusion-card">
                    <p>Make the Bible your constant guide and companion in life. The Bible is the Word of God; it is worthy of being believed. Breathe a prayer for the Holy Spirit to help you understand the sacred pages. The Word of God, if neglected, will be our Judge at the last day, John 12:48.</p>
                    <p>Lord, teach me to treasure this volume highly; to defend it when necessary and make me bold to proclaim the whole counsel of God.</p>
                  </div>
                </div>
              </div>

              <!-- Discussion Questions -->
              <div id="discussion" class="guide-section discussion-questions">
                <div class="section-header">
                  <i class="bi bi-question-circle section-icon"></i>
                  <h3 class="section-title">Link Questions</h3>
                </div>
                <div class="section-content">
                  <div class="questions-card">
                    <div class="question-item">
                      <h5>What makes the bible hard to read?</h5>
                    </div>
                    <div class="question-item">
                      <h5>What makes it difficult to study the bible?</h5>
                    </div>
                    <div class="question-item">
                      <h5>Does your Church faithfully teach the bible?</h5>
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

.guide-meta {
  margin-top: 2rem;
}

.guide-meta .badge {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 2rem;
  transition: transform 0.3s ease;
}

.guide-meta .badge:hover {
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
  border-radius: 0.5rem;
}

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
}

.section-title {
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
}

.section-content {
  color: #4a5568;
  line-height: 1.7;
}

.prayer-card, .ice-breaker-card, .intro-card, .content-card, 
.wonders-card, .symbols-card, .preach-card, .reasons-card, 
.reading-tips-card, .conclusion-card, .questions-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.wonder-points, .symbol-points, .benefits-list, .reasons-list, .reading-tips-list {
  display: grid;
  gap: 1.5rem;
}

.wonder-point, .symbol-point, .benefit-item, .reason-item, .reading-tip {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.wonder-point i, .symbol-point i {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.wonder-point h5, .symbol-point h5, .benefit-item h5, 
.reason-item h5, .reading-tip h5 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.steps-timeline {
  position: relative;
  padding-left: 2rem;
}

.steps-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-color);
}

.step {
  position: relative;
  margin-bottom: 2rem;
}

.step:last-child {
  margin-bottom: 0;
}

.step-number {
  position: absolute;
  left: -2.5rem;
  width: 2rem;
  height: 2rem;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.step-content h5 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.question-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.question-item:last-child {
  margin-bottom: 0;
}

.question-item h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .study-guide {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
  
  .nav-buttons {
    flex-direction: column;
  }
  
  .nav-buttons .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .wonder-points, .symbol-points, .benefits-list, .reasons-list, .reading-tips-list {
    gap: 1rem;
  }

  .wonder-point, .symbol-point, .benefit-item, .reason-item, .reading-tip {
    flex-direction: row;
    text-align: left;
    gap: 0.75rem;
    align-items: flex-start;
  }

  .wonder-point i, .symbol-point i {
    font-size: 1.25rem;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .wonder-point h5, .symbol-point h5, .benefit-item h5, 
  .reason-item h5, .reading-tip h5 {
    margin-bottom: 0.25rem;
  }

  .wonder-point p, .symbol-point p, .benefit-item p, 
  .reason-item p, .reading-tip p {
    margin-bottom: 0;
  }

  .steps-timeline {
    padding-left: 1.5rem;
  }

  .step-number {
    width: 1.5rem;
    height: 1.5rem;
    left: -2rem;
    font-size: 0.875rem;
  }

  .step-content {
    padding: 1rem;
  }

  .question-item {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .hero-section {
    padding: 4rem 0;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .guide-meta {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .guide-meta .badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .section-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}

.highlight {
  background: linear-gradient(120deg, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0.2) 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  padding: 0 0.2em;
}

.highlight:hover {
  background-size: 100% 100%;
}

.reasons-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(var(--primary-rgb), 0.1);
}

.reasons-card > p:first-child {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  font-style: italic;
}

.reasons-list {
  display: grid;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.reason-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(var(--primary-rgb), 0.05);
}

.reason-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.reason-item h5 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.reason-item h5::before {
  content: '•';
  color: var(--primary-color);
  font-size: 1.5rem;
  line-height: 1;
}

.reason-item p {
  color: #4a5568;
  margin: 0;
  line-height: 1.6;
}

.reasons-card > p:last-child {
  text-align: center;
  font-style: italic;
  color: var(--primary-color);
  font-weight: 500;
  padding: 1rem;
  background: rgba(var(--primary-rgb), 0.05);
  border-radius: 0.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .reasons-card {
    padding: 1.25rem;
  }

  .reasons-list {
    gap: 1rem;
  }

  .reason-item {
    padding: 1.25rem;
  }

  .reason-item h5 {
    font-size: 1rem;
  }
}

.reading-tips-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(var(--primary-rgb), 0.1);
}

.reading-tips-list {
  display: grid;
  gap: 1.25rem;
}

.reading-tip {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(var(--primary-rgb), 0.05);
  position: relative;
  overflow: hidden;
}

.reading-tip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.reading-tip::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary-color);
  opacity: 0.8;
}

.reading-tip h5 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.reading-tip h5::after {
  content: '→';
  color: var(--primary-color);
  font-size: 1.2rem;
  opacity: 0.6;
}

.reading-tip p {
  color: #4a5568;
  margin: 0;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;
}

.reading-tip p::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -0.5rem;
  color: var(--primary-color);
  opacity: 0.3;
  font-size: 2rem;
  font-family: serif;
}

@media (max-width: 768px) {
  .reading-tips-card {
    padding: 1.25rem;
  }

  .reading-tips-list {
    gap: 1rem;
  }

  .reading-tip {
    padding: 1.25rem;
  }

  .reading-tip h5 {
    font-size: 1rem;
  }

  .reading-tip p {
    padding-left: 1.25rem;
  }
}

.preach-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(var(--primary-rgb), 0.1);
}

.preach-card > p {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.preach-card > p:last-of-type {
  font-style: italic;
  color: var(--primary-color);
  text-align: center;
  padding: 1rem;
  background: rgba(var(--primary-rgb), 0.05);
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

.benefits-list {
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
}

.benefit-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(var(--primary-rgb), 0.05);
  position: relative;
}

.benefit-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.benefit-item::after {
  content: '';
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 24px;
  height: 24px;
  background: rgba(var(--primary-rgb), 0.1);
  border-radius: 50%;
  z-index: 0;
}

.benefit-item h5 {
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.benefit-item h5::before {
  content: '✓';
  color: var(--primary-color);
  font-size: 1.2rem;
  opacity: 0.8;
}

.benefit-item p {
  color: #4a5568;
  margin: 0;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  padding-left: 1.75rem;
}

@media (max-width: 768px) {
  .preach-card {
    padding: 1.25rem;
  }

  .preach-card > p {
    font-size: 1rem;
  }

  .benefits-list {
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .benefit-item {
    padding: 1.25rem;
  }

  .benefit-item::after {
    right: 1.25rem;
    top: 1.25rem;
    width: 20px;
    height: 20px;
  }

  .benefit-item h5 {
    font-size: 1rem;
  }

  .benefit-item p {
    padding-left: 1.5rem;
  }
}
</style> 