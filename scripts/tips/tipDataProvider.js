let fishTipsData = [
    {
    temperature: 'Water not too hot, not too cold.',
    feeding: 'Feed them every day, like kids.',
    salinity: 'Too much salt is bad for your health and theirs.',
    },

 
   
]


console.log(fishTipsData)

export function allTips(){
    return fishTipsData.slice()
}