
//Access Player Dom Elements
const playerUI =  document.querySelector('.player')
const playerHealthUI =  document.querySelector('.playerHealth')
const playerBlockUI = document.querySelector('.playerBlock')
const playerFXUI =  document.querySelector('.playerEffects')

//Access Enemy DOM Elements
const foeUI =  document.querySelector('.foe')
const foeHealthUI =  document.querySelector('.foeHealth')
const foeBlockUI = document.querySelector('.foeBlock')
const foeFXUI =  document.querySelector('.foeEffects')




//Give Classes Access to Dom Elements
const playerNodeList = playerUI.children;
const redEnemyNodeList = foeUI.children;
//Player
player.health.healthUI = playerHealthUI;
player.block.blockUI = playerBlockUI;
player.effects.effectBarUI = playerFXUI;
player.updateUI()
//Hard-coded Test Foe
redEnemy.health.healthUI = foeHealthUI;
redEnemy.block.blockUI = foeBlockUI;
redEnemy.effects.effectBarUI = foeFXUI;
redEnemy.updateUI()

//set defaults

///add Click Listeners to each GamePiece UI's
playerUI.addEventListener('click', function(e){
    switch(e.target.value){
        case 'wack':
        player.attack(4);
        break;
    }
    switch(e.target.value){
        case 'block':
        player.setBlock(6);
        break;
    }
    switch(e.target.value){
        case 'beamShield':
        player.setBlock(10);
        player.currentEnemy.effects.addEffect('weak', 2);
        break;
    }
    switch(e.target.value){
        case 'beamOfEnding':
        player.attack(24);
        break;
    }
})
foeUI.addEventListener('click', function(e){
    switch(e.target.value){
        case 'backSlash':
        redEnemy.attack(10);
        break;
    }
    switch(e.target.value){
        case 'rockHide':
        redEnemy.setBlock(10);
        break;
    }
    switch(e.target.value){
        case 'embolden':
        redEnemy.effects.addEffect('strength', 2);
        redEnemy.currentEnemy.effects.addEffect('weak', 1);
        redEnemy.setBlock(8)
        break;
    }
})
