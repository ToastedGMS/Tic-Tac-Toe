const gameboard = (() =>{
    
    const cells = document.querySelectorAll('[data-type="cell"]')
    cells.forEach(element => {
        element.addEventListener('click', function(){
            if (element.style.backgroundColor === '') {
            element.style.backgroundColor = 'black';
        } else if (element.style.backgroundColor === 'black') {
            element.style.backgroundColor = '';
        }})
    });
})()