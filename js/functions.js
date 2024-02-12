
document.addEventListener('DOMContentLoaded', function() {
    const diceImage = document.querySelector('#dice img');
    
    diceImage.addEventListener('click', function() {
        let random = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `./img/${random}.png`;
    });
});