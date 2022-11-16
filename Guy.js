class Guy {
	static things = [];
	constructor(x, y) {
		this.constructor.things.push(this);
		this.el = document.createElement('div');
		this.el.className = 'guy';
		translate.appendChild(this.el);
		this.x = x;
		this.y = y;
		this.speed = Math.floor(Math.random()) + 1;
		this.action = 'chasing'; // lunging
		this.angle = 0;
	}
	update() {
		this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${-angle}deg)`;
		if (this.action === 'chasing') {
			this.angle = Math.atan2(x + 250 - this.x, y + 250 - this.y);
			this.x += this.speed * Math.sin(this.angle);
			this.y += this.speed * Math.cos(this.angle);
			if (Math.abs(x + 250 - this.x) < 20 && Math.abs(y + 250 - this.y) < 20) {
				this.action = 'lunging';
			}
		} else if (this.action === 'lunging') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${this.angle * 180 / Math.PI}deg) rotateX(-50deg)`;
			this.frame = frame;
			this.action = 'lunged';
		} else if (this.action === 'lunged') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${this.angle * 180 / Math.PI}deg) rotateX(-50deg)`;
			if (frame - this.frame === 400) {
				this.action = 'chasing';
			}
		}
	}
	kill() {
		this.things.splice(this.things.indexOf(this), 0);
		translate.removeChild(this.el);
	}
}
