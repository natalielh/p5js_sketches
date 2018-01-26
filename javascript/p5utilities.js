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
	// 	fullScreen(false);
	// 	document.exitFullscreen();
	// 	break;

	//IF THE KEY PRESSED DOESN'T MATCH ANY OF THE ABOVE:
	default: 
		return false;
	}
}
