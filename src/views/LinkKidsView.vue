<script setup>
import { RouterLink } from 'vue-router'

const lessons = [
  { title: 'A Journey through the Book of Acts Overview Lesson', reference: '' },
  {
    title: "The Day of Pentecost & God's Gift",
    reference: 'Acts 2:1-21',
    path: '/link-kids/pentecost',
  },
  { title: "Apostles Witness Jesus' Ascension", reference: 'Acts 1', path: '/link-kids/ascension' },
  {
    title: 'The Birth of the Church on Pentecost',
    reference: 'Acts 2',
    path: '/link-kids/birth-of-church',
  },
  {
    title: "Peter Heals the Crippled Beggar in Jesus' Name",
    reference: 'Acts 3',
    path: '/link-kids/crippled-beggar',
  },
  {
    title: 'The Spirit gives boldness to Peter & John',
    reference: 'Acts 4:1-31',
    path: '/link-kids/peter-john-boldness',
  },
  {
    title: 'The Believers Remained Devoted',
    reference: 'Acts 4-5',
    path: '/link-kids/believers-devoted',
  },
  {
    title: 'Seven Men are Chosen to Minister',
    reference: 'Acts 6',
    path: '/link-kids/seven-men-chosen',
  },
  {
    title: 'The Stoning of Stephen',
    reference: 'Acts 6-7',
    path: '/link-kids/stoning-of-stephen',
  },
  {
    title: 'Persecution Scatters the Church',
    reference: 'Acts 8:1-25',
    path: '/link-kids/persecution-scatter-church',
  },
  { title: 'Philip and the Ethiopian', reference: 'Acts 8:26-40' },
  { title: "Jesus Transforms Saul's Life (Paul's Conversion)", reference: 'Acts 9:1-31' },
  { title: 'Peter Heals Aeneas and Raises Tabitha', reference: 'Acts 9:32-43' },
  { title: 'Peter and Cornelius', reference: 'Acts 10:1-22' },
  { title: 'Cornelius Receives the Holy Spirit', reference: 'Acts 10:23-48' },
  { title: 'Early Church Growth & Change', reference: 'Acts 11' },
  { title: "Peter's Miraculous Escape from Prison", reference: 'Acts 12:1-24' },
  { title: 'Barnabas and Paul Begin Their Missionary Journey', reference: 'Acts 12-13' },
  { title: 'Paul and Barnabas', reference: 'Acts 13:13-52' },
  { title: 'Paul and Barnabas Persevere', reference: 'Acts 14' },
  { title: 'New Missionary Teams', reference: 'Acts 15-16' },
  { title: 'Paul & Barnabas at the Jerusalem Counsel', reference: 'Acts 15:1-35' },
  { title: 'God sends Paul to Macedonia', reference: 'Acts 15:36-16:10' },
  { title: 'Paul & Silas Praise God in Prison', reference: 'Acts 16:11-40' },
  { title: "More of Paul's Journeys", reference: 'Acts 17' },
  { title: 'Riot in Ephesus', reference: 'Acts 19' },
  { title: "Paul's Farewell Journey Begins", reference: 'Acts 20' },
  { title: 'Paul is Arrested in Jerusalem', reference: 'Acts 21' },
  { title: 'Paul Testifies in Jerusalem', reference: 'Acts 22' },
  { title: "God Protects Paul's Life", reference: 'Acts 23' },
  { title: "Paul's Trial Before Felix", reference: 'Acts 24' },
  { title: "Paul's Trial before Festus", reference: 'Acts 25' },
  { title: 'Paul Shipwrecked on the Way to Rome', reference: 'Acts 27' },
  { title: 'Paul Arrives in Rome', reference: 'Acts 28' },
]
</script>

