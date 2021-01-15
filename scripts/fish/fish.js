/**
 *  Fish which renders individual fish objects as HTML
 */
export const fishCard = (fishObject) => {
    return `
        <section class="fishcards">
            <div><img  class="fish__image image--card" src="https://www.pinclipart.com/picdir/middle/373-3738771_dory-from-finding-nemo-finding-dory-charlie-and.png" /></div>
            <div class="class-info">
            <div class="fish__name">${fishObject.name}</div>
            <div class="fish__species">${fishObject.typeOfFish}</div>
            <div class="fish__length">${fishObject.length}</div>
            <div class="fish__location">${fishObject.locationHarvested}</div>
            <div class="fish__diet">${fishObject.food}</div></div>
        </section>
    `
}

