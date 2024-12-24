import { gsap } from 'https://cdn.skypack.dev/gsap';
import { Expo, Power1, Quint } from 'https://cdn.skypack.dev/gsap/all';
import imagesLoaded from 'https://cdn.skypack.dev/imagesloaded';

const body = document.body;
const MathUtils = {
lerp: (a, b, n) => (1 - n) * a + n * b,
distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
};

let mousePos = { x: 0, y: 0 };
let cacheMousePos = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
var content2 = document.querySelector('.hello');
content2.addEventListener('mousemove', ev => {
let posx = 0;
let posy = 0;
if (!ev) ev = content2.event;
if (ev.pageX || ev.pageY) {
posx = ev.pageX;
posy = ev.pageY;
} else if (ev.clientX || ev.clientY) {
posx = ev.clientX + body.scrollLeft + document.documentElement.scrollLeft;
posy = ev.clientY + body.scrollTop + document.documentElement.scrollTop;
}
mousePos = { x: posx, y: posy };
});

class Image {
constructor(el) {
this.DOM = { el: el };
this.defaultStyle = { x: 0, y: 0, opacity: 0 };
this.getRect();
this.initEvents();
}

initEvents() {
content2.addEventListener('resize', () => this.resize());
}

resize() {
gsap.set(this.DOM.el, this.defaultStyle);
this.getRect();
}

getRect() {
this.rect = this.DOM.el.getBoundingClientRect();
}

isActive() {
return gsap.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
}
}

class ImageTrail {
constructor() {
this.DOM = { content: document.querySelector('.content2') };
this.images = [...this.DOM.content.querySelectorAll('img')].map(img => new Image(img));
this.imagesTotal = this.images.length;
this.imgPosition = 0;
this.zIndexVal = 1;
this.threshold = 100;
requestAnimationFrame(() => this.render());
}

render() {
let distance = MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

if (distance > this.threshold) {
this.showNextImage();
this.zIndexVal++;
this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
lastMousePos = mousePos;
}

let isIdle = true;
for (let img of this.images) {
if (img.isActive()) {
isIdle = false;
break;
}
}
if (isIdle && this.zIndexVal !== 1) {
this.zIndexVal = 1;
}

requestAnimationFrame(() => this.render());
}

showNextImage() {
const img = this.images[this.imgPosition];
gsap.killTweensOf(img.DOM.el);
var tl = gsap.timeline()
.set(img.DOM.el, {
startAt: { opacity: 0 },
opacity: 1,
scale: 1,
zIndex: this.zIndexVal,
x: cacheMousePos.x - img.rect.width / 2,
y: cacheMousePos.y - img.rect.height / 2
}, 0)
.to(img.DOM.el, 1.8, {
ease: Expo.easeOut,
x: mousePos.x - img.rect.width / 2,
y: mousePos.y - img.rect.height / 2
}, 0)
.to(img.DOM.el, 0.8, {
ease: Power1.easeOut,
opacity: 0
}, 0.8)
.to(img.DOM.el, 0.8, {
ease: Quint.easeInOut,
scale: 2
}, 0.8);
}
}

const preloadImages = () => {
return new Promise((resolve) => {
imagesLoaded(document.querySelectorAll('.content__img'), resolve);
});
};

preloadImages().then(() => {
document.body.classList.remove('loading');
new ImageTrail();
});
