var verwondingen = [


    {
        naam: "Hoofdletsel",
        beschrijving: {
            nl: "Een verwonding aan het hoofd door een slag of val.",
            en: "An injury to the head caused by a blow or fall."
        },
        instructies: {
            nl: "1. Bel onmiddellijk een ambulance. 2. Houd het hoofd stabiel. 3. Controleer de ademhaling.",
            en: "1. Call an ambulance immediately. 2. Keep the head stable. 3. Check the breathing."
        },
        risico: {
            nl: "Er kunnen interne verwondingen zijn, dus het is belangrijk om snel medische hulp te zoeken.",
            en: "There may be internal injuries, so it is important to seek medical help quickly."
        }
    },
    {
        naam: "Botbreuk",
        beschrijving: {
            nl: "Een breuk in een bot als gevolg van een val of impact.",
            en: "A fracture in a bone caused by a fall or impact."
        },
        instructies: {
            nl: "1. Stel het slachtoffer gerust. 2. Zorg voor ondersteuning van het gebroken bot. 3. Bel een ambulance.",
            en: "1. Reassure the victim. 2. Provide support for the fractured bone. 3. Call an ambulance."
        },
        risico: {
            nl: "Het verplaatsen van een gebroken bot kan ernstige schade veroorzaken. Vermijd het bewegen van het slachtoffer tenzij er direct gevaar is.",
            en: "Moving a broken bone can cause severe damage. Avoid moving the victim unless there is immediate danger."
        }
    },
    {
        naam: "Brandwond",
        beschrijving: {
            nl: "Een letsel aan de huid veroorzaakt door hitte, vlammen of chemische stoffen.",
            en: "An injury to the skin caused by heat, flames, or chemicals."
        },
        instructies: {
            nl: "1. Koel de brandwond af met koud stromend water. 2. Bedek de wond met een steriel verband. 3. Raadpleeg een arts als het ernstig is.",
            en: "1. Cool the burn with cold running water. 2. Cover the wound with a sterile dressing. 3. Consult a doctor if it is severe."
        },
        risico: {
            nl: "Brandwonden kunnen gevaarlijk zijn vanwege infectie en andere complicaties. Een medische beoordeling is meestal nodig.",
            en: "Burns can be dangerous due to infection and other complications. Medical assessment is usually required."
        }
    },
    {
        naam: "Steekwond",
        beschrijving: {
            nl: "Een verwonding veroorzaakt door een scherp voorwerp, zoals een mes of een schroevendraaier.",
            en: "An injury caused by a sharp object, such as a knife or a screwdriver."
        },
        instructies: {
            nl: "1. Oefen druk uit op de wond om het bloeden te stoppen. 2. Bedek de wond met een steriel verband. 3. Bel een ambulance.",
            en: "1. Apply pressure to the wound to stop the bleeding. 2. Cover the wound with a sterile dressing. 3. Call an ambulance."
        },
        risico: {
            nl: "Steekwonden kunnen diepe weefselschade veroorzaken en het slachtoffer kan interne verwondingen hebben. Snel medisch ingrijpen is vereist.",
            en: "Stab wounds can cause deep tissue damage, and the victim may have internal injuries. Prompt medical intervention is required."
        }
    },
    {
        naam: "Verstuiking",
        beschrijving: {
            nl: "Een beschadiging van de ligamenten in een gewricht door verrekking of overmatige kracht.",
            en: "An injury to the ligaments in a joint due to strain or excessive force."
        },
        instructies: {
            nl: "1. Rust het gewonde gebied uit. 2. Breng ijs aan om zwelling te verminderen. 3. Verhoog het gebied om de bloedtoevoer te verminderen.",
            en: "1. Rest the injured area. 2. Apply ice to reduce swelling. 3. Elevate the area to reduce blood flow."
        },
        risico: {
            nl: "Er kan sprake zijn van ligament- of kraakbeenschade. Ernstige verstuikingen vereisen mogelijk medische behandeling en revalidatie.",
            en: "There may be ligament or cartilage damage. Severe sprains may require medical treatment and rehabilitation."
        }
    },
    {
        naam:"Hartstilstand",
        beschrijving: {
            nl: "Het plotseling stoppen van het hart, meestal als gevolg van een hartziekte of een trauma.",
            en: "The sudden cessation of the heart, usually due to heart disease or trauma."
        },
        instructies: {
            nl: "1. Start onmiddellijk met reanimatie (CPR). 2. Bel een ambulance. 3. Gebruik een AED als deze beschikbaar is.",
            en: "1. Start cardiopulmonary resuscitation (CPR) immediately. 2. Call an ambulance. 3. Use an AED if available."
        },
        risico: {
            nl: "Hartstilstand is levensbedreigend en vereist onmiddellijke medische hulp. Begin zo snel mogelijk met reanimatie en gebruik een AED indien mogelijk.",
            en: "Cardiac arrest is life-threatening and requires immediate medical assistance. Begin CPR as soon as possible and use an AED if available."
        }
    },
    {
        naam: "Schaafwond",
        beschrijving: {
            nl: "Een oppervlakkige wond waarbij de bovenste laag van de huid is beschadigd.",
            en: "A superficial wound where the top layer of skin is damaged."
        },
        instructies: {
            nl: "1. Reinig de wond voorzichtig met water en zeep. 2. Bedek de wond met een schoon verband of pleister. 3. Houd de wond schoon en droog.",
            en: "1. Clean the wound gently with water and soap. 2. Cover the wound with a clean dressing or adhesive bandage. 3. Keep the wound clean and dry."
        },
        risico: {
            nl: "Schaafwonden genezen meestal goed en dragen meestal geen hoog risico op complicaties. Zorg ervoor dat de wond schoon blijft om infectie te voorkomen.",
            en: "Scrapes usually heal well and typically do not carry a high risk of complications. Make sure to keep the wound clean to prevent infection."
        }
    },
    {
        naam: "Bloedneus",
        beschrijving: {
            nl: "Bloeding uit de bloedvaten in de neus, vaak veroorzaakt door een stoot of hoge bloeddruk.",
            en: "Bleeding from the blood vessels in the nose, often caused by a blow or high blood pressure."
        },
        instructies: {
            nl: "1. Laat het slachtoffer rechtop zitten en kantel het hoofd lichtjes naar voren. 2. Knijp de neus dicht, net onder het neusbeen, gedurende 10 minuten. 3. Vermijd snuiten van de neus na de bloedneus.",
            en: "1. Have the victim sit upright and slightly tilt the head forward. 2. Pinch the nose closed just below the nasal bone for 10 minutes. 3. Avoid blowing the nose after a nosebleed."
        },
        risico: {
            nl: "Bloedneuzen kunnen vaak voorkomen en zijn meestal ongevaarlijk. Als een bloedneus echter niet stopt na 20 minuten drukken, raadpleeg dan medische hulp.",
            en: "Nosebleeds can often occur and are usually harmless. However, if a nosebleed does not stop after applying pressure for 20 minutes, seek medical help."
        }
    },
    {
        naam: "Elektrische schok",
        beschrijving: {
            nl: "Een letsel veroorzaakt door blootstelling aan elektrische stroom.",
            en: "An injury caused by exposure to electric current."
        },
        instructies: {
            nl: "1. Verbreek onmiddellijk de stroomtoevoer. 2. Controleer de ademhaling en hartslag van het slachtoffer. 3. Bel een ambulance.",
            en: "1. Immediately disconnect the power supply. 2. Check the victim's breathing and pulse. 3. Call an ambulance."
        },
        risico: {
            nl: "Elektrische schokken kunnen ernstige brandwonden en interne verwondingen veroorzaken. Medische hulp is dringend vereist.",
            en: "Electric shocks can cause severe burns and internal injuries. Urgent medical assistance is required."
        }
    },
    {
        naam: "Hitteslag",
        beschrijving: {
            nl: "Een aandoening veroorzaakt door oververhitting van het lichaam, meestal als gevolg van langdurige blootstelling aan hoge temperaturen.",
            en: "A condition caused by overheating of the body, usually due to prolonged exposure to high temperatures."
        },
        instructies: {
            nl: "1. Breng het slachtoffer naar een koele schaduwrijke plek. 2. Koel het lichaam af met koude doeken of een ventilator. 3. Geef kleine slokjes water.",
            en: "1. Move the victim to a cool shady area. 2. Cool the body with cold cloths or a fan. 3. Provide small sips of water."
        },
        risico: {
            nl: "Hitteslag kan levensbedreigend zijn. Het is belangrijk om de lichaamstemperatuur snel te verlagen en medische hulp in te roepen.",
            en: "Heatstroke can be life-threatening. It is important to quickly lower the body temperature and seek medical help."
        }
    },
    {
        naam: "Oogletsel",
        beschrijving: {
            nl: "Een letsel aan het oog veroorzaakt door een stoot, vreemd voorwerp of chemische stoffen.",
            en: "An injury to the eye caused by a blow, foreign object, or chemicals."
        },
        instructies: {
            nl: "1. Spoel het oog voorzichtig met schoon water. 2. Bedek het oog met een schoon verband of een schoon doek. 3. Vermijd wrijven of druk uitoefenen op het oog.",
            en: "1. Gently rinse the eye with clean water. 2. Cover the eye with a clean dressing or cloth. 3. Avoid rubbing or applying pressure to the eye."
        },
        risico: {
            nl: "Oogletsel kan variëren van mild tot ernstig. Raadpleeg altijd een arts voor een professionele beoordeling en behandeling.",
            en:"Eye injuries can range from mild to severe. Always consult a doctor for a professional assessment and treatment."
        },
    },
    {
        naam: "Verdrinking",
        beschrijving: {
            nl: "Het inademen van water of een andere vloeistof, wat kan leiden tot zuurstoftekort en ademhalingsmoeilijkheden.",
            en: "The inhalation of water or another liquid, which can lead to oxygen deprivation and difficulty breathing."
        },
        instructies: {
            nl: "1. Haal het slachtoffer zo snel mogelijk uit het water. 2. Controleer de ademhaling en start indien nodig met reanimatie. 3. Bel een ambulance.",
            en: "1. Remove the victim from the water as quickly as possible. 2. Check the breathing and start resuscitation if necessary. 3. Call an ambulance."
        },
        risico: {
            nl: "Verdrinking kan levensbedreigend zijn. Zelfs na redding is medische hulp nodig om complicaties te voorkomen.",
            en: "Drowning can be life-threatening. Even after rescue, medical help is necessary to prevent complications."
        }
    },
    {
        naam: "Verstuikte enkel",
        beschrijving: {
          nl: "Een letsel aan de enkel waarbij de ligamenten worden uitgerekt of gescheurd.",
          en: "An injury to the ankle where the ligaments are stretched or torn."
        },
        instructies: {
          nl: "1. Rust het geblesseerde been uit. 2. Breng ijs aan om zwelling te verminderen. 3. Gebruik een compressieverband voor ondersteuning. 4. Verhoog het been om de bloedtoevoer te verminderen.",
          en: "1. Rest the injured leg. 2. Apply ice to reduce swelling. 3. Use a compression wrap for support. 4. Elevate the leg to reduce blood flow."
        },
        risico: {
          nl: "Een verstuikte enkel kan leiden tot instabiliteit en herhaalde blessures. Fysiotherapie kan nodig zijn om volledig te herstellen.",
          en: "A sprained ankle can lead to instability and recurrent injuries. Physical therapy may be necessary for full recovery."
        }
      },
      {
        naam: "Scheenbeenfractuur",
        beschrijving: {
          nl: "Een breuk in het scheenbeen, het bot aan de voorkant van het onderbeen.",
          en: "A fracture in the shinbone, the bone at the front of the lower leg."
        },
        instructies: {
          nl: "1. Stel het slachtoffer gerust. 2. Immobiliseer het gebroken been met een spalk. 3. Bel een ambulance.",
          en: "1. Reassure the victim. 2. Immobilize the broken leg with a splint. 3. Call an ambulance."
        },
        risico: {
          nl: "Scheenbeenfracturen kunnen ernstig zijn en chirurgische behandeling vereisen. Medische hulp is nodig.",
          en: "Shinbone fractures can be serious and may require surgical treatment. Medical assistance is necessary."
        }
      },
      {
        naam: "Dislocatie van de schouder",
        beschrijving: {
          nl: "Het uit de kom raken van de schouder, waarbij het bot uit de gewrichtsholte schiet.",
          en: "The displacement of the shoulder joint, where the bone pops out of the socket."
        },
        instructies: {
          nl: "1. Ondersteun het gewonde arm. 2. Breng voorzichtig het bot terug in de gewrichtsholte. 3. Immobiliseer de schouder met een draagdoek. 4. Zoek medische hulp.",
          en: "1. Support the injured arm. 2. Carefully maneuver the bone back into the socket. 3. Immobilize the shoulder with a sling. 4. Seek medical help."
        },
        risico: {
          nl: "Schouderontwrichtingen kunnen pijnlijk zijn en het risico op herhaalde ontwrichtingen verhogen. Medische evaluatie is essentieel.",
          en: "Shoulder dislocations can be painful and increase the risk of recurrent dislocations. Medical evaluation is essential."
        }
      },
      {
        naam: "Verstuikte pols",
        beschrijving: {
          nl: "Een letsel aan de pols waarbij de ligamenten worden uitgerekt of gescheurd.",
          en: "An injury to the wrist where the ligaments are stretched or torn."
        },
        instructies: {
          nl: "1. Rust de geblesseerde pols uit. 2. Breng ijs aan om zwelling te verminderen. 3. Gebruik een compressieverband voor ondersteuning. 4. Beperk polsbewegingen.",
          en: "1. Rest the injured wrist. 2. Apply ice to reduce swelling. 3. Use a compression wrap for support. 4. Limit wrist movements."
        },
        risico: {
          nl: "Een verstuikte pols kan pijnlijk zijn en de handfunctie beperken. Fysiotherapie kan nodig zijn voor herstel en revalidatie.",
          en: "A sprained wrist can be painful and limit hand function. Physical therapy may be necessary for recovery and rehabilitation."
        }
      },
      {
        naam: "Kneuzing",
        beschrijving: {
          nl: "Een letsel waarbij de onderliggende weefsels beschadigd of gezwollen zijn, meestal als gevolg van een stomp trauma.",
          en: "An injury where the underlying tissues are damaged or swollen, usually due to blunt trauma."
        },
        instructies: {
          nl: "1. Rust het geblesseerde gebied uit. 2. Breng ijs aan om zwelling te verminderen. 3. Gebruik een drukverband indien nodig. 4. Vermijd belasting van het gebied.",
          en: "1. Rest the injured area. 2. Apply ice to reduce swelling. 3. Use a compression bandage if necessary. 4. Avoid putting weight on the area."
        },
        risico: {
          nl: "Kneuzingen kunnen pijnlijk zijn en leiden tot zwelling en blauwe plekken. Rust en tijd zijn meestal voldoende voor herstel.",
          en: "Bruises can be painful and result in swelling and discoloration. Rest and time are usually sufficient for recovery."
        }
      },
      {
        naam: "Gescheurde meniscus",
        beschrijving: {
          nl: "Een scheur in het kraakbeen in de knie, meestal veroorzaakt door draaiende bewegingen of direct trauma.",
          en: "A tear in the cartilage in the knee, usually caused by twisting movements or direct trauma."
        },
        instructies: {
          nl: "1. Rust het geblesseerde been uit. 2. Breng ijs aan om zwelling te verminderen. 3. Gebruik krukken om het gewicht te verminderen. 4. Raadpleeg een arts voor verdere evaluatie.",
          en: "1. Rest the injured leg. 2. Apply ice to reduce swelling. 3. Use crutches to reduce weight-bearing. 4. Consult a doctor for further evaluation."
        },
        risico: {
          nl: "Gescheurde menisci kunnen kniepijn en instabiliteit veroorzaken. Chirurgie kan nodig zijn voor ernstige gevallen.",
          en: "Torn menisci can cause knee pain and instability. Surgery may be necessary for severe cases."
        }
      },
      {
        naam: "Duizeligheid",
        beschrijving: {
          nl: "Een gevoel van desoriëntatie en het verlies van evenwicht, vaak gepaard gaande met draaierigheid.",
          en: "A sensation of disorientation and loss of balance, often accompanied by dizziness."
        },
        instructies: {
          nl: "1. Laat het slachtoffer zitten of liggen. 2. Zorg voor voldoende frisse lucht. 3. Houd het hoofd iets omhoog. 4. Raadpleeg een arts indien de symptomen aanhouden.",
          en: "1. Have the victim sit or lie down. 2. Provide fresh air. 3. Keep the head slightly elevated. 4. Consult a doctor if the symptoms persist."
        },
        risico: {
          nl: "Duizeligheid kan het gevolg zijn van verschillende oorzaken, waaronder innerlijke oorproblemen, lage bloeddruk of uitdroging. Raadpleeg een arts voor een juiste diagnose en behandeling.",
          en: "Dizziness can result from various causes, including inner ear problems, low blood pressure, or dehydration. Consult a doctor for proper diagnosis and treatment."
        }
      },
      {
        naam: "Sleutelbeenbreuk",
        beschrijving: {
          nl: "Een breuk in het sleutelbeen, het bot dat het borstbeen verbindt met het schouderblad.",
          en: "A fracture in the collarbone, the bone that connects the breastbone to the shoulder blade."
        },
        instructies: {
          nl: "1. Immobiliseer de arm aan de aangedane zijde. 2. Breng een koud kompres aan om zwelling te verminderen. 3. Raadpleeg een arts voor verdere evaluatie en behandeling.",
          en: "1. Immobilize the arm on the affected side. 2. Apply a cold compress to reduce swelling. 3. Consult a doctor for further evaluation and treatment."
        },
        risico: {
          nl: "Een sleutelbeenbreuk kan pijnlijk zijn en de beweging van de arm beperken. Medische hulp kan nodig zijn om de breuk te beoordelen en de juiste behandeling toe te passen.",
          en: "A collarbone fracture can be painful and limit arm movement. Medical assistance may be needed to assess the fracture and apply appropriate treatment."
        }
      },
      {
        naam: "Shock",
        beschrijving: {
          nl: "Een levensbedreigende aandoening waarbij de bloedsomloop onvoldoende zuurstof naar de organen transporteert.",
          en: "A life-threatening condition in which the circulatory system fails to deliver enough oxygen to the organs."
        },
        instructies: {
          nl: "1. Leg het slachtoffer plat neer met opgeheven benen, tenzij er sprake is van een hoofd- of nekletsel. 2. Bel onmiddellijk een ambulance. 3. Houd het slachtoffer warm en comfortabel.",
          en: "1. Lay the victim down flat with elevated legs, unless there is a head or neck injury. 2. Call an ambulance immediately. 3. Keep the victim warm and comfortable."
        },
        risico: {
          nl: "Shock kan het gevolg zijn van ernstig bloedverlies, ernstige infecties, allergische reacties of andere medische noodsituaties. Snelle medische hulp is cruciaal.",
          en: "Shock can result from severe blood loss, severe infections, allergic reactions, or other medical emergencies. Prompt medical assistance is crucial."
        }
      },
      {
        naam: "Schotwonden",
        beschrijving: {
          nl: "Verwondingen veroorzaakt door kogels die het lichaam binnendringen.",
          en: "Injuries caused by bullets entering the body."
        },
        instructies: {
          nl: "1. Zorg voor directe medische hulp. 2. Druk de wond voorzichtig af met een steriel verband. 3. Houd het slachtoffer stabiel en comfortabel.",
          en: "1. Seek immediate medical assistance. 2. Gently apply pressure to the wound with a sterile bandage. 3. Keep the victim stable and comfortable."
        },
        risico: {
          nl: "Schotwonden kunnen levensbedreigend zijn en kunnen schade veroorzaken aan vitale organen. Onmiddellijke medische evaluatie en behandeling zijn essentieel.",
          en: "Gunshot wounds can be life-threatening and may cause damage to vital organs. Immediate medical evaluation and treatment are essential."
        }
      },
];



