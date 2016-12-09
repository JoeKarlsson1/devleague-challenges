/*
 * Kingdom of OOP
 * http://devleague.com
 *
 * Copyright (c) 2015 Dev League
 * Licensed under the MIT license.
 */

import LivingThing from '../lib/LivingThing';
import Archaea from '../lib/Archaea';
import Bacteria from '../lib/Bacteria';
import Eukaryota from '../lib/Eukaryota';
import Fungi from '../lib/Fungi';
import Protista from '../lib/Protista';
import Plant from '../lib/Plant';
import Animal from '../lib/Animal';
import Cnidarian from '../lib/Cnidarian';
import Bilateral from '../lib/Bilateral';
import Mollusk from '../lib/Mollusk';
import Anthropod from '../lib/Anthropod';
import Vertebrate from '../lib/Vertebrate';

import 'should';

describe('LivingThing', () => {
  
  let livingThing;

  beforeEach(() => {
    livingThing = new LivingThing('alien',false,true,false,true,true);
  });

  describe('constructor', () => {
    
    it('should have arguments (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) that set respective private properties', () => {
      livingThing._name.should.be.equal('alien');
      livingThing._uniCellular.should.be.false;
      livingThing._trueNucleus.should.be.true;
      livingThing._anaerobic.should.be.false;
      livingThing._asexual.should.be.true;
      livingThing._mobile.should.be.true;
    });
    
  });

  describe('getters and setters', () => {
    
    it('should have a method named `name` that returns the value of the private property `_name`', () => {
      livingThing._name.should.be.equal('alien');
      livingThing.name.should.be.equal('alien');
    });
    it('should have a method named `name` that sets the value of the private property `_name`', () => {
      livingThing.name = 'alf';
      livingThing._name.should.be.equal('alf');
      livingThing.name.should.be.equal('alf');
    });

    it('should have a method named `uniCellular` that returns a boolean value based on the private property `_uniCellular`', () => {
      livingThing._uniCellular.should.be.false;
      livingThing.uniCellular.should.be.false;
    });
    it('should have a method named `uniCellular` that sets the value of the private property `_uniCellular`', () => {
      livingThing.uniCellular = true;
      livingThing._uniCellular.should.be.true;
      livingThing.uniCellular.should.be.true;
    });
    it('should have a method named `multiCellular` that returns a boolean value based on the private property `_uniCellular`', () => {
      livingThing._uniCellular.should.be.false;
      livingThing.multiCellular.should.be.true;;
    });
    it('should have a method named `multiCellular` that sets the value of the private property `_uniCellular`', () => {
      livingThing.multiCellular = false;
      livingThing._uniCellular.should.be.true;
      livingThing.multiCellular.should.be.false;
    });

    it('should have a method named `eukaryote` that returns a boolean value based on the private property `_trueNucleus`', () => {
      livingThing._trueNucleus.should.be.true;
      livingThing.eukaryote.should.be.true;
    });
    it('should have a method named `eukaryote` that sets the value of the private property `_trueNucleus`', () => {
      livingThing.eukaryote = false;
      livingThing._trueNucleus.should.be.false;
      livingThing.eukaryote.should.be.false;
    });
    it('should have a method named `prokaryote` that returns a boolean value based on the private property `_trueNucleus`', () => {
      livingThing._trueNucleus.should.be.true;
      livingThing.prokaryote.should.be.false;
    });
    it('should have a method named `prokaryote` that sets the value of the private property `_trueNucleus`', () => {
      livingThing.prokaryote = true;
      livingThing._trueNucleus.should.be.false;
      livingThing.prokaryote.should.be.true;
    });

    it('should have a method named `anaerobic` that returns a boolean value based on the private property `_anaerobic`', () => {
      livingThing._anaerobic.should.be.false;
      livingThing.anaerobic.should.be.false;
    });
    it('should have a method named `anaerobic` that sets the value of the private property `_anaerobic`', () => {
      livingThing.anaerobic = true;
      livingThing._anaerobic.should.be.true;
      livingThing.anaerobic.should.be.true;
    });
    it('should have a method named `aerobic` that returns a boolean value based on the private property `_anaerobic`', () => {
      livingThing._anaerobic.should.be.false;
      livingThing.aerobic.should.be.true;
    });
    it('should have a method named `aerobic` that sets the value of the private property `_anaerobic`', () => {
      livingThing.aerobic = false;
      livingThing._anaerobic.should.be.true;
      livingThing.aerobic.should.be.false;
    });
    
    it('should have a method named `asexual` that returns a boolean value based on the private property `_asexual`', () => {
      livingThing._asexual.should.be.true;
      livingThing.asexual.should.be.true;
    });
    it('should have a method named `asexual` that sets the value of the private property `_asexual`', () => {
      livingThing.asexual = false;
      livingThing._asexual.should.be.false;
      livingThing.asexual.should.be.false;
    });
    it('should have a method named `sexual` that returns a boolean value based on the private property `_asexual`', () => {
      livingThing._asexual.should.be.true;
      livingThing.sexual.should.be.false;
    });
    it('should have a method named `sexual` that sets the value of the private property `_asexual`', () => {
      livingThing.sexual = true;
      livingThing._asexual.should.be.false;
      livingThing.sexual.should.be.true;
    });

    it('should have a method named `mobile` that returns a boolean value based on the private `_mobile`', () => {
      livingThing._mobile.should.be.true;
      livingThing.mobile.should.be.true;
    });
    it('should have a method named `mobile` that sets the value of the private `_mobile`', () => {
      livingThing.mobile = false;
      livingThing._mobile.should.be.false;
      livingThing.mobile.should.be.false;
    });
    it('should have a method named `immobile` that returns a boolean value based on the private `_mobile`', () => {
      livingThing._mobile.should.be.true;
      livingThing.immobile.should.be.false;
    });
    it('should have a method named `immobile` that sets the value of the private `_mobile`', () => {
      livingThing.immobile = true;
      livingThing._mobile.should.be.false;
      livingThing.immobile.should.be.true;
    });
    
  });

});

