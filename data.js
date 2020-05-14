"use strict";

//This document contains all the data used in building the game 
//Once I learn how to read/write JSON from javascript, I'll probably switch to that.
//That way I can make save files. 


//******************************** AVATARS ******************************** */

const H1_Hero = {
  name: 'H1 Hero',
  health: 72,
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
      description: `Gain 8 block and apply 2 weak`,
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

//******************************** ENEMIES ******************************** */

const Div_Devil = {
  name: 'Div Devil',
  health: 72,
  actions: [
    {
      name: "Back Slash",
      type: "Attack",
      effect: [{ type: "attack", power: 10 }],
    },
    {
      name: "Embolden!",
      type: "Special",
      effect: [
        { type: "block", power: 8 },
        { type: "makeWeak", power: 2 },
        { type: "gainStrength", power: 4 },
      ],
    },
    {
      name: "Rock Hide",
      type: "Block",
      effect: [{ type: "block", power: 10 }],
    },
  ],
};

//******************************** HTML Data to be fed into the renderer******************************** */


const Deck_HTML_Data = [
  {
    type: "div",
    ref: "table",
    classNames: ["cardTable"],
    innerText: "Card Table",
    children: [
      {
        type: "h2",
        innerText: "Draw Pile: ",
        children: [
          {
            type: "span",
            ref: "draw",
            classNames: ["drawPile"],
          },
        ],
      },
      {
        type: "div",
        ref: "hand",
        classNames: ["hand"],
      },
      {
        type: "h2",
        innerText: "Discard Pile: ",
        children: [
          { type: "span", ref: "discard", classNames: ["discardPile"] },
        ],
      },
    ],
  },
];
const H1_Hero_HTML_Data = [
  {
    type: "div",
    classNames: ["player"],
    children: [
      {
        type: "h1",
        children: [{ type: "span", ref: "name", classNames: ["playerName"] }],
      },
      {
        type: "h2",
        innerText: "Health: ",
        children: [
          { type: "span", ref: "health", classNames: ["playerHealth"] },
        ],
      },
      {
        type: "h3",
        innerText: "Block: ",
        children: [{ type: "span", ref: "block", classNames: ["playerBlock"] }],
      },
      { type: "ul", ref: "effects", classNames: ["playerEffects"] },
      {
        type: "h3",
        innerText: "Energy: ",
        children: [
          { type: "span", ref: "energy", classNames: ["playerEnergy"] },
        ],
      },
    ],
  },
];
const Div_Devil_HTML_Data = [
  {
    type: "div",
    classNames: ["foe"],
    children: [
      {
        type: "h1",
        children: [{ type: "span", ref: "name", classNames: ["foeName"] }],
      },
      {
        type: "h2",
        innerText: "Intent: ",
        children: [
          { type: "span", ref: "intent", classNames: ["foeIntent", "hidden"] },
        ],
      },
      {
        type: "h2",
        innerText: "Health: ",
        children: [{ type: "span", ref: "health", classNames: ["foeHealth"] }],
      },
      {
        type: "h3",
        innerText: "Block: ",
        children: [{ type: "span", ref: "block", classNames: ["foeBlock"] }],
      },
      { type: "ul", ref: "effects", classNames: ["foeEffects"] },
    ],
  },
];

const Match_HTML_Data = [
  {
    type: "button",
    ref: "endTurnButton",
    classNames: ["endTurn", "hidden"],
    attributes: [{ type: "value", value: "endTurn" }],
    innerText: "End Turn",
  },
];