'use strict'


class GameManager {
    constructor(){
        this.boardUI = null;
        this.selectedPlayer = null;
        //TODO Move foes to Match Managers since they 
        //don't exist outside of matches
        this.demoFoe = null;
        this.deck = null;
        this.currentScene = null;
    }

    setBoardUI(){
        this.boardUI = renderer.build([{
            type: 'div',
            classNames: ['board'],
            ref: 'board'
          }])
    }
    setMenu(){
        
        const newGameButton = this.boardUI = renderer.build([{
            type: 'button', 
            ref: 'newGame',
            classNames: ['newGame'],
            attributes: [{type: 'value', value: 'newGame'}],
            innerText: 'New Game'
        }])
        
        //TODO create method to destroy listener
        newGameButton.newGame.addEventListener('click', (event) => {
            if(event.target.value === 'newGame'){
                renderer.zero()
                this.newGame()
            }
        })

       
    }
    createNewPlayer(){
        this.selectedPlayer = new Hero(H1_Hero,
             renderer.build(H1_Hero_HTML_Data,
             this.boardUI.board)
             )
    }
    createDemoFoe(){
        this.demoFoe = new Foe(
            Div_Devil, 
            renderer.build(Div_Devil_HTML_Data,
            this.boardUI.board),
            this.selectedPlayer)
            
    }
    createDeck(){
        this.deck = new Deck(
            parseCardData(H1_Hero.startingCards),
            renderer.build(Deck_HTML_Data),
            this.selectedPlayer
          );
    }
    newGame(){
        this.setBoardUI()
        this.createNewPlayer()
        this.createDemoFoe()
        //TODO remove this assignment when building for multiple enemies
        this.selectedPlayer.currentEnemy = this.demoFoe
        this.createDeck()

        this.currentMatch = new MatchManager(
            this.selectedPlayer, 
            [this.demoFoe],
            this.deck,
            this.
            demoFoe)
        this.currentMatch.startGame()
    }
    removeFromGame(character){
        this.currentMatch.handleDeath(character)
    }
}

const gameManager = new GameManager()

gameManager.setMenu()