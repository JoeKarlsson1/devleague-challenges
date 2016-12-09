//tsc -t es5 typescript.ts -w
//nodemon typescript.js
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car = (function () {
    function Car(options) {
        this._basePrice = options.basePrice;
        this.engine = options.engine;
    }
    Car.prototype.drive = function () {
        console.log('driving');
        return 1000;
    };
    Object.defineProperty(Car.prototype, "price", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
})();
var Engine = (function () {
    function Engine() {
    }
    Engine.prototype.start = function () { };
    Engine.prototype.stop = function () { };
    return Engine;
})();
var FlyingEngine = (function () {
    function FlyingEngine() {
    }
    FlyingEngine.prototype.start = function () { };
    FlyingEngine.prototype.stop = function () { };
    return FlyingEngine;
})();
var FlyingCar = (function (_super) {
    __extends(FlyingCar, _super);
    function FlyingCar(options) {
        _super.call(this, options);
        this.altitude = 0;
    }
    ;
    FlyingCar.prototype.fly = function () {
        this.engine.start();
        console.log('flying');
    };
    return FlyingCar;
})(Car);
var Bird = (function () {
    function Bird(name) {
        this.name = name;
        this.altitude = 100;
    }
    ;
    Bird.prototype.fly = function () {
        console.log('flying');
    };
    return Bird;
})();
var fc = new FlyingCar({ basePrice: 1000, engine: new FlyingEngine() });
// console.log(fc.fly());
var tweety = new Bird('Tweety');
var polly = new Bird('Polly');
var volvo = new Car({ basePrice: 500, engine: new Engine() });
var flyingThings = [volvo, fc, tweety, polly];
for (var i = 0; i < flyingThings.length; i++) {
    console.log(flyingThings[i].altitude);
}
