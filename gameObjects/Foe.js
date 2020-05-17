'use strict';
class Foe extends GamePiece {
    constructor(defaultStats, uiRefs, player) {
      super(defaultStats, uiRefs);
      this.intent = new Intent(uiRefs.intent);
      this.intendedMove = null;
      this.moveList = defaultStats.moves;
      this.currentEnemy = player;
    }

    generateAction() {
      const randomMove = this.moveList[
        Math.floor(Math.random() * this.moveList.length)
      ];
      this.intendedMove = randomMove;
      this.intent.changeIntent(this.intendedMove);
    }
    ///REFACTOR TO ANIMATION
    fireAction() {
      this.intendedMove.actions.forEach((action) => {
        this.performAction(action.type, action.power, action.effect, action.target);
      });
    }
    queueAction(delay) {
      setTimeout(this.fireAction.bind(this), delay);
    }
  }
  