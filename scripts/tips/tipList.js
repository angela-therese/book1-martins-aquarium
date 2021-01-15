import { allTips } from './tipDataProvider.js'
import { tipCard } from './tip.js'

let tipContainer = document.querySelector("#fish-tips");

export function tipList(){

    const everyTip = allTips(); //creates a variable to hold the copy of the data
    let tipListHTMLstring = ''; //creates an empty string into which the loop below will add data;

    //loop below loops through the copy of the data provider sheet

    for (const currentTip of everyTip) {
        console.log(currentTip);
        tipListHTMLstring += tipCard(currentTip)
    }

    console.log(tipListHTMLstring)
    tipContainer.innerHTML = `${tipListHTMLstring}`

}

