<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="text-white">Lesson 8: Seven Men are Chosen to Minister</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
            <li class="breadcrumb-item">
              <RouterLink to="/link-kids" class="text-white">Link Kids</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">
              Seven Men are Chosen
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
                  <p><strong>Bible Story:</strong> Seven Men are Chosen to Minister</p>
                  <p><strong>Scripture:</strong> Acts 6:1-7</p>
                  <p><strong>Learning Context:</strong> Sunday School</p>
                </div>
              </div>
            </div>

            <!-- Learning Goal -->
            <div class="card mb-4">
              <div class="card-body">
                <h2>Learning Goal</h2>
                <p>
                  Students will learn that every believer has a responsibility to serve so that
                  God's Word can continue to be shared with others.
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
                  <p>
                    This lesson focuses on Acts 6, where the early church faced a challenge in
                    serving its growing community. The Grecian Jews complained that their widows
                    were being overlooked in the daily distribution of food. This situation led to
                    the appointment of seven men who would serve the church community, allowing the
                    apostles to focus on prayer and the ministry of the word.
                  </p>

                  <h3>Key Points:</h3>
                  <ul>
                    <li>The church was growing rapidly in Jerusalem</li>
                    <li>A problem arose between Hebraic and Grecian Jews regarding widow care</li>
                    <li>
                      The apostles proposed a solution: choose seven men full of the Spirit and
                      wisdom
                    </li>
                    <li>These seven men became the first deacons of the church</li>
                    <li>This solution allowed the apostles to focus on prayer and preaching</li>
                    <li>
                      As a result, God's word continued to spread, and the church grew even more
                    </li>
                  </ul>

                  <h3>Application:</h3>
                  <p>
                    Every believer has a role to play in serving the church. Just as these seven men
                    were chosen to serve, we too can find ways to serve others and support the
                    ministry of God's word. When we serve together, the church becomes stronger and
                    more effective in sharing the gospel.
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
                  <RouterLink to="/link-kids/stoning-of-stephen" class="next-lesson-link">
                    <h3 class="mb-2">The Stoning of Stephen</h3>
                    <p class="text-muted mb-0">
                      Learn about the first Christian martyr and the power of standing firm in faith
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
    question: 'As the church in Jerusalem was growing what problem came up?',
    answer: 'Grecian Jews felt their widows were overlooked',
  },
  {
    question: 'What did the apostles say the believers should do?',
    answer: 'Choose 7 men',
  },
  {
    question: 'What were the apostles supposed to be focused on?',
    answer: 'Prayer and preaching',
  },
  {
    question: 'What character traits did the seven men need to have?',
    answer: 'Full of the Holy Spirit and wisdom',
  },
  {
    question: 'Name the seven men chosen.',
    answer: 'Stephen, Philip, Procurus, Nicanor, Timon, Parmenas, and Nicolas',
  },
  {
    question: "How did choosing the seven men help God's Work?",
    answer: "God's Word spread and many more people believed in Jesus",
  },
])

const memoryVerse = ref({
  verse:
    'Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.',
  reference: 'Galatians 6:10 (NIV)',
})

const learningActivities = ref([
  {
    title: 'Memory Verse Puzzle Activity',
    description: `Give each student a puzzle piece. Recite the verse together and have each student come and place their puzzle piece to assemble the picture. As each piece is placed talk about how we are better able to see what the picture is. It's the same as each one of us serves other believers. God's plans and power are more clearly seen to those who do not believe in Jesus as we serve and help each other in the Body of Christ.`,
  },
  {
    title: 'Thank You Notes for Church Leaders',
    description: `While students are arriving direct them to the note cards/paper. Talk about how God has given our church leaders to serve in different ways. As a way to thank them for serving Jesus in our church have the students write a thank you note. For artistic students they can draw a picture for the leader they choose to show their appreciation to them. Encourage students to each choose a different leader so all the leaders will receive a card/picture of appreciation.`,
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
