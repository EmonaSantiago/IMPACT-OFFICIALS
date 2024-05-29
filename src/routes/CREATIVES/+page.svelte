<script>
     export let data;
  const pageTitle = data.creativepage;
  const fashions = data?.allFashions || [];

  const beautys = data?.allBeautyLifestyles || [];
  
</script>

<body>
    <h1>{@html pageTitle.creatives}</h1>
    <div class="section">
      <h2>FASHION</h2>
      <div class="carousel">
        {#each fashions as fashion}
  <div class="item">
    <img src="{fashion.image.url}" alt="persoon">
    <div class="info">
      <h3>{@html fashion.brand}</h3>
      <!-- <a href="{fashion.url}" class="btn">View More</a> -->
    </div>
  </div>
{/each}
        <!-- More items here -->
      </div>
    </div>

    <div class="section">
      <h2>BEAUTY & LIFESTYLE</h2>
        <div class="carousel">
          {#each beautys as beauty}
          <div class="item">
            <img src="{beauty.image.url}" alt="persoon">
            <img src="photographer1.jpg" alt="Photographer 1">
            <div class="info">
              <h3>{@html beauty.brand}</h3>
            </div>
          </div>
          {/each}
          <!-- More items here -->
        </div>
      </div>

      <div class="item">
        <img src="photographer1.jpg" alt="Photographer 1">
        <div class="info">
            <h2>VISUALS</h2>
          <p>An introduction to Photographer 1</p>
          <a href="photographer1.html" class="btn">View More</a>
        </div>
      </div>

      <div class="section">
        <h2>ARTIESTEN & DANSERS</h2>
        <div class="carousel">
          <div class="item">
            <img src="photographer1.jpg" alt="Photographer 1">
            <div class="info">
              <h3>Photographer 1</h3>
              <p>An introduction to Photographer 1</p>
              <a href="photographer1.html" class="btn">View More</a>
            </div>
          </div>
          <!-- More items here -->
        </div>
      </div>
      <div class="section">
        <h2>DJ'S</h2>
        <div class="carousel">
          <div class="item">
            <img src="photographer1.jpg" alt="Photographer 1">
            <div class="info">
              <h3>Photographer 1</h3>
              <p>An introduction to Photographer 1</p>
              <a href="photographer1.html" class="btn">View More</a>
            </div>
          </div>
          <!-- More items here -->
        </div>
      </div>
  

  </body>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}
.section {
  margin-bottom: 30px;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.item {
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  scroll-snap-align: start;
}

.item img {
  width: 100%;
  height: auto;
}

img {
    filter: brightness(50%);
}

.info {
  padding: 10px;
}

.info h3 {
  margin-top: 0;
 color: white;
}
.btn {
  display: block;
  margin-top: 10px;
  padding: 5px 10px;
  text-decoration: none;
  color: var(--IMPACT-yellow);
  border: none;
  border-radius: 3px;
}
.item {
  position: relative;
}

.item img {
    width: 300px; 
    height: 300px; 
    object-fit: cover;
    width: 300px; 
    height: 300px;  
}

.item h3{
    color: white;
}

h2 {
    color: white;
}

</style>