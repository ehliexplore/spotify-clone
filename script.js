const playButton = document.getElementById('playButton');
const music1 = document.getElementById('music-1');

playButton.addEventListener('click', function() {
    const playSymbol = document.getElementById('play-symbol');

    if (music1.paused) {
        music1.play();
        playSymbol.textContent = '▶';
        playSymbol.style.marginLeft = '4px';
    } else {
        music1.pause();
    }
});

