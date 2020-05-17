'use strict'
class Deck {
    constructor(deckData, cardRefs, playerObject) {
      this.drawPile = deckData;
      this.drawPile_UI = cardRefs.draw;
      this.discardPile = [];
      this.discardPile_UI = cardRefs.discard;
      this.hand = [];
      this.hand_UI = cardRefs.hand;
      this.deckUI = cardRefs.table;
      this.initialHandSize = 6;
      this.maxHandSize = deckData.length;
      this.player = playerObject;
    }
    updateCardsUI() {
      this.drawPile_UI.innerText = this.drawPile.length;
      this.discardPile_UI.innerText = this.discardPile.length;

      //this turns each card object in the hand into the below HTML template
      //and returns an array. The .join("") turns them all into one string to
      //be jammed into HTML. Might be crude, but it drastically reduces DOM
      //queries.

      //TODO Refactor to renderer once I can fingure out renderer.refresh
      //TODO generate description text dymically to account for changes in 
      //status debuffs and upgrades
      const template = this.hand
        .map((card) => {
          return `
              <div class='card ${card.type}'>
                  <h3>${card.name}</h3>
                  <p> Energy: ${card.cost}</p>
                  <p>${card.description}</p>
                  <button value='${card.id}' > Use! </button>
              </div>
              `;
        })
        .join("");
      //Currenty using innerHTML for test purposes. I'll make a better solution later on.
      this.hand_UI.innerHTML = template;
    }
    drawCard() {
      //First, we need to check if there any available cards in the draw pile
      if (this.drawPile.length > 0) {
        //If there is, we generate a random card object
        const randomCard = this.drawPile[
          Math.floor(Math.random() * this.drawPile.length)
        ];
        //then we filter out the random card and create a new array
        const newDrawPile = this.drawPile.filter((card) => {
          return card.id !== randomCard.id;
        });
        //replace the drawpile with the filtered array
        this.drawPile = newDrawPile;
        //destructure hand array into a new array
        //then add in the random card
        this.hand = [...this.hand, randomCard];
        this.updateCardsUI();
      }
      //If there aren't any cards to draw, we need to check to
      // see if all the cards are in the hand. If this is the case,
      //the only thing we can do is alert the user that they have all
      //the cards in their hand
      else if (this.hand.length === this.maxHandSize) {
        //alerts are temporary until better UI is built
        alert("Max hand size exceeded, cannot draw");
      }
      //If there are still cards to draw, but they are in the
      //discard pile, we need to generate a custom animation to
      //first get the cards into the draw pile, then make a draw
      else {
        const shuffleThenDraw = createAnimation_JS(0);
        shuffleThenDraw(
          this.discardPile.length,
          this.discardToDraw.bind(this),
          25
        );
        shuffleThenDraw(1, this.drawCard.bind(this), 100);
      }
    }
  
    discardToDraw() {
      //This poorly named method transfers a card from the discard pile
      //to the draw pile.
      if (this.discardPile.length > 0) {
        const card = this.discardPile.pop();
        this.drawPile = [...this.drawPile, card];
        this.updateCardsUI();
      } else {
        console.error("Tried to iterate over empty Discard Pile");
      }
    }
  
    shuffle() {
      // A method to transfer ALL cards from discard pile to draw
      //First we check if there are cards to shuffle
      if (this.discardPile.length > 0) {
        //if there is, we create an animation
        let delay = 100;
        const shuffleAnimation = createAnimation_JS(delay);
        shuffleAnimation(
          this.discardPile.length,
          this.discardToDraw.bind(this),
          delay
        );
      } else {
        alert("No more cards to shuffle");
      }
    }
  
    drawHand() {
      const totalFaceDownCards = this.drawPile.length + this.discardPile.length;
      //First we need to check
      if (totalFaceDownCards < this.initialHandSize) {
        //if there aren't enough cards to draw
        //we create an animation for drawing, then alerting the user
        //that they have all the cards
        const drawThenAlert = createAnimation_JS(100);
        function sendAlert() {
          alert("All cards are in your hand. Cannot draw anymore cards");
        }
        if (this.drawPile.length > 0) {
          //If there are some cards in the draw pile, draw what remains
          drawThenAlert(this.drawPile.length, this.drawCard.bind(this), 100);
          //then alert the user
          drawThenAlert(1, sendAlert.bind(this), 100);
        }
        //if all the cards are in their hands, send an alert
        else {
          sendAlert();
        }
      } else if (this.drawPile.length < this.initialHandSize) {
        //having the card shortage ruled out, we can can check if the
        //draw pile has enough for us to draw.
        const cardsOwed = this.initialHandSize - this.drawPile.length;
  
        //Create a custom animation that draws what we can, then shuffles,
        //then draws the rest
        const delay = 100;
        const increment = 100;
        const drawRefillDraw = createAnimation_JS(delay);
  
        drawRefillDraw(this.drawPile.length, this.drawCard.bind(this), increment);
        drawRefillDraw(
          this.discardPile.length,
          this.discardToDraw.bind(this),
          25
        );
        drawRefillDraw(cardsOwed, this.drawCard.bind(this), increment);
      } else {
        // if we have enough to draw in the draw pile, we make an animation
        // to draw them based on the initial hand size.
        const delay = 100;
        const increment = 100;
        const drawFullHand = createAnimation_JS(delay);
        drawFullHand(this.initialHandSize, this.drawCard.bind(this), increment);
      }
    }
  
    discardCard(selectedCard) {
      if (this.hand.length > 0) {
        //In the case where a card is being discarded by being played,
        //this function will recieve the argument selctedcard
        //IF it doesn't receive this argument, that's becuase we're dumping
        //the entire hand, therefore we discard a random card
        const randomCard = this.hand[
          Math.floor(Math.random() * this.hand.length)
        ];
        const chosenCard = selectedCard ? selectedCard : randomCard;
        //then we filter out the chosen card from the hand by
        const newHand = this.hand.filter((card) => {
          return card.id !== chosenCard.id;
        });
        //and make assign this.hand to the new Array
        this.hand = newHand;
        //and we create a new array, add in the old discarded
        //and the chosen card
        this.discardPile = [...this.discardPile, chosenCard];
        this.updateCardsUI();
      } else {
        return;
      }
    }
  
    discardHand() {
      if (this.hand.length > 0) {
        let delay = 50;
        const discardRemaining = createAnimation_JS(delay);
        discardRemaining(this.hand.length, this.discardCard.bind(this), delay);
      } else {
        return;
      }
    }
  
    useCard(id) {
      ///id of selected card is sent in as argument.
      ///We find the card by id.
      const selectedCard = this.hand.find((card) => card.id === id);
      ///check to see if there's enough energy
      if (this.player.energy.checkEnergy(selectedCard.cost)) {
        ///IF yes, we use the energy from card.cost data
        this.player.energy.useEnergy(selectedCard.cost);
  
        ///Then we cycle through an arrary of actions
        selectedCard.actions.forEach((action) => {
          ///For each action we call the player.perfromAction, with the type of action
          ///and amount of power as arguments
          this.player.performAction(action.type, action.power, action.effect);
        });
        //then we send that card to the discard pile
        this.discardCard(selectedCard);
      } else {
        //ELSE we change the UI to tell the user that they don't have enough energy
        //TEMPORARY until I build a UI for this
        alert("Not enough energy");
      }
    }
  }