<body>
<h1>TIMELINE</h1>
    <div class="timeline">
        <div class="section">
            <div class="dot"></div>
            <div class="section-title">Sectie 1</div>
            <div class="btn-container">
                <button class="btn">Knop 1</button>
                <button class="btn">Knop 2</button>
            </div>
            <img class="image" src="src/static/team.png" alt="Afbeelding 1">
        </div>
        <div class="section">
            <div class="dot"></div>
            <div class="section-title">Sectie 2</div>
            <div class="btn-container">
                <button class="btn">Knop 1</button>
                <button class="btn">Knop 2</button>
            </div>
            <img class="image" src="src/static/team.png" alt="Afbeelding 2">
        </div>
        <div class="section">
            <div class="dot"></div>
            <div class="section-title">Sectie 3</div>
            <div class="btn-container">
                <button class="btn">Knop 1</button>
                <button class="btn">Knop 2</button>
            </div>
            <img class="image" src="src/static/team.png" alt="Afbeelding 2">
        </div>
        <div class="section">
            <div class="dot"></div>
            <div class="section-title">Sectie 4</div>
            <div class="btn-container">
                <button class="btn">Knop 1</button>
                <button class="btn">Knop 2</button>
            </div>
            <img class="image" src="src/static/team.png" alt="Afbeelding 2">
        </div>
        <div class="section">
            <div class="dot"></div>
            <div class="section-title">Sectie 5</div>
            <div class="btn-container">
                <button class="btn">Knop 1</button>
                <button class="btn">Knop 2</button>
            </div>
            <img class="image" src="src/static/team.png" alt="Afbeelding 2">
        </div>
        <!-- Voeg meer secties toe zoals nodig -->
    </div>
</body>

<style>
    /* h1 {
        color: var(--IMPACT-yellow);
        margin-left: 1em;
    } */

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
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        color: white;
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
        color: var(--IMPACT-yellow);
        border: solid 1px;
        border-radius: 5px;
    }

    .image {
        max-width: 100%;
        height: auto;
        margin-top: 20px;
    }
</style>