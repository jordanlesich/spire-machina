
export function genNumberBetween(min, max){
    const randomDiff = Math.round(Math.random() * (max - min))
    return min + randomDiff
}

export function parseCardData(cardData) {
    //this function parses all the card objects created in data
    //This is mainly to save on data and create all the duplicates
    //dynamically
    let deck = [];
    cardData.forEach((cardType) => {
      for (let i = 0; i < cardType.quantity; i++) {
        const card = {
          id: `${cardType.name}-${i + 1}`,
          name: cardType.name,
          type: cardType.type,
          actions: cardType.actions,
          description: cardType.description,
          cost: cardType.cost,
        };
        deck.push(card);
      }
    });
  
    return deck;
  }

export function calcDamage(basePower, source){
    
    let newPower = basePower

    const relevantBuffs = source.findEffectsBy('type','buffAttack')
    const relevantDebuffs = source.findEffectsBy('type','debuffAttack')
    const relevantFoeDebuffs = source.currentEnemy.findEffectsBy('type', 'debuffTakeDamage')
    const relevantFX = [...relevantBuffs, ...relevantDebuffs, ...relevantFoeDebuffs]
    
    if(relevantFX.length > 0){
        relevantFX.forEach(effect => {
           newPower = effect.action(newPower)
        })
    }

    return newPower
}
export function calcBlock(basePower, source){
    
    let newPower = basePower
    const relevantDebuffs = source.findEffectsBy('type','debuffBlock')
    
    if(relevantDebuffs.length > 0){
        relevantDebuffs.forEach(effect => {
           newPower = effect.action(newPower)
        })
    }

    return newPower
}



export function genCardText(stringText, basePower, source){
    const baseCardText = stringText
   const power = basePower[0].power
   function getVal(match){
       if (match === '{calcAttack}'){
           return calcDamage(power, source)
       }
       if (match === '{calcBlock}'){
           return calcBlock(power, source)
       }
   } 

   const finalCardText = baseCardText.replace(/{(.*?)}/, getVal)
   return finalCardText
}



