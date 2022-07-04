import InitBoard from "./boardInitializer.js"
export default class Game {
    board = []
    updateState
    notifyFalseMove
    NotifyWin
    InitGame(size, updateFunc, falseMoveFunc, winFunc) {
        this.board = InitBoard(size)
        this.updateState = updateFunc
        this.notifyFalseMove = falseMoveFunc
        this.NotifyWin = winFunc
    }
    
    Checkwin(){
        for(var i = 0; i < this.board.length-1; i++){
            if(this.board[i] !== i+1)
            {
                return false
            }
        }
        return true
    }

}