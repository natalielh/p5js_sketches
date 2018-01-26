/*
	utility functions for p5.js sketches using the p5.js library
*/

function keyPressed(){
	switch(keyCode){

	//SAVE A SCREENSHOT
	case 79: //keyCode 79 is 'o' on keyboard (NOT ZERO)
		saveCanvas();
		break;

	// //DEACTIVATE FULLSCREEN MODE
	// case 27: //keyCode 27 is 'escape' on keyboard
	// fullScreen(false);
	// document.exitFullscreen();
	// break;

	//RELOAD THE PAGE
	case 32: //keyCode 32 is 'SPACEBAR' on keyboard
	case 82: //keyCode 82 is 'r' on keycoard
		window.location.reload(false); 
		// If we needed to pull the document from
		// the web-server again (such as where the document contents
		// change dynamically) we would pass the argument as 'true'.
		break;

	//IF THE KEY PRESSED DOESN'T MATCH ANY OF THE ABOVE:
	default: 
		return false;
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
