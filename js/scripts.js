window.addEventListener("keydown",function(e) {
	var playSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	playSound.currentTime = 0;
	playSound.play();
	if (!playSound) {
		alert("Do you even play bro?!")
	}
});