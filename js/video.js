var video = document.querySelector('#player1');
var volume = document.querySelector('#volume');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = video.volume * 100 + "%";
	video.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95;
	console.log('New speed is',video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.95;
	console.log('New speed is',video.playbackRate);
});
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add('oldSchool');
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove CSS");
	video.classList.remove('oldSchool');
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip to",video.currentTime);
	video.currentTime +=15;
	if (video.currentTime>=video.duration){
		video.currentTime =0
		console.log("Back to beginning");
		video.play();
	}
	console.log("New location",video.currentTime);
	video.play();
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});
document.querySelector("#slider").addEventListener("click", function() {
	console.log('Changing volume');
	console.log(this.value);
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});
