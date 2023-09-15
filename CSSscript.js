const colorBox = document.querySelector('.color-box');
const colorCode = document.querySelector('.color-code');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', generateColor);
copyBtn.addEventListener('click', copyColorCode);

function generateColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copyColorCode() {
    const textArea = document.createElement('textarea');
    textArea.value = colorCode.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to clipboard!');
}
