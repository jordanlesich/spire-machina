'use strict'

import Hero from '../gameObjects/Hero.js'
import Deck from '../gameObjects/Deck.js'
import Foe from '../gameObjects/Foe.js'

import MatchManager from './MatchManager.js'

import {IronClad} from '../data/avatarData.js'
import {ironcladStartingDeck} from '../data/cardData.js'

import {JawWorm} from '../data/foeData.js'

import {Deck_HTML_Data, Player_HTML_Data, Foe_HTML_Data} from '../data/HTML_Data.js'

import {parseCardData} from '../helpers/helpers.js'

export default class GameManager {
    constructor(DOM){
        this.boardUI = null;
        this.selectedPlayer = null;
        //TODO Move foes to Match Managers since they 
        //don't exist outside of matches
        this.renderer = DOM
        this.demoFoe = null;
        this.deck = null;
        this.currentScene = null;
    }

    setBoardUI(){
        this.boardUI = this.renderer.build([{
            type: 'div',
            classNames: ['board'],
            ref: 'board'
          }])
    }

    setMenu(){
        
        const newGameButton = this.boardUI = this.renderer.build([{
            type: 'button', 
            ref: 'newGame',
            classNames: ['newGame'],
            attributes: [{type: 'value', value: 'newGame'}],
            innerText: 'New Game'
        }])
        
        //TODO create method to destroy listener
        newGameButton.newGame.addEventListener('click', (event) => {
            if(event.target.value === 'newGame'){
                this.renderer.zero()
                this.newGame()
            }
        })

       
    }
    createNewPlayer(){
        this.selectedPlayer = new Hero(IronClad,
             this.renderer.build(Player_HTML_Data,
             this.boardUI.board)
             )
    }
    createDemoFoe(){
        this.demoFoe = new Foe(
            JawWorm, 
            this.renderer.build(Foe_HTML_Data,
            this.boardUI.board),
            this.selectedPlayer)
            
    }
    createDeck(){
        this.deck = new Deck(
            parseCardData(ironcladStartingDeck),
            this.renderer.build(Deck_HTML_Data),
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
            this.renderer)
        this.currentMatch.startGame()
    }
    removeFromGame(character){
        this.currentMatch.handleDeath(character)
    }
}


// const player = gameManager.selectedPlayer

// player.addEffect(weak, 3);
// player.addEffect(strength, 3);
// player.addEffect(ritual, 3);



// const effectsToTrigger = player.findEffectsBy('trigger', 'onStartTurn')

// player.attack(6)

// player.effects[1].action(6)

// effectsToTrigger.forEach(effect => {
//     effect.action(this)

// })
// console.log(weakEffect)
// player.removeEffect('Weak')
// console.log(player)
