import Game from "./GameLogic.js"
import { FailNotify, NotifyWin } from "./view.js"
import { InitBoardSize } from "./view.js"
import {SetBoard} from "./view.js"
import UpdateBoard from "./view.js"

var getSchwifty = new Game()
var boardSize = InitBoardSize()

getSchwifty.InitGame(boardSize, UpdateBoard, FailNotify, NotifyWin)
SetBoard(getSchwifty.board, buttonClick)

function buttonClick() {
    getSchwifty.MakeAMove(this.id)
}

