'use strict';
class GamePiece extends Effects{
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
      if (this.findEffect("strength")) {
        const boost = this.findEffect("strength").power;
        total = total + boost;
      }
      if (this.findEffect("weak")) {
        const drag = this.findEffect("weak").power;
        total = total - drag;
      }
      this.currentEnemy.takeDamage(total < 0 ? 0 : total);
    }
  
    setBlock(amount) {
      this.addBlock(amount);
    }
  
    takeDamage(damageDealt) {
      if (this.activeBlock > 0) {
        this.blockDamage(damageDealt);
      } else {
        this.loseHealth(damageDealt);
      }
    }
    performAction(type, power) {
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
        case "makeWeak":
          this.currentEnemy.addEffect("weak", power);
          break;
        case "gainStrength":
          this.addEffect("strength", power);
          break;
        default:
          console.error("ACTION TYPE DOES NOT MATCH SWITCH PARAMS");
      }
    }
    openingPhase() {
      // this.effects.runOpeningEffects()
      this.zeroBlock();
    }
    updateUI() {
      this.nameUI.innerText = this.name;
      this.updateHealthUI();
      this.updateFX_UI();
      this.updateBlockUI();
    }
  }