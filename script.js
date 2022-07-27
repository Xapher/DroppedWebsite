var slideshow;
var timer = 0.0;
var slideshowImages = ["Assets\\images\\home_church_scroll1.jpg","Assets\\images\\IMG_6717-resized-image-635x250.jpg","Assets\\images\\purity_banquet1-resized-image-635x250.jpg","Assets\\images\\serve_11.jpg","Assets\\images\\Gathering.jpg","Assets\\images\\wedding1.jpg","Assets\\images\\youth_11.jpg","Assets\\images\\easter_egg_11.jpg","Assets\\images\\fuge_11.jpg"];
var windowWidth;
var MainImageIndex = 0;
var NextImage;
var containerWidth;
var slideshowWindowFocused;
function startSlide() {
	LeftImage = document.getElementById('backImage1');
	RightImage = document.getElementById('backImage2');
	MainImage = document.getElementById('mainImage');
	NextImage = document.getElementById('nextImage');
	setSources();
	ss = document.getElementById('slideShowSelection');
	changeButtons();


	
	MainImage.style = "height:inherit;";

	windowWidth = document.body.clientWidth;
	containerWidth = windowWidth * .8;
	difference = windowWidth - containerWidth;
	MainImage.style = "left: " + ((windowWidth / 2) - (MainImage.width / 2)) + "px; z-index:30;height:inherit;";
	RightImage.style = "left: " + ((windowWidth / 2) + (MainImage.width / 2)) + "px; z-index:10;height:inherit;opacity:0.35;";
	LeftImage.style = "left:" + (45 - (MainImage.width / 2)) + "px;z-index:2;height:inherit;opacity:0.35";
	
	NextImage.style = "left: " + ((windowWidth) + (MainImage.width / 2)) + "px; z-index:30;z-index:5;height:inherit;";
	MainImage.onclick = function changePage() {
			window.location = "homechurch.html";
	};
	MainImage.style.cursor = "pointer";
	slideshowWindowFocused = setInterval(function(){slides(LeftImage, RightImage, MainImage, NextImage)}, 5500);
}

function slides(li, ri, mi, ni) {
	windowWidth = document.body.clientWidth;
	MainImage.onclick = "";
	if(MainImageIndex + 1 == slideshowImages.length)
		{
			MainImageIndex = 0;
		}
		else
		{
			MainImageIndex++;
		}
	slideshow = setInterval(function () {changeSlides(li, ri, mi, ni);}, 0);
	changeButtons();
}

function changeSlides(li, ri, mi, ni) {
	if(timer >= 1)
	{
		timer = 0;
		turnRight(li,ri,mi);
	}
		timer = timer + 0.001;
		ri.style = "left: " + ((windowWidth / 2) + (MainImage.width / 2) - ((MainImage.width) * timer)) + "px; z-index:10;height:inherit;opacity: " + (1 * timer + 0.35) + ";";
		mi.style = "left: " + ((windowWidth / 2) - (MainImage.width / 2) - (MainImage.width * timer)) + "px; z-index:30;height:inherit;opacity:" + (1 * (1 - timer) + 0.35) + ";";
		li.style = "left:" + (45 - (MainImage.width / 2) - (MainImage.width * timer)) + "px;z-index:2;height:inherit;opacity:0.35;";
		ni.style = "left: " + ((windowWidth) + (MainImage.width / 2) - 45 - (MainImage.width * timer)) + "px; z-index:30;z-index:5;height:inherit;opacity:0.35;";
	
	










	//OLD
	// if(timer > .5)
	// {
	// 	ri.style = "left: " + ((windowWidth / 2) - ((containerWidth * mw) / 2 * timer)) + "px; z-index:10;margin-top:" + (25 - (25 * timer)) + "px;z-index:30;width:" + ((containerWidth * iw) + (((containerWidth * mw) - (containerWidth * iw)) * timer)) + "px;";
	// 	li.style = "left: " + ((windowWidth / 2 - (containerWidth * iw)) + ((difference) * timer)) + "px;z-index:2;margin-top:25px;width:" + containerWidth * iw + "px;";
	// 	lmdifference = (windowWidth / 2 - (containerWidth * mw / 2)) - (windowWidth / 2 - (containerWidth * iw));
	// 	mi.style = "left: " + ((windowWidth / 2 - (containerWidth * mw / 2)) - (lmdifference * timer)) + "px; z-index:30;margin-top:" + (25 * timer) + "px;z-index:10;width:" + ((containerWidth * mw) - (((containerWidth * mw) - (containerWidth * iw)) * timer)) + "px;";
	// 	ni.style = "left: " + (((windowWidth / 2) - (RightImage.width / 2)) + (difference * timer)) + "px; z-index:30;z-index:5;margin-top:25px;width:" + containerWidth * iw + "px;";
	// }
	// else
	// {
	// 	ri.style = "left: " + ((windowWidth / 2) - ((containerWidth * mw) / 2 * timer)) + "px; z-index:10;margin-top:" + (25 - (25 * timer)) + "px;width:" + ((containerWidth * iw) + (((containerWidth * mw) - (containerWidth * iw)) * timer)) + "px;";
	// 	li.style = "left: " + ((windowWidth / 2 - (containerWidth * iw)) + ((difference) * timer)) + "px;z-index:10;margin-top:25px;z-index:0;width:" + containerWidth * iw + "px;";
	// 	lmdifference = (windowWidth / 2 - (containerWidth * mw / 2)) - (windowWidth / 2 - (containerWidth * iw));
	// 	mi.style = "left: " + ((windowWidth / 2 - (containerWidth * mw / 2)) - (lmdifference * timer)) + "px; z-index:30;margin-top:" + (25 * timer) + "px;z-index:30;width:" + ((containerWidth * mw) - (((containerWidth * mw) - (containerWidth * iw)) * timer)) + "px;";
	// 	ni.style = "left: " + (((windowWidth / 2) - (RightImage.width / 2)) + (difference * timer)) + "px; z-index:30;z-index:5;margin-top:25px;width:" + containerWidth * iw + "px;";
	// }

	if(timer >= 1)
	{
		clearInterval(slideshow);
		clearInterval(slideshowWindowFocused);
		slideshowWindowFocused = setInterval(function(){slides(LeftImage, RightImage, MainImage, NextImage)}, 5500);
		if (MainImageIndex == 0 || MainImageIndex == 4) {
			ri.style.cursor = "pointer";
		}
		RightImage.onclick = function changePage() {
			if (MainImageIndex == 0) {
				window.location = "homechurch.html";
			}
			else if (MainImageIndex == 4) {
				window.location = "gathering.html";
			}
		};
	}
}
function turnRight(li, ri, mi) {
	li.src = mi.src;
	mi.src = ri.src;
	ri.src = NextImage.src;
	if(MainImageIndex + 1 > slideshowImages.length - 1)
	{
		NextImage.src = slideshowImages[slideshowImages.length - (MainImageIndex + 1)];
	}
	else
	{
		NextImage.src = slideshowImages[MainImageIndex + 1];
	}
}

