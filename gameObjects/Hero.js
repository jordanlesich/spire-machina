'use strict';
import GamePiece from './GamePiece.js'
import Energy from './Energy.js'

export default class Hero extends GamePiece {
    constructor(defaultStats, uiRefs) {
      super(defaultStats, uiRefs);
      this.energy = new Energy(defaultStats.energy, uiRefs.energy);
      this.deck = null;
      this.currentEnemy = null;
    }
  }