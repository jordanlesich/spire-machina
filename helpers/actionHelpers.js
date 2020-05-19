
function performAction(){

    target.fn(calcPower(power))

    switch (type) {
        case "attack":  
          this.attack(calcDamage(power));
          break;
        case "block":
          this.setBlock(calcBlock(power));
          break;
        case "addEffectSelf":
          this.addEffect(effect, power);
          break;
        case "addEffectEnemy":
          this.currentEnemy.addEffect(effect, power);
          break;
        case 'drawCard':
          this.deck
        default:
          console.error("ACTION TYPE DOES NOT MATCH SWITCH PARAMS");
      }
}