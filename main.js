
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   
    //if the adio doesn't exist, exit 
    if (!audio) return;
    //otherwise play audio and mke sure it starts from beginning every time user clickes the key
    audio.currentTime = 0;
    audio.play();
    //add the class to key
    key.classList.add('playing');
}

function removeTransition(e) {
    //if key doesn't have a property (in CSS), return right away
     if(e.propertyName !== 'transform') return;
    // otherwise remove that class 
     this.classList.remove('playing');
}
//select all keys
const keys = document.querySelectorAll('.key');
//loop through them and add event
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
//to the window add event listener on key dowm and callback function
window.addEventListener('keydown', playSound)