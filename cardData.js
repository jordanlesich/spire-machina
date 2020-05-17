"use strict";

const H1_Hero_StartingDeck = [
  {
    name: "Strike",
    type: "Attack",
    quantity: 5,
    cost: 1,
    actions: [
      {type: "attack", power: 6},
    ],
    description: 'Deal 6 Damage.',
  },
  {
    name: "Block",
    type: "Skill",
    quantity: 4,
    cost: 1,
    actions: [
      {type: "block", power: 5},
    ],
    description: 'Gain 5 Block.',
  },
  {
    name: "Bash",
    type: 'Attack',
    quantity: 1,
    cost: 2,
    actions: [
      {type: "attack", power: 8},
      {type: "addEffectEnemy", effect: vulnerable, power: 2},
    ],
    description: 'Deal 8 Damage and 2 Vulnerable',
  },
];