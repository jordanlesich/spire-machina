'use strict';

function parseCardData(cardData) {
  //this function parses all the card objects created in data
  //This is mainly to save on data and create all the duplicates
  //dynamically
  let deck = [];
  cardData.forEach((cardType) => {
    for (let i = 0; i < cardType.quantity; i++) {
      const card = {
        id: `${cardType.name}-${i + 1}`,
        name: cardType.name,
        type: cardType.type,
        actions: cardType.actions,
        description: cardType.description,
        cost: cardType.cost,
      };
      deck.push(card);
    }
  });

  return deck;
}


// //The buildMatch() function below:
// // builds the player object, enemy object, deck gameObject from classes
// // for each gameObject we configure it from data stored in data.js
// // also we render each gameObjects's HTML and generate DOM references
// //for each specified objects and pass them into each game object before 
// //building them. 
// // We create a click listener for the cards. 
// // We create a MatchManager object and plug all the generated objects into it
// // we save that game into a variable, and all we have to do is call, match.startGame()
// function buildMatch() {

//   //Create a player object, passing in a name (should be from data)
//   //the type of character (data object)
//   //generate UI builds all the DOM elements from data and returns 
//   //DOM references directly into the character

//     const canvas = generateUI([{
//       type: 'div',
//       ref: 'canvas',
//       classNames: ['game']
//     }], '.root')

//   generateUI()

//     const player = new Hero(
//       "H1 Hero",
//       coastalWizard,
//       generateUI(playerHTML_Data, ".board")
//     );
  
//     //same with foe, except we intialize the player as the foe's target
//     //becuase they'll always have the same target. 
//     const foe = new Foe(
//       "Div Devil",
//       shitMinion,
//       generateUI(foeHTML_Data, ".board"),
//       player
//     );
  
//     //Because I haven't built all the multi-foe functionality yet, 
//     //We initialize the foe as Player's target. 
//     player.currentEnemy = foe;
  
//     //Here we generate all the HTML for the deck and card table
//     //Generate UI returns all the needed dom references needed. 
//     const deckUI_Refs = generateUI(DeckHTML_Data, ".game");
//     //We parse the card data (more on the at below, and pass it into Deck 
//     //as card objects. We pass in the refs from above, and the player,
//     //as the cards will always either affect the player, or the target enemy
//     const playerDeck = new Deck(
//       parseCardData(coastalWizard.startingCards),
//       deckUI_Refs,
//       player
//     );
  
//     //Extract the DOM refs and attatch a listener to it. Later on, I will 
//     //create a way of destroying the listener once the match is over. 
//     const { hand } = deckUI_Refs;
//     hand.addEventListener("click", function (event) {
//       if (event.target.value) {
//         playerDeck.useCard(event.target.value);
//       }
//     });

//     //generates the last reference for Match Manager, extracts the reference
//     //and creates a listener
//     const matchUI = generateUI(matchHTML_Data, ".cardTable");
//     const { endTurnButton } = matchUI;
  
    
  
   
//     //Finally, we retun our match
//     return new MatchManager(player, [foe], playerDeck, matchUI, canvas);
//   }
  
  
   
//   // const Match = buildMatch();

  
  
//   // Match.startGame();