let teclas = document.querySelector('.teclas');

teclas.addEventListener('click', (event) => {
    const element = event.target;
    const elementKey = element.attributes.dataKey.value;
    play(elementKey);
});

window.addEventListener('keydown', function (event) {
    let valor = event.keyCode;
    play(valor);
});

function play(val) {
    const audio = document.querySelector(`audio[dataKey="${val}"]`);
    const key = document.querySelector(`.key[dataKey="${val}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play')
    setTimeout(() => {
        key.classList.remove('play');
    }, 100)
}