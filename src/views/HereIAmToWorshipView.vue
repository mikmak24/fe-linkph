<template>
  <div class="worship-guide">
    <!-- Hero Section -->
    <section class="hero-section text-center py-5">
      <div class="container">
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white">Home</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/link-worship" class="text-white">Link Worship</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">Here I Am to Worship</li>
          </ol>
        </nav>
        <h1 class="display-4 fw-bold mb-4">Here I Am to Worship</h1>
        <p class="lead mb-4">A Guide to Worship Ministry</p>
        <div class="hero-meta">
          <span class="badge bg-light text-primary me-2">
            <i class="bi bi-book me-1"></i> 10 Chapters
          </span>
          <span class="badge bg-light text-primary">
            <i class="bi bi-person me-1"></i> Tim Hughes
          </span>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="content-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="guide-content">
              <!-- Quick Navigation -->
              <div class="quick-nav mb-5">
                <h4 class="mb-3">Chapter Navigation</h4>
                <div class="nav-buttons">
                  <button @click="showChapter(1)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 1}]">Chapter 1</button>
                  <button @click="showChapter(2)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 2}]">Chapter 2</button>
                  <button @click="showChapter(3)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 3}]">Chapter 3</button>
                  <button @click="showChapter(4)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 4}]">Chapter 4</button>
                  <button @click="showChapter(5)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 5}]">Chapter 5</button>
                  <button @click="showChapter(6)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 6}]">Chapter 6</button>
                  <button @click="showChapter(7)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 7}]">Chapter 7</button>
                  <button @click="showChapter(8)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 8}]">Chapter 8</button>
                  <button @click="showChapter(9)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 9}]">Chapter 9</button>
                  <button @click="showChapter(10)" :class="['btn', 'btn-outline-primary', 'me-2', 'mb-2', {active: activeChapter === 10}]">Chapter 10</button>
                </div>
              </div>

              <!-- Chapter 1 -->
              <div v-if="activeChapter === 1" id="chapter-1" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">1</div>
                  <h2>One Thing</h2>
                  <p class="chapter-subtitle">Simplifying our focus in worship—loving and adoring Jesus above all else.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes emphasizes that everything in our worship—music, posture, words—should be rooted in one core calling: love for Jesus. It isn't about performance, praise, or even the emotional response, but a single-minded devotion to Christ.</p>
                    <ul>
                      <li>Worship is ultimately about devotion, not performance.</li>
                      <li>Jesus must remain the central focus in everything we do.</li>
                      <li>A single-hearted pursuit of God brings clarity to our worship.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Psalm 27:4, Matthew 6:33, John 4:23-24</p>
                    <p><strong>Application:</strong> Begin each rehearsal with a prayer of devotion. Lead with love rather than performance. Stay focused on adoring Jesus in every song.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Recenter Daily</h5>
                        <p>Begin rehearsals and personal preparation by asking: "Is my heart set on adoring Jesus, or on sounding good?" A simple prayer like, "Jesus, refocus me," can shape your attitude and tone.</p>
                      </div>
                      <div class="application-point">
                        <h5>Lead with Love, Not Technique</h5>
                        <p>When practicing warm‑ups or vocal lines, intentionally sing with love in your voice—even if it's a plain hum. Let the emotional tone reflect affection, not just technical quality.</p>
                      </div>
                      <div class="application-point">
                        <h5>Lyrics Matter</h5>
                        <p>Choose songs that embody this "one‑thing" focus. During the intro or first verse, remind the team of the lyrical commitment: "We're here to adore Jesus, no distractions."</p>
                      </div>
                      <div class="application-point">
                        <h5>Mind Your Presence</h5>
                        <p>On stage or behind the scenes, fight performance pride. Visualize your role as offering—not entertaining. Subtle changes (a downcast glance, soft posture) can communicate devotion more than vocal theatrics.</p>
                      </div>
                      <div class="application-point">
                        <h5>Serve Beyond the Stage</h5>
                        <p>The chapter warns against self‑indulgent worship. Let your love for Jesus overflow into service—welcoming attendees, encouraging fellow musicians, or praying for needs—making worship holistic.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 1 is an invitation to flip the switch from performance to devotion. For worship teams, it's a reminder that every note, breath, and word must serve the singular purpose: loving Jesus. Embracing this transforms the whole worship atmosphere—from rehearsal rooms to the platform.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 2 -->
              <div v-if="activeChapter === 2" id="chapter-2" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">2</div>
                  <h2>Shape of My Heart</h2>
                  <p class="chapter-subtitle">God is more interested in the condition and shape of our hearts than our musical abilities. Real worship begins with an open, surrendered inner life.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>This chapter explores how external performance means little if our hearts are closed, proud, or distracted. Tim Hughes reminds us that authentic worship is a heart posture—shaped by humility, transparency, and dependence on Jesus.</p>
                    <ul>
                      <li>A surrendered heart speaks louder than the most beautiful voice.</li>
                      <li>Worship that comes from authenticity moves people.</li>
                      <li>God values inner purity more than outward perfection.</li>
                    </ul>
                    <p><strong>Bible References:</strong> 1 Samuel 16:7, Psalm 51:10, Proverbs 4:23</p>
                    <p><strong>Application:</strong> Regularly invite God to search your heart. Lead with transparency. Let your life offstage reflect the lyrics you sing.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Pre‑Service Heart Check</h5>
                        <p>Before rehearsals or services, pause for 2 minutes of silence. Encourage team members to internalize Psalm 139:23 — "Search me, God, and know my heart" — asking God to reveal areas of hardness or pride.</p>
                      </div>
                      <div class="application-point">
                        <h5>Lead Through Authenticity</h5>
                        <p>On stage, consider briefly sharing a personal struggle or breakthrough. This vulnerability shapes hearts more effectively than polished vocals or tight harmonies.</p>
                      </div>
                      <div class="application-point">
                        <h5>Cultivate a Culture of Dependency</h5>
                        <p>During team check‑ins, ask questions like, "What is your heart posture today?" Normalize admitting weariness, discouragement, praise—helping foster unity through honesty.</p>
                      </div>
                      <div class="application-point">
                        <h5>Worship Dynamics from Within</h5>
                        <p>Let your voice reflect your heart. If God is softening you, sing gently. If you're leaning into surrender, let your tone be tender. Encourage band members to mirror this inward shape outwardly.</p>
                      </div>
                      <div class="application-point">
                        <h5>Reflection and Debrief</h5>
                        <p>After each worship session, hold a quick "heart debrief"—what stirred, what distracted, what did God reveal in your heart? This helps team members grow spiritually and musically.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 2 challenges us to align our hearts before we open our mouths. As worshipers, we're invited to invite Jesus in—letting His shape our affections, intentions, and expressions. When the heart shape matches the posture on stage, worship becomes an encounter—not entertainment.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 3 -->
              <div v-if="activeChapter === 3" id="chapter-3" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">3</div>
                  <h2>Never Lose the Wonder</h2>
                  <p class="chapter-subtitle">Keeping the sense of awe, reverence, and mystery alive in worship.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes emphasizes how easy it is for worship leaders and teams to grow familiar with the things of God—songs, scripture, and even God's presence—until we lose the awe. This chapter reminds us that wonder fuels worship. When we forget how majestic, holy, and loving God is, our worship becomes routine instead of reverent.</p>
                    <ul>
                      <li>Awe is essential—it reminds us of God's greatness.</li>
                      <li>Familiarity can dull our sense of reverence.</li>
                      <li>Childlike wonder helps us worship with sincerity and joy.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Isaiah 6:1-5, Psalm 104, Revelation 4:8-11</p>
                    <p><strong>Application:</strong> Read Scripture to reignite wonder. Slow down during worship to reflect. Sing with fresh amazement, even familiar songs.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Reignite Awe Through Scripture</h5>
                        <p>Regularly read scriptures that describe God's majesty—Revelation 4, Isaiah 6, Psalm 104—especially before leading. It shifts the focus back to who we are singing to.</p>
                      </div>
                      <div class="application-point">
                        <h5>Practice "Silent Wonder"</h5>
                        <p>Include intentional silence during practice or even in a service. Let the team (and congregation) sit quietly in God's presence. This creates space to feel the wonder instead of just singing about it.</p>
                      </div>
                      <div class="application-point">
                        <h5>Avoid Over-Familiarity</h5>
                        <p>Even if you've sung a song 100 times, approach it like it's the first time. Meditate on the lyrics before singing—ask, "Do I still believe this? Does this still move me?"</p>
                      </div>
                      <div class="application-point">
                        <h5>Encourage Visual and Creative Awe</h5>
                        <p>If your church uses visuals or lighting, make sure they contribute to the sense of awe rather than distraction. As a worship singer, use your facial expression and vocal tone to communicate wonder.</p>
                      </div>
                      <div class="application-point">
                        <h5>Testimony of Awe Moments</h5>
                        <p>At practice, invite team members to share moments where they were recently amazed by God (answered prayer, nature, peace during trial). This keeps the heart soft and open to wonder.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 3 reminds us that awe is the atmosphere of heaven—and we are called to bring that into our worship. As worship singers, our greatest risk isn't hitting a wrong note—it's becoming numb to the glory of God. Stay fresh. Stay humbled. Stay amazed.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 4 -->
              <div v-if="activeChapter === 4" id="chapter-4" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">4</div>
                  <h2>Leading Worship</h2>
                  <p class="chapter-subtitle">Leading worship is more than singing songs—it's about inviting others into God's presence through humility, authenticity, and spiritual leadership.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes unpacks what it really means to lead worship. It's not about being the best singer or musician, but about pointing people to Jesus. True worship leaders are servants first, not performers. They live what they sing and create space for others to encounter God.</p>
                    <ul>
                      <li>Worship leading is spiritual leadership, not performance.</li>
                      <li>Your life should reflect the worship you lead.</li>
                      <li>A humble leader creates space for others to encounter God.</li>
                    </ul>
                    <p><strong>Bible References:</strong> John 3:30, 1 Peter 5:2-3, Colossians 3:16-17</p>
                    <p><strong>Application:</strong> Prepare spiritually and musically. Stay humble. Use your presence and posture to invite others into worship.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Lead Yourself First</h5>
                        <p>You can't lead others into a place you haven't been. Prioritize personal worship in your private life—sing to God when no one is watching. This fuels your public leadership with authenticity.</p>
                      </div>
                      <div class="application-point">
                        <h5>Be Spiritually Prepared, Not Just Vocally Ready</h5>
                        <p>Before practice or service, spend time in prayer—not just warming up your voice. Ask God to prepare your heart and give you sensitivity to His presence and to the needs of the congregation.</p>
                      </div>
                      <div class="application-point">
                        <h5>Serve the Song, Not the Spotlight</h5>
                        <p>Leading worship is about guiding people to Jesus, not showing off skills. Be willing to take a step back when necessary—blend with the team, lower your volume, let someone else take the lead if it serves the moment better.</p>
                      </div>
                      <div class="application-point">
                        <h5>Read the Room Spiritually</h5>
                        <p>Good worship leaders are attentive. Is the room quiet? Are people hesitant? Maybe it's time to pause, pray, or speak a word of encouragement. Let the Spirit—not the setlist—lead.</p>
                      </div>
                      <div class="application-point">
                        <h5>Use Your Body Language to Lead</h5>
                        <p>Smile genuinely, make eye contact, lift your hands in freedom, and show engagement. People often follow what they see before they follow what they hear.</p>
                      </div>
                      <div class="application-point">
                        <h5>Live a Life That Matches the Lyrics</h5>
                        <p>Nothing undermines worship more than hypocrisy. Strive to live out the truths you sing—whether that's forgiveness, surrender, or holiness.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 4 reminds us that leading worship is a sacred responsibility. It's not about being in front—it's about pointing others upward. As a worship singer, your calling is to make Jesus visible, not yourself. When you lead from a place of intimacy and humility, God does the rest.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 5 -->
              <div v-if="activeChapter === 5" id="chapter-5" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">5</div>
                  <h2>Leading a Band</h2>
                  <p class="chapter-subtitle">Leading a worship band isn't just about coordinating music—it's about cultivating unity, humility, excellence, and spiritual alignment.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes stresses that the leader of a worship band sets the tone—musically, relationally, and spiritually. It's not enough to have talented musicians. A great band thrives on clear communication, mutual respect, and a shared vision of worshiping God, not self.</p>
                    <ul>
                      <li>A healthy team spirit is more important than perfect skill.</li>
                      <li>Honoring each other fosters stronger musical and spiritual unity.</li>
                      <li>Leadership means cultivating growth, not controlling outcomes.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Romans 12:4-6, Ephesians 4:2-3, Philippians 2:1-4</p>
                    <p><strong>Application:</strong> Prioritize unity. Encourage one another. Be reliable, teachable, and supportive in rehearsals and services.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Commit to Unity, Not Ego</h5>
                        <p>Whether you're the main singer or a backup vocalist, seek to serve the sound of the group, not just your own voice. Honor the music director and work together with humility.</p>
                      </div>
                      <div class="application-point">
                        <h5>Practice with Purpose</h5>
                        <p>Don't just go through the motions during rehearsals. Be on time, come prepared, and give your best. This shows respect for the team and for the Lord.</p>
                      </div>
                      <div class="application-point">
                        <h5>Listen More Than You Sing</h5>
                        <p>In a band, good worship singers don't just focus on their part—they actively listen. Blend with the instruments. Know when to sing out and when to hold back.</p>
                      </div>
                      <div class="application-point">
                        <h5>Foster a Safe and Encouraging Atmosphere</h5>
                        <p>Be the kind of teammate who encourages others—especially newer members. If someone makes a mistake, respond with grace and kindness, not frustration.</p>
                      </div>
                      <div class="application-point">
                        <h5>Pray as a Team, Not Just Individuals</h5>
                        <p>Make prayer a normal part of your band routine. Even just a short moment before or after rehearsal helps remind everyone that this is ministry, not just music.</p>
                      </div>
                      <div class="application-point">
                        <h5>Grow in Musical Awareness</h5>
                        <p>Learn basic musical terms, timing, and cues—even if you're just a vocalist. Understanding how the band works helps you flow better with transitions and spontaneous moments.</p>
                      </div>
                      <div class="application-point">
                        <h5>Let the Band Worship Too</h5>
                        <p>Sometimes musicians and singers get caught in playing the set and forget to worship. Encourage a culture where you all lift your eyes from your instruments and lyrics to God Himself.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 5 reminds us that leading or being part of a worship band is a form of discipleship. It's not about building a music group—it's about forming a family that lifts Jesus up together. A strong band grows not just in sound, but in surrender.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 6 -->
              <div v-if="activeChapter === 6" id="chapter-6" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">6</div>
                  <h2>Choosing a Song List</h2>
                  <p class="chapter-subtitle">Choosing songs for worship is both a spiritual and strategic responsibility—it shapes how people engage with God and encounter truth.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes emphasizes that song selection is not just about choosing popular tunes or your favorites. It's about discerning what God wants to say and how He wants to move in a particular service. Worship songs carry theology—they teach people what to believe and how to respond.</p>
                    <ul>
                      <li>Song choices influence how people think about God.</li>
                      <li>Worship sets should have a spiritual flow, not just musical appeal.</li>
                      <li>Prayerful planning creates space for the Spirit to move.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Psalm 96:1-3, 1 Corinthians 14:26, Colossians 3:16</p>
                    <p><strong>Application:</strong> Understand the purpose of the set. Balance new and familiar songs. Prepare thoroughly and allow the Holy Spirit to lead.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Ask: What's the Journey?</h5>
                        <p>Good worship sets take people on a journey—from celebration to surrender, from praise to intimacy. Learn to identify how each song flows into the next. Even if you're not the one creating the setlist, understand its purpose and mood.</p>
                      </div>
                      <div class="application-point">
                        <h5>Know the Theology of the Songs</h5>
                        <p>Dive into the lyrics. What do they say about God? Are they biblical? Do they align with the message of the service? As a singer, sing with conviction—don't just recite, proclaim the truths in the song.</p>
                      </div>
                      <div class="application-point">
                        <h5>Consider the Congregation</h5>
                        <p>The goal is not to impress but to invite people to worship. Choose or support songs that are singable and accessible to your church community. Simple melodies and meaningful lyrics go further than complex arrangements.</p>
                      </div>
                      <div class="application-point">
                        <h5>Balance the Familiar and the Fresh</h5>
                        <p>A good setlist includes both well-known songs (for comfort and unity) and new songs (to stir hearts and keep things fresh). As a worship singer, practice new songs thoroughly and help the congregation engage by modeling them clearly.</p>
                      </div>
                      <div class="application-point">
                        <h5>Be Spirit-Led, Not Just Strategically Smart</h5>
                        <p>Planning matters, but remain sensitive to what God is doing. Sometimes, He may lead you to repeat a chorus or skip a song entirely. Stay flexible. Even during singing, listen for cues from the Spirit.</p>
                      </div>
                      <div class="application-point">
                        <h5>Prepare, Then Let Go</h5>
                        <p>Once the song list is finalized and practiced, release it to God. Don't obsess over perfection—trust that the Holy Spirit can move even if things don't go exactly as planned.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 6 teaches us that a song list is more than a playlist—it's a spiritual roadmap. As worship singers, we're called to engage thoughtfully with each song, leading people not just with melody, but with meaning and ministry. When the song list is prayerfully chosen and intentionally sung, it becomes a doorway into God's presence.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 7 -->
              <div v-if="activeChapter === 7" id="chapter-7" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">7</div>
                  <h2>Musical Dynamics</h2>
                  <p class="chapter-subtitle">Worship is not just about what we sing, but how we express it—through dynamics like volume, tempo, silence, and intensity.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes explains that musical dynamics bring emotion, direction, and depth to worship. A soft whisper can stir hearts just as powerfully as a loud chorus. Learning to use rise and fall, builds and breaks, and silences thoughtfully helps the congregation connect with the heart of worship—not just the sound.</p>
                    <ul>
                      <li>Dynamics reflect emotion—let the music speak beyond words.</li>
                      <li>Silence and soft moments are just as powerful as loud ones.</li>
                      <li>Flow and build-ups help guide the congregation's heart journey.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Ecclesiastes 3:1, Psalm 46:10, 1 Kings 19:11-13</p>
                    <p><strong>Application:</strong> Match your expression to the message of the song. Know when to step forward and when to pull back. Embrace silence and soft moments.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Sing With Emotion, Not Just Volume</h5>
                        <p>Loud doesn't always mean powerful. Match your tone to the meaning of the lyrics—sing softly when it's about brokenness, boldly when declaring truth.</p>
                      </div>
                      <div class="application-point">
                        <h5>Learn When to Step Back</h5>
                        <p>In some parts of a song, less is more. Learn to pull back vocally during instrumental moments or when another voice is leading. This creates space for reflection and for others to engage.</p>
                      </div>
                      <div class="application-point">
                        <h5>Use Vocal Texture and Variation</h5>
                        <p>Don't sing everything the same way. Use gentle breathy tones, sustained notes, or rhythmic phrasing to add emotional color to your singing. This keeps songs from sounding flat or mechanical.</p>
                      </div>
                      <div class="application-point">
                        <h5>Follow the Flow of the Band</h5>
                        <p>Pay attention to how the instruments rise and fall. Blend with them. If the band builds toward a chorus, match their energy. If they drop to a quiet pad or piano, soften your voice accordingly.</p>
                      </div>
                      <div class="application-point">
                        <h5>Communicate With Your Body</h5>
                        <p>Body posture and facial expression can help convey musical dynamics. A bowed head in soft moments, a lifted gaze in powerful ones—these visual cues help lead the congregation through the emotional flow of the song.</p>
                      </div>
                      <div class="application-point">
                        <h5>Practice Transitions and Builds</h5>
                        <p>Work with your team on how to smoothly move from verse to chorus, or from bridge back into the chorus. Dynamics help keep these transitions seamless and meaningful.</p>
                      </div>
                      <div class="application-point">
                        <h5>Use Silence Intentionally</h5>
                        <p>A brief pause after a powerful line can be more impactful than any note. Don't be afraid of silence—it gives room for the Spirit to speak.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 7 reminds us that musical dynamics are like the emotions of a song—they help translate truth into something felt, not just heard. As worship singers, we are called not only to sing on pitch, but to express the message of the song with intention and sensitivity. Dynamics, when used well, make room for encounter.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 8 -->
              <div v-if="activeChapter === 8" id="chapter-8" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">8</div>
                  <h2>Practical Tips</h2>
                  <p class="chapter-subtitle">Worship ministry is both spiritual and practical—excellence honors God and helps remove distractions so others can focus on Him.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes offers real-life advice in this chapter for preparing, rehearsing, and leading worship with clarity and consistency. While our heart is the foundation, discipline, preparation, and teamwork allow that heart to be expressed well. Being "spiritual" does not excuse sloppiness—God deserves our best.</p>
                    <ul>
                      <li>Being spiritual doesn't excuse poor preparation.</li>
                      <li>Excellence honors God and serves the congregation.</li>
                      <li>Discipline and consistency are vital in ministry.</li>
                    </ul>
                    <p><strong>Bible References:</strong> 1 Corinthians 14:40, Colossians 3:23, Proverbs 21:5</p>
                    <p><strong>Application:</strong> Warm up your voice and heart. Be punctual, teachable, and prepared. Serve the team with your effort and attitude.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Be Prepared Before You Rehearse</h5>
                        <p>Learn your parts at home. Arrive at rehearsals ready, not just familiar with the song but confident in lyrics, timing, and vocal parts. This honors your team's time.</p>
                      </div>
                      <div class="application-point">
                        <h5>Warm Up Your Voice and Spirit</h5>
                        <p>Do basic vocal warmups before singing, and don't forget to warm up your heart through prayer and stillness. A prepared voice and a peaceful spirit go hand in hand.</p>
                      </div>
                      <div class="application-point">
                        <h5>Be Teachable and Flexible</h5>
                        <p>Accept correction or redirection from the worship leader graciously. Even if you practiced something differently, be willing to adjust. Worship isn't about ego—it's about unity.</p>
                      </div>
                      <div class="application-point">
                        <h5>Use a Notebook or Digital Planner</h5>
                        <p>Keep notes about vocal cues, key changes, harmonies, and scripture connections. Reviewing this before each service helps you feel confident and organized.</p>
                      </div>
                      <div class="application-point">
                        <h5>Stay Engaged During Instrumental Parts</h5>
                        <p>Don't check out when you're not singing. Use that time to pray, worship silently, or support the atmosphere visually. Your posture still ministers, even when your mouth is closed.</p>
                      </div>
                      <div class="application-point">
                        <h5>Mind Your Mic Technique</h5>
                        <p>Learn to hold the mic at the right distance (typically 1–2 inches), angle it slightly, and pull back slightly during louder parts. This helps the sound tech maintain a balanced mix.</p>
                      </div>
                      <div class="application-point">
                        <h5>Dress Modestly and Respectfully</h5>
                        <p>Choose clothing that is comfortable and presentable, but not distracting. You're there to lead people to God, not to draw attention to yourself.</p>
                      </div>
                      <div class="application-point">
                        <h5>Practice Transitions and Spontaneity</h5>
                        <p>Don't just rehearse the songs—practice how to enter, exit, or transition between them. Even "spontaneous" worship moments go better when you've prepared well.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 8 reminds us that excellence is not about perfection—it's about stewardship. As worship singers and leaders, we honor God and serve others best when we bring both our heart and our skill to the altar. When preparation meets humility, worship becomes powerful and Spirit-led.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 9 -->
              <div v-if="activeChapter === 9" id="chapter-9" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">9</div>
                  <h2>Small Group Worship</h2>
                  <p class="chapter-subtitle">Worship isn't just for the big stage or Sunday service—it's just as meaningful in small, intimate settings where hearts can be more vulnerable and connections deeper.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>Tim Hughes highlights the power of intimate worship environments, like small groups, house churches, or youth gatherings. These settings strip away the lights, sound systems, and large crowds, placing focus purely on God's presence and real relationships. In these spaces, worship can become deeply personal and transformative.</p>
                    <ul>
                      <li>God moves powerfully in small, humble spaces.</li>
                      <li>Authenticity and vulnerability shine in intimate settings.</li>
                      <li>Simplicity often leads to deeper connection and worship.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Matthew 18:20, Acts 2:46-47, Romans 12:9-13</p>
                    <p><strong>Application:</strong> Create space for vulnerability. Use simple songs and arrangements. Lead with authenticity, not performance.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Focus on Connection, Not Performance</h5>
                        <p>In a small group, your job is to guide people, not to impress them. Let your singing be natural and tender. Engage with the people around you—make eye contact, smile, and sing with warmth.</p>
                      </div>
                      <div class="application-point">
                        <h5>Simplify Your Setup</h5>
                        <p>Use just a guitar, keyboard, or even acapella. Small group worship doesn't need full arrangements. It thrives on raw, real expression. Don't be afraid of simplicity—it creates space for sincerity.</p>
                      </div>
                      <div class="application-point">
                        <h5>Invite Participation</h5>
                        <p>Encourage others to sing along, share a verse, or pray spontaneously. Worship becomes more powerful when everyone contributes. Create moments for the group to reflect or respond between songs.</p>
                      </div>
                      <div class="application-point">
                        <h5>Be Spiritually Sensitive</h5>
                        <p>In small gatherings, emotions are more visible. Watch how people are responding. If someone is burdened, maybe pause and pray. Let the Holy Spirit lead, even if it means changing the plan.</p>
                      </div>
                      <div class="application-point">
                        <h5>Choose Songs with Clear, Singable Lines</h5>
                        <p>Pick songs that are easy to follow without a projector or printed lyrics. Repetition is helpful in small groups so people can remember the words and join in freely.</p>
                      </div>
                      <div class="application-point">
                        <h5>Break the "Worship Leader Wall"</h5>
                        <p>In small settings, sit or stand among the group. Don't isolate yourself as the "leader in front." Your position should promote unity, not separation.</p>
                      </div>
                      <div class="application-point">
                        <h5>Create an Atmosphere, Not a Setlist</h5>
                        <p>Don't worry about performing a perfect set. Aim to facilitate a space where people can encounter God—whether through 3 songs, silence, or sharing stories.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 9 reminds us that worship thrives in intimacy. As worship singers, we are called not only to lead on big stages but also to steward God's presence in small, sacred spaces. In small group worship, there's no hiding—what matters most is your authentic heart, not your vocal strength.</p>
                  </div>
                </div>
              </div>

              <!-- Chapter 10 -->
              <div v-if="activeChapter === 10" id="chapter-10" class="chapter-section mb-5">
                <div class="chapter-header">
                  <div class="chapter-number">10</div>
                  <h2>The Art of Crafting</h2>
                  <p class="chapter-subtitle">Worship is both spiritually inspired and carefully crafted—a blend of heart, creativity, and intentionality. Writing and arranging worship songs is a sacred process that shapes how people encounter God.</p>
                </div>
                <div class="chapter-content">
                  <div class="key-reflection">
                    <h4><i class="bi bi-search me-2"></i>Key Reflection</h4>
                    <p>In this chapter, Tim Hughes talks about the creative process of crafting worship—writing songs, arranging sets, and shaping worship experiences with purpose. While worship comes from the heart, it also involves skill, reflection, and refinement. The songs we lead shape theology, stir emotion, and invite people into deeper relationship with God.</p>
                    <ul>
                      <li>Worship must be both Spirit-led and skillfully shaped.</li>
                      <li>Creativity is a gift from God meant to serve the Church.</li>
                      <li>Thoughtfully crafted songs and sets help people engage deeply with God.</li>
                    </ul>
                    <p><strong>Bible References:</strong> Exodus 31:2-5, Psalm 33:3, 2 Timothy 1:6</p>
                    <p><strong>Application:</strong> Contribute creatively. Keep your focus on God and the church, not on artistry alone. Let your crafting be prayerful and Spirit-led.</p>
                  </div>

                  <div class="application-section">
                    <h4><i class="bi bi-mic me-2"></i>Application as a Worship Singer or Team Member</h4>
                    <div class="application-points">
                      <div class="application-point">
                        <h5>Value the Process, Not Just the Product</h5>
                        <p>Whether you're writing a new song, developing harmonies, or creating vocal parts—embrace the journey. Take time to listen, revise, and reflect. Worship should be sincere, not rushed.</p>
                      </div>
                      <div class="application-point">
                        <h5>Collaborate Creatively</h5>
                        <p>Don't be afraid to contribute your voice in writing or arranging—even if you're "just" a singer. Share ideas for vocal dynamics, harmonies, or spontaneous moments. Your artistic input matters.</p>
                      </div>
                      <div class="application-point">
                        <h5>Keep a Worship Journal or Voice Memo Log</h5>
                        <p>If you receive a melody or lyric during prayer or worship, write it down or record it. Many powerful worship songs start with a single thought whispered in devotion.</p>
                      </div>
                      <div class="application-point">
                        <h5>Study Other Worship Writers and Leaders</h5>
                        <p>Learn from those who have crafted meaningful worship—like Hillsong, Elevation, Bethel, and more. Notice how their songs are structured. Understand what makes them powerful—lyrically and musically.</p>
                      </div>
                      <div class="application-point">
                        <h5>Don't Neglect the Details</h5>
                        <p>Details—like phrasing, timing, transitions, and key changes—can enhance or distract from worship. Whether crafting your vocal part or helping refine the set, treat these moments as sacred offerings.</p>
                      </div>
                      <div class="application-point">
                        <h5>Pray Through Your Creativity</h5>
                        <p>Always ask: "God, is this honoring You?" Whether you're choosing how to sing a bridge or adjusting harmonies, invite the Holy Spirit to guide your crafting.</p>
                      </div>
                      <div class="application-point">
                        <h5>Craft With the Church in Mind</h5>
                        <p>The goal of worship crafting isn't to show off your artistry—it's to serve the congregation. Keep songs accessible, arrangements singable, and language that helps everyone connect.</p>
                      </div>
                    </div>
                  </div>

                  <div class="summary">
                    <h4><i class="bi bi-stars me-2"></i>Summary</h4>
                    <p>Chapter 10 reminds us that worship is art for the glory of God. As worship singers and creatives, we're not just delivering lyrics—we are shaping sacred space where people meet God. To "craft" worship is to steward beauty, emotion, and truth in ways that move hearts and honor heaven.</p>
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
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeChapter = ref(1)

