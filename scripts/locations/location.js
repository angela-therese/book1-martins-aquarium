
console.log('hola')
// in case we need the individual location's information as opposed to the entire array with all locations

export function locationCard(locationObject){
    return `
        
    
        <section>
        
            <img src="https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg" alt="Place Picture">
            <p class="name">${locationObject.country}</p>
            <p>${locationObject.region}</p>
       
        </section>
   
        
        `
       
}

