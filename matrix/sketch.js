var symbolSize = 26;
var streams = [];

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);

    var x = 0;
    for (var i = 0; i < innerWidth / symbolSize; i++) {
        stream = new Stream();
        stream.generateSymbols(
            x,
            random(-500, -100)
        );

        streams.push(stream);
        x += symbolSize;
    }

    textSize(symbolSize);

}

function draw() {
    background(0, 150);
    streams.forEach((stream) => {
        stream.render();
    });
}

function SymbolClass(x, y, speed, first) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.value;
    this.interval = round(random(3, 15));
    this.first = first;


    this.setSymbol = () => {
        if (frameCount % this.interval == 0) {
            this.value = String.fromCharCode(0X30A0 + round(random(0, 96)));
        }
    }

    this.rain = () => {
        this.y = (this.y > innerHeight) ? this.y = 0 : this.y += speed;
    }
}

function Stream() {
    this.symbols = [];
    this.nSymbols = round(random(7, 15));
    this.speed = random(5, 10);

    this.generateSymbols = (x, y) => {
        var first = round(random(0, 6)) == 1;
        for (var i = 0; i < this.nSymbols; i++) {
            symbol = new SymbolClass(x, y, this.speed, first);
            symbol.setSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
            first = false;
        }
    }

    this.render = () => {
        this.symbols.forEach((symbol) => {
            if (symbol.first) {
                fill(180, 255, 180);
            } else {
                fill(0, 255, 70);
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setSymbol();
        });
    }
}