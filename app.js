
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
    };

    // Create Dino Objects
    const triceratops = new Dino( 
            "Triceratops",
            13000,
            114,
            "herbavor",
            "North America",
            "Late Cretaceous",
            [
                "First discovered in 1889 by Othniel Charles Marsh",
                "customfact2",
                "customfact3",
                "customfact4"
            ],
            "triceratops.png"
    );
    const tyrannosaurus = new Dino(
        "Tyrannosaurus Rex",
        11905,
        144,
        "carnivor",
        "North America",
        "Late Cretaceous",
        [
        "The largest known skull measures in at 5 feet long.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "tyrannosaurus rex.png"
    );

    const anklyosaurus = new Dino(
        "Anklyosaurus",
        10500,
        55,
        "herbavor",
        "North America",
        "Late Cretaceous",
        [
        "Anklyosaurus survived for approximately 135 million years.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "anklyosaurus.png"
    );

    const brachiosaurus = new Dino(
        "Brachiosaurus",
        70000,
        "372",
        "herbavor",
        "North America",
        "Late Jurasic",
        [
        "An asteroid was named 9954 Brachiosaurus in 1991.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "brachiosaurus.png"
    );

    const stegosaurus = new Dino(
        "Stegosaurus",
        11600,
        79,
        "herbavor",
        "North America, Europe, Asia",
        "Late Jurasic to Early Cretaceous",
        [
        "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "stegosaurus.png"
    );

    const elasmosaurus  = new Dino(
        "Elasmosaurus",
        16000,
        59,
        "carnivor",
        "North America",
        "Late Cretaceous",
        [
        "Elasmosaurus was a marine reptile first discovered in Kansas.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "elasmosaurus.png"
    );

    const pteranodon = new Dino(
        "Pteranodon",
        44,
        20,
        "carnivor",
        "North America",
        "Late Cretaceous",
        [
        "Actually a flying reptile, the Pteranodon is not a dinosaur.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "pteranodon.png"
    );

    const pigeon = new Dino(
        "Pigeon",
        0.5,
        9,
        "herbavor",
        "World Wide",
        "Holocene",
        [
        "All birds are living dinosaurs.",
        "customfact2",
        "customfact3",
        "customfact4"
        ],
        "pigeon.png"
    );

    // Use IIFE to get human data from form
    function getHumanData() {
        const human = (function () {
            const name = document.getElementById("name").value;
            const weight = document.getElementById("weight").value;
            const feetHeight = document.getElementById("feet").value;
            const inchesHeight = document.getElementById('inches').value;
            const totalHeight = feetHeight * 12 + inchesHeight;
            const diet = document.getElementById("diet").value;
            const image = 'human.png';
            
            function nameInput() {
                return name;
            }

            function weightInput() {
                return weight; 
            }

            function totalHeightInput() {
                return totalHeight;
            }

            function dietInput() {
                return diet;
            }

            function getImage() {
                return image;
            }

            return {
                name: nameInput(),
                weight: weightInput(),
                height: totalHeightInput(),
                diet: dietInput(),
                image: getImage()
            };
    })();

    return human;
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function (humanHeight) {
    this.fact[1] = `The dino is ${
      this.height / humanHeight
    } times taller than you`;
  };
  
  // Create Dino Compare Method 2
  // NOTE: Weight in JSON file is in lbs, height in inches.
  
  Dino.prototype.compareWeight = function (humanWeight) {
    this.fact[2] = `The dino is ${
      this.weight / humanWeight
    } times heavier than you`;
  };
  
  // Create Dino Compare Method 3
  // NOTE: Weight in JSON file is in lbs, height in inches.
  
  Dino.prototype.compareDiet = function (humanDiet) {
    if (this.diet.toLowerCase() === humanDiet.toLowerCase()) {
      this.fact[3] = `The dino had the same diet as yours which is ${this.diet}`;
    } else {
      this.fact[3] = `The dino had other diet which is ${this.diet}`;
    }
  };

    // Generate Tiles for each Dino in Array

    const human = getHumanData();

    let dinoArray = [
        triceratops,
        tyrannosaurus,
        anklyosaurus,
        brachiosaurus,
        human,
        stegosaurus,
        elasmosaurus,
        pteranodon,
        pigeon
        ];

    // Add tiles to DOM
        function addTilesToDom(humanName) {
            const grid = document.getElementById("grid");
            dinoArray.map(dino => {
                const tile = document.createElement('div');
                tile.className = "grid-item";
                
                const title = document.createElement("h3");
                title.className = "h3";
                if (dino.species) {
                    title.innerHTML = dino.species;
                } else {
                    title.innerHTML = humanName;
                }

                const fact = document.createElement("p");
                fact.className = "p";
                const factsArray = dino.fact;
                let randomFact = "";

                if (factsArray) {
                    randomFact = factsArray[Math.floor(Math.random() * factsArray.length)];
                }

                if (dino.species == "Pigeon") {
                    fact.innerHTML = dino.fact[0];
                } else {
                    fact.innerHTML = randomFact;
                }

                const image = document.createElement('img');
                image.className = 'img';
                image.src = `./images/${dino.image}`;
            
                tile.appendChild(image);
                tile.appendChild(fact);
                tile.appendChild(title);
                grid.appendChild(tile);
           });
        }
    // Remove form from screen
    // On button click, prepare and display infographic

    function removeFormFromScreen() {
        const form = document.getElementById('dino-compare');
        form.innerHTML = '';
      }      
        const compareBtn = document.getElementById('btn');
        compareBtn.addEventListener('click', function () {
        const human = getHumanData();
        dinoArray.map(dino => {
            if (dino.species) {
                dino.compareHeight(human.height);
                dino.compareWeight(human.weight);
                dino.compareDiet(human.diet);
    }
  });
  addTilesToDom(human.name);
  removeFormFromScreen();
});


