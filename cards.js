
class Deck {
    constructor(deckData, playerObject){
        this.drawPile = deckData;
        // this.selectedCard = null;
        this.discardPile = [];
        this.hand = [];
        this.deckUI = {};
        this.initialHandSize = 6;
        this.player = playerObject
        
    }
    drawCard(){
        const randomCard = this.drawPile[Math.floor(Math.random() * this.drawPile.length)]

        const newDrawPile = this.drawPile.filter(card => {
            return card.id !== randomCard.id
        })
        this.drawPile = newDrawPile
        this.hand = [...this.hand, randomCard]
    }

    drawHand(){
        let delay = 0
        for (let i = 0; i < this.initialHandSize; i++){
            setTimeout(this.drawCard.bind(this), delay)
            delay += 150
        }
    }

    discardCard(index){
        const selectedCard = this.hand[index];

        const newHand = this.hand.filter(card => {
           return card.id !== selectedCard.id 
        });
        this.hand = newHand;
        this.discardPile = [...this.discardPile, selectedCard];
    }

    performAction(){
        //we cycle through a switch to find the right action 
        //if the SWITCH matches a action type, we call a function in 
        //that case and inserts the power data as paramters
        //if there are no matches, we log an error

    }

    useCard(){
       ///get selected card
       ///check to see if there's enough energy
       ///IF yes, we use the energy from card.cost data
       ///Then we cycle through an arrary of actions
       ///For each action we call the player.perfromAction, with the type of action 
       ///and amount of power as arguments
       //ELSE we change the UI to tell the user that they don't have enough energy
    }
}


function generateDeck(cardData){
    let deck = []

    cardData.forEach(cardType => {
        for(let i = 0; i < cardType.quantity; i++){
            const card = {
                id: `${cardType.name}-${i + 1}`,
                name: cardType.name,
                effect: cardType.effect,
                cost: cardType.cost,
            }
            deck.push(card)
        }
    })

    return deck
}

const deck = new Deck(generateDeck(wizardCards), player)

deck.drawHand()

console.log(deck)