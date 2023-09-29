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

