var canFly = function() {
  this.price = 9.99;
  this.takeOff = function() {
    //fly baby
    console.log('You are now flying');
  };
  return this;
};

var isSubmersible = function() {
  this.oxygenTanks = 4;
  this.dive = function() {
      //go deep
    };
  return this;
}

var Car = function(opts) {
  this.wheels = 4;
  if (opts.fly) {
    canFly.call(Car.prototype);
  }
  if (opts.swim) {
    isSubmersible.call(Car.prototype);
  }
};

var flyingSubmaringCar = new Car({ fly : true, swim : true });
// console.log(flyingSubmaringCar);