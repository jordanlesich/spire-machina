'use strict';
class Hero extends GamePiece {
    constructor(defaultStats, uiRefs) {
      super(defaultStats, uiRefs);
      this.energy = new Energy(defaultStats.energy, uiRefs.energy);
      this.currentEnemy = null;
    }
  }