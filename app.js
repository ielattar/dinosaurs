// Create Dino Constructor

/*global fetch, btn, document */


function Dino(dino) {
  this.facts = [];
  this.isPigeon = false;
  this.species = dino.species;
  this.weight = dino.weight;
  this.height = dino.height;
  this.diet = dino.diet;
  this.where = dino.where;
  this.when = dino.when;
  this.fact = dino.fact;
  this.tile = null;
  if (dino.species === 'Pigeon') {
    this.isPigeon = true;
  }
  // add the fact to the facts array.
  this.facts.push(this.fact);
  this.setTile = function (aTile) {
    this.tile = aTile;
  };
  this.addFact = function (aFact) {
    this.facts.push(aFact);
  };
  this.getFact = function () {
  // Gets a random fact from the facts array.
    const { facts } = this;
    const randomIndex = Math.floor(Math.random() * facts.length);
    const afact = facts[randomIndex];
    return afact;
  };
}

const dinosData = async () => {
  const response = await fetch('./dino.json');
  const data = await response.json();
  return data.Dinos;
};

btn.addEventListener('click', async (event) => {
  // wait dinosData complete
  const dinosArray = await dinosData();
  // do something with dinos
  // console.log(dinos);
  const dinos = dinosArray.map((dino) => new Dino(dino));
  const imagesFolderUrl = 'images/';
  // console.log(new Dino(dinosArray[0]));

  // Fetch human data.
  const humanForm = document.getElementById('dino-compare');
  const ahuman = new Human(humanForm);

  // Create and set a human Tile.

  const humanTile = document.createElement('div');
  humanTile.className = 'grid-item';
  const aHeader = document.createElement('h3');
  aHeader.textContent = ahuman.name;
  humanTile.appendChild(aHeader);
  const anImage = document.createElement('img');
  anImage.setAttribute('src', `${imagesFolderUrl}human.png`);
  humanTile.appendChild(anImage);
  ahuman.setTile(humanTile);

  dinos.forEach((dino) => {
    dino.compareDiet(ahuman);
    dino.compareHeight(ahuman);
    dino.compareWeight(ahuman);
    const aTile = document.createElement('div');
    aTile.className = 'grid-item';
    const aTileHeader = document.createElement('h3');
    aTileHeader.textContent = dino.species;
    aTile.appendChild(aTileHeader);
    const aTileImage = document.createElement('img');
    aTileImage.setAttribute('src', `${imagesFolderUrl + dino.species.toLowerCase()}.png`);
    aTile.appendChild(aTileImage);
    const aTileFact = document.createElement('p');
    aTileFact.innerText = dino.getFact();
    aTile.appendChild(aTileFact);
    dino.setTile(aTile);
  });

  // Fetch grid and make sure its empty.
  const grid = document.getElementById('grid');
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  const pigeonDino = dinos.pop();
  // const piegonTile=pigeonDino.getTile();
  // console.log(dinos);
  // Shuffle the remaining dinos.
  dinos.sort(() => Math.random() - 0.5);

  dinos.slice(0, 4).forEach((dino) => {
    grid.appendChild(dino.tile);
  });
  // Add human tile.
  grid.appendChild(ahuman.tile);
  // Add remaining tiles.
  dinos.slice(4, 7).forEach((dino) => {
    grid.appendChild(dino.tile);
  });
  // Add pigeon tile.
  grid.appendChild(pigeonDino.tile);
  // Remove form from screen.
  const form = document.getElementById('dino-compare').remove();
});

// Create Human Object
function Human(aform) {
  this.name = aform.name.value;
  this.feet = aform.feet.value;
  this.inches = aform.inches.value;
  this.weight = aform.weight.value;
  this.diet = aform.diet.value;
  this.tile = null;
  this.setTile = function (aTile) {
    this.tile = aTile;
  };
}

// Use IIFE to get human data from form
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function (ahuman) {
  if (!this.isPigeon) {
    const difference = this.weight - ahuman.weight;
    const verdict = 'heavier';
    if (difference < 0) {
      let verdict = 'lighter';
    }
    this.addFact(`${this.species} is ${Math.abs(difference)} lbs ${verdict} than ${ahuman.name}`);
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.compareDiet = function (ahuman) {
  if (!this.isPigeon) {
    this.addFact(`${this.species} is ${this.diet} while ${ahuman.name} is ${ahuman.diet}`);
  }
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.compareHeight = function (ahuman) {
  if (!this.isPigeon) {
    const humanHeightInches = ahuman.feet * 12 + ahuman.inches;
    const difference = this.height - humanHeightInches;
    const verdict = 'taller';
    if (difference < 0) {
      const verdict = 'shorter';
    }
    this.addFact(`${this.species} is ${Math.abs(difference)} inches ${verdict} than ${ahuman.name}`);
  }
};
