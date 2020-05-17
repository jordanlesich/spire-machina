

const weak = {
  name: "Weak",
  trigger: "onAttack",
  type: "debuff",
  action: weakenAttack,
  lifecycle: 'onFinishTurn',
  lifecycleAction: 'decrement'
};
const strength = {
  name: "Strength",
  trigger: "onAttack",
  type: "buff",
  action: strengthenAttack,
  lifecycle: 'persist',
};
const vulnerable = {
  name: "Vulnerable",
  trigger: "onTakeDamage",
  type: "debuff",
  action: vulnerableDmg,
  lifecycle: 'onFinishTurn',
  lifecycleAction: 'decrement'
  }


  const ritual = {
    name: "Ritual",
    trigger: "onStartTurn",
    type: "buff",
    action: performRitual,
    lifecycle: 'onFinishTurn',
    lifecycleAction: 'decrement',
    }

    function weakenAttack(baseAttack) {
        return Math.floor(baseAttack * 0.75);
      }
      function strengthenAttack(baseAttack) {
        return baseAttack + this.power;
      }
      function vulnerableDmg(baseDmg) {
        return Math.round(baseDmg * 1.5);
      }
      function performRitual(token){
        //  this.addEffect(strength, 2)
      }