<script>
    export let data;
  const homedata = data.homepage;
  
</script>
<a href="/CREATIVES">CREATIVES</a>


<body>
  <section id="hero-section">
      <h1>IMPACT</h1>
  </section>

  <section id="upcoming">
      <section class="content">
        {@html homedata.homepageNews}
      <a href="/" class="button">GET TICKETS</a>
      </section>
      <section class="content">
          <img id="save-the-date" src="" alt="Save the date post">
      </section>

  </section>

  <section id="form">
      <section class="content">
        {@html homedata.homepageForm}
        <form
      action="https://formspree.io/f/mwkgynen"
      method="POST"
      >
      <label>
          EMAIL
          <input type="text" name="name" id="full-name" placeholder="ex: myname@example.com" >
      </label>
      <label>
          HOE HEB JIJ IMPACT ERVAREN?
          <input type="text" name="name" id="full-name" placeholder="type hier..." >
      </label>
      <label>
          WAT VOND JE HET MEEST WAARDEVOL AAN JE ERVARING BIJ IMPACT?
          <input type="text" name="name" id="full-name" placeholder="type hier..." >
      </label>
      <label>
          HEB JE NOG ANDERE OPMERKINGEN, SUGGESTIES OF FEEDBACK DIE JE MET ONS WILT DELEN? 
          <input type="text" name="name" id="full-name" placeholder="type hier..." >
      </label>
      
      <button type="submit">SUBMIT</button>
      </form>
  </section>
      <section class="content">
          <img id="team" src="" alt="Save the date post">
  </section>
  </section>
</body>


<style>

  h1 {
      position: static;
      font-size: 100px;
      padding-left: 20px;
      transition: transform 3s ease-in-out;
      animation: scaleIn 1s ease-in-out;
  }

  h1:hover {
      transform: translatey(100%);
  }

  @keyframes scaleIn {
0% {
  transform: scale(0.5);
  opacity: 0;
}
100% {
  transform: scale(1);
  opacity: 1;
}
}

  h2 {
      color: white;
      font-size: 80px;
  }

  a {
      color: white;
  }

  p {
      color: white;
      padding-bottom: 1em;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  body {
      height: 100%;
  }

  #hero-section {
      /* background-image: url("/src/static/aftermovie.png"); */
      height: 100vh; 
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  
  #upcoming {
      height: auto;
      display: flex;
      flex-wrap: wrap;
      /* border-bottom: solid 2px white; */
  }

  .content {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  }


  .button {
      border: solid 3px var(--IMPACT-yellow);
      border-radius: 5px;
      border-color: var(--IMPACT-yellow);
      padding: 10px 50px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
  }

  #form {
      color: white;
      height: auto;
      /* display: flex;
      flex-wrap: wrap; */
      /* border-bottom: solid 2px white; */
  }
  input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 3px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: black;
  }

  ::placeholder {
      color: grey;
  }

  button[type=submit] {
      background-color: black;
      color: white;
      border: solid 3px var(--IMPACT-yellow);
      border-radius: 5px;
      border-color: var(--IMPACT-yellow);
      padding: 10px 50px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
  }

  button[type=submit]:hover {
  background-color: var(--IMPACT-yellow);
  }

  img#team {
      width: 100%;
      border-radius: 2em;
  }

  @media (min-width: 600px)  {

  #upcoming {
      height: 80vh;}
  }

  #upcoming img{
      width: 100%;
  }


</style>