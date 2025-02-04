
let noClickCount = 0;

function askConfirmation() {
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('confirmation-page').style.display = 'block';
}

function showYayPage() {
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('confirmation-page').style.display = 'none';
    document.getElementById('sad-gif').style.display = 'none';
    document.getElementById('yay-page').style.display = 'block';
}

function handleNoClick() {
    noClickCount++;
    if (noClickCount > 3) {
        document.getElementById('initial-page').style.display = 'none';
        document.getElementById('confirmation-page').style.display = 'none';
        document.getElementById('yay-page').style.display = 'none';
        document.getElementById('sad-gif').style.display = 'block';
    } else {
        moveButton();
    }
}

function moveButton() {
    const noButton = document.querySelector('.no');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}