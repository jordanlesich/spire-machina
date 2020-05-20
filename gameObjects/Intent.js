'use strict';
export default class Intent {
    constructor(ui) {
      this.intent = null;
      this.intentUI = ui;
    }
    updateIntentUI() {
      //TODO change to renderer
      this.intentUI.innerText = `(${this.intent.type})`;
    }
    toggleIntentUI() {
      this.intentUI.classList.toggle("hidden");
    }
    changeIntent(newIntent) {
      this.intent = newIntent;
      this.updateIntentUI();
      this.toggleIntentUI();
    }
  }
  