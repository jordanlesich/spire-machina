//******************************** ENEMIES ******************************** */

import {effects} from './effectData.js'

export const JawWorm = {
    name: 'Jaw Worm',
    health: [40,44],
    moves: [
      {
        name: "Chomp",
        type: "Attack",
        actions: [{ type: "attack", power: 11 }],
      },
      {
        name: "Thrash",
        type: "Attack-Defend",
        actions: [
          { type: "block", power: 5 },
          { type: "attack", power: 7},
        ],
      },
      {
        name: "Bellow",
        type: "Buff-Defend",
        actions: [
            { type: "addEffectSelf", effect: effects.strength, power: 3},
            { type: "block", power: 2 },
        ],
      },
    ],
    //TODO really replicate the script functionality from the game
    behaviour: ['random']
  };
//   const Cultist = {
//     name: 'Cultist',
//     health: [48, 52],
//     moves: [
//       {
//         name: "Incantation",
//         type: "Buff",
//         actions: [{ type: "addEffectSelf", power: 5, effect: ritual }],
//       },
//       {
//         name: "Dark Strike",
//         type: "Attack",
//         actions: [
//           { type: "attack", power: 5 },
//         ],
//       },
//     ],
//     behaviour: ['incantation', 'random']
//   };
  
// //TODO refactor out Red and Green Lice from this one obj
//   const Louse = {
//       name: "Louse",
//       health: [11, 16],
//       moves: [
//           //TODO add modifier for a random range of 6-7 attack
//           {
//             name: 'Bite',
//             type: 'Attack',
//             actions: [
//                 {type: 'attack', power: 6}
//             ]
//         },
//         {
//             name: 'Spit Web',
//             type: 'Debuff',
//             actions: [
//                 {type: 'affEffectEnemy', effect: 'weak', power: 2}
//             ],
//         },
//         {
//             name: 'Grow',
//             type: 'Buff',
//             actions: [
//                 {type: 'affEffectSelf', effect: 'strength', power: 3}
//             ],
//         }
//     ],
//     effects: [curlUp]
//   }