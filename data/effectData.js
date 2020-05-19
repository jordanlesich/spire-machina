

const weak = {
  name: "Weak",
  trigger: "onAttack",
  type: "debuffAttack",
  action: weakenAttack,
  lifecycle: 'onFinishTurn',
  lifecycleAction: 'decrement'
};
const strength = {
  name: "Strength",
  trigger: "onAttack",
  type: "buffAttack",
  action: strengthenAttack,
  lifecycle: 'persist',
};
const vulnerable = {
  name: "Vulnerable",
  trigger: "onTakeDamage",
  type: "debuffTakeDamage",
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

  const curlUp = {
    name: "Curl Up",
    trigger: "afterTakeDamage",
    type: "addBlock",
    action: counterBlock,
    lifecycle: 'afterUse',
    lifecycleAction: 'die'
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