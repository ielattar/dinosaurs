
    // Create Dino Constructor
	
	
	function Dino(dino){
		this.otherfacts=[];
		this.species=dino.species;
		this.weight=dino.weight;
		this.height=dino.height;
		this.diet=dino.diet;
		this.where=dino.where;
		this.when=dino.when;
		this.fact=dino.fact;
	}
	
	const dinosData = async () => {
		const response = await fetch("./dino.json");
		const data = await response.json();
		return data.Dinos;
	};
	
	
	btn.addEventListener('click', async function(event) {
		// wait dinosData complete
		const dinosArray = await dinosData();
		// do something with dinos
		//console.log(dinos);
		dinos=dinosArray.map((dino) => new Dino(dino));
		console.log(dinos);
		//console.log(new Dino(dinosArray[0]));
	});
	
	

    // Create Human Object
	
	function Human(aform)
	{
		this.name=aform.name.value;
		this.feet=aform.feet.value;
		this.inches=aform.inches.value;
		this.weight=aform.weight.value;
		this.diet=aform.diet.value;
	}

    // Use IIFE to get human data from form
    
	btn.addEventListener('click',
		function (){
			const humanForm = document.getElementById('dino-compare');
			const human= new Human(humanForm);
			console.log(human);
		}
	)

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
	
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    Dino.prototype.compareWeight=function(ahuman){
		const difference = this.weight - ahuman.weight;
		const verdict = "heavier";
		if (difference < 0){
			let verdict="lighter";
		}	
		this.otherfacts.push( this.name + " is " + difference + " lbs"+ verdict + " than " + ahuman.name);
	};
	
	
	Dino.prototype.compareDiet=function(ahuman){
		this.otherfacts.push(this.name + " is " + this.diet + " while " + ahuman.name + " is " + ahuman.diet);
	};
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
	
	Dino.prototype.compareHeight=function(ahuman){
		humanHeightInches = ahuman.feet*12 + ahuman.inches;
		const difference = this.height - humanHeightInches;
		const verdict = "taller";
		if (difference < 0){
			let verdict="shorter";
		}	
		this.otherfacts.push( this.name + " is " + difference + " inches "+ verdict + " than " + ahuman.name);
	};

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
