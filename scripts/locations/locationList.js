
console.log('ciao')
import { allLocations } from './locationDataProvider.js'; //this imports the spliced copy of the data provider sheet
import { locationCard } from './location.js';
// allLocations()
// console.log(allLocations())



let locationContainer = document.querySelector("#location-list")

export function locationList() {
    

    let locationListHTMLString = '';
    const everyLocation = allLocations();
    for(let i = 0; i < everyLocation.length; i++){
        locationListHTMLString += locationCard(everyLocation[i])
        // return locationListHTMLString
        console.log(everyLocation[i])
    }
    console.log(locationListHTMLString);
    locationContainer.innerHTML = `${locationListHTMLString}`
    

}

console.log(locationList())
