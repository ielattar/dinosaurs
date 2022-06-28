
    // Create Dino Constructor
	
	
	function Dino(dino){
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

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
