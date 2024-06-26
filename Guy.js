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
			if (Math.abs(x - this.x) < this.chaseDistance && Math.abs(y - this.y) < this.chaseDistance) {
				this.action = 'chasing';
			}
		} else if (this.action === 'chasing') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${-angle}deg)`;
			this.angle = Math.atan2(x - this.x, y - this.y);
			this.x += this.speed * Math.sin(this.angle);
			this.y += this.speed * Math.cos(this.angle);
			// if close to player, lunge
			if (Math.abs(x - this.x) < 150 && Math.abs(y - this.y) < 150) {
				this.action = 'lunging';
				this.frame = frame;
			} else if (Math.abs(x - this.x) > this.chaseDistance && Math.abs(y - this.y) > this.chaseDistance) {
				this.action = 'walking';
			}
		} else if (this.action === 'lunging') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2 + 5}px) rotateX(-90deg) rotateY(${this.angle * 180 / Math.PI}deg) rotateX(-${frame - this.frame}deg)`;
			this.x += 2 * this.speed * Math.sin(this.angle);
			this.y += 2 * this.speed * Math.cos(this.angle);
			if (frame - this.frame === 70) {
				this.action = 'lunged';
				this.lungedTime = Math.round(Math.random() * 100) + 50;
				this.frame = frame;
			}
		} else if (this.action === 'lunged') {
			this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2 + 5}px) rotateX(-90deg) rotateY(${this.angle * 180 / Math.PI}deg) rotateX(-70deg)`;
			if (frame - this.frame === this.lungedTime) {
				this.action = 'chasing';
			}
		}
	}
	kill() {
		this.things.splice(this.things.indexOf(this), 0);
		translate.removeChild(this.el);
	}
}
