// Zoom elem news
let newsRight = document.querySelector('.blog__content-right')
let newsLeft = document.querySelector('.blog__content-left')
let arrNews = []
arrNews.push(newsRight, newsLeft)

function ZoomImageArray(itemList) {   // увеличивает массив
	for (let i = 0; i < itemList.length; i++) {
		ZoomImage(itemList[i]);
	}
}

function ZoomImage(elementImage) {  // увеличивает при наведении
	elementImage.addEventListener('mouseover', function () {
		elementImage.style.scale = 1.1;
	});

	elementImage.addEventListener('mouseout', function () {
		elementImage.style.scale = 1;
	});
}
ZoomImageArray(arrNews)

// Появление и исчезание блоков
let observer = new IntersectionObserver(function (entries, observer) {

	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			setTimeout(function () {
				// add the class that triggers the animation
				entry.target.classList.add('element-show');
				
			}, 100);
			entry.target.classList.remove('element-show')
		}
	});
}, );

let observer2 = new IntersectionObserver(function (entries, observer) {

	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			setTimeout(function () {
				// add the class that triggers the animation
				entry.target.classList.add('element-show');
				
			}, 1000);
			entry.target.classList.remove('element-show')
		}
	});
}, );

let elementNews1 = document.querySelector('.blog__content-left');
let elementNews2 = document.querySelector('.blog__content-right');
observer.observe(elementNews1);
observer2.observe(elementNews2);
