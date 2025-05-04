<template>
  <div class="bibliology-container">
    <h1 class="main-title">BIBLIOLOGY: DOCTRINE OF THE BIBLE</h1>
    
    <div class="content-section">
      <h2 class="section-title">INTRODUCTION TO BIBLIOLOGY</h2>
      
      <div class="subsection">
        <h3>Meaning of Bible</h3>
        <p>The English word bible is derived from the Greek word biblion, which means "book" or "roll." The name comes from byblos, which denoted the papyrus plant that grew in marshes or river banks, primarily along the Nile.</p>
        <p>Writing material was made from the papyrus plant by cutting the pith of the plant in one foot strips and setting it in the sun to dry. The strips were then laid in horizontal rows with rows of vertical strips glued to the horizontal rows in a criss-cross fashion similar to the way plywood is constructed today.</p>
      </div>

      <div class="subsection">
        <h3>Meaning of Scripture</h3>
        <p>The word translated "Scripture" comes from the Greek word graphe, which simply means "writing."</p>
        <p>In the Old Testament this writing was recognized as carrying great authority (e.g. 2 Kings 14:6; 2 Chron. 23:18; Ezra 3:2; Neh. 10:34).</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">DIVINE ORIGIN OF THE BIBLE</h2>
      
      <div class="subsection">
        <h3>Claim of the Bible</h3>
        <p>There are many evidences that the Bible is an entirely unique book, quite unlike any other work. The unique claims within the Bible itself bear witness to its unusual character.</p>
        <ul>
          <li>Some thirty-eight hundred times the Bible declares, "God said," or "Thus says the Lord"</li>
          <li>Paul recognized that the things he was writing were the Lord's commandments</li>
          <li>Peter proclaimed the certainty of the Scriptures</li>
          <li>John recognized that his teaching was from God</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>Continuity of the Bible</h3>
        <p>The divine origin of the Bible is further seen in considering the continuity of its teaching despite the unusual nature of its composition. It stands distinct from other religious writings.</p>
        <p>The Bible came from some forty different authors from diverse vocations in life, written over a period of more than fifteen hundred years, yet maintains a marvelous, unified whole.</p>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">DIVINE REVELATION OF THE BIBLE</h2>
      
      <div class="subsection">
        <h3>Definition of Revelation</h3>
        <p>The word revelation is derived from the Greek word apokalupsis, which means "disclosure" or "unveiling." Hence, revelation signifies God unveiling Himself to mankind.</p>
      </div>

      <div class="subsection">
        <h3>Types of Divine Revelation</h3>
        <div class="revelation-types">
          <div class="type-section">
            <h4>General Revelation</h4>
            <ul>
              <li>In Nature (Ps. 19:1-6)</li>
              <li>In Providence (Matt. 5:45)</li>
              <li>In Conscience (Rom. 2:14-15)</li>
            </ul>
          </div>
          <div class="type-section">
            <h4>Special Revelation</h4>
            <ul>
              <li>In Christ (John 1:18)</li>
              <li>In Scripture (2 Tim. 3:16, 17)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BibliologyView'
}
</script>

<style scoped>
.bibliology-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.main-title {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.content-section {
  margin-bottom: 3rem;
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.subsection {
  margin-bottom: 2rem;
}

.subsection h3 {
  color: #42b983;
  margin-bottom: 1rem;
}

.revelation-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.type-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.type-section h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

li:before {
  content: "•";
  color: #42b983;
  position: absolute;
  left: 0;
}

p {
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 1rem;
}
</style> 