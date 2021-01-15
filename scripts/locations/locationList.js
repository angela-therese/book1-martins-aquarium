
console.log('ciao')
import { locationDataCopy } from './locationDataProvider.js'; //this imports the spliced copy of the data provider sheet
import { locationCard } from './location.js';

console.log(locationDataCopy())

console.log('this is locations data', locationDataCopy())

// import { locationCard } from './location.js'; // this imports something I don't know yet

let locationContainer = document.querySelector("#location-list")

export function locationList() {
    const allLocations = locationDataCopy();

    let locationListHTMLString = ''

    for(let i = 0; i < allLocations.length; i++){
        locationListHTMLString += locationCard(allLocations[i])

    }
    console.log(locationListHTMLString);
    locationContainer.innerHTML = `${fishListHTMLString}`


}

console.log(locationList())