var language = "nl"; // Standaardtaal is Nederlands

var languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", changeLanguage);

var searchSelect = document.getElementById("search-select");

var options = {
    nl: [
      { value: "", text: "Kies een verwonding..." },
      { value: "Hoofdletsel", text: "Hoofdletsel" },
      { value: "Botbreuk", text: "Botbreuk" },
      { value: "Brandwond", text: "Brandwond" },
      { value: "Steekwond", text: "Steekwond" },
      { value: "Verstuiking", text: "Verstuiking" },
      { value: "Hartstilstand", text: "Hartstilstand" },
      { value: "Schaafwond", text: "Schaafwond" },
      { value: "Bloedneus", text: "Bloedneus" },
      { value: "Verstuikte enkel", text: "Verstuikte enkel" },
      { value: "Scheenbeenfractuur", text: "Scheenbeenfractuur" },
      { value: "Dislocatie van de schouder", text: "Dislocatie van de schouder" },
      { value: "Verstuikte pols", text: "Verstuikte pols" },
      { value: "Kneuzing", text: "Kneuzing" },
      { value: "Gescheurde meniscus", text: "Gescheurde meniscus" },
      { value: "Duizeligheid", text: "Duizeligheid" },
      { value: "Sleutelbeenbreuk", text: "Sleutelbeenbreuk" },
      { value: "Shock", text: "Shock" },
      { value: "Schotwonden", text: "Schotwonden" }
    ],
    en: [
      { value: "", text: "Select an injury..." },
      { value: "Hoofdletsel", text: "Head Injury" },
      { value: "Botbreuk", text: "Bone Fracture" },
      { value: "Brandwond", text: "Burn" },
      { value: "Steekwond", text: "Stab Wound" },
      { value: "Verstuiking", text: "Sprain" },
      { value: "Hartstilstand", text: "Cardiac Arrest" },
      { value: "Schaafwond", text: "Abrasion" },
      { value: "Bloedneus", text: "Nosebleed" },
      { value: "Verstuikte enkel", text: "Ankle Sprain" },
      { value: "Scheenbeenfractuur", text: "Shinbone Fracture" },
      { value: "Dislocatie van de schouder", text: "Shoulder Dislocation" },
      { value: "Verstuikte pols", text: "Wrist Sprain" },
      { value: "Kneuzing", text: "Bruise" },
      { value: "Gescheurde meniscus", text: "Torn Meniscus" },
      { value: "Duizeligheid", text: "Dizziness" },
      { value: "Sleutelbeenbreuk", text: "Collarbone Fracture" },
      { value: "Shock", text: "Shock" },
      { value: "Schotwonden", text: "Shot Wound" }
    ]
  };

