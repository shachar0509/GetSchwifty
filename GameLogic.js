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
    

}