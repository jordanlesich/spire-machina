'use strict';
import Effects from './Effects.js'

export default class GamePiece extends Effects{
    constructor(defaultStats, ui) {
      super(defaultStats, ui)
      this.name = defaultStats.name;
      this.nameUI = ui.name;
    }
  
    die(){
      gameManager.removeFromGame(this)
    }
    attack(power) {
      let total = power;

      const attackEffects = this.findEffectsBy('trigger','onAttack')
      
      if(attackEffects.length > 0){
        attackEffects.forEach(effect => {
         total = effect.action(total)
        })
      }

      this.currentEnemy.takeDamage(total < 0 ? 0 : total);
    }
  
    setBlock(amount) {
      this.addBlock(amount);
    }
  
    takeDamage(damageDealt) {

      let total = damageDealt

      const damageEffects = this.findEffectsBy('trigger','onTakeDamage');
      if(damageEffects.length > 0) 
      damageEffects.forEach(effect => {
        total = effect.action(total);
      })

      if (this.activeBlock > 0) {
        this.blockDamage(total);
      } else {
        this.loseHealth(total);
      }
    }
    performAction(type, power, effect, target) {
      //we cycle through a switch to find the right action
      //TODO change 'meakWeak' to resemble the debuff found in the 
      //original game. 
      switch (type) {
        case "attack":  
          this.attack(power);
          break;
        case "block":
          this.setBlock(power);
          break;
        case "addEffectSelf":
          this.addEffect(effect, power);
          break;
        case "addEffectEnemy":
          this.currentEnemy.addEffect(effect, power);
          break;
        case "addEffectAll":
          target.addEffect(effect, power);
          break;
        case 'addEffectAlly':
          target.addEffect(effect, power, target)
          break;
        case 'drawCard':
          this.deck.drawCard()
          break;
        default:
          console.error("ACTION TYPE DOES NOT MATCH SWITCH PARAMS");
      }
    }
    openingPhase() {
      this.zeroBlock();
      const FX_Lifecycles = this.findEffectsBy('lifecycle', 'onStartTurn');
      if(FX_Lifecycles.length > 0){
        FX_Lifecycles.forEach(effect => {
          effect.handleLifecycle()
        })
      }
      const openTurnTriggers = this.findEffectsBy('trigger', 'onStartTurn');
      if(openTurnTriggers.length > 0){
        openTurnTriggers.forEach(effect => {
          effect.action()
        })
      }
    }
    closingPhase() {
      const FX_Lifecycles = this.findEffectsBy('lifecycle', 'onFinishTurn');
      if(FX_Lifecycles.length > 0){
        FX_Lifecycles.forEach(effect => {
          effect.handleLifecycle()
        })
      }
      const finishTurnTriggers = this.findEffectsBy('trigger', 'onFinishTurn');
      if(finishTurnTriggers.length > 0){
        finishTurnTriggers.forEach(effect => {
          effect.action()
        })
      }
    }


    updateUI() {
      this.nameUI.innerText = this.name;
      this.updateHealthUI();
      this.updateFX_UI();
      this.updateBlockUI();
    }
  }