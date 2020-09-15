window.addEventListener('keydown', function(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   console.log(audio)
   //if there is no audio for key, stop from running all together
   if(!audio) return;
})


