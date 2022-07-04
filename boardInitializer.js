import Validate from "./boardValidator.js"
export default function InitBoard(sizes) {
    function GenerateBoard(size) {
        var tempBoard = []
        function enterElement(value) {
            function getRandomInt() {
                var rand = Math.floor(Math.random() * size)
                return rand
            };
            var i = getRandomInt()
            while (tempBoard[i] != "") {
                i = getRandomInt()
            }
            tempBoard[i] = value
        };
        for (var i = 0; i < size; i++) {
            tempBoard.push("")
        }
        for (let i = 1; i < size; i++) {
            enterElement(i)
        }
        return tempBoard
    }
    

}