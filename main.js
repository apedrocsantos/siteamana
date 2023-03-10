
/** @format */

const imagediv = document.getElementById('image-div');
const image = document.getElementById('image-section');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRight = document.querySelector('.fa-arrow-right');

const LargeImagesName = [
	'Anatema_AS_1-1280x720',
	'Anatema_AS_2-1280x1920',
	'Anatema_AS_3-1280x853',
	'Anatema_AS_4_1100x1650',
	'Anatema_AS_5_-1280x853',
	'Anatema_AS_6-1280x853',
	'Anatema_AS_7_-1280x1920',
	'Anatema_AS_8_-1280x853',
	'Anatema_AS_9_-1280x1920',
	'Anatema_AS_10-1100x1650',
];

let index = 1;

try {
	imagediv.addEventListener('click', (e) => {
		if (e.x < (e.target.clientWidth)/2) {
			index--;
			if (index === 0) {
				index = LargeImagesName.length;
			}
		} else {
			index++;
			if (index === LargeImagesName.length + 1) {
				index = 1;
			}
		}
		image.src = `../resources/anatema/${LargeImagesName[index - 1]}.jpg`;
	});

	arrowLeft.addEventListener('click', (e) => {
		console.log('left');
		index--;
		if (index === 0) {
			index = LargeImagesName.length;
		}
		image.src = `../resources/anatema/${LargeImagesName[index - 1]}.jpg`;
	});

	arrowRight.addEventListener('click', (e) => {
		console.log('right');
		index++;
		if (index === LargeImagesName.length + 1) {
			index = 1;
		}
		image.src = `../resources/anatema/${LargeImagesName[index - 1]}.jpg`;
	});

	document.body.addEventListener('keydown', (e) => {
		if(e.key === 'ArrowLeft') {
			index--;
		if (index === 0) {
			index = LargeImagesName.length;
		}
		image.src = `../resources/anatema/${LargeImagesName[index - 1]}.jpg`;
		}
		else if (e.key === 'ArrowRight') {
			index++;
		if (index === LargeImagesName.length + 1) {
			index = 1;
		}
		image.src = `../resources/anatema/${LargeImagesName[index - 1]}.jpg`;
		}
	});

} catch (error) {
	console.log(error);
}


//MENU
let visible = false;

try {
	menuBtn.addEventListener('click', () => {
		if (!visible) {
			menu.style.top = '50px';
			menuBtn.style.fontStyle = 'italic';
			visible = true;
		} else {
			menu.style.top = '-500px';
			menuBtn.style.fontStyle = 'normal';
			visible = false;
		}
	});

	document.addEventListener('click', (e) => {
		if(e.target.classList.value != "menu-btn") {
			if(visible) {
				menu.style.top = '-500px';
				menuBtn.style.fontStyle = 'normal';
				visible = false;
			} else {
			menu.style.top = '-500px';
			menuBtn.style.fontStyle = 'normal';
			visible = false;
			}
		}
	})

} catch (error) {
	console.log(error);
}

// DOMContentLoaded
// load event