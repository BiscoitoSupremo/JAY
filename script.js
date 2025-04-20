function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';
}

function rolarDado() {
    const resultado = Math.floor(Math.random() * 20) + 1;
    const diceResultElement = document.getElementById('dice-result');
    const diceIcon = document.getElementById('dice-icon');
    
    diceResultElement.innerHTML = `: ${resultado}`;
    diceResultElement.style.opacity = 1;
    
    diceIcon.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        diceIcon.style.transform = 'rotate(0deg)';
    }, 300); 
}

function alternarModo() {
    document.body.classList.toggle('light-mode');
}
