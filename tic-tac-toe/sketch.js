const board = [
	['X', 'X', 'X'],
	['X', 'X', 'X'],
	['O', '', 'O']
];

const player1 = 'X';
const player2 = 'O';

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	let w = width / 3;
	let h = height / 3;

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			var x = w * j + w/2;
			var y = h * i + h/2;
			var spot = board[i][j];
			textSize(10);
			if (spot == player2) {
				noFill();
				ellipseMode(CORNER);
				ellipse(x, y, w);
			} else if (spot == player1) {
				var xr = w/2;
				line(x, y, x + w, y + h);
				line(x + w, y, x, y + h)
			}
		}
	}
}
