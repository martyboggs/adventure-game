class Guy {
	static things = [];
	constructor(x, y) {
		this.constructor.things.push(this);
		this.el = document.createElement('div');
		this.el.className = 'guy';
		translate.appendChild(this.el);
		this.x = Math.floor(Math.random() * 500);
		this.y = Math.floor(Math.random() * 500);
		this.dx = Math.floor(Math.random() * 3 - 1);
		this.dy = Math.floor(Math.random() * 3 - 1);
	}
	update() {
		this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${-r}deg)`;
		this.x += this.dx;
		this.y += this.dy;
	}
	kill() {
		this.things.splice(this.things.indexOf(this), 0);
		translate.removeChild(this.el);
	}
}
