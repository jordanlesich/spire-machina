'use strict';
class Foe extends GamePiece {
    constructor(defaultStats, uiRefs, player) {
      super(defaultStats, uiRefs);
      this.intent = new Intent(uiRefs.intent);
      this.currentAction = null;
      this.actionList = defaultStats.actions;
      this.currentEnemy = player;
    }

    generateAction() {
      const randomAction = this.actionList[
        Math.floor(Math.random() * this.actionList.length)
      ];
      this.currentAction = randomAction;
      this.intent.changeIntent(this.currentAction);
    }
    ///REFACTOR TO ANIMATION
    fireAction() {
      this.currentAction.effect.forEach((effect) => {
        this.performAction(effect.type, effect.power);
      });
    }
    queueAction(delay) {
      setTimeout(this.fireAction.bind(this), delay);
    }
  }
  