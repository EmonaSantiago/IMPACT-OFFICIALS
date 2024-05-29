<body>
    <header>
        <h1>ABOUT US</h1>
        <nav>
            <ul>
                <li><a href="#section1">Section 1</a></li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#section3">Section 3</a></li>
                <li><a href="#TEAM-IMPACT">TEAM IMPACT</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="section1">
            <div class="content">
                <h2>Section 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
        </section>

        <section id="section">
          <div class="content">
              <h2>Quote section</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
          </div>
      </section>

       

        <section id="section2">
            <div class="content">
                <h2>Section 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
        </section>

        <section id="section3">
            <div class="content">
                <h2>Section 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
        </section>

    </main>

    <section id="TEAM-IMPACT">
    <h2>TEAM IMPACT</h2>
    <div class="team-members">
        <div class="member">
          <img src="team_member1.jpg" alt="Team Member 1">
          <h3>Team Lid 1</h3>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <div class="member">
          <img src="team_member1.jpg" alt="Team Member 1">
          <h3>Team Lid 1</h3>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <div class="member">
          <img src="team_member1.jpg" alt="Team Member 1">
          <h3>Team Lid 1</h3>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <div class="member">
          <img src="team_member1.jpg" alt="Team Member 1">
          <h3>Team Lid 1</h3>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
        <!-- Voeg hier nog 6 van zulke 'member' divs toe -->
      </div>
    </section>
      
</body>

<style>
    * {
  scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;

}

/* header {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
} */

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
        width: 45%;
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
  flex: 0 1 calc(50% - 10px); /* 2 naast elkaar op mobiel */
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .member {
    flex: 0 1 calc(33.33% - 10px); /* 3 naast elkaar op tablet */
  }
}

@media (min-width: 1024px) {
  .member {
    flex: 0 1 calc(25% - 10px); /* 4 naast elkaar op desktop */
  }
}

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
  color: #333;
}

</style>