
    // Create Dino Constructor
    function Animal(species, weight, height, diet, img) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.img = img;
    };

    function Dino(species, weight, height, diet, where, when, facts, img) {
        Animal.call(this, species, weight, height, diet, img)
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    
    Dino.prototype = Object.create(Animal.prototype)

    // Create Dino Objects
    const triceratops = new Dino( 
            "Triceratops",
            13000,
            114,
            "herbavor",
            "North America",
            "Late Cretaceous",
            "First discovered in 1889 by Othniel Charles Marsh",
            "./images/triceratops.png"
    );
    const tyrannosaurus = new Dino(
        "Tyrannosaurus Rex",
        11905,
        144,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "The largest known skull measures in at 5 feet long.",
        "./images/tyrannosaurus rex.png"
    );

    const anklyosaurus = new Dino(
        "Anklyosaurus",
        10500,
        55,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "Anklyosaurus survived for approximately 135 million years.",
        "./images/anklyosaurus.png"
    );

    const brachiosaurus = new Dino(
        "Brachiosaurus",
        70000,
        "372",
        "herbavor",
        "North America",
        "Late Jurasic",
        "An asteroid was named 9954 Brachiosaurus in 1991.",
        "./images/brachiosaurus.png"
    );

    const stegosaurus = new Dino(
        "Stegosaurus",
        11600,
        79,
        "herbavor",
        "North America, Europe, Asia",
        "Late Jurasic to Early Cretaceous",
        "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
        "./images/stegosaurus.png"
    );

    const elasmosaurus  = new Dino(
        "Elasmosaurus",
        16000,
        59,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Elasmosaurus was a marine reptile first discovered in Kansas.",
        "./images/elasmosaurus.png"
    );

    const pteranodon = new Dino(
        "Pteranodon",
        44,
        20,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Actually a flying reptile, the Pteranodon is not a dinosaur.",
        "./images/pteranodon.png"
    );

    const pigeon = new Dino(
        "Pigeon",
        0.5,
        9,
        "herbavor",
        "World Wide",
        "Holocene",
        "All birds are living dinosaurs.",
        "./images/pigeon.png"
    );

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    Dino.prototype.compareWeight = function (human) {
        if (this.species !== human.species) {
            if (this.weight > human.weight) {
                this.facts.push(`${this.species} is heavier than ${human.species}`)
            } else {
                this.facts.push(`${human.species} is heavier than ${this.species}`)            
            }
        };
    };
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareHeight = function (human) {
        if (this.species !== human.species) {
            if (this.height > human.height) {
                this.facts.push(`${this.species} is taller than ${human.species}`)
            } else {
                this.facts.push(`${this.species} is shorter than ${human.species}`)
            }
        };
    };
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function (human) {
        if (this.species !== human.species) {
            this.facts.push(`${this.species} eats ${this.diet} while ${human.species} eats ${human.diet}`)
        };
    };

    // Adding shuffle method
    function shuffle(array) {

        return array;
    }

    // Remove form from screen
    // On button click, prepare and display infographic
    const compareBtn = document.getElementById("btn");
    const form = document.getElementById("dino-compare");
    const grid = document.getElementById("grid");
    grid.style.display = "none";

    compareBtn.addEventListener("click", function () {
        form.style.display = "none";
        grid.style.display = "flex";

    // Use IIFE to get human data from form
    let humanFromForm = (function getHumanData() {
        const nameInput = document.getElementById("name").value;
        const weightInput = document.getElementById("weight").value;
        const feetHeightInput = document.getElementById("feet").value;
        const inchesHeightInput = document.getElementById('inches').value;
        const totalHeight = feetHeightInput * 12 + inchesHeightInput;
        const dietInput = document.getElementById("diet");
        
        // Create Human Object
        let human = new Dino(
            nameInput,
            weightInput,
            totalHeight,
            dietInput,
            "human",
            "Late Cretaceous",
            "",
            "./images/human.png"
            );
        return human;
    })();

    // Added all dinos, pigeon and human into array for future comparison
    let dinoArray = [
        triceratops,
        tyrannosaurus,
        anklyosaurus,
        brachiosaurus,
        stegosaurus,
        elasmosaurus,
        pteranodon,
        pigeon,
        humanFromForm
    ];
});
    

    // Generate Tiles for each Dino in Array
    const randomizeDinosInArray = shuffle(dinoArray);

        // Add tiles to DOM