describe('Archaea', () => {
  
  let archaea;

  beforeEach(() => {
    archaea = new Archaea('Acidilobus saccharovorans');
  });

  it('should extend LivingThing', () => {
    (archaea instanceof LivingThing).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that sets the private `_name` value', () => {
      archaea._name.should.be.equal('Acidilobus saccharovorans');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      archaea._uniCellular.should.be.true;
      archaea._trueNucleus.should.be.false;
      archaea._anaerobic.should.be.true;
      archaea._asexual.should.be.true;
      archaea._mobile.should.be.false;
    });
    
  });

});

describe('Bacteria', () => {
  
  let bacteria;

  beforeEach(() => {
    bacteria = new Bacteria('Clostridium');
  });

  it('should extend LivingThing', () => {
    (bacteria instanceof LivingThing).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that sets the private `_name` value', () => {
      bacteria._name.should.be.equal('Clostridium');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      bacteria._uniCellular.should.be.true;
      bacteria._trueNucleus.should.be.false;
      bacteria._anaerobic.should.be.false;
      bacteria._asexual.should.be.true;
      bacteria._mobile.should.be.false;
    });
    
  });

});

describe('Eukaryota', () => {
  
  let eukaryota;

  beforeEach(() => {
    eukaryota = new Eukaryota('Yeast', false, true, false, true);
  });

  it('should extend LivingThing', () => {
    (eukaryota instanceof LivingThing).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, uniCellular, asexual, mobile, heterotroph) that set respective private properties', () => {
      eukaryota._name.should.be.equal('Yeast');
      eukaryota._uniCellular.should.be.false;
      eukaryota._asexual.should.be.true;
      eukaryota._mobile.should.be.false;
      eukaryota._heterotroph.should.be.true;
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      eukaryota._uniCellular.should.be.false;
      eukaryota._trueNucleus.should.be.true;
      eukaryota._anaerobic.should.be.false;
      eukaryota._asexual.should.be.true;
      eukaryota._mobile.should.be.false;
    });
    
  });

  describe('getters and setters', () => {
    it('should have a method named `heterotroph` that returns a boolean value based on the private property `_heterotroph`', () => {
      eukaryota._heterotroph.should.be.true;
      eukaryota.heterotroph.should.be.true;
    });
    it('should have a method named `heterotroph` that sets the value of the private property `_heterotroph`', () => {
      eukaryota.heterotroph = false;
      eukaryota._heterotroph.should.be.false;
      eukaryota.heterotroph.should.be.false;
    });
    it('should have a method named `autotroph` that returns a boolean value based on the private property `_heterotroph`', () => {
      eukaryota._heterotroph.should.be.true;
      eukaryota.autotroph.should.be.false;
    });
    it('should have a method named `autotroph` that sets the value of the private property `_heterotroph`', () => {
      eukaryota.autotroph = true;
      eukaryota._heterotroph.should.be.false;
      eukaryota.autotroph.should.be.true;
    });
  });

});

