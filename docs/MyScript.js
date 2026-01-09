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


// 泡泡隨機螢幕飄動，結束自動重生
function randomBetween(a, b) {
	return a + Math.random() * (b - a);
}

function createFlyingBubble() {
	const bubbles = document.querySelector('.bubbles');
	if (!bubbles) return;
	const bubble = document.createElement('div');
	bubble.className = 'bubble';
	// 泡泡尺寸加大
	const size = randomBetween(80, 180); // 80~180px
	bubble.style.width = size + 'px';
	bubble.style.height = size + 'px';
	bubble.style.opacity = 0.5 + Math.random() * 0.5;

	// 隨機起點與終點（螢幕百分比）
	const startX = randomBetween(0, 100);
	const startY = randomBetween(0, 100);
	const endX = randomBetween(0, 100);
	const endY = randomBetween(0, 100);
	bubble.style.left = startX + 'vw';
	bubble.style.top = startY + 'vh';

	// 動畫時間 2~4 秒
	const duration = randomBetween(2, 6);

	// 使用 Web Animation API
	bubble.animate([
		{ transform: 'translate(0,0)' },
		{ transform: `translate(${(endX-startX)}vw, ${(endY-startY)}vh)` }
	], {
		duration: duration * 1000,
		fill: 'forwards',
		easing: 'linear'
	});

	bubbles.appendChild(bubble);

	// 動畫結束後，直接回到新起點繼續飄，不消失
	function flyAgain() {
		// 設定新起點與終點
		const newStartX = randomBetween(0, 100);
		const newStartY = randomBetween(0, 100);
		const newEndX = randomBetween(0, 100);
		const newEndY = randomBetween(0, 100);
		bubble.style.left = newStartX + 'vw';
		bubble.style.top = newStartY + 'vh';
		const newDuration = randomBetween(2, 4);
		bubble.animate([
			{ transform: 'translate(0,0)' },
			{ transform: `translate(${(newEndX-newStartX)}vw, ${(newEndY-newStartY)}vh)` }
		], {
			duration: newDuration * 1000,
			fill: 'forwards',
			easing: 'linear'
		});
		setTimeout(flyAgain, newDuration * 1000);
	}
	setTimeout(flyAgain, duration * 1000);
}

function initBubbles() {
	for (let i = 0; i < 60; i++) {
		createFlyingBubble();
	}
}

window.addEventListener('DOMContentLoaded', initBubbles);



