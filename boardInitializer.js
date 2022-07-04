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
    }
    

}