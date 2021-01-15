// console.log('hola')

// import { useFish } from './FishDataProvider.js'

// const allTheFish = useFish()

// // for (const fish of allTheFish) {
// //     console.log(fish)
// }


import { fishList } from "./fish/fishList.js";
fishList()

import { locationList } from "./locations/locationList.js"
locationList() // this makes my fish cards DISAPPEAR but my location folders APPEAR in the developer tools "sources". Without this statement, my fish cards are VISIBLE but my folders DISAPPEAR 

import { tipList } from "./tips/tipList.js"
tipList()

// import { allLocations } from "./locations/locationDataProvider.js"
// // allLocations()



// import { locationList } from './locationList.js'

// locationList()

//-----------------------------

