console.log('howdy')

let locationData = [
    {
    country: "Malta",
    region: "Southern Europe"
    },
    {
    country: "Ecuador",
    region: "South America"
    },
    
    {
    country: "Honduras",
    region: "Central America"
    },

    {
    country: "Canada",
    region: "North America"
    }, 

    {
    country: "Maldives",
    region: "Southeast Asia"
    }
]
console.log(locationData)
export function locationDataCopy() {
    return locationData.slice()
}

//makes this data available to other pages