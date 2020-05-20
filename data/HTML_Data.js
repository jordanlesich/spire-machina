"use strict";

//This document contains all the data used in building the game 
//Once I learn how to read/write JSON from javascript, I'll probably switch to that.
//That way I can make save files. 

//******************************** HTML Data to be fed into the renderer******************************** */


export const Deck_HTML_Data = [
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
export const Player_HTML_Data = [
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
export const Foe_HTML_Data = [
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

export const Match_HTML_Data = [
  {
    type: "button",
    ref: "endTurnButton",
    classNames: ["endTurn", "hidden"],
    attributes: [{ type: "value", value: "endTurn" }],
    innerText: "End Turn",
  },
];