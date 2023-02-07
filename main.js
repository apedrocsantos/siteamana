
/** @format */

const imagediv = document.getElementById('image-div');
const image = document.getElementById('image-section');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const tLeft = document.querySelector('.t-left');
const tRight = document.querySelector('.t-right');

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
		if (e.x < 665) {
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
		image.src = `/resources/anatema/${LargeImagesName[index - 1]}.jpg`;
		console.log(LargeImagesName[index - 1]);
	});
	tLeft.addEventListener('click', (e) => {
		index--;
		if (index === 0) {
			index = LargeImagesName.length;
		}
		image.src = `/resources/anatema/${LargeImagesName[index - 1]}.jpg`;
	});
	tRight.addEventListener('click', (e) => {
		index++;
		if (index === LargeImagesName.length + 1) {
			index = 1;
		}
		image.src = `/resources/anatema/${LargeImagesName[index - 1]}.jpg`;
	});
} catch (error) {
	console.log(error);
}

// function pictureNav(e) {
// 	if (e.x < 665) {
// 		index--;
// 		if (index === 0) {
// 			index = LargeImagesName.length;
// 		}
// 	} else {
// 		index++;
// 		if (index === LargeImagesName.length + 1) {
// 			index = 1;
// 		}
// 	}
// 	image.src = `/resources/anatema/${LargeImagesName[index - 1]}.jpg`;
// 	console.log(LargeImagesName[index - 1]);
// }

let visible = false;

console.log(menu);

try {
	menuBtn.addEventListener('click', () => {
		// e.preventDefault();
		if (!visible) {
			menu.style.left = '0';
			menuBtn.style.fontStyle = 'italic';
			visible = true;
			// setTimeout(() => {
			// 	menu.style.left = '-300px';
			// 	menuBtn.style.fontStyle = 'normal';
			// 	visible = false;
			// }, 5000);
		} else {
			menu.style.left = '-300px';
			menuBtn.style.fontStyle = 'normal';
			visible = false;
		}
	});
} catch (error) {
	console.log(error);
}

// DOMContentLoaded
// load event

// main[0].addEventListener('DOMContentLoaded', () => {
// 	console.log('loaded');
// })
