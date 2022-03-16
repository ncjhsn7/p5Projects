var drops = [];

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	for (var i = 0; i < 800; i++) {
		drops.push(new Drop());
	}
}

function draw() {
	background(0);
	drops.forEach(drop => {
		drop.show();
	});
}

function Drop() {
	this.x = random(window.innerWidth);
	this.y = round(random(-500,-250));
	this.z = random(0,20);
	this.speed = random(4,12);

	this.fall = () => {
		this.y = (this.y > innerHeight) ? this.y = 0 : this.y += this.speed;
	};

	this.show = () => {
		stroke(255, 255, 255);
		line(this.x, this.y, this.x, this.y + round(10));
		this.fall();
	};
}
