function calcDamage(basePower, source){
    
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

    // console.log('value returned: ', newPower)
    return newPower
}
function calcBlock(basePower, source){
    
    let newPower = basePower
    console.log(newPower)
    const relevantDebuffs = source.findEffectsBy('type','debuffBlock')
    
    if(relevantDebuffs.length > 0){
        relevantDebuffs.forEach(effect => {
           newPower = effect.action(newPower)
        })
    }

    // console.log('value returned: ', newPower)
    return newPower
}



function genCardText(stringText, basePower, source){
    const baseCardText = stringText
   const power = basePower[0].power
   function getVal(match){
       if (match === '{calcAttack}'){
           return calcDamage(power, source)
       }
       if (match === '{calcBlock}'){
           console.log('fired')
           return calcBlock(power, source)
       }
   } 

   const finalCardText = baseCardText.replace(/{(.*?)}/, getVal)
   return finalCardText
}



const card = {
    name: "Strike",
    type: "Attack",
    quantity: 5,
    cost: 1,
    actions: [
      {type: "attack", power: 6},
    ],
    description: `Deal * Damage.`,
  }

