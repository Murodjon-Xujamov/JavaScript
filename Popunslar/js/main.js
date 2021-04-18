const openi = document.getElementById('openi');
const close = document.getElementById('close');
const container = document.getElementById('container');

openi.addEventListener('click', () =>{
    container.classList.add('active');
});

close.addEventListener('click', () =>{
    container.classList.remove('active');
});