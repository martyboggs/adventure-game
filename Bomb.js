class Bomb {
	static things = [];
	constructor(x, y) {
		this.constructor.things.push(this);
		this.x = x;
		this.y = y;
		this.el = document.createElement('div');
		this.el.className = 'bomb';
		this.el.style.width = this.el.style.height = '40px';
		this.el.style.background = 'black';
		this.el.style.transform = `translate(-50%, -50%) translate(${this.x}px, ${this.y}px)`;
		translate.appendChild(this.el);
		this.frame = frame;
	}
	update() {
		if (frame - this.frame === 400) {
			for (var i = 0; i < 10; i += 1) {
				new Shrapnel(this.x, this.y);
			}
			this.kill();
		}
	}
	kill() {
		this.constructor.things.splice(this.constructor.things.indexOf(this), 1);
		translate.removeChild(this.el);
	}
}

class Shrapnel {
	static things = [];
	constructor(x, y) {
		this.constructor.things.push(this);
		this.x = x;
		this.y = y;
		this.r = Math.floor(360 * Math.random());
		this.el = document.createElement('div');
		this.el.className = 'shrapnel';
		this.el.style.width = this.el.style.height = '40px';
		this.el.style.background = 'black';
		translate.appendChild(this.el);
		this.frame = frame;
		this.flyX = 0;
		this.flyY = 0;
		this.flyDown = 0;
		this.flippyDoo = [0, 0, 0];
		this.flippyDooDoo = [10 * Math.random(), 10 * Math.random(), 10 * Math.random()];
		this.ySpeed = 4 * Math.random() + 4;
		this.xSpeed = 4 * Math.random();
	}
	update() {
		this.flyX += this.xSpeed;
		this.flyY += this.ySpeed - this.flyDown;
		this.flyDown += 0.1; // gravity
		this.el.style.transform = `translate(-50%, -50%) translate(${this.x}px, ${this.y}px) translate3d(
			${this.flyX * Math.cos(this.r * Math.PI / 180)}px, ${this.flyX * Math.sin(this.r * Math.PI / 180)}px, ${this.flyY}px) rotateX(${this.flippyDoo[0]}deg) rotateY(${this.flippyDoo[1]}deg) rotateZ(${this.flippyDoo[2]}deg)`;
		if (this.flyY < 0) {
			new Puddle(
				this.x + this.flyX * Math.cos(this.r * Math.PI / 180), 
				this.y + this.flyX * Math.sin(this.r * Math.PI / 180)
			);
			return this.kill();
		}
		this.flippyDoo = this.flippyDoo.map((v, i) => v + this.flippyDooDoo[i]);
	}
	kill() {
		this.constructor.things.splice(this.constructor.things.indexOf(this), 1);
		translate.removeChild(this.el);
	}
}

class Puddle {
	static things = [];
	constructor(x, y) {
		this.constructor.things.push(this);
		this.x = x;
		this.y = y;
		this.el = document.createElement('div');
		this.el.className = 'puddle';
		this.el.style.width = this.el.style.height = '40px';
		this.el.style.background = 'purple';
		this.el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
		translate.appendChild(this.el);
	}
}
