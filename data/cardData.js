"use strict";

//TODO change name to Ironclad
const H1_Hero_StartingDeck = [
  {
    name: "Strike",
    type: "Attack",
    quantity: 5,
    cost: 1,
    actions: [
      {type: "attack", power: 6},
    ],
    description: 'Deal {calcAttack} Damage.',
  },
  {
    name: "Block",
    type: "Skill",
    quantity: 4,
    cost: 1,
    actions: [
      {type: "block", power: 5},
    ],
    description: 'Gain {calcBlock} Block.',
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
    description: 'Deal {calcAttack} Damage and 2 Vulnerable',
  },
];

const ironcladCardPool = [
   {
      name: "Anger",
      rarity: 'common',
      type: "Attack",
      cost: 0,
      actions: [
        {type: "special", power: 6, action: anger},
        {type: "attack", power: 6},
      ],
      description: 'Deal {calcAttack} Damage. Add a copy of this card into your discard pile.',
   },
   {
      name: "BodySlam",
      rarity: 'common',
      type: "Attack",
      cost: 0,
      actions: [
        {type: "dynamicAttack", power: () => this.activeBlock},
      ],
      description: 'Deal damage equal to your block.',
   },
   {
     name: "Cleave",
     rarity: 'common',
     type: 'Attack',
     cost: 1,
     actions: [
       {type: "attackAll", power: 8 }
     ],
     description: 'Deal {calcAttack} to ALL enemies'
   },
   {
     name: "Iron Wave",
     rarity: 'common',
     type: 'Attack',
     cost: 1,
     actions: [
       {type: "attack", power: 5 },
       {type: "block", power: 5 }
     ],
     description: 'Deal {calcAttack} damage. Gain {calcBlock} block.'
   },
   {
     name: "Shrug It Off",
     rarity: 'common',
     type: 'Attack',
     cost: 1,
     actions: [
       {type: "draw", power: 1 },
       {type: "block", power: 8 }
     ],
     description: 'Gain {calcBlock} block. Draw 1 card.'
   },
   {
     name: "InFlame",
     rarity: 'uncommon',
     type: 'Skill',
     cost: 1,
     actions: [
       {type: "addEffectSelf", power: 2, type: strength },
     ],
     description: 'Gain 2 strength'
   },
   {
     name: "Rage",
     rarity: 'uncommon',
     type: 'Skill',
     cost: 0,
     actions: [
       {type: "addEffectSelf", power: 1, type: rage },
     ],
     description: 'Whenever you play an attack this turn, gain {calcBlock} block'
   },
   {
     name: "Shockwave",
     rarity: 'uncommon',
     type: 'Skill',
     cost: 2,
     actions: [
       {type: "addEffectAll", power: 3, type: weak },
       {type: "addEffectAll", power: 3, type: vulnerable },
     ],
     description: 'Apply 3 weak and 3 vulnerable to all enemies'
   },
   {
    name: "Uppercut",
    rarity: 'uncommon',
    type: 'Attack',
    cost: 2,
    actions: [
      {type: "attack", power: 13},
      {type: "addEffectEnemy", power: 1, type: weak },
      {type: "addEffectEnemy", power: 1, type: vulnerable }
    ],
    description: 'Deal 13 damage. Apply 1 weak. Apply 1 vulnerable.'
  },
   {
    name: "Bludgeon",
    rarity: 'rare',
    type: 'Attack',
    cost: 3,
    actions: [
      {type: "attack", power: 32},
    ],
    description: 'Deal {calcAttack} damage.'
  },
]