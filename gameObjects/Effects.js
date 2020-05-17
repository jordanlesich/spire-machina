'use strict'
class Effects extends Block{
    constructor(defaultStats, ui) {
      super(defaultStats, ui);
      this.effects = [];
      this.effectBarUI = ui.effects;
    }
    updateFX_UI() {
      //create an array of strings from each effect
      const template = this.effects.map((effect) => {
        return `<li>${effect.name}: ${effect.power}</li>`;
        //join those strings into one big string
      }).join("");
      //then add the one big string all at once
      this.effectBarUI.innerHTML = template;
      //this minimizes DOM queries
    }
    findEffectBy(property, value) {
      return this.effects.find( effect => {
        // console.log(value, effect[property])
        return value === effect[property]
      });
    }
    findEffectsBy(property, value) {
      return this.effects.filter( effect => {
        return value === effect[property]
      });
    }
    addEffect(effect, power) {
      if (this.findEffectBy('name', effect.name)) {
        const existingEffect = this.findEffectBy('name', effect.name)
          existingEffect.increasePower(power)
        }
        else{
          const newEffect = new Effect(effect, power, this)
          this.effects.push(newEffect);
        }
      this.updateFX_UI();
    }
  
    removeEffect(name) {
      this.effects = this.effects.filter(effect => {
        return effect.name !== name
      });
      this.updateFX_UI();
    }
  }
  
