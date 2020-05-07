class Health {
    constructor(startingHealth){
        this.currentHealth = startingHealth;
        this.maxHealth = startingHealth;
        this.healthUI = null;
    }
    updateHealthUI(){
        this.healthUI.innerText = this.currentHealth;
    }    
    loseHealth(dmg){
        this.currentHealth = this.currentHealth - dmg
        this.updateHealthUI()
    }
}

class Block {
    constructor(){
        this.activeBlock = 0;
        this.blockUI = null;
    }
    updateBlockUI(){
        this.blockUI.innerText = this.activeBlock;
    }
    setBlock(amount){
        this.activeBlock = this.activeBlock + amount
        this.updateBlockUI()
    }
    blockDamage(damage){
        if (this.activeBlock >= damage){
            this.activeBlock = this.activeBlock - damage; 
            this.updateBlockUI()
            return 0;
        }
        else{
            const remainingDmg =  damage - this.activeBlock
            this.activeBlock = 0;
            this.updateBlockUI()
            return remainingDmg
        }
    }
}

class Effects {
    constructor(){
        this.FX_List = []
        this.effectBarUI = null;
    }
    updateFX_UI(){
        //create an array of strings from each effect
        const template = this.FX_List.map(effect => {
            return `<li>${effect.name}: ${effect.power}</li>`  
        //join those strings into one big string 
        }).join('')
        //then add the one big string all at once
        this.effectBarUI.innerHTML = template;
        //this minimizes DOM queries
    }
    findEffect(FX_Type){
     return this.FX_List.find(effect => effect.name === FX_Type)
    }
    addEffect(FX_Type, amount){
        //Check if array has effects inside
        if (this.FX_List.length > 0){
            //If it does, we want to see if the effect already exists
            if(this.findEffect(FX_Type)){
                //If it already exists, we want to replace it with an updated effect 
                const newFX_Array = this.FX_List.map(effect => {
                    if(effect.name === FX_Type){
                        const updatedFX = {
                            name: effect.name,
                            power: effect.power + amount
                        }
                        return updatedFX
                    }
                    else
                        return effect
                })
                this.FX_List = newFX_Array;
            }
            //if it doesn't exist in the array, we create a new array with the 
            //old effects and the new effect inside and assign it to FX_List
            else{
                const newFX = {
                    name: FX_Type,
                    power: amount
                }
                const newFX_Array = [...this.FX_List, newFX];
                this.FX_List = newFX_Array;
            }
        }
        //if this is the first element, we simply make a new array with 
        //the new effect inside and assign it to FX_List
        else{
            const newFX_List = [{
                name: FX_Type,
                power: amount
            }]
            this.FX_List = newFX_List;
        }
        this.updateFX_UI()
    }

    removeEffect(){

    }
    
}


class GamePiece {
    constructor (name, defaultStats){
        this.name = name;
        this.health = new Health(defaultStats.health)
        this.effects = new Effects()
        this.block = new Block();
    }

    attack(power){

        let total = power;

        if(this.effects.findEffect('strength')){
            const boost = this.effects.findEffect('strength').power;
            total = total + boost;
        }
        if(this.effects.findEffect('weak')){
            const drag = this.effects.findEffect('weak').power;
            total = total - drag;
        }
        this.currentEnemy.takeDamage(total < 0? 0: total)
    }

    setBlock(amount){
        this.block.setBlock(amount)
    }

    takeDamage(damageDealt){
        
        if(this.block.activeBlock > 0){
            this.health.loseHealth(this.block.blockDamage(damageDealt)) 
        }
        else{
            this.health.loseHealth(damageDealt)
        }
        
    }
    updateUI(){
        this.health.updateHealthUI()
        this.effects.updateFX_UI()
        this.block.updateBlockUI()
    }
}


class Foe extends GamePiece{
    constructor(name, defaultStats, hero){
    super(name, defaultStats)
        this.currentEnemy = hero;
        this.intent = ''
}
}

class Hero extends GamePiece {
    constructor(name, defaultStats){
    super(name, defaultStats);
        this.energy = defaultStats.energy;
        this.currentEnemy = null;
    }
    useEnergy(cost){
        this.energy = this.energy - cost;
    }
}

const player = new Hero('Coastal Wizard', wizardStats)
const redEnemy = new Foe('Red Death', orbStats, player)
player.currentEnemy = redEnemy;