describe('Fungi', () => {
  
  let fungus;

  beforeEach(() => {
    fungus = new Fungi('The Fungus among us');
  });

  it('should extend Eukaryota', () => {
    (fungus instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private properties', () => {
      fungus._name.should.be.equal('The Fungus among us');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      fungus._uniCellular.should.be.false;
      fungus._trueNucleus.should.be.true;
      fungus._anaerobic.should.be.false;
      fungus._asexual.should.be.true;
      fungus._mobile.should.be.false;
      fungus._heterotroph.should.be.true;
    });
    
  });
});

describe('Protista', () => {
  
  let amoeba;

  beforeEach(() => {
    amoeba = new Protista('Amoeba', false, true, true);
  });

  it('should extend Eukaryota', () => {
    (amoeba instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, uniCellular, mobile, heterotroph) that set respective private properties', () => {
      amoeba._name.should.be.equal('Amoeba');
      amoeba._uniCellular.should.be.false;
      amoeba._mobile.should.be.true;
      amoeba._heterotroph.should.be.true;
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      amoeba._trueNucleus.should.be.true;
      amoeba._anaerobic.should.be.false;
      amoeba._asexual.should.be.true;
    });
    
  });
});

describe('Plant', () => {
  
  let grass;

  beforeEach(() => {
    grass = new Plant('Grass', false, true, true);
  });

  it('should extend Eukaryota', () => {
    (grass instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private properties', () => {
      grass._name.should.be.equal('Grass');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      grass._uniCellular.should.be.false;
      grass._trueNucleus.should.be.true;
      grass._anaerobic.should.be.false;
      grass._asexual.should.be.true;
      grass._mobile.should.be.false;
      grass._heterotroph.should.be.false;
    });
    
  });
});

describe('Animal', () => {
  
  let dog;

  beforeEach(() => {
    dog = new Animal('Dog', 'bilateral');
  });

  it('should extend Eukaryota', () => {
    (dog instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, symmetry) that set respective private properties', () => {
      dog._name.should.be.equal('Dog');
      dog._symmetry.should.be.equal('bilateral');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      dog._uniCellular.should.be.false;
      dog._trueNucleus.should.be.true;
      dog._anaerobic.should.be.false;
      dog._asexual.should.be.false;
      dog._mobile.should.be.true;
      dog._heterotroph.should.be.true;
    });
    
  });

  describe('getters and setters', () => {
    it('should have a method named `symmetry` that returns a string value based on the private property `_symmetry`', () => {
      dog._symmetry.should.be.equal('bilateral');
      dog.symmetry.should.be.equal('bilateral');
    });
    it('should have a method named `symmetry` that sets the value of the private property `_symmetry`', () => {
      dog.symmetry = 'radial';
      dog._symmetry.should.be.equal('radial');
      dog.symmetry.should.be.equal('radial');
    });
  });
});

