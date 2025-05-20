<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="text-white">Lesson 9: The Stoning of Stephen</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
            <li class="breadcrumb-item">
              <RouterLink to="/link-kids" class="text-white">Link Kids</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">
              The Stoning of Stephen
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
                  <p>
                    <strong>Bible Story:</strong> The Stoning of Stephen (Suffering for the Savior)
                  </p>
                  <p><strong>Scripture:</strong> Acts 6:8-7:60</p>
                  <p><strong>Learning Context:</strong> Sunday School</p>
                </div>
              </div>
            </div>

            <!-- Learning Goal -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Learning Goal</h2>
                <p>
                  Students will learn from the story of Stephen that when persecuted for their faith
                  in Christ, believers receive courage and perseverance through the power of the
                  Holy Spirit.
                </p>
                <ul>
                  <li>
                    Students will also learn that Jesus warned His disciples that they would suffer
                    for following Him.
                  </li>
                  <li>Believers who suffer for obedience to Jesus will be rewarded.</li>
                </ul>
                <p>
                  <strong>Learning Indicator:</strong> Students will demonstrate their comprehension
                  of the lesson by being able to answer the review questions and participate in a
                  drama re-enacting the story.
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
                  <h3>Suffering for the Savior - Stephen is Martyred</h3>

                  <p>
                    This lesson focuses on the story of Stephen, one of the seven chosen deacons,
                    who became the first Christian martyr. Through his story, we learn about the
                    power of the Holy Spirit in giving believers courage to stand firm in their
                    faith, even in the face of persecution.
                  </p>

                  <h3>Key Points:</h3>
                  <ul>
                    <li>Stephen was full of God's grace and power</li>
                    <li>He spoke with wisdom given by the Holy Spirit</li>
                    <li>He faced false accusations bravely</li>
                    <li>He shared God's truth even when facing death</li>
                    <li>He saw Jesus standing at God's right hand</li>
                    <li>He followed Jesus' example by forgiving his persecutors</li>
                  </ul>

                  <h3>Application:</h3>
                  <p>
                    As believers, we can be comforted knowing that the Holy Spirit lives inside our
                    hearts. Whatever God asks us to do while serving Him, we will have the power to
                    do it because He lives inside of us. One day when we leave this earth, we will
                    spend eternity with our Savior, Jesus Christ.
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
                  <RouterLink to="/link-kids/persecution-scatter-church" class="next-lesson-link">
                    <h3 class="mb-2">Persecution Scatters the Church</h3>
                    <p class="text-muted mb-0">
                      Learn how God used persecution to spread His message beyond Jerusalem
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
    question: 'Who said that believers would suffer?',
    answer: 'Jesus',
  },
  {
    question: "Who was a man full of God's grace and power?",
    answer: 'Stephen',
  },
  {
    question: "Why couldn't Stephen's enemies win their argument against him?",
    answer: 'They could not stand up against his wisdom or the Spirit by whom he spoke',
  },
  {
    question: "When the Sanhedrin looked at Stephen's face what did they see?",
    answer: 'A face of an angel',
  },
  {
    question: "Why did Stephen tell his enemies about God's history with the Jews?",
    answer:
      "He was reminding them that the Jews have always rejected God's servants and they have rejected and murdered Jesus",
  },
  {
    question: 'How was Stephen able to be bold to speak the truth to his enemies?',
    answer: 'The Holy Spirit gave him courage',
  },
  {
    question: 'What did Stephen tell the crowd he saw?',
    answer: 'Jesus standing at the right hand of God',
  },
  {
    question: 'What did the enemies do to Stephen?',
    answer: 'Stoned him',
  },
  {
    question: 'How can this lesson help you this week to stand up for Jesus?',
    answer: '(Open-ended question for discussion)',
  },
])

const memoryVerse = ref({
  verse:
    'Blessed are you when men hate you, when they exclude you and insult you and reject your name as evil, because of the Son of Man. Rejoice in that day and leap for joy, because great is your reward in heaven. For that is how their fathers treated the prophets.',
  reference: 'Luke 6:22-23',
  note: 'Depending on your students you may want to memorize only one of the two verses. This verse was chosen because it embodies the truth that believers will be persecuted. Jesus promised that those who suffer for Him will receive a great reward in heaven.',
})

const learningActivities = ref([
  {
    title: 'True or False Game',
    description:
      'Play a game of True or False with statements about what life for a believer looks like. Use index cards with Scripture references so students can verify their answers. Examples include: "Believers will be persecuted" (2 Timothy 3:10-12; John 15:20), "Everyone loved Jesus so believers will be loved by all too" (John 15:18-19; Luke 21:17), and more.',
  },
  {
    title: 'Drama Re-enactment',
    description:
      'After the story, students will act it out. They can also explore how the story might have been different if Stephen was not filled with the Holy Spirit, demonstrating that avoiding suffering would not have brought glory to God (1 Peter 4:12-16).',
  },
  {
    title: 'Promise Notebook',
    description:
      'Students will write down the statement "If I am a believer, I can trust God when I suffer because of my faith in Jesus" along with the memory verse in their notebooks. This will be part of creating their own Promises from God notebook throughout the year.',
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
</style>
