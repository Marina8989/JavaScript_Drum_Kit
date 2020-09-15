// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
//     //if there is no audio for key, stop from running all together
//     if (!audio) return;
//     //rewind the soud to the start right away
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
// }

// function removeTransition(e) {
//     //if it is not a transform, skip it
//     if(e.propertyName !== 'transform') return;
//     //otherwise remove the property
//     this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);







function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio)
    console.log(key)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e) {
     if(e.propertyName !== 'transform') return;
     this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)