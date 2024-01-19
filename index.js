const rockBtn = document.querySelector('#rock-btn-js')
const scissorsBtn = document.querySelector('#scissors-btn-js')
const paperBtn = document.querySelector('#paper-btn-js')
const computerPlayer = document.querySelector('#computer-image-js')

let user = document.querySelector('#user-image-js')
let computer = document.querySelector('#computer-image-js')

let userCounter = document.querySelector('#user-counter-js')
let computerCounter = document.querySelector('#computer-counter-js')

let userCount = 0
let computerCount = 0

rockBtn.addEventListener('click', () => {
    user.src = "img/rock2.png";
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        computer.src = "img/rock2.png";
    } else if (randomNumber == 1) {
        computer.src = "img/scissors3.png"
        userCounter.textContent = ++userCount;
    } else if (randomNumber == 2) {
        computer.src = "img/paper1.png";
        computerCounter.textContent = ++computerCount;
    }
})

scissorsBtn.addEventListener('click', () => {
    user.src = "img/scissors3.png";
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 0) {
        computer.src = "img/rock2.png";
        computerCounter.textContent = ++computerCount;
    } else if (randomNumber == 1) {
        computer.src = "img/scissors3.png"
    } else if (randomNumber == 2) {
        computer.src = "img/paper1.png";
        userCounter.textContent = ++userCount;
    }
})

paperBtn.addEventListener('click', () => {
    user.src = "img/paper1.png";
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 0) {
        computer.src = "img/rock2.png";
        userCounter.textContent = ++userCount;
    } else if (randomNumber == 1) {
        computer.src = "img/scissors3.png"
        computerCounter.textContent = ++computerCount;
    } else if (randomNumber == 2) {
        computer.src = "img/paper1.png";
    }
})