function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noBtn = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${Math.max(20, x)}px`;
    noBtn.style.top = `${Math.max(20, y)}px`;

    // Make Yes button grow bigger each time No is dodged!
    const yesBtn = document.getElementById('yesButton');
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.15}px`;
    yesBtn.style.padding = `${14 * 1.1}px ${32 * 1.1}px`;
}
