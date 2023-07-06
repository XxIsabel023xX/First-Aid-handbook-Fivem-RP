var verwondingen = [
    {
        naam: "Hoofdletsel",
        beschrijving: "Een verwonding aan het hoofd door een slag of val.",
        instructies: "1. Bel onmiddellijk een ambulance. 2. Houd het hoofd stabiel. 3. Controleer de ademhaling.",
        risico: "Er kunnen interne verwondingen zijn, dus het is belangrijk om snel medische hulp te zoeken."
    },
    {
        naam: "Botbreuk",
        beschrijving: "Een breuk in een bot als gevolg van een val of impact.",
        instructies: "1. Stel het slachtoffer gerust. 2. Zorg voor ondersteuning van het gebroken bot. 3. Bel een ambulance.",
        risico: "Het verplaatsen van een gebroken bot kan ernstige schade veroorzaken. Vermijd het bewegen van het slachtoffer tenzij er direct gevaar is."
    },
    {
        naam: "Brandwond",
        beschrijving: "Een letsel aan de huid veroorzaakt door hitte, vlammen of chemische stoffen.",
        instructies: "1. Koel de brandwond af met koud stromend water. 2. Bedek de wond met een steriel verband. 3. Raadpleeg een arts als het ernstig is.",
        risico: "Brandwonden kunnen gevaarlijk zijn vanwege infectie en andere complicaties. Een medische beoordeling is meestal nodig."
    },
    {
        naam: "Steekwond",
        beschrijving: "Een verwonding veroorzaakt door een scherp voorwerp, zoals een mes of een schroevendraaier.",
        instructies: "1. Oefen druk uit op de wond om het bloeden te stoppen. 2. Bedek de wond met een steriel verband. 3. Bel een ambulance.",
        risico: "Steekwonden kunnen diepe weefselschade veroorzaken en het slachtoffer kan interne verwondingen hebben. Snel medisch ingrijpen is vereist."
    },
    {
        naam: "Verstuiking",
        beschrijving: "Een beschadiging van de ligamenten in een gewricht door verrekking of overmatige kracht.",
        instructies: "1. Rust het gewonde gebied uit. 2. Breng ijs aan om zwelling te verminderen. 3. Verhoog het gebied om de bloedtoevoer te verminderen.",
        risico: "Er kan sprake zijn van ligament- of kraakbeenschade. Ernstige verstuikingen vereisen mogelijk medische behandeling en revalidatie."
    },
    {
        naam: "Hartstilstand",
        beschrijving: "Het plotseling stoppen van het hart, meestal als gevolg van een hartziekte of een trauma.",
        instructies: "1. Start onmiddellijk met reanimatie (CPR). 2. Bel een ambulance. 3. Gebruik een AED als deze beschikbaar is.",
        risico: "Hartstilstand is levensbedreigend en vereist onmiddellijke medische hulp. Begin zo snel mogelijk met reanimatie en gebruik een AED indien mogelijk."
    },
    {
        naam: "Schaafwond",
        beschrijving: "Een oppervlakkige wond waarbij de bovenste laag van de huid is beschadigd.",
        instructies: "1. Reinig de wond voorzichtig met water en zeep. 2. Bedek de wond met een schoon verband of pleister. 3. Houd de wond schoon en droog.",
        risico: "Schaafwonden kunnen geïnfecteerd raken als ze niet goed worden verzorgd. Houd de wond goed schoon en let op tekenen van infectie."
    },
    {
        naam: "Bloedneus",
        beschrijving: "Bloeding uit de bloedvaten in de neus, vaak veroorzaakt door een stoot of hoge bloeddruk.",
        instructies: "1. Laat het slachtoffer rechtop zitten en kantel het hoofd lichtjes naar voren. 2. Knijp de neus dicht, net onder het neusbeen, gedurende 10 minuten. 3. Vermijd snuiten van de neus na de bloedneus.",
        risico: "Bloedneuzen kunnen vaak voorkomen en zijn meestal ongevaarlijk. Als een bloedneus echter niet stopt na 20 minuten drukken, raadpleeg dan medische hulp."
    },
    {
        naam: "Elektrische schok",
        beschrijving: "Een letsel veroorzaakt door blootstelling aan elektrische stroom.",
        instructies: "1. Verbreek onmiddellijk de stroomtoevoer. 2. Controleer de ademhaling en hartslag van het slachtoffer. 3. Bel een ambulance.",
        risico: "Elektrische schokken kunnen ernstige brandwonden en interne verwondingen veroorzaken. Medische hulp is dringend vereist."
    },
    {
        naam: "Hitteslag",
        beschrijving: "Een aandoening veroorzaakt door oververhitting van het lichaam, meestal als gevolg van langdurige blootstelling aan hoge temperaturen.",
        instructies: "1. Breng het slachtoffer naar een koele schaduwrijke plek. 2. Koel het lichaam af met koude doeken of een ventilator. 3. Geef kleine slokjes water.",
        risico: "Hitteslag kan levensbedreigend zijn. Het is belangrijk om de lichaamstemperatuur snel te verlagen en medische hulp in te roepen."
    },
    {
        naam: "Oogletsel",
        beschrijving: "Een letsel aan het oog veroorzaakt door een stoot, vreemd voorwerp of chemische stoffen.",
        instructies: "1. Spoel het oog voorzichtig met schoon water. 2. Bedek het oog met een schoon verband of een schoon doek. 3. Vermijd wrijven of druk uitoefenen op het oog.",
        risico: "Oogletsel kan variëren van mild tot ernstig. Raadpleeg altijd een arts voor een professionele beoordeling en behandeling."
    },
    {
        naam: "Verdrinking",
        beschrijving: "Het inademen van water of een andere vloeistof, wat kan leiden tot zuurstoftekort en ademhalingsmoeilijkheden.",
        instructies: "1. Haal het slachtoffer zo snel mogelijk uit het water. 2. Controleer de ademhaling en start indien nodig met reanimatie. 3. Bel een ambulance.",
        risico: "Verdrinking kan levensbedreigend zijn. Zelfs na redding is medische hulp nodig om complicaties te voorkomen."
    }
];

