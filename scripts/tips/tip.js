export const tipCard = (tipObject) => {

    return `

    <h3>Temperature</h3>
        <ul>
         <li>${tipObject.temperature}</li>
        
       
        </ul>
    <h3>Feeding</h3>
        <ul>
         <li>${tipObject.feeding}</li>
        
        </ul>
    <h3>Salinity</h3>
        <ul>
         <li>${tipObject.salinity}</li>
        </ul> 


    `

}

