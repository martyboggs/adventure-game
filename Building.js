class Building {
	static things = [];
	constructor(x, y) {
		this.constructor.things.push(this);
		this.el = document.createElement('div');
		this.el.className = 'building';
		// this.scale = Math.ceil(Math.random() * 5);
		this.scale = 1;
		// this.el.style.width = 300 / this.scale + 'px';
		// this.el.style.height = 500 / this.scale + 'px';
		this.el.style.width = 300 / this.scale + 'px';
		this.el.style.height = 300 / this.scale + 'px';
		translate.appendChild(this.el);
		this.x = x;
		this.y = y;
	}
	update() {
		this.el.style.transform = `translate3d(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px), ${this.el.clientHeight / 2}px) rotateX(-90deg) rotateY(${-r}deg)`;
	}
	kill() {
		this.constructor.things.splice(this.constructor.things.indexOf(this), 1);
		translate.removeChild(this.el);
	}
}