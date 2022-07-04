export function SetBoard(gameBoard, onClickFunc) {
    var i = 0
    gameBoard.forEach(box => {
        if (i % Math.sqrt(gameBoard.length) === 0) {
            document.body.appendChild(document.createElement("br"))
        }
        let element = document.createElement("button")
        element.style.height = '100px'
        element.style.width = '100px'
        element.style.verticalAlign = 'top'
        element.id = i
        element.onclick = onClickFunc.bind(element)
        element.innerHTML = box
        document.body.appendChild(element);
        i++;
    });
}
export function InitBoardSize() {
    let inputSize = parseInt(prompt("Enter Board Size: "))
    while (inputSize < 1) {
        inputSize = parseInt(prompt("Size needs to be a positive integer: "))
    }
    var size = Math.pow(inputSize, 2)
    return size
}
export function FailNotify(){
    alert("Illegal Move")
}
export function NotifyWin() {
    alert("YOU WON!!!")
}