var searchSelect = document.getElementById("search-select");
var searchButton = document.getElementById("search-button");
var contentContainer = document.getElementById("content-container");

function zoekVerwonding() {
    var zoekterm = searchSelect.value;
    if (zoekterm === "") {
        toonAlleVerwondingen();
    } else {
        var resultaten = verwondingen.filter(function(verwonding) {
            return verwonding.naam === zoekterm;
        });
        toonResultaten(resultaten);
    }
}

function toonAlleVerwondingen() {
    contentContainer.innerHTML = "";

    verwondingen.forEach(function(verwonding) {
        var verwondingDiv = document.createElement("div");
        verwondingDiv.classList.add("verwonding");

        var naam = document.createElement("h2");
        naam.textContent = verwonding.naam;
        verwondingDiv.appendChild(naam);

        var beschrijving = document.createElement("p");
        beschrijving.textContent = verwonding.beschrijving;
        verwondingDiv.appendChild(beschrijving);

        var instructies = document.createElement("p");
        instructies.innerHTML = "<strong>Instructies:</strong> " + verwonding.instructies;
        verwondingDiv.appendChild(instructies);

        var risico = document.createElement("p");
        risico.innerHTML = "<strong>Risico:</strong> " + verwonding.risico;
        verwondingDiv.appendChild(risico);

        contentContainer.appendChild(verwondingDiv);
    });
}

function toonResultaten(resultaten) {
    contentContainer.innerHTML = "";

    if (resultaten.length === 0) {
        var geenResultatenBericht = document.createElement("p");
        geenResultatenBericht.textContent = "Geen resultaten gevonden.";
        contentContainer.appendChild(geenResultatenBericht);
    } else {
        resultaten.forEach(function(verwonding) {
            var verwondingDiv = document.createElement("div");
            verwondingDiv.classList.add("verwonding");

            var naam = document.createElement("h2");
            naam.textContent = verwonding.naam;
            verwondingDiv.appendChild(naam);

            var beschrijving = document.createElement("p");
            beschrijving.textContent = verwonding.beschrijving;
            verwondingDiv.appendChild(beschrijving);

            var instructies = document.createElement("p");
            instructies.innerHTML = "<strong>Instructies:</strong> " + verwonding.instructies;
            verwondingDiv.appendChild(instructies);

            var risico = document.createElement("p");
            risico.innerHTML = "<strong>Risico:</strong> " + verwonding.risico;
            verwondingDiv.appendChild(risico);

            contentContainer.appendChild(verwondingDiv);
        });
    }
}

searchButton.addEventListener("click", zoekVerwonding);