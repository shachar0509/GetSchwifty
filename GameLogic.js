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
    MakeAMove(id) {
        var index = Number(id)
        var avaliableIndexes = []
        var rows = Math.sqrt(this.board.length)
        var success = false
        if (index < this.board.length - rows) {
            avaliableIndexes.push(index + rows)
        
        }
        if (index >= rows && success === false) {
            avaliableIndexes.push(index - rows)
        }
        if (index % rows > 0 && success === false) {
            avaliableIndexes.push(index - 1)

        }
        if (index % rows < rows - 1 && success === false) {
            avaliableIndexes.push(index + 1)
        }
        avaliableIndexes.forEach(i => {
            if(this.board[i] === "")
            {
                this.board[i] = this.board[index]
                this.board[index] = ""
                success = true
            }
        });
        if (success == true) {
            this.updateState(this.board)
            if(this.Checkwin() === true)
            {
                setTimeout(this.NotifyWin, 500)
            }
        }
        else {
            this.notifyFalseMove()
        }
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