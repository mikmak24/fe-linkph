<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="lesson-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Lesson 2: The Day of Pentecost & God's Gift</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item"><RouterLink to="/link-kids">Link Kids</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Pentecost</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- Lesson Info Card -->
            <div class="lesson-info-card mb-5">
              <div class="row">
                <div class="col-md-4">
                  <img src="@/assets/images/kids/2acts.png" alt="Pentecost" class="img-fluid rounded shadow-sm">
                </div>
                <div class="col-md-8">
                  <div class="lesson-meta">
                    <h3 class="h4 mb-3">Lesson Information</h3>
                    <ul class="list-unstyled">
                      <li><strong>Bible Story:</strong> Pentecost and the Gift of the Holy Spirit</li>
                      <li><strong>Scripture:</strong> Acts 2:1-21</li>
                      <li><strong>Learning Context:</strong> Sunday School</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Objective -->
            <div class="objectives-card mb-5">
              <h3 class="h4 mb-3">Main Objective</h3>
              <p>The coming of the Holy Spirit at Pentecost is an exciting and important story to share with all ages. Through this message, children should understand how the disciples received the Holy Spirit and were able to begin sharing the good news of Jesus with everyone. Our job is also to share Gospel joy with others!</p>
            </div>

            <!-- Law/Gospel Theme -->
            <div class="objectives-card mb-5">
              <h3 class="h4 mb-3">Law/Gospel Theme</h3>
              <p>The story of Pentecost propels the church year into a new season. Easter is the culmination of the Gospel story, the fulfilment of all that the prophets spoke about the Messiah. With Pentecost, the third person of the Trinity is given to carry the church into its next phase. The Holy Spirit enables God's people to spread the Gospel and to establish the church.</p>
            </div>

            <!-- Learning Goals -->
            <div class="objectives-card mb-5">
              <h3 class="h4 mb-3">Learning Goals</h3>
              <ul class="objectives-list">
                <li>Students will learn that God's promised Holy Spirit came and indwelt believers on Pentecost.</li>
                <li>Students will discover answers from reading Scriptures throughout the Bible lesson.</li>
                <li>Students will be able to recall events and characters from the story by answering review questions.</li>
              </ul>
            </div>

            <!-- Lesson Content -->
            <div class="lesson-content-card mb-5">
              <h3 class="h4 mb-3">Lesson Proper</h3>
              <div class="lesson-content">
                <p>Do you remember how last week we talked about how Jesus promised to send the disciples a special present that would help them share about the news of the Gospel? Well, the disciples were waiting for this present, and they were hanging out in a room in Jerusalem.</p>
                
                <p>There were actually a lot of people in town at the time, because they were having a special celebration called the Feast of Weeks, or the Feast of Tabernacles. This was an important time that all Jewish people had to honor, and they would come to Jerusalem to celebrate it.</p>

                <p>So, there were people from all over the place there, and the disciples were patiently waiting. Then, all of a sudden, there was a big sound like a rushing wind! And then, there were little bits of fire that appeared!</p>

                <p>This was a special fire that did not burn up or catch their hair and clothes into flames, but showed that God's spirit was present. A lot of times in the Bible, God appears as fire (think Elijah, burning bush with Moses, etc.). Here was the Holy Spirit!</p>

                <p>Now, the Holy Spirit is sort of a special go-between...it is the spirit that makes all things possible. Sometimes we don't know what to say or how to pray...the Holy Spirit comes in to help. Well, the Holy Spirit came to these disciples and appeared as flames above their heads!</p>

                <p>And then another amazing thing happened. The disciples started speaking in other languages. There were people in Jerusalem that spoke a lot of languages, but the disciples didn't have their dictionaries and translators with them...yet they were able to just talk automatically in other languages!</p>

                <p>And they started eagerly sharing the story of Jesus. Some people criticized them, but Peter assured everyone that they were not drunk or crazy. They were full of God's love! And with that, they all continued talking about the story of Jesus and sharing the amazing things He had done.</p>

                <p>A lot of people came to believe, and after that, the disciples began meeting together regularly. They shared everything with other believers, and continued meeting and sharing and caring for one another.</p>

                <p>So, at Pentecost we get to celebrate the birthday of the church! It was the start of an amazing way that God allows us to serve and love each other. And that is the truly exciting thing... Once we are "on fire" and have received the light of Jesus, we can take that to other people and "light up" their lives as well.</p>

                <p>God wants us to share His story and His love with the whole world. It only takes a spark or a single candle to get others going. Let's celebrate, and let's share with one another!</p>
              </div>
            </div>

            <!-- Prayer -->
            <div class="prayer-card mb-5">
              <h3 class="h4 mb-3">Prayer</h3>
              <div class="prayer-content">
                <p>Dear God,</p>
                <p>Thank you for your Word the Bible</p>
                <p>Thank you for your church!</p>
                <p>I'm glad I am part of your family</p>
                <p>Help me to share your love and tell others about Jesus,</p>
                <p>I love you, God!</p>
                <p>Thanks for loving me</p>
                <p>In Jesus' name, amen</p>
              </div>
            </div>

            <!-- Review Questions -->
            <div class="review-card mb-5">
              <h3 class="h4 mb-3">Review Questions</h3>
              <div class="review-questions">
                <ol>
                  <li>What special day were the disciples celebrating when the Holy Spirit came? (Pentecost)</li>
                  <li>What did the Holy Spirit look like when He came? (Tongues of fire)</li>
                  <li>What special ability did the Holy Spirit give the disciples? (Ability to speak in other languages)</li>
                  <li>What did Peter tell the people they needed to do to be saved? (Repent and be baptized)</li>
                  <li>How many people believed in Jesus that day? (About 3,000)</li>
                </ol>
              </div>
            </div>

            <!-- Next Lesson Link -->
            <div class="next-lesson-card mb-5">
              <h3 class="h4 mb-3">Next Lesson</h3>
              <RouterLink to="/link-kids/ascension" class="next-lesson-link">
                <div class="next-lesson-content">
                  <h4>Apostles Witness Jesus' Ascension</h4>
                  <p>Learn about Jesus' return to heaven and the promise of His return</p>
                </div>
              </RouterLink>
            </div>
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

.lesson-info-card, .memory-verse-card, .objectives-card, .activity-card, .preparation-card, .lesson-content-card, .review-card, .prayer-card {
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.objectives-list {
  list-style: none;
  padding-left: 0;
}

.objectives-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.objectives-list li:before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.prayer-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--primary-color);
}

.prayer-content p {
  margin-bottom: 0.5rem;
}

.review-questions ol {
  padding-left: 1.2rem;
}

.review-questions li {
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .concept-grid {
    grid-template-columns: 1fr;
  }
}

.next-lesson-card {
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.next-lesson-link {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease;
}

.next-lesson-link:hover {
  transform: translateX(10px);
}

.next-lesson-content {
  padding: 1rem;
  border-left: 4px solid var(--primary-color);
}

.next-lesson-content h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.next-lesson-content p {
  color: #666;
  margin-bottom: 0;
}
</style> 