describe('Cnidarian', () => {
  
  let jellyfish;

  beforeEach(() => {
    jellyfish = new Cnidarian('Jellyfish');
  });

  it('should extend Animal', () => {
    (jellyfish instanceof Animal).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private properties', () => {
      jellyfish._name.should.be.equal('Jellyfish');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      jellyfish._symmetry.should.be.equal('radial');
      jellyfish.symmetry.should.be.equal('radial');
      jellyfish._uniCellular.should.be.false;
      jellyfish._trueNucleus.should.be.true;
      jellyfish._anaerobic.should.be.false;
      jellyfish._asexual.should.be.false;
      jellyfish._mobile.should.be.true;
      jellyfish._heterotroph.should.be.true;
    });

  });

});

describe('Bilateral', () => {
  
  let cat;

  beforeEach(() => {
    cat = new Bilateral('Cat', 'vertebral-column');
  });

  it('should extend Animal', () => {
    (cat instanceof Animal).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, body) that set respective private properties', () => {
      cat._name.should.be.equal('Cat');
      cat._body.should.be.equal('vertebral-column');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      cat._symmetry.should.be.equal('bilateral');
      cat._uniCellular.should.be.false;
      cat._trueNucleus.should.be.true;
      cat._anaerobic.should.be.false;
      cat._asexual.should.be.false;
      cat._mobile.should.be.true;
      cat._heterotroph.should.be.true;
    });

  });

  describe('getters and setters', () => {
    it('should have a method named `body` that returns a string value based on the private property `_body`', () => {
      cat._body.should.be.equal('vertebral-column');
      cat.body.should.be.equal('vertebral-column');
    });
    it('should have a method named `body` that sets the value of the private property `_body`', () => {
      cat.body = 'soft-bodied';
      cat._body.should.be.equal('soft-bodied');
      cat.body.should.be.equal('soft-bodied');
    });
  });

});

describe('Mollusk', () => {
  
  let stingRay;

  beforeEach(() => {
    stingRay = new Mollusk('Sting Ray');
  });

  it('should extend Bilateral', () => {
    (stingRay instanceof Bilateral).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private properties', () => {
      stingRay._name.should.be.equal('Sting Ray');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      stingRay._body.should.be.equal('soft-bodied');
      stingRay._symmetry.should.be.equal('bilateral');
      stingRay._uniCellular.should.be.false;
      stingRay._trueNucleus.should.be.true;
      stingRay._anaerobic.should.be.false;
      stingRay._asexual.should.be.false;
      stingRay._mobile.should.be.true;
      stingRay._heterotroph.should.be.true;
    });

  });

});

describe('Anthropod', () => {
  
  let lobster;

  beforeEach(() => {
    lobster = new Anthropod('Lobster');
  });

  it('should extend Bilateral', () => {
    (lobster instanceof Bilateral).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private properties', () => {
      lobster._name.should.be.equal('Lobster');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      lobster._body.should.be.equal('exoskeleton');
      lobster._symmetry.should.be.equal('bilateral');
      lobster._uniCellular.should.be.false;
      lobster._trueNucleus.should.be.true;
      lobster._anaerobic.should.be.false;
      lobster._asexual.should.be.false;
      lobster._mobile.should.be.true;
      lobster._heterotroph.should.be.true;
    });

  });

});

describe('Vertebrate', () => {
  
  let swordFish;

  beforeEach(() => {
    swordFish = new Vertebrate('Swordfish');
  });

  it('should extend Bilateral', () => {
    (swordFish instanceof Bilateral).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private properties', () => {
      swordFish._name.should.be.equal('Swordfish');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      swordFish._body.should.be.equal('vertebral-column');
      swordFish._symmetry.should.be.equal('bilateral');
      swordFish._uniCellular.should.be.false;
      swordFish._trueNucleus.should.be.true;
      swordFish._anaerobic.should.be.false;
      swordFish._asexual.should.be.false;
      swordFish._mobile.should.be.true;
      swordFish._heterotroph.should.be.true;
    });

  });

});