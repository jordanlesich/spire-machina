'use strict';

export default class Energy {
    constructor(startingEnergy, ui) {
      this.currentEnergy = startingEnergy;
      this.maxEnergy = startingEnergy;
      this.energyUI = ui;
    }
    updateEnergyUI() {
      this.energyUI.innerText = `${this.currentEnergy} / ${this.maxEnergy}`;
    }
    checkEnergy(cost) {
      return this.currentEnergy >= cost ? true : false;
    }
    useEnergy(cost) {
      if (this.checkEnergy(cost)) {
        this.currentEnergy = this.currentEnergy - cost;
        this.updateEnergyUI();
      } else {
        alert("Not Enough Energy");
      }
    }
    refreshEnergy() {
      this.currentEnergy = this.maxEnergy;
      this.updateEnergyUI();
    }
  }
  