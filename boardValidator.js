export default function Validate(board) {
    var sum = 0;
    for (var i = 0; i < (board.length - 1); i++) {
        for (var j = i + 1; j < board.length; j++) {
            if (board[j] < board[i]) {
                sum++;
            }
        }
    }
    var rows = Math.sqrt(board.length)
    if (rows % 2 != 0) {
        if (sum % 2 == 0) {
            return true
        }
    }
    else {
        if ((sum + rows) % 2 == 0) {
            return true
        }
    }
    return false
}
