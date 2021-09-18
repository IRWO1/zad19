const setBackground = () => {
    let p1 = document.querySelector('.p1');
    p1.style.background = 'red';
    let p2 = document.querySelector('.p2');
    p2.style.background = 'yellow';    
}

let button = document.querySelector('button');

button.addEventListener('click', setBackground);