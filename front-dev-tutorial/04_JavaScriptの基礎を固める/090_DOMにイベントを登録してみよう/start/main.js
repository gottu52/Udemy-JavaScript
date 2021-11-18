const btn = document.querySelector('#btn');
const title = document.querySelector('#main-title');

const changeColor = () => {
    title.style.color = 'blue';
}
const changeBgColor = () => {
    title.style.backgroundColor = 'green';
}

btn.addEventListener('click',  changeColor);
// btn.addEventListener('click',  changeBgColor);

// btn.onclick = changeColor;
// btn.onclick = changeBgColor;
// btn.removeEventListener('click',  hello);