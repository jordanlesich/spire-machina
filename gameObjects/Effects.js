'use strict'
class Effects extends Block{
    constructor(defaultStats, ui) {
      super(defaultStats, ui);
      this.FX_List = [];
      this.effectBarUI = ui.effects;
    }
    updateFX_UI() {
      //create an array of strings from each effect
      const template = this.FX_List.map((effect) => {
        return `<li>${effect.name}: ${effect.power}</li>`;
        //join those strings into one big string
      }).join("");
      //then add the one big string all at once
      this.effectBarUI.innerHTML = template;
      //this minimizes DOM queries
    }
    findEffect(FX_Type) {
      return this.FX_List.find((effect) => effect.name === FX_Type);
    }
    addEffect(FX_Type, amount) {
      //Check if array has effects inside
      if (this.FX_List.length > 0) {
        //If it does, we want to see if the effect already exists
        if (this.findEffect(FX_Type)) {
          //If it already exists, we want to replace it with an updated effect
          const newFX_Array = this.FX_List.map((effect) => {
            if (effect.name === FX_Type) {
              const updatedFX = {
                name: effect.name,
                power: effect.power + amount,
              };
              return updatedFX;
            } else return effect;
          });
          this.FX_List = newFX_Array;
        }
        //if it doesn't exist in the array, we create a new array with the
        //old effects and the new effect inside and assign it to FX_List
        else {
          const newFX = {
            name: FX_Type,
            power: amount,
          };
          const newFX_Array = [...this.FX_List, newFX];
          this.FX_List = newFX_Array;
        }
      }
      //if this is the first element, we simply make a new array with
      //the new effect inside and assign it to FX_List
      else {
        const newFX_List = [
          {
            name: FX_Type,
            power: amount,
          },
        ];
        this.FX_List = newFX_List;
      }
      this.updateFX_UI();
    }
  
    removeEffect() {}
  }
  