//tsc -t es5 typescript.ts -w
//nodemon typescript.js

class Car {
    private _basePrice: number;
    engine: IEngine;

    constructor(options: IAutoOptions) {
        this._basePrice = options.basePrice;
        this.engine = options.engine;
    }

    drive() : number {
        console.log('driving');
    return 1000;
    }

    get price(): number {
        return this._basePrice;
    }

    set price(value: number) {
        this._basePrice = value;
    }
}

interface IEngine {
    start() : void;
    stop() : void;
}

class Engine implements IEngine {
    start() : void { }
    stop() : void { }
}

interface IAutoOptions {
    engine: IEngine;
    basePrice: number;
}

interface ICanFly {
  altitude: number;
  fly() : void;
}

class FlyingEngine implements IEngine {
    start() : void { }
    stop() : void { }
}

class FlyingCar extends Car implements ICanFly {
  altitude: number;

  constructor(options: IAutoOptions){
    super(options);
    this.altitude = 0;
  };
  fly() : void {
    this.engine.start();
    console.log('flying');
  }

}

class Bird implements ICanFly {
  name: string;
  altitude: number;

  constructor (name: string){
    this.name = name;
    this.altitude = 100;
  };
  fly() : void {
    console.log('flying');
  }
}

var fc = new FlyingCar({basePrice: 1000, engine: new FlyingEngine()})
// console.log(fc.fly());

var tweety = new Bird('Tweety');

var polly = new Bird('Polly');

var volvo = new Car({basePrice: 500, engine: new Engine()});

var flyingThings: Array<ICanFly> = [volvo, fc, tweety, polly];

for (var i=0; i< flyingThings.length; i++) {
  console.log(flyingThings[i].altitude);
}