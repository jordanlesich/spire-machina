'use strict'
class Health {
    constructor(defaultStats, ui) {
      this.currentHealth = defaultStats.health;
      this.maxHealth = defaultStats.health;
      this.healthUI = ui.health;
    }
    updateHealthUI() {
      this.healthUI.innerText = this.currentHealth;
    }
    decrementHealth(){
      this.currentHealth = this.currentHealth - 1;
      this.updateHealthUI();
    }
    incrementHealth(){
      this.currentHealth = this.currentHealth + 1;
      this.updateHealthUI();
    }
    loseHealth(dmg, takeDamageAnim) {

      const loseHealthAnim = takeDamageAnim? takeDamageAnim : createAnimation_JS()

      if (dmg >= this.currentHealth){
        loseHealthAnim(this.currentHealth, this.decrementHealth.bind(this), 50)
        loseHealthAnim(1, this.die(this), 50)
      }else{
        loseHealthAnim(dmg, this.decrementHealth.bind(this), 50)
      }
    }
  }