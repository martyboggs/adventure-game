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
		this.action = 'walking'; // lunging
		this.angle = 0;
		this.chaseDistance = 300;
	}
	update() {
		if (this.action === 'walking') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${-angle}deg)`;
			// if close to player, lunge
			if (Math.abs(x + 250 - this.x) < this.chaseDistance && Math.abs(y + 250 - this.y) < this.chaseDistance) {
				this.action = 'chasing';
			}
		} else if (this.action === 'chasing') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${-angle}deg)`;
			this.angle = Math.atan2(x + 250 - this.x, y + 250 - this.y);
			this.x += this.speed * Math.sin(this.angle);
			this.y += this.speed * Math.cos(this.angle);
			// if close to player, lunge
			if (Math.abs(x + 250 - this.x) < 150 && Math.abs(y + 250 - this.y) < 150) {
				this.action = 'lunging';
				this.frame = frame;
			} else if (Math.abs(x + 250 - this.x) > this.chaseDistance && Math.abs(y + 250 - this.y) > this.chaseDistance) {
				this.action = 'walking';
			}
		} else if (this.action === 'lunging') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), 0) rotateX(-90deg) rotateY(${this.angle * 180 / Math.PI}deg) rotateX(-90deg)`;
			this.x += 2 * this.speed * Math.sin(this.angle);
			this.y += 2 * this.speed * Math.cos(this.angle);
			if (frame - this.frame === 70) {
				this.action = 'lunged';
				this.frame = frame;
			}
		} else if (this.action === 'lunged') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), 0) rotateX(-90deg) rotateY(${this.angle * 180 / Math.PI}deg) rotateX(-90deg)`;
			if (frame - this.frame === 100) {
				this.action = 'chasing';
			}
		}
	}
	kill() {
		this.things.splice(this.things.indexOf(this), 0);
		translate.removeChild(this.el);
	}
}
