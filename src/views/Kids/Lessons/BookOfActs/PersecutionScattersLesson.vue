<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="text-white">Lesson 10: Persecution Scatters the Church</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
            <li class="breadcrumb-item">
              <RouterLink to="/link-kids" class="text-white">Link Kids</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">
              Persecution Scatters the Church
            </li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Lesson Information -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Lesson Information</h2>
                <div class="lesson-info">
                  <p><strong>Bible Story:</strong> Persecution Scatters the Early Church</p>
                  <p><strong>Scripture:</strong> Acts 8:1-25</p>
                  <p><strong>Learning Context:</strong> Sunday School</p>
                </div>
              </div>
            </div>

            <!-- Learning Goal -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Learning Goal</h2>
                <p>
                  Students will learn that God uses difficulty in the lives of believers to help
                  others learn about Jesus.
                </p>
                <p>
                  <strong>Learning Indicator:</strong> Students will demonstrate their understanding
                  of the lesson by being able to answer review questions.
                </p>
              </div>
            </div>

            <!-- Memory Verse -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Memory Verse</h2>
                <div class="memory-verse">
                  <p class="verse-text">{{ memoryVerse.verse }}</p>
                  <p class="verse-reference">{{ memoryVerse.reference }}</p>
                  <p class="verse-note">
                    <em>{{ memoryVerse.note }}</em>
                  </p>
                </div>
              </div>
            </div>

            <!-- Learning Activities -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Learning Activities</h2>
                <div v-for="(activity, index) in learningActivities" :key="index" class="mb-4">
                  <h3>Activity {{ index + 1 }}: {{ activity.title }}</h3>
                  <p>{{ activity.description }}</p>
                </div>
              </div>
            </div>

            <!-- Bible Lesson -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Bible Lesson</h2>
                <div class="lesson-content">
                  <h3>Persecution Scatters the Church</h3>

                  <p>
                    This lesson focuses on how God used persecution to spread His message beyond
                    Jerusalem. Through the story of the early church's persecution and scattering,
                    we learn that God can use difficult situations to accomplish His purposes and
                    spread the Gospel to new places.
                  </p>

                  <h3>Key Points:</h3>
                  <ul>
                    <li>After Stephen's death, persecution broke out against the church</li>
                    <li>Believers scattered throughout Judea and Samaria</li>
                    <li>Philip preached in Samaria with great success</li>
                    <li>The Gospel reached the Samaritan people</li>
                    <li>Simon the sorcerer's encounter with the Gospel</li>
                    <li>Peter and John's ministry to the Samaritan believers</li>
                  </ul>

                  <h3>Application:</h3>
                  <p>
                    God can use difficult situations in our lives to accomplish His purposes. Just
                    as the early believers were scattered by persecution but used this opportunity
                    to spread the Gospel, we too can trust God to work through our challenges to
                    help others learn about Jesus.
                  </p>
                </div>
              </div>
            </div>

            <!-- Review Questions -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Review Questions</h2>
                <div class="questions-list">
                  <div v-for="(qa, index) in reviewQuestions" :key="index" class="mb-3">
                    <p class="question">
                      <strong>Q{{ index + 1 }}:</strong> {{ qa.question }}
                    </p>
                    <p class="answer"><strong>A:</strong> {{ qa.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Next Lesson -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Next Lesson</h2>
                <div class="next-lesson">
                  <RouterLink to="/link-kids/philip-ethiopian" class="next-lesson-link">
                    <h3 class="mb-2">Philip and the Ethiopian</h3>
                    <p class="text-muted mb-0">
                      Learn how God guided Philip to share the Gospel with an Ethiopian official
                    </p>
                  </RouterLink>
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
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const reviewQuestions = ref([
  {
    question:
      'Why does a mother eagle begin to take away the feathers in the nest where her eaglets are?',
    answer: 'To make them uncomfortable',
  },
  {
    question: 'What would happen if the mother never forced her babies out of the nest?',
    answer: "They couldn't survive on their own",
  },
  {
    question: 'What difficulties were happening in the Jerusalem church?',
    answer: 'Persecution, Saul put believers in prison',
  },
  {
    question: 'Who scattered throughout Judea and Samaria?',
    answer: 'Everyone except the apostles',
  },
  {
    question: 'Where did the believers preach the Word?',
    answer: 'Everywhere they went',
  },
  {
    question: 'Why did the Jews dislike Samaritans?',
    answer: 'They were part Jew and part Gentile not pure Jews',
  },
  {
    question:
      'How did the people in Samaria respond to the message of Good News that Philip preached?',
    answer: 'They believed in Jesus',
  },
  {
    question: 'Why did Peter and John come to Samaria?',
    answer: 'To pray with the new believers to receive the Holy Spirit',
  },
  {
    question: 'Why was it important that Peter pray for the Samaritans to receive the Holy Spirit?',
    answer:
      'So the Jerusalem believers could see that God saved the Gentiles as He had saved them and filled them with the Holy Spirit',
  },
  {
    question: 'When does the Holy Spirit come into the heart of the believer?',
    answer: 'The moment he/she believes in Jesus',
  },
  {
    question: 'Why did Peter rebuke Simon?',
    answer: 'He asked to buy the ability to give others the Holy Spirit',
  },
  {
    question:
      "Why were the believers able to obey God's command to share the Good News even though they were facing difficulty?",
    answer: 'They trusted God to help them',
  },
])

const memoryVerse = ref({
  verse:
    'Blessed are you when men hate you, when they exclude you and insult you and reject your name as evil, because of the Son of Man. Rejoice in that day and leap for joy, because great is your reward in heaven.',
  reference: 'Luke 6:22-23',
  note: "Continue to work on last week's verse. As we continue to memorize this verse we can be comforted in difficulties and trust God as we face them.",
})

const learningActivities = ref([
  {
    title: 'Eagle Story',
    description:
      'Share a story about how a mother eagle teaches her babies how to fly, illustrating how God sometimes uses discomfort to help us grow and reach others.',
  },
  {
    title: 'Sharing Difficulties',
    description:
      'While waiting for students to arrive, have them write about difficult situations they or someone they know has faced (Example: Divorce, sickness, death, bullying, etc.). Discuss how they can trust God in those difficulties and how God could use those situations to share Jesus with others.',
  },
])
</script>

<style scoped>
.hero-section {
  background: var(--primary-color);
  padding: 4rem 0;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: white;
}

.card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card-body {
  padding: 2rem;
}

h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.memory-verse {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.verse-text {
  font-style: italic;
  margin-bottom: 0.5rem;
}

.verse-reference {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.verse-note {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0;
}

.question {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.answer {
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.lesson-info p {
  margin-bottom: 0.5rem;
}

.next-lesson-link {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  border-left: 4px solid var(--primary-color);
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.next-lesson-link:hover {
  transform: translateX(5px);
  background-color: #e9ecef;
}

.next-lesson-link h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0;
  }

  .hero-section h1 {
    font-size: 2rem;
  }

  .card-body {
    padding: 1.5rem;
  }
}
</style>