<template>
  <div class="link-kids-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="fw-bold">Link Church Philippines - Kids Edition</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Link Kids</li>
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
          <div class="col-lg-12">
            <div class="content-card p-4 bg-white rounded shadow-sm mb-5">
              <h2 class="section-title mb-4">"The Book of Acts" Sunday School Lesson Series</h2>

              <div class="overview-section mb-5">
                <h3 class="h4 mb-3">Overview of the Book of Acts</h3>
                <p class="lead">Luke and Acts</p>
                <p>
                  The "Gospel of Luke" and the "Acts of the Apostles" are parts of the same story,
                  with one following directly after the other. The two parts, or books, were written
                  by Luke as a narrative that is an orderly (not necessarily chronological) account
                  of the story of Jesus and His first followers. Both were addressed to a man named
                  Theophilus.
                </p>
              </div>

              <div class="gospel-message-section mb-5">
                <h3 class="h4 mb-3">Explaining the Gospel Message to a Child</h3>
                <p>
                  In the Book of Acts, you will read about people who hear about Jesus and are then
                  baptised. This connection becomes clearer as we read the entire New Testament, but
                  it might be helpful to keep it in mind as we teach the stories of Acts. Children
                  will probably ask questions about it from time to time.
                </p>
                <p class="highlight-text">
                  It is a simple way to explain the overarching story of the death, burial and
                  resurrection of Jesus and our response to it. The redemption story continues!
                </p>
              </div>

              <div class="row mb-5">
                <div class="col-md-6 mb-4 mb-md-0">
                  <div class="objectives-section h-100 p-4 bg-light rounded">
                    <h3 class="h4 mb-3">Our Objectives</h3>
                    <ul class="objectives-list">
                      <li>To share the Gospel Message to Children.</li>
                      <li>To immerse children with bible Stories.</li>
                      <li>To let them memorize certain passages in the bible.</li>
                      <li>To let them be creative in interactive activities.</li>
                    </ul>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="expectations-section h-100 p-4 bg-light rounded">
                    <h3 class="h4 mb-3">Link Church Teachers Expectations</h3>
                    <ul class="expectations-list">
                      <li>Prepare lessons and activities before Sunday.</li>
                      <li>Be prayerful and be on time.</li>
                      <li>Serve by studying the lessons very well.</li>
                      <li>
                        Have a checklist of things to do for a productive Link Kids Experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lessons Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-title text-center">Lessons from the Book of Acts</h2>
            <p class="lead">A comprehensive journey through the early church</p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="lessons-grid">
              <RouterLink to="/link-kids/acts-overview" class="lesson-card text-decoration-none">
                <div class="lesson-content">
                  <h4>A Journey through the Book of Acts Overview Lesson</h4>
                  <p class="lesson-reference">Overview of Acts 1-9</p>
                </div>
              </RouterLink>
              <template v-for="(lesson, index) in lessons.slice(1)" :key="index">
                <RouterLink
                  v-if="lesson.path"
                  :to="lesson.path"
                  class="lesson-card text-decoration-none"
                >
                  <div class="lesson-content">
                    <h4>{{ lesson.title }}</h4>
                    <p class="lesson-reference">{{ lesson.reference }}</p>
                  </div>
                </RouterLink>
                <div v-else class="lesson-card">
                  <div class="lesson-content">
                    <h4>{{ lesson.title }}</h4>
                    <p class="lesson-reference">{{ lesson.reference }}</p>
                  </div>
                </div>
              </template>
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
            <h2 class="mb-4">Join Our Kids Ministry Team!</h2>
            <p class="lead mb-4">Help us share God's love with the next generation.</p>
            <RouterLink to="/contact" class="btn btn-light btn-lg">Volunteer Today</RouterLink>
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

.page-header,
.page-header h1,
.page-header nav,
.page-header .breadcrumb,
.page-header .breadcrumb-item,
.page-header .breadcrumb-item a {
  color: #fff !important;
}

.page-header .breadcrumb-item.active {
  color: #f0f0f0 !important;
}

.page-header .breadcrumb-item a {
  text-decoration: underline;
}

.content-card {
  transition: all 0.3s ease;
}

.highlight-text {
  background-color: rgba(var(--primary-color-rgb), 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  font-style: italic;
  margin: 1rem 0;
}

.objectives-list,
.expectations-list {
  list-style: none;
  padding-left: 0;
}

.objectives-list li,
.expectations-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.objectives-list li:before,
.expectations-list li:before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.lesson-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.lesson-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lesson-content h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.lesson-reference {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .lessons-grid {
    grid-template-columns: 1fr;
  }
}
</style>
