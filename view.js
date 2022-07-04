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
export function FailNotify(){
    alert("Illegal Move")
}
export function NotifyWin() {
    alert("YOU WON!!!")
}