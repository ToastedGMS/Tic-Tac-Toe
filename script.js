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

const game = (() => {
    let counter = 0;
    document.querySelector('[data-type="gameboard"]').addEventListener('click', function(){
        counter += 1;
            
        function arrFactory(a, b, c){
                let arr = [];
                arr.push(a, b, c);
                return arr;
        };
        
            let board = gameboard.board;
        
            let a = arrFactory(board[0], board[1], board[2]);
            let b = arrFactory(board[3], board[4], board[5]);
            let c = arrFactory(board[6], board[7], board[8]);
            let d = arrFactory(board[0], board[3], board[6]);
            let e = arrFactory(board[1], board[4], board[7]);
            let f = arrFactory(board[2], board[5], board[8]);
            let g = arrFactory(board[0], board[4], board[8]);
            let h = arrFactory(board[2], board[4], board[6]);
            
        function findWinner(arr){
            if (arr[0] === arr[1] &&
                arr[1] === arr[2]){
                    return `${arr[0]} wins`} 
            else return 'no win detected'
        };
        
            let arr1 = [a,b,c,d,e,f,g,h];
        
            const results = arr1.map(array => findWinner(array));
            
        function printWinner(){
            if (results.includes('X wins')){
                return 'X wins'
            } else if (results.includes('O wins')){
                return 'O wins'
            } else return 'It\'s a tie'
        };


        if (printWinner() === `X wins`){
                alert( `${players.player1.name} wins`)}
        else if (printWinner() === `O wins`){
            alert( `${players.player2.name} wins`)}
        else if (counter === 9){
                alert(printWinner())}
    
    })

})();

const input2player = () => {
    let player1 = playerFactory(prompt('Insert Player 1 name'));
    let player2 = playerFactory(prompt('Insert Player 2 name'));

    return {player1, player2}
}

const players = input2player();
function playerFactory(name) {return {name}};

let btn = document.querySelector('[data-type="btn"]');
btn.addEventListener('click', function(){
    location.reload()
})