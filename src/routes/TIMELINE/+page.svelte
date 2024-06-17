<body>
<h1>TIMELINE</h1>

    <div class="timeline">

        <div class="section">
            <div class="dot"></div>
            <p class="date">JUNE 3, 2022</p>
            <div class="section-title">IMPACT 1ST EDITION</div>
            <div class="btn-container">
                <a href="https://youtu.be/MUrkbtPAPTg?si=ndi5kfmqBumbXbC9" class="btn-link">
                    <button class="btn">FULL VIDEO</button>
                </a>
                <button class="btn">PHOTOS</button>
            </div>
            <img class="image" src="../assets/aftermovie1.png" alt="AFTER MOVIE">
        </div>

        <div class="section">
            <div class="dot"></div>
            <p class="date">APRIL 4TH, 2023</p>
            <div class="section-title">SHOOTDAY 2</div>
            <div class="btn-container">
                <a href="https://youtu.be/Ia7KJ02kIZY?si=tMIUFseny6oB1ZiC" class="btn-link">
                    <button class="btn">FULL VIDEO</button>
                </a>
                <button class="btn">PHOTOS</button>
            </div>
            <img class="image" src="../assets/shootday2.png" alt="AFTER MOVIE">
        </div>
        <div class="section">
            <div class="dot"></div>
            <p class="date">MAY 27TH, 2023</p>
            <div class="section-title">IMPACT 2ND EDITION</div>
            <div class="btn-container">
                <a href="https://youtu.be/dsIPm3Z9mxA?si=IBrUlklDAz8AtnnF" class="btn-link">
                    <button class="btn">FULL VIDEO</button>
                </a>
                <button class="btn">PHOTOS</button>
            </div>
            <img class="image" src="/src/image/aftermovie.png" alt="AFTER MOVIE">
        </div>
        <div class="section">
            <div class="dot"></div>
            <p class="date">APRIL 13TH, 2024</p>
            <div class="section-title">SHOOTDAY 3</div>
            <div class="btn-container">
                <button class="btn">FULL VIDEO</button>
                <button class="btn">PHOTOS</button>
            </div>
            <img class="image" src="../assets/shootday3.png" alt="AFTER MOVIE">
        </div>
        <div class="section">
            <div class="dot"></div>
            <p class="date">APRIL 20TH, 2024</p>
            <div class="section-title">AUDITION / CASTING DAY</div>
            <div class="btn-container">
                <button class="btn">FULL VIDEO</button>
                <button class="btn">PHOTOS</button>
            </div>
            <img class="image" src="../assets/audition.png" alt="AFTER MOVIE">
        </div>

        <div class="section">
            <div class="dot"></div>
            <p class="date">JUNE 1ST, 2024</p>
            <div class="section-title">IMPACT 3RD EDITION</div>
            <div class="btn-container">
                <button class="btn">FULL VIDEO</button>
                <button class="btn">PHOTOS</button>
            </div>
            <img class="image" src="../assets/aftermovie.png" alt="AFTER MOVIE">
        </div>
        <!-- Voeg meer secties toe zoals nodig -->
    </div>
</body>

<style>
.date {
color: white;
font-size: smaller;
}
    body {
        padding: 20px;
    }

    .timeline {
        position: relative;
        width: 100%;
        z-index: 1;
        /* height: 100vh; */
    }

    .timeline:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50px; /* Aanpassen aan de gewenste positie van de lijn */
        width: 4px; /* Dikte van de lijn */
        height: 100%;
        background-color: yellow; /* Kleur van de lijn */
    }

    .section {
        position: relative;
        /* margin: 50px 0; */
        padding-left: 100px; /* Aanpassen aan de gewenste positie van de secties */
    }

    .dot {
        position: absolute;
        top: 50%;
        left: 50px;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        border: 2px solid yellow; /* Kleur van de stip en de rand */
    }

    .section-title {
        font-size: 30px;
        font-weight: bold;
        color: white;
    }

    @media (min-width: 600px)  { 
        .section-title {
        font-size: 60px;
        font-weight: bold;
        color: white;
    }
    }



    .btn-container {
        margin-top: 10px;
    }

    .btn {
        padding: 8px 16px;
        margin-right: 10px;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background-color: black;
         /* Kleur van de knoppen */
        color: #F8F053;
        border: solid 1px;
        border-radius: 5px;
        border-color: #F8F053;
    }

    .image {
        max-width: 100%;
        height: auto;
        margin-top: 20px;
        border: solid white 1px;
        margin-bottom: 1em;
    }
</style>