function changeLanguage() {
  language = languageSelect.value;
  populateDropdown();
}

function populateDropdown() {
  searchSelect.innerHTML = "";

  var currentOptions = options[language];

  currentOptions.forEach(function(option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    searchSelect.appendChild(optionElement);
  });
}

function populateContent() {
    var contentContainer = document.getElementById("content-container");
    var selectedInjury = document.getElementById("search-select").value;
  
    if (selectedInjury === "") {
      contentContainer.innerHTML = "";
      return;
    }
  
    var selectedInjuryData = verwondingen.find(function(injury) {
      return injury.naam === selectedInjury;
    });
  
    var naam = selectedInjuryData.naam;
    var beschrijving = selectedInjuryData.beschrijving[language];
    var instructies = selectedInjuryData.instructies[language];
    var risico = selectedInjuryData.risico[language];
  
    var title = language === "nl" ? naam : selectedInjuryData.beschrijving.en;
  
    var contentHTML =
      "<div class='verwonding'>" +
      "<h2>" + title + "</h2>" +
      "<p><strong>" + (language === "nl" ? "Beschrijving" : "Description") + ":</strong> " + beschrijving + "</p>" +
      "<p><strong>" + (language === "nl" ? "Instructies" : "Instructions") + ":</strong> " + instructies + "</p>" +
      "<p><strong>" + (language === "nl" ? "Risico" : "Risk") + ":</strong> " + risico + "</p>" +
      "</div>";
  
    contentContainer.innerHTML = contentHTML;
  }

document.getElementById("search-button").addEventListener("click", populateContent);