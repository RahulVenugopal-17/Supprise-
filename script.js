function goToPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function openLink(link) {
    window.open(link, '_blank');
}

function showFuture() {
    document.getElementById('futureImage').style.display = 'block';
}

function moveButton() {
    const btn = document.getElementById('yesBtn');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}