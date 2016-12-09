var chai = require('chai');
chai.should();
var Phone = require('../lib/Phone');
var Tablet = require('../lib/Tablet');
var GameConsole = require('../lib/GameConsole');
var WebBrowser = require('../lib/WebBrowser');
var Watch = require('../lib/Watch');
var NintendoDS = require('../lib/NintendoDS');
var SmartWatch = require('../lib/SmartWatch');
var SmartPhone = require('../lib/SmartPhone');

describe('Phone', function() {
  
  var phone;
  beforeEach(function () {
    phone = new Phone(5555555);
  });

  it('should be a Class definition', function() {
    Phone.should.be.a.function;
  });
  it('should have a phone number', function() {
    phone.phoneNumber.should.be.equal(5555555);
  });
  it('should be able to call another phone', function() {
    phone.should.have.property('callPhone');
  });
  it('should callPhone and return a status message', function() {
    phone.callPhone(4444444).should.be.equal('5555555 calls 4444444');
  });

});

describe('Tablet', function() {
  
  var tablet;
  beforeEach(function () {
    tablet = new Tablet();
  });

  it('should be a Class definition', function() {
    Tablet.should.be.a.function;
  });
  it('should be able to be touched', function() {
    tablet.should.have.property('touch');
  });
  it('should touch and return an object of coordinates', function() {
    tablet.touch(360,455).should.be.deep.equal({ x:360, y:455 });
  });

});

describe('Game Console', function() {
  
  var gameConsole;
  beforeEach(function () {
    gameConsole = new GameConsole('Jupiter Station');
  });

  it('should be a Class definition', function() {
    GameConsole.should.be.a.function;
  });
  it('should have a system name', function() {
    gameConsole.systemName.should.be.equal('Jupiter Station');
  });
  it('should be able to be played', function() {
    gameConsole.should.have.property('play');
  });
  it('should play a game and return a status message', function() {
    gameConsole.play({title:'Shynobie'}).should.be.equal('Jupiter Station plays Shynobie');
  });

});

describe('Web Browser', function() {
  
  var webBrowser;
  beforeEach(function () {
    webBrowser = new WebBrowser();
  });

  it('should be a Class definition', function() {
    WebBrowser.should.be.a.function;
  });
  it('should be able to open urls', function() {
    webBrowser.should.have.property('open');
  });
  it('should open a url and return a status message', function() {
    webBrowser.open('http://reddit.com/r/aww').should.be.equal('Browsing to http://reddit.com/r/aww');
  });

});

describe('Watch', function() {
  
  var watch;
  beforeEach(function () {
    watch = new Watch();
  });

  it('should be a Class definition', function() {
    Watch.should.be.a.function;
  });
  it('should know what body part its being worn on', function() {
    watch.should.have.property('bodyPart');
  });
  it('should be wearable', function() {
    watch.should.have.property('wear');
    watch.wear('left wrist');
    watch.bodyPart.should.be.equal('left wrist');
  });
  
});

describe('Nintendo DS', function() {
  
  var nds;
  beforeEach(function () {
    nds = new NintendoDS();
  });

  it('should be a Class definition', function() {
    NintendoDS.should.be.a.function;
  });

  describe('inherits from the Game Console class', function() {
    it('should have a system name set to "Nintendo DS"', function() {
      nds.systemName.should.be.equal('Nintendo DS');
    });
    it('should be able to be played', function() {
      nds.should.have.property('play');
    });
    it('should play a game and return a status message', function() {
      nds.play({title:'Nintendogs'}).should.be.equal('Nintendo DS plays Nintendogs');
    });
  });

  describe('inherits from the Web Browser class', function() {
    it('should be able to open urls', function() {
      nds.should.have.property('open');
    });
    it('should open a url and return a status message', function() {
      nds.open('http://reddit.com/r/gaming').should.be.equal('Browsing to http://reddit.com/r/gaming');
    });
  });

});

describe('SmartWatch', function() {
  
  var sw;
  beforeEach(function () {
    sw = new SmartWatch();
  });

  it('should be a Class definition', function() {
    SmartWatch.should.be.a.function;
  });

  describe('inherits from the Watch class', function() {
    it('should know what body part its being worn on', function() {
      sw.should.have.property('bodyPart');
    });
    it('should be wearable', function() {
      sw.should.have.property('wear');
      sw.wear('right wrist');
      sw.bodyPart.should.be.equal('right wrist');
    });
  });

  describe('inherits from the Tablet class', function() {
    it('should be able to be touched', function() {
      sw.should.have.property('touch');
    });
    it('should touch and return an object of coordinates', function() {
      sw.touch(25,60).should.be.deep.equal({ x:25, y:60 });
    });
  });

});

describe('SmartPhone', function() {
  
  var sp;
  beforeEach(function () {
    sp = new SmartPhone(3333333);
  });

  it('should be a Class definition', function() {
    SmartPhone.should.be.a.function;
  });

  describe('inherits from the Phone class', function() {
    it('should have a phone number', function() {
      sp.phoneNumber.should.be.equal(3333333);
    });
    it('should be able to call another phone', function() {
      sp.should.have.property('callPhone');
    });
    it('should callPhone and return a status message', function() {
      sp.callPhone(2222222).should.be.equal('3333333 calls 2222222');
    });
  });

  describe('inherits from the Tablet class', function() {
    it('should be able to be touched', function() {
      sp.should.have.property('touch');
    });
    it('should touch and return an object of coordinates', function() {
      sp.touch(175,230).should.be.deep.equal({ x:175, y:230 });
    });
  });

  describe('inherits from the Game Console class', function() {
    it('should have a system name set to "Smart Phone"', function() {
      sp.systemName.should.be.equal('Smart Phone');
    });
    it('should be able to be played', function() {
      sp.should.have.property('play');
    });
    it('should play a game and return a status message', function() {
      sp.play({title:'2048'}).should.be.equal('Smart Phone plays 2048');
    });
  });

  describe('inherits from the Web Browser class', function() {
    it('should be able to open urls', function() {
      sp.should.have.property('open');
    });
    it('should open a url and return a status message', function() {
      sp.open('http://reddit.com/r/programming').should.be.equal('Browsing to http://reddit.com/r/programming');
    });
  });

});