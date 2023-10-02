const gameboard = (() =>{

    const board = ['', '', '', '', '', '', '', '', ''];
    let nextTurn = 'X';
    
    const gameBoard = document.querySelector('[data-type="gameboard"]')
    board.forEach((element, index) => {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.setAttribute('data-type', 'cell');
        cell.setAttribute('data-index', index)
        cell.innerHTML = element;
        gameBoard.appendChild(cell);
    
    document.querySelectorAll('[data-type="cell"]').forEach(element => {
        element.addEventListener('click', function(){
            function changeTurn(){
                if (nextTurn === 'X'){
                    nextTurn = 'O';
                } else if (nextTurn === 'O'){
                    nextTurn = 'X';
                }
            };

            if (element.innerHTML === ''){
                element.innerHTML = nextTurn;
                board[index] = nextTurn;
                changeTurn();
            };
        })
    })
})
return {board};
})()

function checkWinner(){
    let a = gameboard.board.slice(0,3)
    let b = gameboard.board.slice(3,6)
    let c = gameboard.board.slice(6)
    let d = [];
    let e = [];
    d.push(gameboard.board[0], gameboard.board[4], gameboard.board[8]);
    e.push(gameboard.board[2], gameboard.board[4], gameboard.board[6]);

    return {a,b,c,d,e};
};

function checkArr(arr, string){
    if (arr[0] === string &&
        arr[1] === string &&
        arr[2] === string){
            return `${string} wins`
        } else return 'nigger'
};

const game =(() => {
})()