function f1() {
	const el = document.getElementById("e1");
	el.innerHTML = (el.innerHTML === "HTML5+CSS+JS") ? "Hello HTML!" : "HTML5+CSS+JS";
}

function f2() {
	document.getElementById("e2").innerHTML = "文化大學";
}

function f3() {
	document.getElementById("e3").innerHTML = "goooooooooooooooooood!";
}

// 固定產生30顆泡泡，隨機飄動
function randomBetween(a, b) {
	return a + Math.random() * (b - a);
}

function createStaticBubble() {
	const bubbles = document.querySelector('.bubbles');
	if (!bubbles) return;
	const bubble = document.createElement('div');
	bubble.className = 'bubble';
	const size = randomBetween(40, 100);
	bubble.style.width = size + 'px';
	bubble.style.height = size + 'px';
	bubble.style.left = randomBetween(0, 100) + 'vw';
	bubble.style.top = randomBetween(0, 100) + 'vh';
	bubble.style.opacity = 0.5 + Math.random() * 0.5;
	// 自訂動畫參數
	const dx = randomBetween(-30, 30); // 水平偏移
	const dy = randomBetween(-30, 30); // 垂直偏移
	const duration = randomBetween(3, 7); // 飄動時間（更快）
	bubble.animate([
		{ transform: 'translate(0,0)' },
		{ transform: `translate(${dx}px, ${dy}px)` }
	], {
		duration: duration * 1000,
		direction: 'alternate',
		iterations: Infinity,
		easing: 'ease-in-out'
	});
	bubbles.appendChild(bubble);
}

function initBubbles() {
	for (let i = 0; i < 30; i++) {
		createStaticBubble();
	}
}

window.addEventListener('DOMContentLoaded', initBubbles);



