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
            <li class="breadcrumb-item active text-white" aria-current="page">Lesson 24: Prophecies and Life of Christ</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Lesson 24: Prophecies and Life of Christ</h1>
        <p class="lead mb-4">God the Son — Basic Christian Teaching</p>
        <div class="guide-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-clock me-1"></i> 45-60 mins
          </span>
          <span class="badge bg-light text-primary">
            <i class="bi bi-people me-1"></i> Group Study
          </span>
        </div>
        <div class="mt-4" v-if="lessonPdfUrl">
          <a
            :href="lessonPdfUrl"
            download="Lesson_24_Prophecies_and_Life_of_Christ.pdf"
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
                    <p>Long before Jesus was born it was prophesied that He would come, Genesis 3:15.</p>
                    <p>Jesus did not come to earth unannounced. He came in the "fulness of time," Galatians 4:4.</p>
                    <p>A study of the fulfillment of minute details encourages our faith in a God that not only draws up master plans but the intricate details of the blueprints.</p>
                    <p>Also, to see that these details are fulfilled exactly as prophesied strengthens our faith in the inspiration of the Scriptures, and shows that the Bible is not an assortment of books by various authors but one Book with one author — God.</p>
                    <p>To assume that all these things just accidentally happened is an accident too great even for the imagination of an evolutionist!</p>
                    <p>The child of God prompted by the Holy Spirit gladly accepts their testimony with joy and cries out with Thomas, "My Lord and my God."</p>
                    <p class="mb-0">Our faith undergirded by the witness of fulfilled prophecy stands firm and unmovable.</p>
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

                  <!-- I Prophecies Concerning Christ's Origin -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">I Prophecies Concerning Christ's Origin</h4>
                    <ol class="mb-0 ms-3">
                      <li class="mb-3">Christ would come out of Israel. <strong>Numbers 24:17-19</strong> "There shall come a Star out of Jacob, and a Scepter shall rise out of Israel." Christ was born a Jew, a descendant of Abraham, Isaac, Jacob and David, Matthew 1:1-17.</li>
                      <li class="mb-3">Christ would be born of the family of David and of the tribe of Judah. <strong>Genesis 49:10</strong> "The Scepter shall not depart from Judah... until Shiloh come." <strong>Isaiah 11:1</strong> "And there shall come forth a rod out of the stem of Jesse, and a Branch shall grow out of its roots." These prophecies were fulfilled in our Savior Jesus Christ.</li>
                      <li class="mb-3">Christ would be born in Bethlehem. Luke 1:31-33. <strong>Micah 5:2</strong> "But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall He come forth unto Me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting." Christ was born in Bethlehem, Luke 2:4-7.</li>
                      <li class="mb-3">Christ would be born of a virgin. <strong>Isaiah 7:14</strong> "Behold, a virgin shall conceive, and bear a Son, and shall call His Name Immanuel." Christ was born of a virgin, Matthew 1:18,22,23.</li>
                      <li class="mb-3">The time of Christ's coming was specified. <strong>Daniel 9:24-26</strong> "Seventy weeks are determined upon thy people, and upon thy holy city, to finish the transgression, and to make an end of sins... and after threescore and two weeks shall Messiah be cut off." Messiah, Christ, was cut off (crucified) 490 years after the rebuilding of Jerusalem. Christ was crucified at the precise time. No one earlier or later could be Christ.</li>
                      <li class="mb-3">Christ's coming was announced by a forerunner. <strong>Isaiah 40:3</strong> "The voice of him that crieth in the wilderness, Prepare ye the way of the Lord, make straight in the desert a highway for our God." This prophecy was fulfilled in John the Baptist, Matthew 3:3.</li>
                      <li class="mb-0">The Messiah would be God — the wonderful verse of <strong>Isaiah 9:6</strong>. "... the mighty God ..." We have learned from the lesson on the Deity of Christ that Jesus was God, John 1:14.</li>
                    </ol>
                  </div>

                  <!-- II Prophecies Concerning Christ's Life -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">II Prophecies Concerning Christ's Life</h4>
                    <ol class="mb-0 ms-3">
                      <li class="mb-3">He would spend part of His childhood in Egypt. <strong>Hosea 11:1</strong> "When Israel was a child, then I loved him, and called My son out of Egypt."</li>
                      <li class="mb-3">He would suffer and make atonement for sin. Isaiah 53:4-6 had to be fulfilled by Christ. <strong>2 Corinthians 5:21</strong> records the fulfillment, "For He hath made Him to be sin for us, who knew no sin; that we might be made the righteousness of God in Him."</li>
                      <li class="mb-3">He would ride into Jerusalem on a colt. <strong>Zechariah 9:9</strong> "Behold, Thy King cometh unto thee: He is just, and having salvation lowly, and riding upon an ass." The fulfillment of this on Palm Sunday is told in detail in the Gospels.</li>
                      <li class="mb-3">He would be given gall and vinegar in His agony on the cross. <strong>Psalm 69:21</strong> "They gave Me also gall for My meat; and in My thirst they gave Me vinegar to drink." This was fulfilled at the cross in Matthew 27:34 by the Roman soldiers.</li>
                      <li class="mb-3">Not a bone would be broken, contrary to Roman practices. <strong>Psalm 34:20</strong> "He keepeth all His bones; not one of them is broken." Not a bone was broken of the Passover lamb, either, Exodus 12:46. Ordinarily the legs of the crucified prisoners were broken to prevent them from escaping but they broke custom and didn't break Jesus' legs or bones, John 19:33-36.</li>
                      <li class="mb-3">Men would cast lots for His garments. <strong>Psalm 22:18</strong> "They part My garments among them, and cast lots upon My vesture." This prophecy was fulfilled precisely as spoken by the soldiers in Matthew 27:35.</li>
                      <li class="mb-3">Christ would utter certain words in His dying agony. <strong>Psalm 22:1</strong> "My God, My God, why hast Thou forsaken Me." This prophecy was fulfilled as the fourth of the "Seven sayings from the Cross," Mark 15:34.</li>
                      <li class="mb-0">He would rise again from the dead. <strong>Psalm 16:10</strong> "Thou wilt not leave My soul in hell; neither wilt Thou suffer Thine Holy One to see corruption." Peter affirms that this was literally and actually fulfilled in Acts 2:31.</li>
                    </ol>
                  </div>

                  <!-- III The Life of Christ -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">III The Life of Christ</h4>
                    <ol class="mb-0 ms-3">
                      <li class="mb-2">His pre-incarnate state, as God, Jesus has always existed. He was before all things.</li>
                      <li class="mb-2">The birth of Jesus of the Virgin Mary is recorded in Matthew and Luke.</li>
                      <li class="mb-2">Jesus was circumcised at the age of eight days, Luke 2:21.</li>
                      <li class="mb-2">Jesus was taken to the Temple at Jerusalem when He was 12 years of age, Luke 2:41-48.</li>
                      <li class="mb-2">Jesus spent the early years of His life as a carpenter in Nazareth, Mark 6:3.</li>
                      <li class="mb-2">Jesus began His ministry in Judea, Samaria and Galilee. This period lasted six months.</li>
                      <li class="mb-2">Jesus' first miracle was performed at Cana of Galilee, John 2:1; and His second miracle, the healing of the Nobleman's son, in Capernaum, John 4:46,54.</li>
                      <li class="mb-2">The second stage of Jesus' ministry covered a period of 6 to 8 months in Capernaum and Galilee. He performed miracles, healed the sick and preached the Gospel.</li>
                      <li class="mb-2">The third stage was the later Galilean ministry lasting about a year in and about Galilee. Crowds followed Him. He preached the Sermon on the Mount, etc., Matthew 5, 6 and 7.</li>
                      <li class="mb-2">In the next stage the Pharisees sought to kill Him. Jesus travels to Capernaum, Phoenicia, Bethsaida, Caesarea, Philippi and finally re-enters Galilee.</li>
                      <li class="mb-2">The last six months were spent teaching, preaching and travelling.</li>
                      <li class="mb-2">The last week, Palm Sunday, the Last Supper, Gethsemane, the trials and death by the cross.</li>
                      <li class="mb-2">Three days later, according to prophecy, Jesus rose again from the dead.</li>
                      <li class="mb-0">Forty days after the resurrection He ascended visibly and bodily into heaven, Acts 1:10, 11.</li>
                    </ol>
                  </div>

                  <!-- IV The Miracles of Jesus -->
                  <div class="content-card mb-4">
                    <h4 class="text-primary mb-3">IV The Miracles of Jesus</h4>
                    <p class="mb-2">A miracle is the setting aside of a lower law by a higher law. Lower law is the natural physical law of earth and nature. Only God can do things contrary to this law.</p>
                    <p class="mb-2">If Jesus truly performed miracles, then He is God, for man cannot perform true miracles.</p>
                    <p class="mb-2">The Lord Jesus performed miracles not to "show off" or entertain, but to prove His Deity and cause men to believe in Him, His message and His Person, John 2:11; 20:31.</p>
                    <p class="mb-2">Jesus performed credible miracles over nature. He stilled the tempest, calmed the wind and water. He even walked on the water, Matthew 8:26, 27; 14:25.</p>
                    <p class="mb-2">Jesus performed miracles over devils, Mark 5:12, 13; Matthew 8:28-32; etc.</p>
                    <p class="mb-2">Jesus performed miracles over disease — cleansed the leper; healed the lame; opened the eyes of the blind; caused the dumb to hear; fevers to depart, Matthew 8:3; 12:10-13; etc.</p>
                    <p class="mb-2">Jesus performed miracles over death. He raised the dead contrary to all human law that says a dead person must stay dead, John 11:44; Matthew 9:23-25; Luke 7:12-15.</p>
                    <p class="mb-2">Our Lord's miracles were restrained and are completely believable.</p>
                    <p class="mb-0">His miracles were performed openly in the presence of many witnesses and recorded by divine inspiration for us to read and believe.</p>
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
                    <p class="mb-2">The life of Jesus Christ on earth can be summarized in the words of Acts 10:38, "Who went about doing good, and healing all that were oppressed of the devil."</p>
                    <p class="mb-0">The Lord Jesus left us an example that we should follow. <strong>1 Peter 2:21</strong> "For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that we should follow His steps." We are to walk as He walked. <strong>1 John 2:6</strong>, Christ came to do God's will and we should too, John 8:29; Hebrews 10:7.</p>
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
import lessonPdfUrl from '@/assets/lessons/Lesson_24_Prophecies_and_Life_of_Christ.pdf'
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

.intro-card, .content-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid var(--primary-color);
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
}
</style>
