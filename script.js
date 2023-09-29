const gameboard = (() =>{

    const board = ['', '', '', '', '', '', '', '', ''];
    
    const gameBoard = document.querySelector('[data-type="gameboard"]')
    board.forEach(element => {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.setAttribute('data-type', 'cell');
        cell.innerHTML = element;
        gameBoard.appendChild(cell);
    })
    
    const cell = document.querySelectorAll('[data-type="cell"]');
    return {cell};
})()

const game = (() => {
    gameboard.cell.forEach(element => {
        element.addEventListener('click', function(){
            let nextTurn = 'X';
            function changeTurn(){
                if (nextTurn === 'X'){
                    nextTurn = 'O';
                } else if (nextTurn === 'O'){
                    nextTurn = 'X';
                }
            };

            if (element.innerHTML === ''){
                element.innerHTML = nextTurn;
                changeTurn();
            };
        })
    })
})()