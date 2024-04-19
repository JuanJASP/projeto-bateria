document.body.addEventListener('keyup', (evento) => {
    playSound(evento.code.toLowerCase());
});
document.querySelector('.composer button').addEventListener('click', ()=>{
    const song = document.querySelector('#input').ariaValueMax;
    if(song !== ''){
        const songArray = song.split('');
        playComposition(songArray);
    }
});


function playSound(sound){
    const audioElement = document.querySelector(`#s_${sound}`);
    const keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }
}

function playComposition(songArray){
    const wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{

        },wait);
        wait += 250;
        playSound(`key${songItem}`);
    }
}