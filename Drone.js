class Drone {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.el = document.createElement('div');
		this.el.className = 'drone';
		this.shadow = document.createElement('div');
		this.shadow.className = 'shadow';
		translate.appendChild(this.el);
		translate.appendChild(this.shadow);
		this.propellers = [
			document.createElement('div'), document.createElement('div'), 
			document.createElement('div'), document.createElement('div')
		];
		for (var i = 0; i < this.propellers.length; i += 1) {
			this.propellers[i].className = 'propeller';
			this.el.appendChild(this.propellers[i])
		}
		this.action = 'takeOff';
		this.frame = frame;
		this.speed = 6;
		this.moving = 0;
		this.strafe = 0;
	}
	update() {
		if (frame - this.frame === 200) {
			this.action = 'fly';
		}
		if (this.moving === 1) {
			this.x -= this.speed * Math.sin(-angle * Math.PI / 180);
			this.y -= this.speed * Math.cos(-angle * Math.PI / 180);
		}
		if (this.moving === -1) {
			this.x += this.speed * Math.sin(-angle * Math.PI / 180);
			this.y += this.speed * Math.cos(-angle * Math.PI / 180);
		}
		if (this.strafe === -1) {
			this.x -= this.speed * Math.sin((-angle + 90) * Math.PI / 180);
			this.y -= this.speed * Math.cos((-angle + 90) * Math.PI / 180);
		}
		if (this.strafe === 1) {
			this.x += this.speed * Math.sin((-angle + 90) * Math.PI / 180);
			this.y += this.speed * Math.cos((-angle + 90) * Math.PI / 180);
		}
		this.el.style.transform = `translate(-50%, -50%) translate3d(${this.x}px, ${this.y}px, 100px)`;
		this.shadow.style.transform = `translate(-50%, -50%) translate3d(${this.x}px, ${this.y}px, 0)`;
		for (var i = 0; i < this.propellers.length; i += 1) {
			this.propellers[i].style.transform = `translate(0, -20px) rotateZ(${frame*frame}deg)`;
		}
	}
}
