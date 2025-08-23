<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold mb-4">Link Group Guide</h1>
        <p class="lead mb-4">Biblical small groups grounded in the teachings of the Bible</p>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white">Home</RouterLink></li>
            <li class="breadcrumb-item active text-white" aria-current="page">Link Group Guide</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="study-guide">
              <div class="guide-intro mb-5">
                <h2 class="section-title mb-4">Available Lessons</h2>
                <p class="lead mb-4">
                  Our Link Group lessons are designed to ground biblical believers and develop disciples that make disciples. 
                  Each lesson is structured for 45-60 minute group study sessions.
                </p>
              </div>

              <!-- Lessons List -->
              <div class="lessons-list mb-4">
                <div 
                  v-for="lesson in paginatedLessons" 
                  :key="lesson.id"
                  class="lesson-card"
                >
                  <RouterLink :to="lesson.path" class="lesson-link">
                    <div class="lesson-content">
                      <h3>{{ lesson.title }}</h3>
                      <p>{{ lesson.description }}</p>
                      <div class="lesson-meta">
                        <span class="badge bg-primary">{{ lesson.category }}</span>
                      </div>
                    </div>
                    <div class="lesson-arrow">
                      <i class="bi bi-chevron-right"></i>
                    </div>
                  </RouterLink>
                </div>
              </div>

              <!-- Pagination -->
              <div class="pagination-wrapper" v-if="totalPages > 1">
                <nav aria-label="Lesson pagination">
                  <ul class="pagination justify-content-center">
                    <!-- Previous Button -->
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                      <button 
                        class="page-link" 
                        @click="goToPage(currentPage - 1)"
                        :disabled="currentPage === 1"
                      >
                        <i class="bi bi-chevron-left"></i> Previous
                      </button>
                    </li>

                    <!-- Page Numbers -->
                    <li 
                      v-for="page in visiblePages" 
                      :key="page"
                      class="page-item"
                      :class="{ active: page === currentPage }"
                    >
                      <button 
                        class="page-link" 
                        @click="goToPage(page)"
                      >
                        {{ page }}
                      </button>
                    </li>

                    <!-- Next Button -->
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                      <button 
                        class="page-link" 
                        @click="goToPage(currentPage + 1)"
                        :disabled="currentPage === totalPages"
                      >
                        Next <i class="bi bi-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>

                <!-- Page Info -->
                <div class="text-center mt-3">
                  <small class="text-muted">
                    Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalLessons }} lessons
                  </small>
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
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// Lessons data
const lessons = [
  {
    id: 1,
    title: 'Lesson 1: The Bible',
    description: 'Understanding the Word of God and its importance in our lives.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/the-bible'
  },
  {
    id: 2,
    title: 'Lesson 2: The Church',
    description: 'Exploring the meaning and purpose of the church in God\'s plan.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/the-church'
  },
  {
    id: 3,
    title: 'Lesson 3: The Person of God',
    description: 'Understanding who God is and His nature as revealed in Scripture.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/the-person-of-god'
  },
  {
    id: 4,
    title: 'Lesson 4: Who Are You Christian?',
    description: 'Discovering your identity and purpose as a follower of Christ.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/who-are-you-christian'
  },
  {
    id: 5,
    title: 'Lesson 5: But I Am A Good Person',
    description: 'Understanding salvation and why good works alone cannot save us.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/but-i-am-a-good-person'
  },
  {
    id: 6,
    title: 'Lesson 6: Praise',
    description: 'Understanding the meaning, importance, and ways of praising God in our daily lives.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/praise'
  },
  {
    id: 7,
    title: 'Lesson 7: Love',
    description: 'Exploring the meaning, importance, and characteristics of love as described in 1 Corinthians 13.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/love'
  },
  {
    id: 8,
    title: 'Lesson 8: Life',
    description: 'Understanding the meaning, purpose, and significance of life from a biblical perspective.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/life'
  },
  {
    id: 9,
    title: 'Lesson 9: Death',
    description: 'Understanding death from a biblical perspective - its origin, cause, description, and the remedy through Christ.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/death'
  },
  {
    id: 10,
    title: 'Lesson 10: What Happens When One Believes on the Lord',
    description: 'Discover the 38 amazing things that happen when someone believes on the Lord Jesus Christ as their Savior.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/what-happens-when-one-believes'
  },
  {
    id: 11,
    title: 'Lesson 11: Heaven',
    description: 'Explore the biblical teaching about heaven - its origin, nature, characteristics, inhabitants, and the perfect place it is.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/heaven'
  },
  {
    id: 12,
    title: 'Lesson 12: Hell',
    description: 'Understanding the biblical teaching about hell - its definition, origin, description, duration, and the reality of eternal punishment.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/hell'
  },
  {
    id: 13,
    title: 'Lesson 13: Angels',
    description: 'Exploring the biblical teaching about angels - their nature, roles in Old and New Testaments, and their relationship to God and humanity.',
    category: 'Basic Christian Teaching',
    path: '/link-group-guide/angels'
  }
]

// Pagination state
const currentPage = ref(parseInt(localStorage.getItem('linkGroupCurrentPage')) || 1)
const lessonsPerPage = 10

// Computed properties for pagination
const totalLessons = computed(() => lessons.length)
const totalPages = computed(() => Math.ceil(totalLessons.value / lessonsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * lessonsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + lessonsPerPage, totalLessons.value))

const paginatedLessons = computed(() => {
  return lessons.slice(startIndex.value, endIndex.value)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

// Methods
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Save current page to localStorage
    localStorage.setItem('linkGroupCurrentPage', page.toString())
    // Remove automatic scrolling to prevent mobile issues
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
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

.content-section {
  background-color: #f8f9fa;
}

.study-guide {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem;
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.lesson-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  margin-bottom: 1rem;
}

.lesson-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--primary-color);
  color: inherit;
}

.lesson-link {
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

.lesson-link:hover {
  color: inherit;
  text-decoration: none;
}

.lesson-content {
  flex: 1;
  margin-right: 1rem;
}

.lesson-content h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.lesson-content p {
  color: #6c757d;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.lesson-meta {
  margin-bottom: 0;
}

.lesson-arrow {
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.lesson-card:hover .lesson-arrow {
  transform: translateX(5px);
}

/* Pagination Styles */
.pagination-wrapper {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.pagination {
  margin-bottom: 1rem;
}

.page-link {
  color: var(--primary-color);
  border: 1px solid #dee2e6;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.page-link:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.page-link:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  outline: none;
}

.page-item.active .page-link {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
  cursor: not-allowed;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .lesson-card {
    padding: 1rem;
  }
  
  .lesson-content h3 {
    font-size: 1.1rem;
  }
  
  .pagination {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }
  
  .page-link {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    min-width: 40px;
    text-align: center;
  }
  
  .pagination-wrapper {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
}
</style>