window.addEventListener('keydown', function(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   console.log(key)
   //if there is no audio for key, stop from running all together
   if(!audio) return;
   //rewind the soud to the start right away
   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
})

function removeTransition() {
   return this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