function turnLeft() {
	MainImage.style = "left: " + ((windowWidth / 2) - (MainImage.width / 2)) + "px; z-index:30;height:inherit;";
	RightImage.style = "left: " + ((windowWidth / 2) + (MainImage.width / 2)) + "px; z-index:10;height:inherit;opacity:0.35;";
	LeftImage.style = "left:" + (45 - (MainImage.width / 2)) + "px;z-index:2;height:inherit;opacity:0.35";
	NextImage.style = "left: " + ((windowWidth) + (MainImage.width / 2)) + "px; z-index:30;z-index:5;height:inherit;";
}


function resize() {
	windowWidth = document.body.clientWidth;
	RightImage.style = "left: " + ((windowWidth / 2) + (MainImage.width / 2) - ((MainImage.width) * timer)) + "px; z-index:10;height:inherit;opacity: " + (1 * timer + 0.35) + ";";
	MainImage.style = "left: " + ((windowWidth / 2) - (MainImage.width / 2) - (MainImage.width * timer)) + "px; z-index:30;height:inherit;opacity:" + (1 * (1 - timer) + 0.35) + ";";
	LeftImage.style = "left:" + (45 - (MainImage.width / 2) - (MainImage.width * timer)) + "px;z-index:2;height:inherit;opacity:0.35;";
	NextImage.style = "left: " + ((windowWidth) + (MainImage.width / 2) - 45 - (MainImage.width * timer)) + "px; z-index:30;z-index:5;height:inherit;opacity:0.35;";
}

function StopSlideShow() {
	clearInterval(slideshowWindowFocused);
}

function SlideShowBackUp()
{
	slideshowWindowFocused = setInterval(function(){slides(LeftImage, RightImage, MainImage, NextImage)}, 5500);
}

function expand(argument) {
	element = document.getElementById(argument);
	className = element.className;
	if(className == "activeDate")
	{
		element.className = "inactiveDate";
	}
	else
	{
		element.className = "activeDate";
	}
}

function changeSlidesNum(argument) {
	clearInterval(slideshow);
	clearInterval(slideshowWindowFocused);
	timer = 0;
	if (argument == MainImageIndex + 1) {
		slides(LeftImage, RightImage, MainImage, NextImage);
	}
	else if (argument == MainImageIndex - 1) {
		turnLeft();
		MainImageIndex--;
		setSources();
	}
	else
	{
		turnLeft();
		MainImageIndex = argument;
		setSources();
	}
	changeButtons();
	slideshowWindowFocused = setInterval(function(){slides(LeftImage, RightImage, MainImage, NextImage)}, 5500);
}

function setSources() {
	MainImage.src = slideshowImages[MainImageIndex];



	if(MainImageIndex - 1 < 0)
	{
		LeftImage.src = slideshowImages[slideshowImages.length + (MainImageIndex - 1)];
	}
	else
	{
		LeftImage.src = slideshowImages[MainImageIndex - 1];
	}




	if(MainImageIndex + 1 > slideshowImages.length)
	{
		RightImage.src = slideshowImages[(MainImageIndex + 1) - slideshowImages.length];
	}
	else
	{
		RightImage.src = slideshowImages[MainImageIndex + 1];
	}


	if(MainImageIndex + 2 > slideshowImages.length - 1)
	{
		NextImage.src = slideshowImages[slideshowImages.length - (MainImageIndex + 2)];
	}
	else
	{
		NextImage.src = slideshowImages[MainImageIndex + 2];
	}
	
}

function changeButtons() {
	ss.innerHTML = "";
	for (var i = 0; i < slideshowImages.length; i++) {
		if(i == MainImageIndex)
		{
			ss.innerHTML = ss.innerHTML + "<button class=\"ssb\">&#9679;</button>";
		}
		else
		{
			ss.innerHTML = ss.innerHTML + "<button class=\"ssb\" onclick=\"changeSlidesNum(" + i + ")\">&#9675;</button>";
		}
	}
}
