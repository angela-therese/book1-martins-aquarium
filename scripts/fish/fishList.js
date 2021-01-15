
import { useFish } from './fishDataProvider.js' // accesses the function from the original data provider file-- the function that makes (splices) a copy
import { fishCard } from './fish.js' //accesses the function to create a profile for a single fish

let fishContainer = document.querySelector("#fish-list") //creates a variable for this command which will target "#fish-list" for inserting HTML; when you want to insert html into the section with the id "fish-list", you will use this variable

export function fishList(){  //creates a function and makes it exportable; this function is going to create a variable to hold the spliced copy of useFish, 
    
    const allTheFish = useFish() // creates a variable for the splice of useFish
    let fishListHTMLstring = ''; // creates an empty string into which the loop data will be added

//run a loop of allTheFish, which is the splice of the useFish data set; currentfish is the iterator name
for (const currentFish of allTheFish) {
    console.log(currentFish); //this is going to log the entire object at each individual index for each fish
    fishListHTMLstring += fishCard(currentFish)

}

    console.log(fishListHTMLstring)
    fishContainer.innerHTML = `${fishListHTMLstring}`;
}







