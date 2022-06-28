
    // Create Dino Constructor
	
	
	function Dino(dino){
		this.species=dino.species;
		this.weight=dino.weight;
		this.height=dino.height;
		this.diet=diet;
		this.where=where;
		this.when=when;
		this.fact=fact;
	}
	
	const dinosData = async () => {
		const response = await fetch("./dino.json");
		const data = await response.json();
		return data.Dinos;
	};
	
	
	btn.addEventListener('click', async function(event) {
		// wait dinosData complete
		const dinos = await dinosData();
		// do something with dinos
		console.log(dinos);
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
