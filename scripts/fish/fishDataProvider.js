const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: "57",
        typeOfFish: "Trout",
        locationHarvested: "Ohio River"
    },
    {
        name: "Dory",
        food: "popsicles",
        length: "22",
        typeOfFish: "Blue Tang",
        locationHarvested: "Australia"
    },
    {
        name: "Nemo",
        food: "jellybeans",
        length: "20",
        typeOfFish: "Clown Fish",
        locationHarvested: "New Zealand"
    },
    {
        name: "Marlin",
        food: "bananas",
        length: "27",
        typeOfFish: "Ocelaris",
        locationHarvested: "Japan"
    },
    {
        name: "Mr. Limpet",
        food: "pizza",
        length: "80",
        typeOfFish: "Tilefish",
        locationHarvested: "Nova Scotia"
    },
    {
        name: "Pezzie",
        food: "asparagus",
        length: "57",
        typeOfFish: "Pirarucu",
        locationHarvested: "Amazon River"
    },
    {
        name: "Mr. Limpet",
        food: "pizza",
        length: "80",
        typeOfFish: "Tilefish",
        locationHarvested: "Nova Scotia"
    },
    
    {
        name: "Pezzie",
        food: "asparagus",
        length: "57",
        typeOfFish: "Pirarucu",
        locationHarvested: "Amazon River"
    }


]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const holy of fishCollection) {
        if(holy.length % 3 === 0){
            holyFish.push(holy)
        }

    }

    return holyFish
}

const holyArray = mostHolyFish()
console.log(holyArray)

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if(fish.length % 5 === 0){
            soldiers.push(fish)
          

        }
        
    }
    return soldiers
   
}

const soldierArray = soldierFish()
console.log(soldierArray)

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const nonHolyFish = []

    for(const fish of fishCollection) {
        if(fish.length % 5 !== 0 && fish.length % 3 !==0){
            nonHolyFish.push(fish)

        }
    }
    return nonHolyFish
}

const nonHolyArray = nonHolyFish()
console.log(nonHolyArray)

