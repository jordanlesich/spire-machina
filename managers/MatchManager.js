"use strict";
import {Match_HTML_Data} from '../data/HTML_Data.js'
import gameManager from '../app.js'


export default class MatchManager {
  constructor(player, enemies, deck, renderer) {
    this.player = player;
    this.enemies = enemies;
    this.deck = deck;
    this.turn = 0;
    this.phase = ["opening", "action", "closing"];
    this.endTurnButton = null;
    this.renderer = renderer
  }

  createListeners(){
    this.endTurnButton.addEventListener("click", (event) => {
      // TODO Make more specific
      if (event.target.value) {
        this.playerClosingPhase();
      }
    });
    this.deck.hand_UI.addEventListener('click', (event) => {
      // TODO Make more specific
      if (event.target.value) {
        this.deck.useCard(event.target.value);
      }
    })
  }

  destroyListeners(){
    //TODO
  }

  createEndTurnButton(){
    const matchUI = this.renderer.build(Match_HTML_Data);
    this.endTurnButton = matchUI.endTurnButton
  }

  toggleEndTurnButton() {
    this.endTurnButton.classList.toggle("hidden");
  }

  startGame() {
    this.createEndTurnButton()
    this.createListeners()
    this.player.updateUI();
    this.enemies.forEach((enemy) => {
      enemy.updateUI();
    });
    this.startPlayerTurn();
  }

  startPlayerTurn() {
    this.turn++;
    //opening phase is a method on the gamepiece class that zeros block 
    //and chacks for opening phase effects
    this.player.openingPhase();
    this.player.energy.refreshEnergy();
    this.generateEnemyActions();
    this.deck.drawHand();
    this.toggleEndTurnButton();
  }

  playerClosingPhase() {
    this.toggleEndTurnButton();
    this.deck.discardHand();
    this.player.closingPhase()
    this.startEnemyTurn();
  }

  startEnemyTurn() {
    this.enemies.forEach((enemy) => {
      enemy.intent.toggleIntentUI();
      enemy.openingPhase();
    });
    this.performEnemyActions();
  }

  generateEnemyActions() {
    this.enemies.forEach((enemy) => {
      enemy.generateAction();
    });
  }

  performEnemyActions() {
    let preActionDelay = 1000;
    const staggerActionIncrement = 500;

    this.enemies.forEach((enemy) => {
      enemy.queueAction(preActionDelay);
      preActionDelay += staggerActionIncrement;
    });

    const finishActionDelay = preActionDelay + 1000;
    setTimeout(this.enemyClosingPhase.bind(this), finishActionDelay);
  }

  enemyClosingPhase() {
    this.enemies.forEach((enemy) => {
        enemy.closingPhase()
    });
    this.startPlayerTurn();
  }

  handleDeath(character){
    
    if(character.constructor.name === 'Foe'){
       console.log(character)
        const newEnemies = this.enemies.filter(enemy =>{
        return enemy.name !== character.name
      })
        if(newEnemies.length > 0){
          console.error("you shouldn't be seeing this yet")
        }else{
          this.gameOver('You Win')
        }
    }else{
      this.gameOver('You Lose')
    }
  }

  gameOver(msg){
    this.destroyListeners()
    this.renderer.zero()
    this.renderer.build([{
      type: 'h1',
      innerText: msg
    }])
    gameManager.setMenu()
  }
  
}


