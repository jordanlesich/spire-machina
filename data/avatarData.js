//******************************** AVATARS ******************************** */

const IronClad = {
    name: 'The Ironclad',
    health: 80,
    energy: 3,
    startingCards: [
      {
        name: "Wack",
        effect: [{ type: "attack", power: 4 }],
        description: `Deal 4 damage.`,
        cost: 1,
        quantity: 6,
      },
      {
        name: "Block",
        effect: [{ type: "block", power: 6 }],
        description: `Gain 6 block`,
        cost: 1,
        quantity: 6,
      },
      {
        name: "Beam Shield!",
        effect: [
          { type: "block", power: 8 },
          { type: "makeWeak", power: 2 },
        ],
        description: () => `Gain ${blockPower} block and apply 2 weak`,
        cost: 1,
        quantity: 1,
      },
      {
        name: "Beam of Ending!",
        effect: [{ type: "attack", power: 24 }],
        description: `Deal 24 damage`,
        cost: 3,
        quantity: 1,
      },
    ],
  };
  
  