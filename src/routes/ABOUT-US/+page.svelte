<body>
    <header>
        <h1>ABOUT US</h1>
        <nav>
            <ul>
                <li><a href="#section">WHAT IS IMPACT?</a></li>
                <li><a href="#section2">HOW DID IMPACT START?</a></li>
                <li><a href="#section1">WHY IS IMPACT FOR YOU?</a></li>
                <li><a href="#TEAM-IMPACT">TEAM IMPACT</a></li>
            </ul>
        </nav>
    </header>

    <main>


        <section id="section">
          <div class="contentquote">
              <h2 class="quote">IS A PLACE WHERE BUILDING CREATIVES CAN EXPRESS THEIR TALENTS AND CONNECT WITH OTHER CREATIVES.</h2>
              </div>
      </section>

      <section id="section1">
        <div class="content">
            <h2>WHAT IS IMPACT?</h2>
            <p>IMPACT is an event where dreams can become a reality. We are a platform where budding creatives can express their passions and talents while connecting with others. It brings creatives in fashion, music, and photography together. IMPACT is a community where we inspire and motivate each other to continue our creative process. The event consists of two important components: an expo and a runway.</p>
        </div>
    </section>

        <section id="section3">
            <div class="content">
                <h2>WHY IS IMPACT FOR YOU?</h2>
                <p>During this event, creatives are given a chance to share their creativity. This creates an opportunity to connect with others, expanding your network. IMPACT is also intended for those who want to gain inspiration or need to develop themselves creatively. In addition to gaining inspiration, there are also interactive activities to participate in during this event.</p>
            </div>
        </section>

        <section id="section2">
          <div class="content">
              <h2>HOW DID IMPACT START?</h2>
              <p>IMPACT started as a dream and has grown into a vision where creativity is central. During the development process of the first edition of IMPACT, various connections were involved in putting this event together. With great success, we decided to organize a next edition.</p>
          </div>
      </section>

    </main>

    <section id="TEAM-IMPACT">
    <h2>TEAM IMPACT</h2>
    <div class="team-members">
        <div class="member">
          <img src="/src/static/IMPACT CHEZKA.jpg" alt="Team Member 1">
          <h3>CHEZKA MALIGAYA</h3>
          <p>Founder | Creative Director</p>
          <a href="https://www.instagram.com/chezka_maligaya/">@chezka_maligaya</a>
        </div>
        <div class="member">
          <img src="/src/static/IMPACT JOAN.jpg" alt="Team Member 1">
          <h3>JOAN MANZO</h3>
          <p>Event Project Manager</p>
          <a href="https://www.instagram.com/joan_cathleen/">@joan_cathleen</a>
        </div>
        <div class="member">
          <img src="/src/static/IMPACT SENNA.jpg" alt="Team Member 1">
          <h3>SENNA WEZZINK</h3>
          <p>Head of Socials</p>
          <a href="https://www.instagram.com/senna.wezzink/">@senna.wezzink</a>
        </div>
        <div class="member">
          <img src="/src/static/IMPACT LAWRENCE.jpg" alt="Team Member 1">
          <h3>LAWRENCE GOCO</h3>
          <p>Event Coordinator</p>
          <a href="https://www.instagram.com/luvvrence/">@luvvrence</a>
        </div>
        <div class="member">
          <img src="/src/static/IMPACT JOY .jpg" alt="Team Member 1">
          <h3>JOY AMO</h3>
          <p>Head of Design</p>
          <a href="https://www.instagram.com/m.j.joy/">@m.j.joy</a>
        </div>
        <div class="member">
          <img src="/src/static/IMPACT AARON.png" alt="Team Member 1">
          <h3>AARON WILLEMSEN</h3>
          <p>Head of Finance + Photographer</p>
          <a href="https://www.instagram.com/aaronlevi.w/">@aaronlevi.w</a>
        </div>
        <div class="member">
          <img src="/src/static/IMPACT EMONA.jpg" alt="Team Member 1">
          <h3>EMONA SANTIAGO</h3>
          <p>Front end Developer</p>
          <a href="https://www.instagram.com/emona.santiago/">@emona.santiago</a>
        </div>

      </div>
      
 

      
       
    </section>
      
</body>

<style>
    * {
  scroll-behavior: smooth;
}

p {
  color: white;
}

.quote {
  color: black;
  background-color: var(--IMPACT-yellow);
}


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;

}

header {
    margin: 1em;
}

h1 {
    font-size: 36px;
    color: var(--IMPACT-yellow);
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    border-bottom: solid 1px yellow;
    
}

main {
    padding: 20px;
}

section {
    margin-bottom: 40px;
}
/* 
.content {
 
    padding: 20px;
} */

@media screen and (min-width: 768px) {
    main {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    section {
        width: 100%;
    }

    section:nth-child(even) {
        margin-right: 0;
    }

    section:nth-child(odd) {
        margin-left: 0;
    }
}

#TEAM-IMPACT {
    margin: 1em;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.member {
  flex:0 1 calc(50% - 10px); /* 2 naast elkaar op mobiel */
  margin-bottom: 20px;
}

/* @media (min-width: 768px) {
  .member {
    flex: 0 1 calc(33.33% - 10px); 
  }
}

@media (min-width: 1024px) {
  .member {
    flex: 0 1 calc(25% - 10px); 
  }
} */

.member img {
  width: 100%;
  height: auto;
}

.member h3 {
  margin-top: 10px;
}

.member a {
  display: block;
  margin-top: 5px;
  text-decoration: none;
  color: white;
}

</style>