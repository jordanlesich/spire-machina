class GameState {
    constructor(){
        this.currentPieces = []
        this.turn = 0;
        this.turnPhase =0; ///Player and Foe have 3 phases. startPhase (0), ActionPhase(1), endPhase(2)
    }

    setPieces(){
        const newArray = [arguments]
        this.currentPieces = newArray
    }

    nextTurn(){
        if (this.turn >= this.currentPieces.length ){
            this.turn = 0;
        }
        else {
            this.turn++;
        }
    }
    nextPhase(){
        if (this.turnPhase === 2){
            this.turnPhase = 0
            this.nextTurn()
        }
        else{
            this.turnPhase++;
        }
    }
}