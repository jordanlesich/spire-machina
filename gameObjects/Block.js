import Health from './Health.js'
import {createAnimation_JS} from '../animator.js'


'use strict';
export default class Block extends Health{
    constructor(defaultStats, ui) {
    super(defaultStats, ui)  
      this.activeBlock = 0;
      this.blockUI = ui.block;
    }
    updateBlockUI() {
      this.blockUI.innerText = this.activeBlock;
    }
    decrementBlock(){
        this.activeBlock = this.activeBlock - 1;
        this.updateBlockUI();
    }
    incrementBlock(){
        this.activeBlock = this.activeBlock + 1;
        this.updateBlockUI();
    }
    addBlock(amount) {
      const addBlockAnimation = createAnimation_JS();
      addBlockAnimation(amount, this.incrementBlock.bind(this), 50)
    }
    zeroBlock() {
      const loseBlockAnimation = createAnimation_JS();
      loseBlockAnimation(this.activeBlock, this.decrementBlock.bind(this), 25)
    }
    blockDamage(damage) {
      const takeDamageAnim = createAnimation_JS();

      if (this.activeBlock >= damage) {
        takeDamageAnim(damage, this.decrementBlock.bind(this), 50)
      } else {
        const remainingDmg = damage - this.activeBlock
        takeDamageAnim(this.activeBlock, this.decrementBlock.bind(this), 50)
        this.loseHealth(remainingDmg, takeDamageAnim)
      }
    }
  }
  