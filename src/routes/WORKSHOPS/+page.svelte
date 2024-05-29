<h1>WORKSHOPS</h1>
<body>
<div class="container">
    <div class="item">
      <img src="/src/static/aftermovie.png" alt="Image 1">
      <h2>Title 1</h2>
      <p>Description for Image 1</p>
      <a href="/WORKSHOP1">Read More</a>
    </div>
    <div class="item">
        <img src="/src/static/aftermovie.png" alt="Image 1">
        <h2>Title 1</h2>
        <p>Description for Image 1</p>
        <a href="/WORKSHOP1">Read More</a>
      </div>
      
    <!-- Add more .item divs for additional images -->
  </div>
</body>

<style>
    h1 {
        margin: 1em;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  .container {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  .item {
    display: inline-block;
    width: 300px; /* Adjust width as needed */
    margin: 10px;
    text-align: center;
  }
  .item img {
    width: 100%;
    height: auto;
  }
</style>