function showChapter(chapter) {
  activeChapter.value = chapter
}
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

.hero-meta {
  margin-top: 2rem;
}

.content-section {
  background-color: #f8f9fa;
}

.guide-content {
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

.chapter-section {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 2rem;
}

.chapter-section:last-child {
  border-bottom: none;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  color: white;
  border-radius: 1rem;
}

.chapter-number {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
  font-size: 1.5rem;
}

.chapter-header h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.chapter-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.chapter-content {
  color: #4a5568;
  line-height: 1.7;
}

.key-reflection, .application-section, .summary {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
}

.key-reflection h4, .application-section h4, .summary h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.key-reflection ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.key-reflection li {
  margin-bottom: 0.5rem;
}

.application-points {
  display: grid;
  gap: 1.5rem;
}

.application-point {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid var(--primary-color);
}

.application-point h5 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

.application-point p {
  margin: 0;
  line-height: 1.6;
}

.coming-soon-section {
  text-align: center;
}

.coming-soon-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.coming-soon-card h3 {
  margin-bottom: 1rem;
}

.coming-soon-card p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .guide-content {
    padding: 1.5rem;
  }
  
  .nav-buttons {
    flex-direction: column;
  }
  
  .nav-buttons .btn {
    width: 100%;
  }
  
  .chapter-header {
    padding: 1.5rem;
  }
  
  .chapter-header h2 {
    font-size: 1.5rem;
  }
  
  .application-points {
    grid-template-columns: 1fr;
  }
}
</style> 